import './render-add-modal.css'
import modalHTML from './render-add-modal.html?raw'

let modal, form
let backdrop

// TODO Cargar usuario por ID
export const showModal = () => {
  backdrop?.classList.remove('hide-modal')
}

export const hideModal = () => {
  // TODO Reset del formulario
  backdrop?.classList.add('hide-modal')
}
/**
 *
 * @param {HTMLDivElement} element
 */
export const renderAddModal = (element) => {
  if (backdrop) return

  modal = modalHTML
  backdrop = document.createElement('div')
  backdrop.id = 'modal-backdrop'
  backdrop.className = 'modal-container'
  backdrop.innerHTML = modal
  element.append(backdrop)

  form = backdrop.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    for (const iterator of formData) {
      console.log(iterator)
    }
  })

  backdrop.addEventListener('click', (e) => {
    if (!Array.from(e.target.classList).includes('modal-container')) return
    hideModal()
  })
}
