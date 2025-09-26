import { View, Text } from "react-native";

type Props = {
  name: string;
  description?: string;
};
export default function CustomComponent({ name, description }: Props) {
  return (
    <View>
      <Text>{name}</Text>
      {description && <Text>{description}</Text>}
    </View>
  );
}
