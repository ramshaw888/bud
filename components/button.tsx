import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import { Shadows, Colors } from 'styles';

export const Button = ({
  title,
  onPress,
  loading,
}: {
  onPress: () => void;
  title: string;
  loading?: boolean;
}): JSX.Element => (
  <TouchableOpacity style={style.button} onPress={onPress}>
    <Text style={style.text}>{title.toUpperCase()}</Text>
    {!loading && <ActivityIndicator color={Colors.DARK_GREY} />}
  </TouchableOpacity>
);

const style = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 24,
    ...Shadows.MID,
  },
  text: {
    fontFamily: 'InterSemiBold',
    color: Colors.DARK_GREY,
  },
});
