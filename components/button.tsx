import { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type Size = "small" | "medium" | "large";
type Variant = "filled" | "outline" | "ghost";

type Props = {
  onPress?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
  variant?: Variant;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  onPress,
  children,
  disabled,
  loading,
  size = "small",
  variant = "filled",
  style,
  textStyle,
}: Props) {
  const sizeStyle: Record<
    Size,
    { height: number; fontSize: number; padding: number }
  > = {
    small: { height: 36, fontSize: 14, padding: 12 },
    medium: { height: 44, fontSize: 16, padding: 16 },
    large: { height: 55, fontSize: 18, padding: 20 },
  };

  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "filled":
        return {
          backgroundColor: "black",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "gray",
        };
      default:
        return {
          backgroundColor: "transparent",
        };
    }
  };

  const getTextStyle = (): string => {
    switch (variant) {
      case "filled":
        return "white";
      case "outline":
        return "balck";
      default:
        return "black";
    }
  };

  return (
    <Pressable
      onPress={onPress}
      style={StyleSheet.flatten([
        getVariantStyle(),
        {
          borderRadius: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: sizeStyle[size].height,
          padding: sizeStyle[size].padding,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ])}
      disabled={disabled || loading}
    >
      <Text
        style={[
          { color: getTextStyle(), fontSize: sizeStyle[size].fontSize },
          textStyle,
        ]}
      >
        {loading ? <ActivityIndicator /> : children}
      </Text>
    </Pressable>
  );
}
