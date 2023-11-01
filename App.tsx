import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { TARSDK, TARSDKParams } from 'tar-sdk';

const apiKey: String = String("E5C1309B50F9480AA160AA0AFDD47A36");
const params: TARSDKParams = {
  apiKey: apiKey,
  language: 'fr',
  activeLanguages: ['fr', 'nl'],
  mapMode: false,
  walletMode: false,
  colorPalette: {
    blue: '#ff0000',
  },
};

const tarsdk = new TARSDK(params);

tarsdk.listenToOnSDKMessage((json: Object) => {
  console.log('javascript listenToOnSDKMessage\n' + JSON.stringify(json));
});

tarsdk.listenToOnInitialize((success: Boolean) => {
  console.log('javascript listenToOnInitialize ' + success);
});

tarsdk.listenToOnSDKUnload(() => {
  console.log('javascript listenToOnSDKUnload');
});

function start_press() {
  console.log('start_press');
  tarsdk.showTAR();
}

function start_press_with_asset() {
  console.log('start_press_with_asset');
  tarsdk.showTARWithAsset('63d90660de2ef500277e19f8', []);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="START SDK"
        onPress={() => {
          start_press();
        }}
      />
      <Button
        title="START SDK WITH ASSET"
        onPress={() => {
          start_press_with_asset();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
