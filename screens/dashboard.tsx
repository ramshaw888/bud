import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'styles';

export const Dashboard = (): JSX.Element => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.WHITE },
});
