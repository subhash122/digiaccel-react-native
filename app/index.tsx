import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { router } from 'expo-router';
import { useState } from "react";
import coverImg from "../assets/images/digiaccel.jpg";

export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToDashboard = () => {
    router.navigate('/dashboard');
  }

  const onChangeUseranme = (e) => {
    setUsername(e)
  }
  const onChangePassword = (e) => {
    setPassword(e)
  }

  return (
    <View style={{
      margin: 0,
      backgroundColor: '#fff',
    }}>
      <View
        style={{
          height: '40vh',
        }}
      >
        <Image style={styles.img} resizeMode="contain" source={coverImg} ></Image>
      </View>
      <View
        style={styles.bottomView}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, }}>Sign-in</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeUseranme}
            value={username}
            placeholder="enter email or username"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="enter password"
            keyboardType="numeric"
          />
        </View>
        <View>
          <Button
            style={styles.btn}
            title="Sign-in"
            onPress={() => navigateToDashboard()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 20,
    color: 'grey',
    borderRadius: 7,
    padding: 10,
    backgroundColor: 'white'
  },
  btn: {
    borderRadius: 7,
  },
  img: {
    width: '100%',
    height: '100%'
  },
  bottomView: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderCurve: "circular",
    borderRadius: 20,
    justifyContent: "space-between",
    height: '60vh',
  }
});