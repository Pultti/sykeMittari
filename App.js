// Importing necessary modules from React and React Native
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Defining the main component of the app, named 'App'
const App = () => {
  // Using the useState hook to create 'age' state, initializing with an empty string
  const [age, setAge] = useState('');
  // Using the useState hook to create 'heartRates' state, initializing with default values
  const [heartRates, setHeartRates] = useState({
    lower: 0, upper: 0, endurance: { lower: 0, upper: 0 }, heat: { lower: 0, upper: 0 }
  });

  // Function to calculate heart rates based on the age
  const calculateHeartRates = (ageNumber) => {
    // Checking if the age is a valid number and greater than 0
    if (!isNaN(ageNumber) && ageNumber > 0) {
      // Calculating max heart rate based on the age
      const maxHR = 220 - ageNumber;
      // Updating the heartRates state with calculated values for different training zones
      setHeartRates({
        lower: maxHR * 0.65,
        upper: maxHR * 0.85,

        endurance: {
          lower: maxHR * 0.60,
          upper: maxHR * 0.70
        },
        heat: {
          lower: maxHR * 0.80,
          upper: maxHR * 0.90
        }
      });
    }
  };

      // useEffect hook to automatically calculate heart rates when the 'age' state changes
      // Converting age to a number, handling comma as decimal point
     // Calling the calculateHeartRates function with the converted age

 // useEffect(() => {
   // const ageNumber = parseFloat(age.replace(',', '.'));
   // calculateHeartRates(ageNumber);
 // }, [age]); // The effect depends on the 'age' state and runs when it changes

  // Render method of the component, describing the UI
  return (
    <View style={styles.container}>
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={age}
        onChangeText={setAge} // Updating 'age' state as user types in the TextInput
      />
      <Button
        title="Calculate Heart Rates"
        onPress={() => calculateHeartRates(parseFloat(age.replace(',', '.')))} // Button to manually trigger heart rate calculation
      />
      <Text>Lower Limit: {heartRates.lower.toFixed(2)} bpm</Text>
      <Text>Upper Limit: {heartRates.upper.toFixed(2)} bpm</Text> 
      <Text>Endurance Zone: {heartRates.endurance.lower.toFixed(2)} - {heartRates.endurance.upper.toFixed(2)} bpm</Text> 
      <Text>Heat Training Zone: {heartRates.heat.lower.toFixed(2)} - {heartRates.heat.upper.toFixed(2)} bpm</Text> 
    </View>
  );
};

// StyleSheet to style the components in the render method
const styles = StyleSheet.create({
  container: {
    flex: 1, // Flex value to control layout
    justifyContent: 'center', // Align children vertically in the center
    alignItems: 'center', // Align children horizontally in the center
    padding: 10, // Padding around the container
  },
  input: {
    borderWidth: 1, // Border width for the TextInput
    borderColor: 'gray', // Border color
    width: '80%', // Width of the TextInput
    padding: 10, // Padding inside the TextInput
    margin: 10, // Margin outside the TextInput
  },
});

export default App; // Exporting the App component to be used in other parts of the
