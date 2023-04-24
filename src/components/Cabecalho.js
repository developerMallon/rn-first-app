import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const Cabecalho = ({
  navigation,
  text,
  setText,
  solicitar,
}) => {
  return (
    <View style={styles.cabecalho}>
      <Ionicons
        style={styles.icon}
        name="chevron-back"
        size={40}
        color="white"
        onPress={() => {
          navigation.pop();
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value) => setText(value)}
        onSubmitEditing={() => {
          solicitar(text);
        }}
      />
      <Ionicons
        style={styles.icon}
        name="search"
        size={40}
        color="white"
        onPress={() => {
          solicitar(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    // flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 20,
    marginRight: 5,
    minWidth: 250
  },
  icon: {
    marginHorizontal: 10
  }
});

export default Cabecalho;