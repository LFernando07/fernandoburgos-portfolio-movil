import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
}

export default function SkillBadge({ label }: Props) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#6C63FF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    margin: 4,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});