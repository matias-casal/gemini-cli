/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import { useShellExecution } from '../contexts/ShellExecutionContext.js';

export enum ShellCancellationState {
  IDLE = 'IDLE',
  WARNING_SHOWN = 'WARNING_SHOWN',
  COMMAND_CANCELLING = 'COMMAND_CANCELLING',
}

const WARNING_TIMEOUT_MS = 2000; // Time before resetting to IDLE after showing warning

export interface UseShellCancellationReturn {
  state: ShellCancellationState;
  handleCtrlC: () => boolean; // Returns true if the CTRL+C was handled
  reset: () => void;
  getMessage: () => string | null;
}

export function useShellCancellation(): UseShellCancellationReturn {
  const [state, setState] = useState<ShellCancellationState>(
    ShellCancellationState.IDLE,
  );
  const warningTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { state: shellState } = useShellExecution();

  // Clear timer on cleanup
  useEffect(
    () => () => {
      if (warningTimerRef.current) {
        clearTimeout(warningTimerRef.current);
      }
    },
    [],
  );

  // Reset state when command ends
  useEffect(() => {
    if (!shellState.isExecuting) {
      setState(ShellCancellationState.IDLE);
      if (warningTimerRef.current) {
        clearTimeout(warningTimerRef.current);
        warningTimerRef.current = null;
      }
    }
  }, [shellState.isExecuting]);

  const reset = useCallback(() => {
    setState(ShellCancellationState.IDLE);
    if (warningTimerRef.current) {
      clearTimeout(warningTimerRef.current);
      warningTimerRef.current = null;
    }
  }, []);

  const handleCtrlC = useCallback((): boolean => {
    // Only handle if a shell command is executing
    if (!shellState.isExecuting) {
      return false;
    }

    switch (state) {
      case ShellCancellationState.IDLE:
        // First CTRL+C: Show warning
        setState(ShellCancellationState.WARNING_SHOWN);

        // Set timer to reset back to IDLE if no second CTRL+C
        warningTimerRef.current = setTimeout(() => {
          setState(ShellCancellationState.IDLE);
          warningTimerRef.current = null;
        }, WARNING_TIMEOUT_MS);

        return true; // Handled

      case ShellCancellationState.WARNING_SHOWN:
        // Second CTRL+C: Cancel the command
        if (warningTimerRef.current) {
          clearTimeout(warningTimerRef.current);
          warningTimerRef.current = null;
        }

        setState(ShellCancellationState.COMMAND_CANCELLING);

        // Abort the command
        if (shellState.abortController) {
          shellState.abortController.abort();
        }

        return true; // Handled

      case ShellCancellationState.COMMAND_CANCELLING:
        // Command is already being cancelled, let normal exit flow handle
        return false;
      default:
        return false;
    }
  }, [state, shellState.isExecuting, shellState.abortController]);

  const getMessage = useCallback((): string | null => {
    switch (state) {
      case ShellCancellationState.WARNING_SHOWN:
        return 'Press Ctrl+C again to cancel the running command.';
      case ShellCancellationState.COMMAND_CANCELLING:
        return 'Cancelling command...';
      default:
        return null;
    }
  }, [state]);

  return {
    state,
    handleCtrlC,
    reset,
    getMessage,
  };
}
