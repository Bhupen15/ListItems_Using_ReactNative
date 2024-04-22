// screens/AddItemScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const AddItemScreen = ({ navigation, route }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddItem = async () => {
    if (title === '' || description === '') {
      Alert.alert('Error', 'Please enter title and description');
      return;
    }

    // Create a new item object
    const newItem = {
      id: Math.random().toString(),
      title,
      body: description,
    };

    // Call the addItemToList function passed from the HomeScreen
    route.params.addItemToList(newItem);

    // Navigate back to HomeScreen
    navigation.goBack();
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{ marginBottom: 10 }}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

export default AddItemScreen;
