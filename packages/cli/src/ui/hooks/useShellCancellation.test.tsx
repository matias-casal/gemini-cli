/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useShellCancellation,
  ShellCancellationState,
} from './useShellCancellation.js';
import { ShellExecutionContextProvider } from '../contexts/ShellExecutionContext.js';

// Mock the useShellExecution hook
vi.mock('../contexts/ShellExecutionContext.js', () => ({
  ShellExecutionContextProvider: ({
    children,
  }: {
    children: React.ReactNode;
  }) => children,
  useShellExecution: vi.fn(() => ({
    state: {
      isExecuting: true,
      startTime: Date.now(),
      commandText: 'test command',
      abortController: new AbortController(),
      isLongRunning: false,
    },
    startExecution: vi.fn(),
    endExecution: vi.fn(),
    setLongRunning: vi.fn(),
    getExecutionTime: vi.fn(() => 0),
  })),
}));

describe('useShellCancellation', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ShellExecutionContextProvider>{children}</ShellExecutionContextProvider>
  );

  it('should start in IDLE state', () => {
    const { result } = renderHook(() => useShellCancellation(), { wrapper });

    expect(result.current.state).toBe(ShellCancellationState.IDLE);
    expect(result.current.getMessage()).toBeNull();
  });

  it('should transition to WARNING_SHOWN on first CTRL+C', () => {
    const { result } = renderHook(() => useShellCancellation(), { wrapper });

    act(() => {
      const handled = result.current.handleCtrlC();
      expect(handled).toBe(true);
    });

    expect(result.current.state).toBe(ShellCancellationState.WARNING_SHOWN);
    expect(result.current.getMessage()).toBe(
      'Press Ctrl+C again to cancel the running command.',
    );
  });

  it('should transition to COMMAND_CANCELLING on second CTRL+C', () => {
    const { result } = renderHook(() => useShellCancellation(), { wrapper });

    // First CTRL+C
    act(() => {
      result.current.handleCtrlC();
    });

    // Second CTRL+C
    act(() => {
      const handled = result.current.handleCtrlC();
      expect(handled).toBe(true);
    });

    expect(result.current.state).toBe(
      ShellCancellationState.COMMAND_CANCELLING,
    );
    expect(result.current.getMessage()).toBe('Cancelling command...');
  });
});
