/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, vi } from 'vitest';
import { render } from 'ink-testing-library';
import { SaveChatDialog } from './SaveChatDialog.js';

describe('SaveChatDialog', () => {
  it('should render save/dont save options', () => {
    const onSave = vi.fn();
    const onDontSave = vi.fn();

    const { lastFrame } = render(
      <SaveChatDialog onSave={onSave} onDontSave={onDontSave} />,
    );

    const output = lastFrame() || '';
    expect(output).toContain('Save current chat before exiting?');
    expect(output).toContain('Save chat');
    expect(output).toContain("Don't save");
    expect(output).toContain('Your current conversation will be lost');
  });
});
