import { renderButtons } from './presentation/render-buttons/render-buttons'
import { renderTable } from './presentation/render-table/render-table'
import store from './store/users.store'
/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  element.innerHTML = 'Loading'
  await store.loadNextPage()
  element.innerHTML = ''
  renderTable(element)
  renderButtons(element)
}
