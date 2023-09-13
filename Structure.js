import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome5 } from '@expo/vector-icons'; // You might need to install this package

const Structure = () => {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropChange = (crop) => {
    setSelectedCrop(crop);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="seedling" size={24} color="#FFD700" />
      </View>
      <Text style={styles.heading}>Structure Chart of Crops</Text>
      <Picker
        selectedValue={selectedCrop}
        onValueChange={handleCropChange}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        <Picker.Item label="Choose your crop" value="" />
        <Picker.Item label="Sugarcane" value="sugarcane" />
        <Picker.Item label="Wheat" value="wheat" />
        <Picker.Item label="Rice" value="rice" />
      </Picker>
      {selectedCrop ? (
        <Text style={styles.description}>{`${selectedCrop} is nice`}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Change to 'flex-start'
    alignItems: 'center',
    backgroundColor: '#3A3A3A',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 10, // Space between icon and heading
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color
    textAlign: 'center',
    marginTop: 10, // Adjusted margin
    marginBottom:30,
  },
  picker: {
    width: '80%',
    height: 50,
    borderColor: '#00FF00', // Green color
    borderWidth: 2,
    marginBottom: 50,
    marginTop: 50, // Adjusted margin
    color: 'white',
    borderRadius: 8,
    backgroundColor: '#2E8E5E',
  },
  pickerItem: {
    color: 'white',
  },
  description: {
    fontSize: 18,
    color: 'white', // Gold color
    textAlign: 'center',
  },
});

export default Structure;
