import { beforeEach, describe, expect, test } from 'vitest'
import { Picture, User, UserStore, useUserStore } from '../5'

const user: User = {
  id: 1,
  name: 'Maggio'
}

const pictures: Picture[] = [
  {
    id: 1,
    userId: 1,
    url: 'oui.com'
  }
]

describe('userStore', () => {
  beforeEach(() => {
    const userStore: UserStore = useUserStore.getState()
    userStore.reset()
  })

  test('setCurrentUser', async () => {
    let userStore: UserStore = useUserStore.getState()
    await userStore.setCurrentUser(user)

    userStore = useUserStore.getState()

    expect(userStore.currentUser).toMatchSnapshot()
  })

  test('addPicture', async () => {
    let userStore: UserStore = useUserStore.getState()
    await userStore.addPicture(pictures[0])

    userStore = useUserStore.getState()

    expect(userStore.pictures).toMatchSnapshot()
  })

  test('deletePicture', async () => {
    let userStore: UserStore = useUserStore.getState()
    await userStore.addPicture(pictures[0])
    await userStore.deletePicture(1)

    userStore = useUserStore.getState()

    expect(userStore.pictures).toMatchSnapshot()
  })
})
