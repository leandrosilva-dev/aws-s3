import { Form } from 'react-bootstrap';
import useFetch from "../../useFetch";

function BucketCombo(){
    let {data, loading, error} = useFetch('http://localhost:3333/bucket')

    return(
        <div>
        <Form.Label>Buckets</Form.Label>
        <Form.Select aria-label="Default select example">
            <option>{loading && `Carregando bucket` || `Selecione um bucket`}</option>
            {data &&
                data.Buckets.map((bucket) => 
                    <option value="1">{bucket.Name}</option>
                )
            }
        </Form.Select>
        </div>
    )
}

export default BucketCombo