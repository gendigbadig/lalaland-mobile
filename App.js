/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import 'react-native-get-random-values';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://www.figma.com/proto/GBRx8I0wTqe5Ys7uWC0c1h/Lalaland?node-id=2%3A5&viewport=383%2C126%2C1&scaling=fit-width',
        }}
      />
    );
  }
}

const App: () => React$Node = () => {
  return (
    <>
      <MyWeb />
    </>
  );
};

export default App;
