import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profile } from '@/data/portfolio';
import SkillBadge from '@/components/SkillBadge';
import Divider from '@/components/Divider';
// 1. Importas Animated junto con el efecto de entrada que prefieras
import Animated, { FadeInUp, FadeInRight } from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* 2. Envolvemos el contenido principal en un Animated.View */}
        {/* FadeInUp.duration(400) hará que el perfil aparezca con opacidad y suba suavemente */}
        <Animated.View
          entering={FadeInUp.duration(400).delay(100)}
          style={styles.profileContainer}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              FB
            </Text>
          </View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.role}>{profile.role}</Text>
          <Divider height={5} elevation={4} />
          <Text style={styles.bio}>{profile.bio}</Text>
        </Animated.View>

        <Text style={styles.sectionTitle}>Skills</Text>

        {/* También puedes animar secciones independientes, por ejemplo las Skills */}
        <Animated.View
          entering={FadeInRight.duration(500).delay(200)}
          style={styles.skillsRow}
        >
          {profile.skills.map((skill: string) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { alignItems: 'center', padding: 24 },
  // Creamos un contenedor para centrar los elementos del perfil dentro del Animated.View
  profileContainer: { alignItems: 'center', width: '100%' },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#6C63FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: { color: '#fff', fontSize: 36, fontWeight: 'bold' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#1a1a2e' },
  role: { fontSize: 15, color: '#6C63FF', marginTop: 4 },
  bio: { textAlign: 'center', color: '#555', marginTop: 12, lineHeight: 20 },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginTop: 24,
    alignSelf: 'flex-start',
    color: '#1a1a2e',
  },
  // Quitamos flex-direction de aquí porque ahora lo maneja el Animated.View de las skills
  skillsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around", alignItems: "center", marginTop: 8, width: '100%' },
});
