import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: theme.fonts.sizes.large,
    fontFamily: theme.fonts.bold,
    color: "white",
  },
});
