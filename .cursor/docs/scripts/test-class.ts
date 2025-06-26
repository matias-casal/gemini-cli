// TEMPORARY MOCK - REMOVE BEFORE PRODUCTION
// This file is only for testing class parsing functionality

export class TestClass {
  private name: string;
  static readonly VERSION = '1.0.0';

  constructor(name: string) {
    this.name = name;
  }

  async getName(): Promise<string> {
    return this.name;
  }

  static createInstance(name: string): TestClass {
    return new TestClass(name);
  }
}
