import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
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
  const passwordRef = useRef<TextInput>();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View onTouchStart={Keyboard.dismiss} style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>Bud</Text>
            <Text style={styles.subtitle}>Class Bookings Made Simple</Text>
          </View>
          <TextInput
            style={styles.input}
            selectionColor={Colors.RED}
            placeholder="User name"
            value={username}
            autoCompleteType="username"
            onChangeText={setUsername}
            returnKeyType="next"
            onSubmitEditing={(): void => passwordRef.current?.focus()}
          />
          <TextInput
            ref={passwordRef}
            style={styles.input}
            selectionColor={Colors.RED}
            placeholder="Password"
            autoCompleteType="password"
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
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 16,
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
    fontFamily: 'InterSemiBold',
    color: Colors.DARK_GREY,
    fontSize: 72,
  },
  subtitle: {
    fontFamily: 'InterSemiBold',
    color: Colors.DARK_GREY,
  },
});
