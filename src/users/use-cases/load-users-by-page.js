import { localhostUserToModel } from '../mappers/localhost-user.mapper'
/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>} array of users objects
 */
export const loadUsersByPage = async (page = 1) => {
  const URL = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
  const res = await fetch(URL)
  if (!res.ok) {
    throw new Error('There was an error while fetching data in API')
  }
  const data = await res.json()

  const users = data.map(localhostUserToModel)
  return users
}
