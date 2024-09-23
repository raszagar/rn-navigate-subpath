import { StatusBar, View } from 'react-native';
import { Main } from "./src/components/Main";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor={ 'red' } translucent />
      <Main />
    </View>
  );

}