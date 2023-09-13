import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from './firebase';
import { Linking } from 'react-native';
import { Alert } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToFeature = (feature) => {
    if (feature === 'weather') {
      navigation.navigate('WeatherApp');
    } else if (feature === 'workers') {
      Linking.openURL('https://shivam1228.github.io/barapoint/');
    } else if (feature === 'news') {
      navigation.navigate('News');
    } else if (feature === 'rain alert') {
      navigation.navigate('RainAlert');
    } else if (feature === 'planning') {
      navigation.navigate('Structure');
    } else {
      navigation.navigate('WeatherApp');
    }
  };

  const handleSignOut = async () => {
    Alert.alert(
      'Are you sure?',
      'Do you want to sign out?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await auth.signOut();
              navigation.replace('Login');
            } catch (error) {
              console.error('Error signing out:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const features = ['weather', 'rain alert', 'market', 'news', 'disease detector', 'workers', 'planning','admin'];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Services</Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.buttonGrid}>
          {features.map((feature) => (
            <FeatureButton key={feature} title={feature} onPress={() => navigateToFeature(feature)} />
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const FeatureButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.featureButton} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureButton: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FF5733',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default HomeScreen;
