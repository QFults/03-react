import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import people from './people.js'

const App = () => {

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
  ]

  return (
    <ReactTable
      data={people}
      columns={columns} />
  )
}

export default App
