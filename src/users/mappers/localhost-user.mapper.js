import { User } from '../models/user'

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {User<Object>}
 */
export const localhostUserToModel = (localhostUser) => {
  const {
    id,
    isActive,
    balance,
    avatar,
    first_name, //eslint-disable-line
    last_name, //eslint-disable-line
    gender
  } = localhostUser

  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name, //eslint-disable-line
    lastName: last_name, //eslint-disable-line
    gender
  })
}
