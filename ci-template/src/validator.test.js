import Validator from "../src/validator.js";
const validator = new Validator();

describe('Validator', () => {
  describe('validateUsername', () => {
    test('should return true for valid usernames', () => {
      expect(validator.validateUsername('validUser')).toBe(true);
      expect(validator.validateUsername('name_sf')).toBe(true);
      expect(validator.validateUsername('a')).toBe(true);
        expect(validator.validateUsername('a123ad')).toBe(true);
      expect(validator.validateUsername('name-name_name')).toBe(true);
    })
    test('should return false if forbidden symbols', () => {
      expect(validator.validateUsername('lk!kl')).toBe(false);
      expect(validator.validateUsername('русскиеБуквы')).toBe(false);
      expect(validator.validateUsername('space name')).toBe(false);


      
    })
    test('should return false when starts with digit or symbol', () => {
      expect(validator.validateUsername('-beginsWrong')).toBe(false);
      expect(validator.validateUsername('endsWrong_')).toBe(false);
      expect(validator.validateUsername('123beginsWrong')).toBe(false);
      expect(validator.validateUsername('endsWrong123')).toBe(false);
    })
    test('should return false if more than 4 digits in a row', () => {
      expect(validator.validateUsername('a1234g')).toBe(false);
    })
    test('should return false for empty string', () => {
      expect(validator.validateUsername('')).toBe(false);
    })
  })
})