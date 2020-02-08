import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { AppNavigationParamList } from 'paramLists';
import { Colors } from 'styles';

export const Login = ({
  route,
}: {
  route: RouteProp<AppNavigationParamList, 'Login'>;
}): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Login to Virgin Active</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        keyboardType="number-pad"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="number-pad"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Login"
        onPress={(): Promise<void> => route.params?.login(username, password)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 48,
    fontWeight: 'bold',
  },
});
