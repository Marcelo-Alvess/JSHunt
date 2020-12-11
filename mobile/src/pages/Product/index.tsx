import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';

import { useRoute } from '@react-navigation/native';

interface Product {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface paramsProduct {
  params: {
    product: Product;
  };
  key: string;
  name: string;
}

export default function Product() {
  const route = useRoute<paramsProduct>();

  const product = route.params.product;

  return (
    <WebView source={{ uri: product.url }} />
  );
}