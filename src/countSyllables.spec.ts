import countSyllables from './countSyllables'

it('counts', () => {
  expect(countSyllables('ābele')).toBe(3)
  expect(countSyllables('tu')).toBe(1)
  expect(countSyllables('ap')).toBe(1)
  expect(countSyllables('astroloģija')).toBe(5)
})
