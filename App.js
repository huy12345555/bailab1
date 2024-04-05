import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Vui lòng nhập email và password');
      return;
    }
    Alert.alert(`Đăng nhập thành công với user name = ${email} và password = ${password}`);
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
        placeholder="Nhập user name"
        value={email}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={text => setPassword(text)}
        placeholder="Nhập password"
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "blue",
    marginVertical: 10,
    padding: 10,
    width: "100%"
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 10
  },
  buttonText: {
    color: "white"
  }
});

export default App;
