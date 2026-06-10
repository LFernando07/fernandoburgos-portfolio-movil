import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Pressable } from 'react-native';
import { Project } from '../types';
import { useRouter } from 'expo-router';

// Usamos directamente el tipo Project como Props
type Props = Project;

export default function ProjectCard({ title, company, description, date, tech, status }: Props) {
  const isComplete = status === 'Completado';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <Text style={[styles.statusBadge, isComplete ? styles.done : styles.wip]}>
          {status}
        </Text>
      </View>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.desc}>{description}</Text>
      <Text style={styles.tech}>{tech.join(' · ')}</Text>
    </View>
  );
}

export const AnimatedCard = ({ project, index }: { project: Props, index: number }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const router = useRouter();
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Pressable
        style={({ pressed }) => [pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] }]}
        onPress={() => router.push({ pathname: '/projects/[id]', params: { id: project.id } })}
      >
        <ProjectCard {...project} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1, backgroundColor: '#000032', borderRadius: 12, paddingBottom: 20,
    padding: 14, marginBottom: 16,
    borderWidth: 0.5, borderColor: '#e0e0e0',
    elevation: 2,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginVertical: 4 },
  date: { fontSize: 12, fontWeight: 'bold', color: '#fff', opacity: 0.5, textAlign: "center", marginBottom: 6 },
  company: { fontSize: 12, fontWeight: 'bold', color: '#0B9D63', marginVertical: 4, textAlign: "center" },
  statusBadge: {
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  done: { backgroundColor: '#d4edda', color: '#155724' },
  wip: { backgroundColor: '#fff3cd', color: '#856404' },
  desc: { color: '#fff', marginTop: 6, fontSize: 13, width: '100%', textAlign: "justify" },
  tech: { color: '#6C63FF', marginTop: 8, fontSize: 12, fontWeight: '600', textAlign: "center" },
});