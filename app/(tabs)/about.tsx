import React from "react";
import Divider from "@/components/Divider";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { certifications, profile } from "@/data/portfolio";
import { Certification } from "@/types";
import { FlatList, Image, Linking, ListRenderItem, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// 1. Importamos Animated y los efectos visuales
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function ExperienceScreen() {
  // 2. Recuperamos el 'index' en el renderItem para el retraso en cascada
  const renderItem: ListRenderItem<Certification> = ({ item, index }) => {
    const hasLink = !!item.certificateLink;
    return (
      <Animated.View
        // Cada renglón de certificación caerá de forma secuencial
        entering={FadeInUp.duration(400).delay(index * 120)}
      >
        <Pressable
          disabled={!hasLink}
          style={({ pressed }) => [
            {
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              marginVertical: 4,
              backgroundColor: hasLink ? "#0B9D63" : "#045B38",
              borderRadius: 6
            },
            pressed && hasLink && { opacity: 0.7, transform: [{ scale: 0.97 }] },
          ]}
          onPress={() => hasLink && Linking.openURL(item.certificateLink)}
        >
          {hasLink && (
            <IconSymbol
              name={"arrow.left"}
              style={{ transform: [{ rotateY: "180deg" }] }}
              size={18}
              color="#fff"
            />
          )}
          <Text style={{ marginLeft: 8, color: "#fff", fontWeight: "bold" }}>
            {item.name}
          </Text>
        </Pressable>
      </Animated.View>
    );
  };

  const renderHeader = () => (
    // 3. Envolvemos toda la cabecera en un Animated.View para una transición suave de entrada
    <Animated.View entering={FadeInDown.duration(500)}>
      {/* Presentación */}
      <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 12 }}>
        <Text style={{ color: "#3A0661", fontWeight: "bold", fontSize: 16, marginTop: 6 }}>
          ¡Hola yo soy
        </Text>
        <Text style={{ color: "#0B9D63", fontWeight: "bold", fontSize: 20 }}>
          Fernando Burgos!
        </Text>
        <Image
          source={profile.creator}
          style={{
            width: 130,
            height: 110,
            borderRadius: 24,
            marginTop: 12,
            resizeMode: "stretch",
          }}
        />
      </View>

      <Divider />

      {/* Perfil */}
      <View style={{ marginBottom: 16, marginTop: 8 }}>
        <Text style={{ color: "#3A0661", fontWeight: "bold", fontSize: 16, marginVertical: 8, textAlign: "center" }}>
          Perfil
        </Text>
        <Text style={{ color: "#434344D0", fontWeight: "bold", fontSize: 13, marginVertical: 6 }}>
          {profile.general}
        </Text>
      </View>

      <Divider />

      {/* Título de Certificaciones */}
      <Text style={{ color: "#3A0661", fontWeight: "bold", fontSize: 16, marginVertical: 6, textAlign: "center", marginTop: 12 }}>
        Certificaciones
      </Text>
    </Animated.View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <FlatList
        data={certifications}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16, paddingVertical: 24, marginHorizontal: 6 }}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
}