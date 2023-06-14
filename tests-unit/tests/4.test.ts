import { expect, test } from 'vitest'
import { divideNumbers } from '../4'

test('test', async () => {
  const actual = await divideNumbers(8, 2)

  expect(actual).toMatchSnapshot()
})

test('error', () => {
  // ---- La méthode ci-dessous marche aussi ----
  // try {
  //   divideNumbers(8, 0)
  // } catch (err) {
  //   const exepted = new Error('Division by zero')
  //   expect(err).toMatchSnapshot()
  // }

  expect(() => {
    divideNumbers(8, 0)
  }).toThrowError('Division by zero')
})
