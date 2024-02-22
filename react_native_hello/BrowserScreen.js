import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
export default function BrowserScreen() {

  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://beerier-cobra-9746.dataplicity.io'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
