import { expect, test } from 'vitest'
import { filterAndSortUsers, User } from '../1'

const users: User[] = [
  { age: 17, name: 'Bob' },
  { age: 25, name: 'Alice' },
  { age: 30, name: 'Charlie' }
]

test('Function should filter array by minor users, and sort by name', () => {
  const actual = filterAndSortUsers(users)

  expect(actual).toMatchSnapshot()
})
