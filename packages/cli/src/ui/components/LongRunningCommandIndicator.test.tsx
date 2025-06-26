/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, vi } from 'vitest';
import { render } from 'ink-testing-library';
import { LongRunningCommandIndicator } from './LongRunningCommandIndicator.js';

// Mock the useShellExecution hook
vi.mock('../contexts/ShellExecutionContext.js', () => ({
  useShellExecution: vi.fn(() => ({
    state: {
      isExecuting: true,
      startTime: Date.now() - 65000, // 65 seconds ago
      commandText: 'sleep 100',
      abortController: new AbortController(),
      isLongRunning: true,
    },
    startExecution: vi.fn(),
    endExecution: vi.fn(),
    setLongRunning: vi.fn(),
    getExecutionTime: vi.fn(() => 65),
  })),
}));

describe('LongRunningCommandIndicator', () => {
  it('should render warning when command is long-running', () => {
    const { lastFrame } = render(<LongRunningCommandIndicator />);

    const output = lastFrame() || '';
    expect(output).toContain('Command has been running for');
    expect(output).toContain('seconds');
    expect(output).toContain('Press Ctrl+C twice to cancel it');
  });
});
