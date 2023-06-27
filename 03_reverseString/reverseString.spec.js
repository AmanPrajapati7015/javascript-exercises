const reverseString = require('./reverseString')

describe('reverseString', () => {
  test('reverses single odd word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('reverses single even word', () => {
    expect(reverseString('aman')).toEqual('nama');
  });

  test('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
});
