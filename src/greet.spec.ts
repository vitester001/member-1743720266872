import { describe, it, expect } from 'vitest';
import { greet } from './greet';

describe('greet', () => {
  it('should return default greeting with name', () => {
    expect(greet('John')).toBe('Hello, John!');
  });

  it('should return custom greeting with name', () => {
    expect(greet('John', 'Hi')).toBe('Hi, John!');
  });

  it('should work with empty string name', () => {
    expect(greet('')).toBe('Hello, !');
  });

  // Modifying this test since empty string greeting should use default 'Hello'
  it('should use default greeting when greeting is empty string', () => {
    expect(greet('John', '')).toBe('Hello, John!');
  });

  it('should handle special characters in name', () => {
    expect(greet('John@#$')).toBe('Hello, John@#$!');
  });

  it('should handle special characters in greeting', () => {
    expect(greet('John', 'Hey@#$')).toBe('Hey@#$, John!');
  });

  it('should handle whitespace in name', () => {
    expect(greet('   John   ')).toBe('Hello,    John   !');
  });

  it('should handle whitespace in greeting', () => {
    expect(greet('John', '   Hi   ')).toBe('   Hi   , John!');
  });
});
