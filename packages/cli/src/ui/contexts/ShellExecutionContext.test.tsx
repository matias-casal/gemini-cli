/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { renderHook } from '@testing-library/react';
import {
  ShellExecutionContextProvider,
  useShellExecution,
} from './ShellExecutionContext.js';

describe('ShellExecutionContext', () => {
  it('should compile and provide default state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ShellExecutionContextProvider>{children}</ShellExecutionContextProvider>
    );

    const { result } = renderHook(() => useShellExecution(), { wrapper });

    expect(result.current.state.isExecuting).toBe(false);
    expect(result.current.state.startTime).toBeNull();
    expect(result.current.state.commandText).toBeNull();
    expect(result.current.state.abortController).toBeNull();
    expect(result.current.state.isLongRunning).toBe(false);
  });
});
