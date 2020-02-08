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
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.keyboardAvoidingView}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>Bud</Text>
              <Text style={styles.subtitle}>Class Bookings Made Simple</Text>
            </View>
            <TextInput
              style={styles.input}
              selectionColor={Colors.RED}
              placeholder="User name"
              keyboardType="number-pad"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              selectionColor={Colors.RED}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <Button
            title="Login"
            onPress={async (): Promise<void> => {
              setLoading(true);
              await route.params?.login(username, password);
              setLoading(false);
            }}
            loading={loading}
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
    marginBottom: 32,
    fontSize: 20,
    fontFamily: 'InterRegular',
  },
  header: {
    marginBottom: 64,
  },
  title: {
    fontFamily: 'InterBold',
    color: Colors.DARK_GREY,
    fontSize: 72,
  },
  subtitle: {
    fontFamily: 'InterSemiBold',
    color: Colors.DARK_GREY,
  },
});
