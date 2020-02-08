import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { AppNavigationParamList } from 'paramLists';
import { Colors } from 'styles';
import { Button } from 'components/button';

export const Login = ({
  route,
}: {
  route: RouteProp<AppNavigationParamList, 'Login'>;
}): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.keyboardAvoidingView}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View>
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
          </View>
          <Button
            title="Login"
            onPress={(): void => {
              route.params?.login(username, password);
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 56,
    fontSize: 20,
    fontFamily: "Inter"
  },
  title: {
    marginBottom: 64,
    fontSize: 24,
    fontFamily: "InterBold",
  },
});
