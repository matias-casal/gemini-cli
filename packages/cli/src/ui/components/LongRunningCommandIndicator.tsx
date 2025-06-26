/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Box, Text } from 'ink';
import { Colors } from '../colors.js';
import { useShellExecution } from '../contexts/ShellExecutionContext.js';

export const LongRunningCommandIndicator: React.FC = () => {
  const { state } = useShellExecution();

  // Only show if a command is executing and marked as long-running
  if (!state.isExecuting || !state.isLongRunning) {
    return null;
  }

  const executionTime = state.startTime
    ? Math.floor((Date.now() - state.startTime) / 1000)
    : 0;

  return (
    <Box
      borderStyle="round"
      borderColor={Colors.AccentYellow}
      paddingX={1}
      marginTop={1}
    >
      <Text color={Colors.AccentYellow}>
        ⚠️ Command has been running for {executionTime} seconds.{' '}
        <Text bold>Press Ctrl+C twice to cancel it.</Text>
      </Text>
    </Box>
  );
};
