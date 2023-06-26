import React, { useEffect, useState } from 'react';
import base64 from 'base-64'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SERVER_ADDRESS } from '@env';


export default function ListaJogos({ route }) {
  const { username, password } = route.params;
  const auth = { 'Authorization': `Basic ` + base64.encode(`${username}:${password}`) };

  const [nick, setNick] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://${SERVER_ADDRESS}/api/v1/jogo`, { headers: auth })
      .then(res => res.json())
      .then(jogos => setData(jogos))
      .catch(e => {
        console.error(e)
      })
  }, [])

  function handleNovoJogo(jogo) {
    fetch(`http://${SERVER_ADDRESS}/api/v1/jogo/${jogo}/jogador/${nick}`, {
      method: 'POST',
      headers: auth
    })
      .then(Alert.alert("Jogo adicionado à sua conta"))
      .catch(e => console.error(e))
  }

  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <Text style={styles.titulo}>Escolha um jogo para adicionar</Text>
        <Text>{'\n'}</Text>
        <TextInput
          style={styles.styleBuscarJogador}
          onChangeText={i => setNick(i)}
          underlineColorAndroid="transparent"
          placeholderTextColor={'grey'}
          placeholder="Nickname"
        />
        <Text>{'\n\n'}</Text>
        <FlatList
          style={styles.lista}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleNovoJogo(item.id)}>
              <View style={styles.itemLista}>
                <Text style={styles.textoItemLista}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25,
    color: 'white',
    marginTop: 60,
    fontWeight: '700',
    textAlign: 'center'
  },
  lista: {
    width: "80%"
  },
  itemLista: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f75210',
    width: '100%',
    borderRadius: 15
  },
  textoItemLista: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  styleBuscarJogador: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 5,
    borderColor: '#f75210',
    color: 'white',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 15,
    width: "80%"
  }
});
