// app/(tabs)/experience.tsx
import { ScrollView } from 'react-native';
import { TimelineItem } from '@/components/TimelineItem';
import { experience } from '@/data/portfolio';
import { SafeAreaView } from 'react-native-safe-area-context';
// 1. Importas Reanimated
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ExperienceScreen() {
  return (
    // Corregido: SafeAreaView va afuera envolviendo todo
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8, marginVertical: 24 }}>

        {/* 2. Envolvemos el mapeo en un Animated.View */}
        <Animated.View entering={FadeInUp.duration(400).delay(100)}>
          {experience.map((item, index) => (
            <TimelineItem
              index={index}
              key={item.id}
              {...item}
              isLast={index === experience.length - 1}
            />
          ))}
        </Animated.View>

      </ScrollView>
    </SafeAreaView>
  );
}
