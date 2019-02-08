const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non string values', () => {
    let testStr = 123;
    let result = isRealString(testStr);
    expect(result).toBe(false);
  });
  it('should reject only spaces', () => {
    let testStr = '    ';
    let result = isRealString(testStr);
    expect(result).toBe(false);
  });
  it('should allow string with non space chars', () => {
    let testStr = '  hello!   My name is Liem...? @';
    let result = isRealString(testStr);
    expect(result).toBe(true);
  });
});
