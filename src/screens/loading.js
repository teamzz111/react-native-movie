import React from 'react';
import {View, StatusBar, ActivityIndicator, StyleSheet, Text} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FF5722'} />
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FF5722',
    justifyContent: 'center',
  },
});

export default Loading;
