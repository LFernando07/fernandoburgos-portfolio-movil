import { TimelineItemProps } from '@/types';
import { View, Text, StyleSheet } from 'react-native';
// 1. Cambiamos FadeInLeft por FadeInDown
import Animated, { FadeInDown } from 'react-native-reanimated';

interface ExtendedProps extends TimelineItemProps {
  index: number;
}

export function TimelineItem({ title, company, date, bullets, tech, status, isLast, index }: ExtendedProps) {
  return (
    // 2. Aplicamos FadeInDown con el retraso secuencial basado en su índice
    <Animated.View
      entering={FadeInDown.duration(500).delay(index * 180)}
      style={styles.row}
    >

      {/* Línea vertical + punto */}
      <View style={styles.spine}>
        <View style={[styles.dot, status === 'actual' && styles.dotActive]} />
        {!isLast && <View style={styles.line} />}
      </View>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.badge, status === 'actual' ? styles.badgeActual : styles.badgeDone]}>
            {status === 'actual' ? 'Reciente' : 'Completado'}
          </Text>
        </View>
        <Text style={styles.company}>{company}</Text>
        <Text style={styles.date}>{date}</Text>
        {bullets.map((b, i) => (
          <Text key={i} style={styles.bullet}>· {b}</Text>
        ))}
        <View style={styles.tags}>
          {tech.map((t) => (
            <View key={t} style={styles.tagContainer}>
              <Text style={styles.tagText}>{t}</Text>
            </View>
          ))}
        </View>
      </View>

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 12 },
  spine: { alignItems: 'center', width: 20 },
  dot: {
    width: 12, height: 12, borderRadius: 6,
    borderWidth: 2, borderColor: '#534AB7',
    backgroundColor: '#fff', marginTop: 4,
  },
  dotActive: { backgroundColor: '#534AB7' },
  line: { width: 5, flex: 1, backgroundColor: '#e0e0e0', marginTop: 4 },
  card: {
    flex: 1, backgroundColor: '#000032', borderRadius: 12, paddingBottom: 20,
    padding: 14, marginBottom: 16,
    borderWidth: 0.5, borderColor: '#e0e0e0',
    elevation: 2,
  },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 },
  title: { fontSize: 14, fontWeight: '600', color: '#fff', flex: 1 },
  badge: { fontSize: 11, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 99 },
  badgeActual: { backgroundColor: '#EEEDFE', color: '#208B71', fontWeight: "bold" },
  badgeDone: { backgroundColor: '#f0f0f0', color: '#6C63FF', fontWeight: "bold" },
  company: { fontSize: 12, color: '#6C63FF', marginBottom: 2, fontWeight: "bold" },
  date: { fontSize: 11, color: '#fff', marginBottom: 8 },
  bullet: { fontSize: 12, color: '#fff', lineHeight: 20, marginBottom: 3 },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8
  },
  // 1. El View controla que la altura sea uniforme y centra el contenido
  tagContainer: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    // Usamos un padding vertical controlado, o puedes forzar un 'height: 20' si los quieres milimétricos
    paddingVertical: 3,
    borderRadius: 6,
    justifyContent: 'center', // Centra el texto verticalmente
    alignItems: 'center',     // Centra el texto horizontalmente
  },
  // 2. El Text se encarga únicamente del color y tamaño de la letra
  tagText: {
    fontSize: 11,
    color: '#6C63FF',
    fontWeight: "bold",
    includeFontPadding: false, // <-- Truco extra para Android: elimina el padding oculto de la fuente nativa
    textAlignVertical: 'center',
  },
});