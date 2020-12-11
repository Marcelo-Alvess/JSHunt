import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

interface Products {
  title: string;
  description: string;
  url: string;
}

interface ProductParams {
  id: string;
}

export default function Product() {
  const params = useParams<ProductParams>();
  const [products, setProducts] = useState<Products[]>([]);
  
  useEffect(() => {
    api.get(`products/${params.id}`).then(response => {
      setProducts(response.data);
    })
  }, [params.id])
  
  
  if(!products) {
    return <p>Carregando...</p>
  }

  return (
    <div className="product-info">
      {products.map(product => (
        <div key={params.id}>
          <h1>{product.title}</h1>
          
          <p>{product.description}</p>

          <p>
            URL: <Link to={product.url}>{product.url}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}