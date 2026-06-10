import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// 1. Importamos AntDesign
import AntDesign from '@expo/vector-icons/AntDesign';
import { SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

// 2. Definimos un tipo que soporte ambos tipos de iconos
type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];
type AntDesignIconName = ComponentProps<typeof AntDesign>['name'];

type IconMappingValue =
  | { library: 'MaterialIcons'; name: MaterialIconName }
  | { library: 'AntDesign'; name: AntDesignIconName };

// Cambiamos el tipo de IconMapping para reflejar la nueva estructura
type IconSymbolName = keyof typeof MAPPING;

/**
 * Mapeo de SF Symbols a Material Icons o AntDesign.
 */
const MAPPING = {
  'house.fill': { library: 'MaterialIcons', name: 'home' },
  'paperplane.fill': { library: 'MaterialIcons', name: 'send' },
  'chevron.left.forwardslash.chevron.right': { library: 'MaterialIcons', name: 'code' },
  'chevron.right': { library: 'MaterialIcons', name: 'chevron-right' },
  'person.2.fill': { library: 'MaterialIcons', name: 'contacts' },
  'arrow.left': { library: 'MaterialIcons', name: 'arrow-back' },
  'experience': { library: 'MaterialIcons', name: 'insights' },
  // 3. Agregamos el icono de GitHub (puedes usar 'github' como nombre de SF Symbol)
  'github': { library: 'AntDesign', name: 'github' },
  'profile': { library: 'AntDesign', name: 'user' },
} as const; // Usamos 'as const' para que TypeScript infiera los strings exactos

/**
 * An icon component that uses native SF Symbols on iOS, and Material/AntDesign Icons on Android and web.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  // 4. Obtenemos la configuración del icono desde nuestro MAPPING
  const iconConfig = MAPPING[name];

  // 5. Renderizado condicional según la librería configurada
  if (iconConfig.library === 'AntDesign') {
    return <AntDesign color={color} size={size} name={iconConfig.name} style={style} />;
  }

  return <MaterialIcons color={color} size={size} name={iconConfig.name} style={style} />;
}