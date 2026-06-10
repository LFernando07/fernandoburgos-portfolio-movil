import { AnimatedCard } from '@/components/ProjectCard';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';
import React from 'react';
import { FlatList, Text, StyleSheet, ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProjectsScreen() {
  const renderItem: ListRenderItem<Project> = ({ item, index }) => (
    <AnimatedCard project={item} index={index} />
  );

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={projects}
        keyExtractor={(item: Project) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <Text style={styles.title}>Mis Proyectos</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1a1a2e', marginBottom: 8 },
});