import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

interface Produto {
  id: number;
  title: string;
  description: string;
  url: string;
  createdat: string;
}


export default function Main() {
  const [product, setProduct] = useState<Produto[]>([]);
  const [pages, setPages] = useState(1);

  function prevPage() {
    if(pages === 1) return;
    setPages(pages - 1);
  }

  function nextPage() {
    setPages(pages + 1);
  }
  
  useEffect(() => {
    api.get(`products?page=${pages}`).then(response => {

      if(product.length === 0 && pages > 1){
        return setPages(1);
      }

      setProduct(response.data);
    });
  }, [product.length, pages]);

  return (
    <div className="product-list">
      {product.map(products => (
        <article key={products.id}>
          <strong>{products.id}</strong>
          <p>{products.description}</p>

          <Link to={`/product/${products.id}`}>Acessar</Link>
        </article>
      ))}
      <div className="actions">
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Próxima</button>
      </div>
    </div>
  );
}