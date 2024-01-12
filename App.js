import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const App = () => {
  // State hooks for storing age and calculated heart rates
  const [age, setAge] = useState('');
  const [heartRates, setHeartRates] = useState({ lower: 0, upper: 0 });

  // useEffect hook to perform calculations whenever 'age' changes
  useEffect(() => {
    // Convert age to a number, replace comma with dot for decimal
    const ageNumber = parseFloat(age.replace(',', '.'));
    
    // Check if ageNumber is a valid number and greater than 0
    if (!isNaN(ageNumber) && ageNumber > 0) {
      // Calculate and update heart rates based on the provided age
      setHeartRates({
        lower: (220 - ageNumber) * 0.65, // Lower heart rate limit
        upper: (220 - ageNumber) * 0.85  // Upper heart rate limit
      });
    }
  }, [age]); // Dependency array: re-run effect when 'age' changes

  return (
    <View style={styles.container}>
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={age}
        onChangeText={setAge} // Update age state as user types
      />
      <Text>Lower Limit: {heartRates.lower.toFixed(2)} bpm</Text>
      <Text>Upper Limit: {heartRates.upper.toFixed(2)} bpm</Text>
    </View>
  );
};

// StyleSheet for styling components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    margin: 10,
  },
});

export default App;