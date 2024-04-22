// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const [items, setItems]: any = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    // Fetch items from API
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const addItemToList = (newItem: any) => {
    setItems([...items, newItem]);
  };

  return (
    
      <SafeAreaView>
      <Button
        title="Add Item"
        onPress={() => navigation.navigate('AddItem', { addItemToList })}
      />
      <FlatList style={{ marginBottom: 30 }}
        data={items}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
   </SafeAreaView>
  );
};

export default HomeScreen;
