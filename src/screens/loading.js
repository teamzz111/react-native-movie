import React from 'react';
import { StatusBar, ActivityIndicator, Text} from 'react-native';
import { View } from '../components/loading/styledView';

const Loading = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#FF5722'} />
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default Loading;
