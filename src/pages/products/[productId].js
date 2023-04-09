import Head from '@/components/head';

import { useRouter } from 'next/router';
import React from 'react';

function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;
  
  return (
    <>
      <Head title={'Product detail'}/>
      <h1>Detalles del producto {productId}</h1>
   </>
  );
}

export default ProductDetails;
