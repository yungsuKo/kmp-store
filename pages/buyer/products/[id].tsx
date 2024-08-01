import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail({ product }) {
  return <>{product}</>;
}

export const getServerSideProps = async (context) => {
  console.log(context.params.id);
  const product = context.params.id;
  return {
    props: {
      product,
    },
  };
};
