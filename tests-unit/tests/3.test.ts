import axios from 'axios'
import { expect, test, vi } from 'vitest'
import { searchPokemon } from '../3'

vi.mock('axios')

const pokemons = {
  data: {
    results: [
      {
        name: 'Ouiiiii',
        url: 'oui.com'
      },
      {
        name: 'Non',
        url: 'non.oui'
      }
    ]
  }
}

test('search', async () => {
  await axios.get.mockResolvedValue(pokemons)
  const actual = await searchPokemon('Oui')

  expect(actual).toMatchSnapshot()
})

test('error', async () => {
  await axios.get.mockResolvedValue(pokemons)
  const actual = await searchPokemon('test')
  const expected = []

  expect(actual).toEqual(expected)
})
