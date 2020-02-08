import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';

export const Login = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    console.log(username, password);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.title}>Login to Virgin Active</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={login} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
