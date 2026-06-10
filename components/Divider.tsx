import { View } from "react-native";
import { DividerProps } from "@/types";
type dividerProps = DividerProps
export default function Divider({ backgroundColor, height, elevation }: dividerProps) {
  return (
    <View style={{
      width: "100%",
      backgroundColor: backgroundColor ?? "transparent",
      height: height ?? 3,
      borderRadius: 64,
      elevation: elevation ?? 3,
      marginTop: 12
    }} />
  )
}