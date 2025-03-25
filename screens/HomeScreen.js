import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGame } from '../context/gameContext';
import ChoiceButton from '../components/choiceButton';
import Scoreboard from '../components/scoreBoard';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { setUserChoice, setComputerChoice, setResult, score, setScore } =
    useGame();

  const generateComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const playGame = (playerChoice) => {
    const computerChoice = generateComputerChoice();
    setUserChoice(playerChoice);
    setComputerChoice(computerChoice);

    let gameResult;
    if (playerChoice === computerChoice) {
      gameResult = 'Draw';
      setScore({ ...score, draws: score.draws + 1 });
    } else if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      gameResult = 'Win';
      setScore({ ...score, wins: score.wins + 1 });
    } else {
      gameResult = 'Lose';
      setScore({ ...score, losses: score.losses + 1 });
    }

    setResult(gameResult);
    navigation.navigate('Result');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Move</Text>
      <Scoreboard /> {/* Display the scoreboard */}
      <View style={styles.buttonsContainer}>
        <ChoiceButton label="Rock" onPress={() => playGame('Rock')} />
        <ChoiceButton label="Paper" onPress={() => playGame('Paper')} />
        <ChoiceButton label="Scissors" onPress={() => playGame('Scissors')} />
      </View>
    </View>
  );
};

export default HomeScreen;

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
  buttonsContainer: {
    flexDirection: 'row',
  },
});
