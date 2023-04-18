import { loadUsersByPage } from '../use-cases/load-users-by-page'
const state = {
  currentPage: 0,
  users: []
}

const loadNextPage = async () => {
  // throw new Error('Not implemented')
  const users = await loadUsersByPage(getCurrentPage() + 1)
  if (users.length === 0) return
  state.currentPage += 1
  state.users = users
}

const loadPrevPage = async () => {
  if (getCurrentPage() <= 1) return
  const users = await loadUsersByPage(getCurrentPage() - 1)
  state.currentPage -= 1
  state.users = users
}

const onUserChanged = async () => {
  // TODO : Implementar
  throw new Error('Not implemented')
}

const reloadPage = async () => {
  throw new Error('Not implemented')
}

/**
 *
 * @returns {User[]}
 */
const getUsers = () => {
  return [...state.users]
}

/**
 *
 * @returns {Number}
 */
const getCurrentPage = () => {
  return state.currentPage
}

export default {
  loadNextPage,
  loadPrevPage,
  onUserChanged,
  reloadPage,
  getUsers,
  getCurrentPage
}

// Los OBJETOS Y ARREGLOS SIEMPRE PASAN POR REFERECIA EN MEMORIA, POR LO QUE AL EXPONERLOS Y CAMBIARLOS EN OTRO ARCHIVO CAMBIAMOS EL ORIGINAL(VALOR EN MEMORIA)
