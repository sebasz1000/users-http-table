import usersStore from '../../store/users.store'
import './render-table.css'

let table

const createTable = () => {
  const table = document.createElement('table')
  const thead = document.createElement('thead')
  thead.innerHTML = `
  <tr>
    <th>
        ID
    </th>
    <th>
        Balance
    </th>
    <th>
        FirstName
    </th>
    <th>
        LastName
    </th>
    <th>
        Active
    </th>
    <th>
        Actions
    </th>
  </tr>`
  const tbody = document.createElement('tbody')
  table.append(thead, tbody)
  return table
}

let tableHTML = ''

/**
 *
 * @param {User<Object>} param0
 */
const createTableContentRows = ({ id, balance, firstName, lastName, isActive }) => {
  tableHTML += `
    <tr>
        <td>${id}</td>
        <td>${balance}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${isActive}</td>
        <td>
            <a href="#" data-id="${id}">Select</a> |
            <a href="#" data-id="${id}">Delete</a>
        </td>
    </tr>
`
}
/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
  const users = usersStore.getUsers()

  if (!table) {
    table = createTable()
    element.append(table)
    // TODO: listeners for table
  }

  const tbody = table.querySelector('tbody')
  tableHTML = ''
  users.forEach(createTableContentRows)
  tbody.innerHTML = (tableHTML)
}
