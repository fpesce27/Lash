import React, { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import ItemCard from '@/components/ItemCard';
import { Item } from '@/pages/instances';
import Loading from './loading';

const ItemsList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/api');
        const data = await response.json();
        const items = Object.keys(data).map((key) => data[key]);
        setItems(items);
        setLoading(false);
    };

    fetchData();
  }, []);

  return (
    loading ? <Loading /> :
      items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))
  );
};

export default ItemsList;
