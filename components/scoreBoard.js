import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useGame } from '../context/gameContext';

const Scoreboard = () => {
  const { score } = useGame();

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Wins: {score.wins}</Text>
      <Text style={styles.scoreText}>Losses: {score.losses}</Text>
      <Text style={styles.scoreText}>Draws: {score.draws}</Text>
    </View>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginVertical: 20,
    width: '90%',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
