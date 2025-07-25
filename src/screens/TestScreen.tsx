import { FC } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

type TestScreenProps = {};
export const TestScreen: FC<TestScreenProps> = ({}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Test Screen</Text>
    </View>
  );
};
