import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function RegistroPartida({ navigation }) {

  const [oponente, setOponente] = useState('');
  const [resultado, setResultado] = useState('');

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Registrar Partida</Text>

      <TextInput
        style={styles.entradaDeDados}
        onChangeText={setOponente}
        value={oponente}
        placeholderTextColor={'grey'}
        placeholder='Informe oponente'>

      </TextInput>

      <Picker
        selectedValue={resultado}
        style={styles.estiloDoPecker}
        onValueChange={(itemValue) =>
          setResultado(itemValue)
        }>
        <Picker.Item label="Vitória" value="1" style={styles.peeckerVitoria} />
        <Picker.Item label="Derrota" value="2" style={styles.peeckerDerrota} />
        <Picker.Item label="Empate" value="3" style={styles.peeckerEmpate} />
      </Picker>

      <Text>{'\n\n\n'}</Text>

      <TouchableOpacity>
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
    //backgroundColor: 'white',
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
  peeckerDerrota: {
    backgroundColor: '#d15c57'
  },
  peeckerVitoria: {
    backgroundColor: '#a8c4a2'
  }

});
