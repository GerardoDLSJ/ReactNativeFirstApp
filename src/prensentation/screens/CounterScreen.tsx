import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  // const handleIncrement = (number: number) => {
  //   setCounter(counter + number);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      {/* <PrimaryButton
        label="Incrementar"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(counter + 10)}
      /> */}
      <Button
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(counter + 10)}
        mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
