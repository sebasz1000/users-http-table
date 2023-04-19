import { showModal } from '../render-add-modal/render-add-modal'
import './render-add-button.css'
/**
 *
 * @param {HTMLDivElement} element
 * @param { () => void } callback
 */
export const renderAddButton = (element, callback) => {
  const addBtn = document.createElement('button')
  addBtn.innerText = '+'
  addBtn.classList.add('add-btn')
  element.append(addBtn)

  addBtn.addEventListener('click', () => {
    if (!callback) return
    callback(element)
    showModal()
  })
}
