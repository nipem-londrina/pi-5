import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    navigation.navigate('ListaJogosJogador', { username: email, password: senha })
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>EloRank</Text>

      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setEmail}
        value={email}
        placeholderTextColor={'grey'}
        placeholder='Email'>
      </TextInput>

      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setSenha}
        value={senha}
        placeholderTextColor={'grey'}
        placeholder='Senha'
        secureTextEntry={true}>
      </TextInput>

      <Text>{'\n\n\n'}</Text>

      <TouchableOpacity>
        <Text
          style={styles.botao}
          onPress={handleLogin}
        >LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.cadastrese}
          onPress={() => navigation.navigate('Cadastro')}
        >CADASTRE-SE</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    marginBottom: 250,
    color: "white",
    fontWeight: "bold"
  },

  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  entradaDeDados: {
    fontSize: 30,
    marginTop: 10,
    padding: 10,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    //textAlign: 'center',
    margin: 10,
    color: 'white',
    borderStyle: 'solid',
    borderColor: '#f75210',
    borderWidth: 3,

  },

  botao: {
    fontSize: 22,
    backgroundColor: "#f75210",
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    width: "100%",
    fontWeight: "bold"
  },

  cadastrese: {
    fontSize: 14,
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
    color: "white",

  }

});
