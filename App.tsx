import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/prensentation/screens/HelloWorldScreen';
// import {CounterScreen} from './src/prensentation/screens/CounterScreen';
import {CounterM3Screen} from './src/prensentation/screens/CounterM3Screen';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BoxObjectModelScreen} from './src/prensentation/screens/BoxObjectModelScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name={'Gerardo De Los Santos Juarez'} /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
