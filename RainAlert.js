import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RainAlert = () => {
  const [timeOfDay, setTimeOfDay] = useState('');

  const func = () =>{
    const currentHour = new Date().getHours();
    if(currentHour>=6 && currentHour<18){
        return true;
    }
    else{
        return false;
    }
  }
  const checkDayOrNight = () => {
    if (func) {
      setTimeOfDay('Yes rain will be here soon, prepare accordingly\n ⛈️');
    } else {
      setTimeOfDay('For the next 5 days, their will be no rain, happy Farming ⛱️');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Click to check if their RAIN🌦️ in upcoming 5 days</Text>
      <TouchableOpacity style={styles.button} onPress={checkDayOrNight}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{timeOfDay}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Change to 'flex-start'
    alignItems: 'center',
    backgroundColor: '#3A3A3A', // Changed background color
    padding: 20,
  },
  heading: {
    fontSize: 32, // Adjusted font size
    fontWeight: 'bold',
    color: '#FFD700', // Gold color
    textAlign: 'center',
    marginTop: 10, // Adjusted margin
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#F85F73',
    padding: 15,
    borderRadius: 8, // Adjusted borderRadius
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Gold color
    textAlign: 'center',
  },
});


export default RainAlert;
