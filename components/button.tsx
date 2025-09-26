import { ReactNode } from "react";
import { Pressable, Text } from "react-native";

type Props = {
  onPress?: () => void;
  children?: ReactNode;
  disable?: boolean;
  loading?: boolean;
  size?: "small" | "medium" | "large";
};

export default function Button({
  onPress,
  children,
  disable,
  loading,
  size,
}: Props) {
  return (
    <Pressable onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  );
}
