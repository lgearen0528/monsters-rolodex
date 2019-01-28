let expect = require('expect');
let {generateMessage} = require('./message.js');
const app = require('./../server.js');
describe('generateMessage', () => {
  it('should generate the correct message Object', () => {
    let from = 'Liem';
    let text = 'This is a message.';
    let message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});
