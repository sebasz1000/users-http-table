import store from '../../store/users.store'
import { renderTable } from '../render-table/render-table'
import './render-buttons.css'
/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButtons = (element) => {
  const prevBtn = document.createElement('button')
  const nextBtn = document.createElement('button')
  const currentPageLabel = document.createElement('span')
  const navElement = document.createElement('nav')
  prevBtn.id = 'prev-btn'
  prevBtn.innerText = '< Prev'
  nextBtn.id = 'next-btn'
  nextBtn.innerText = 'Next >'
  currentPageLabel.innerText = store.getCurrentPage()
  currentPageLabel.id = 'current-page'

  navElement.append(prevBtn, currentPageLabel, nextBtn)
  element.append(navElement)

  nextBtn.addEventListener('click', async () => {
    await store.loadNextPage()
    renderTable(element)
    currentPageLabel.innerText = store.getCurrentPage()
  })

  prevBtn.addEventListener('click', async () => {
    await store.loadPrevPage()
    renderTable(element)
    currentPageLabel.innerText = store.getCurrentPage()
  })
}
