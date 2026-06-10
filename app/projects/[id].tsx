import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Pressable, StyleSheet, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { projects } from '@/data/portfolio';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ProjectDetail() {
  // Obtenemos el id dinamico
  const { id } = useLocalSearchParams<{ id: string }>();
  // Hook de navegacion
  const router = useRouter();
  const project = projects.find((p) => p.id === id);
  const isComplete = project !== undefined ? project.status === 'Completado' : null;

  if (!project) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={styles.notFound}>Proyecto no encontrado</Text>
        <Pressable
          style={({ pressed }) => [styles.backButton, pressed && { opacity: 0.7 }]}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>← Volver</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Stack.Screen
        options={{
          title: project?.title ?? 'Proyecto',  // título dinámico
          // o si quieres quitarlo completamente:
          // headerShown: false,
        }}
      />
      {/* <View style={styles.topBar}>
        <Pressable
          style={({ pressed }) => [
            styles.backButton,
            pressed && { opacity: 0.9, transform: [{ scale: 0.95 }, { translateX: -16 }] }
          ]}
          onPress={() => router.back()}
        >
          <View style={{ flex: 1, flexDirection: "row", flexShrink: 0, gap: 100, justifyContent: "flex-start" }}>
            <IconSymbol name="arrow.left" size={22} color="#000" />
            <Text style={styles.backText}>Proyectos</Text>

          </View>
        </Pressable>
      </View> */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{project.title}</Text>
        </View>
        <View>
          <Text style={[styles.statusBadge, isComplete ? styles.done : styles.wip]}>
            {project.status}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={project.icon} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.company}>{project.company}</Text>
          <Text style={styles.date}>{project.date}</Text>
          {project.repoUrl && (
            <Pressable
              style={({ pressed }) => [
                styles.repoButton,
                pressed && { opacity: 0.7, transform: [{ scale: 0.97 }] }
              ]}
              onPress={() => Linking.openURL(project.repoUrl)}
            >
              <IconSymbol name="github" size={18} color="#fff" />
              <Text style={styles.repoText}>Ver en GitHub</Text>
              <IconSymbol name="github" size={18} color="#fff" />
            </Pressable>
          )}
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.tech}>{project.tech.join('  ·  ')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1, paddingBottom: 24 },
  notFound: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 40 },
  description: {
    fontSize: 12, color: '#555', lineHeight: 22,
    marginHorizontal: 8,
    paddingHorizontal: 2,
    paddingVertical: 4,
    width: '100%',
  },
  repoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#1a1a2e',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    width: '100%',
  },
  repoText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 147,
    objectFit: "contain",
    borderRadius: 16,
  },
  backText: { color: '#fff', fontWeight: '600', fontSize: 14 },
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 2,
    marginVertical: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    backgroundColor: "#1a1a2e",
    height: 50,
    borderTopEndRadius: 12,
    borderStartStartRadius: 12
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
  },
  title: { fontSize: 16, fontWeight: 'bold', color: '#D7D7D7' },
  date: { fontSize: 11, padding: 4, fontWeight: 'bold', color: '#161717C4', opacity: 0.5, textAlign: "center" },
  company: { fontSize: 12, fontWeight: 'bold', color: '#200460', paddingVertical: 4, textAlign: "center" },
  statusBadge: {
    textAlign: "center",
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 5,
    // borderRadius: 8,
    overflow: 'hidden',
  },
  done: { backgroundColor: '#d4edda', color: '#155724' },
  wip: { backgroundColor: '#fff3cd', color: '#856404' },
  tech: { color: '#6C63FF', marginVertical: 12, fontSize: 12, fontWeight: '600', textAlign: "center" },
  topBar: {
    paddingHorizontal: 16,
    transform: [{ translateY: -10 }]
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 14,
    marginTop: 32,
    borderRadius: 12,
    width: '100%',
    transform: [{ translateX: -12 }]
  },
});