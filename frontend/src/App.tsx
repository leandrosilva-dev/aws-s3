import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
import BucketCombo from './pages/buckets/BucketCombo'
import useFetch from './useFetch'

function App() {
  let {data, loading, error} = useFetch('http://localhost:3333/object')

  return (
    <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error {error.code} - {error.message} - {error.name} - {error.response.data}</div>}
        <BucketCombo />
        <br/>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ETag</th>
                    <th>Key</th>
                    <th>LastModified</th>
                    <th>Owner</th>
                    <th>StorageClass</th>
                    <th>Bucket</th>
                </tr>
            </thead>
            <tbody>
                {data && data.Contents.map(obj => 
                    <tr>
                        <td>{obj.ETag}</td>
                        <td>{obj.Key}</td>
                        <td>{obj.LastModified}</td>
                        <td>{obj.Owner.DisplaName}</td>
                        <td>{obj.StorageClass}</td>
                        <td>{data.Name}</td>
                    </tr>
                    )}
            </tbody>
        </Table>
    </div>
  )
}

export default App
