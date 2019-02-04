let expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message.js');
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

describe('generateLocationMessage', () => {
  it('should generate correct location Object', () => {
    let from = 'Admin'
    let latitude = 1;
    let longitude = 1;
    let locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);

  });
});
