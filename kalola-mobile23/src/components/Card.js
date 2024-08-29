import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, content }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 1,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;
