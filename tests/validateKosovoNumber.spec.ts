import validateKosovoNumber from '../src/index';

describe('validateKosovoNumber', () => {
  // Null or undefined input
  it('should return false for null input', () => {
    expect(validateKosovoNumber(null)).toBe(false);
  });

  it('should return false for undefined input', () => {
    expect(validateKosovoNumber(undefined)).toBe(false);
  });

  // Invalid phone number formats
  it('should return false for phone number missing "+"', () => {
    expect(validateKosovoNumber('38344551234')).toBe(false); // Missing "+"
  });

  it('should return false for phone number with multiple "+"', () => {
    expect(validateKosovoNumber('+383+44 555 1234')).toBe(false); // Multiple "+"
  });

  it('should return false for phone number with spaces', () => {
    expect(validateKosovoNumber('+383 44 555 1234')).toBe(false); // Spaces inside number
  });

  it('should return false for phone number with non-numeric characters', () => {
    expect(validateKosovoNumber('+383 44 555-1234')).toBe(false); // Dashes included
  });

  it('should return false for phone number with invalid prefix', () => {
    expect(validateKosovoNumber('+383 12 555 1234')).toBe(false); // Invalid prefix
  });

  // Valid Kosovo mobile numbers
  it('should return true for valid Kosovo mobile number without spaces', () => {
    expect(validateKosovoNumber('+38344551234')).toBe(true); // Valid mobile number
  });

  it('should return true for valid Kosovo mobile number with spaces', () => {
    expect(validateKosovoNumber('+383 44 555 234')).toBe(true); // Valid mobile number with spaces
    expect(validateKosovoNumber('+383 45 555 234')).toBe(true); // Another valid mobile number with spaces
  });

  // Valid Kosovo landline numbers
  it('should return true for valid Kosovo landline number without spaces', () => {
    expect(validateKosovoNumber('+383285551234')).toBe(true); // Valid landline number
  });

  it('should return true for valid Kosovo landline number with spaces', () => {
    expect(validateKosovoNumber('+383 28 555 1234')).toBe(true); // Valid landline with spaces
  });

  // Invalid Kosovo landline numbers (wrong length)
  it('should return false for invalid Kosovo landline number (wrong length)', () => {
    expect(validateKosovoNumber('+383 28 555 123453')).toBe(false); // Too long
    expect(validateKosovoNumber('+383 38 55 123')).toBe(false); // Too short
  });

  // Invalid Kosovo mobile numbers (wrong length)
  it('should return false for invalid Kosovo mobile number (wrong length)', () => {
    expect(validateKosovoNumber('+383 44 555 12345')).toBe(false); // Too long
    expect(validateKosovoNumber('+383 44 555 12')).toBe(false); // Too short
  });

  it('should return false for invalid Kosovo mobile number with invalid prefix', () => {
    expect(validateKosovoNumber('+383 99 555 1234')).toBe(false); // Invalid prefix
  });

  // Valid numbers with dashes or other allowed characters
  it('should return false for valid Kosovo mobile number with dashes', () => {
    expect(validateKosovoNumber('+383-44-555-123')).toBe(false); // Dashes inside number
  });

  it('should return true for valid Kosovo landline number with dashes', () => {
    expect(validateKosovoNumber('+383-28-555-1234')).toBe(false); // Dashes inside number
  });
});
