import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confrimaSenha, setConfirmaSenha] = useState('');

  const onPress = () => {
    if (senha == confrimaSenha) {
      Alert.alert("Cadastro realizado com sucesso");
    }
    else {
      Alert.alert("As senhas não são iguais");
    }
  }


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Preencha os{"\n"}Campos</Text>
      <Text>{'\n\n\n\n\n\n\n\n\n\n\n'}</Text>
      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setEmail}
        value={email}
        placeholderTextColor={'grey'}
        placeholder='Digite seu email'>
      </TextInput>

      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setSenha}
        value={senha}
        placeholderTextColor={'grey'}
        placeholder='Digite a Senha'
        secureTextEntry={true}>
      </TextInput>

      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setConfirmaSenha}
        value={confrimaSenha}
        placeholderTextColor={'grey'}
        placeholder='Confirme a Senha'
        secureTextEntry={true}>
      </TextInput>

      <Text>{'\n\n\n'}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.botao} >CADASTRAR</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
    textAlign: 'center',
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
  }

});
