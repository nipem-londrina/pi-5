import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import base64 from 'base-64';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SERVER_ADDRESS } from "@env";

export default function RegistroPartida({ route }) {
  const { username, password, jogo } = route.params;
  const headers = { 'Authorization': `Basic ` + base64.encode(`${username}:${password}`) };

  const [oponente, setOponente] = useState('');
  const [resultado, setResultado] = useState('');

  function handleNovaPartida() {
    const body = {
      adversario: oponente,
      ganhador: resultado
    }
    headers["Content-Type"] = "application/json";

    fetch(`http://${SERVER_ADDRESS}/api/v1/jogo/${jogo}/partida`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
      .then(Alert.alert("Partida registrada"))
      .catch(e => console.error(e))
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Registrar Partida</Text>

      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setOponente}
        value={oponente}
        placeholderTextColor={'grey'}
        placeholder='Oponente'>

      </TextInput>

      <Picker
        selectedValue={resultado}
        style={styles.estiloDoPecker}
        onValueChange={v => setResultado(v)}>
        <Picker.Item label="Empate" value="0" style={styles.pickerEmpate} />
        <Picker.Item label="Vitória" value="1" style={styles.pickerVitoria} />
        <Picker.Item label="Derrota" value="2" style={styles.pickerDerrota} />
      </Picker>

      <Text>{'\n\n\n'}</Text>

      <TouchableOpacity onPress={() => handleNovaPartida()}>
        <Text
          style={styles.botao}
        >ADICIONAR</Text>
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
  estiloDoPecker: {
    fontSize: 30,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    textAlign: 'center',
    margin: 10,

  },
  pickerDerrota: {
    backgroundColor: '#d15c57'
  },
  pickerVitoria: {
    backgroundColor: '#a8c4a2'
  }
});
