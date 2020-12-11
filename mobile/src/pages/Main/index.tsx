import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

interface Product {
  id: number;
  title: string;
  description: string;
  url: string;
}

export default function Main() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  if(!products){
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    )
  }

  const navigation = useNavigation();

  function navigateProduct(product: Product) {
    navigation.navigate('Product', { product })
  }

  async function loadProducts() {
    if (loading) {
        return;
    }

    if (total > 0 && products.length === total) {
        return;
    }

    setLoading(true);

    const response = await api.get('products', {
        params: { page }
    });

    setProducts([... products, ... response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
      loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={product => String(product.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadProducts}
        onEndReachedThreshold={0.2}
        renderItem={({ item: product }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{product.id}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>

            <TouchableOpacity
             style={styles.productButton}
             onPress={() => navigateProduct(product)}
            >
              <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}