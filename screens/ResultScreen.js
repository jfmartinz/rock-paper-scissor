import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGame } from '../context/gameContext';

const ResultScreen = () => {
  const navigation = useNavigation();
  const {
    userChoice,
    computerChoice,
    result,
    setUserChoice,
    setComputerChoice,
    setResult,
    setScore,
  } = useGame();

  const handleRestart = () => {
    // Reset choices and result
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
    navigation.navigate('Home');
  };

  const handleResetScore = () => {
    // Reset scores
    setScore({ wins: 0, losses: 0, draws: 0 });
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Result: {result}</Text>
      <Text style={styles.choiceText}>You chose: {userChoice}</Text>
      <Text style={styles.choiceText}>Computer chose: {computerChoice}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Play Again" onPress={handleRestart} color="#007BFF" />
        <Button
          title="Reset Score"
          onPress={handleResetScore}
          color="#FF4500"
        />
      </View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  choiceText: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%',
  },
});
