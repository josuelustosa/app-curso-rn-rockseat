import { MaterialIcons } from "@react-native-vector-icons/material-icons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { colors } from "@/styles/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 62,
  },

  title: {
    color: colors.green[900],
    fontSize: 20,
  },

  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },

  logo: {
    width: 32,
    height: 38,
  },
});
