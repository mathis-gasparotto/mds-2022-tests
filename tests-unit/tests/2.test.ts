import { expect, test } from 'vitest'
import { calculateTotalTime, User } from '../2'

const users: User[] = [
  {
    name: 'Alice',
    records: [
      { time: 10, name: 'Record 1' },
      { time: 20, name: 'Record 2' }
      // Add more records here...
    ]
  },
  {
    name: 'Bob',
    records: [
      { time: 15, name: 'Record 3' },
      { time: 25, name: 'Record 4' }
      // Add more records here...
    ]
  }
  // Add more users here...
]

test('asc', () => {
  const actual = calculateTotalTime(users, 'asc')

  expect(actual).toMatchSnapshot()
})

test('desc', () => {
  const actual = calculateTotalTime(users, 'desc')

  expect(actual).toMatchSnapshot()
})
