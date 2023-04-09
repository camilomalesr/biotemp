import Head from '@/components/head';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import handler from '../api/hello';
import config from '@/config';

function ProductsPage() {
  const router = useRouter()
  
  const [data, setData] = useState([]);

  const sendRequest = async () => {
    // console.log('sendrequest');
    const response = await fetch(`${config.HOST}/api/hello`)
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
   
    sendRequest();
   
  }, [])

  return (
    <Fragment>
      <Head title={'Products'}/>
      <ul>
        {[1,2,3].map((val, key) => 
          <li key={key}>
            <Link href={`products/${val}`}>link</Link>
          </li>
        )}
      </ul>
      <button onClick={() => router.push('/products/3')}>ir al producto 3</button>
      {/* <table>
        <thead>
          <tr>
            <th>temperatura </th>
            <th>humedad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => 
            <tr key={key}>
              <td>{val.temperatura}</td>
              <td>{val.humedad}</td>
            </tr>
          )}
        </tbody>
      </table> */}
   </Fragment>
  );
}

export default ProductsPage;