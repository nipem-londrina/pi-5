import React, { useState, useEffect } from 'react';
import base64 from 'base-64';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { SERVER_ADDRESS } from '@env';


export default function ListaJogosJogador({ route, navigation }) {
  const { username, password } = route.params;
  const auth = { 'Authorization': `Basic ` + base64.encode(`${username}:${password}`) };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://${SERVER_ADDRESS}/api/v1/jogo/me`, { headers: auth })
      .then(res => res.json())
      .then(jogos => setData(jogos))
      .catch(e => {
        console.error(e)
        setData([{ id: 4, nome: "Pokémon Singles" }, { id: 5, nome: "Pokémon VGC" }, { id: 1, nome: "Xadrez" }])
      })
  }, [])



  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <Text style={styles.titulo}>Seus Jogos</Text>
        <Text>{'\n\n\n\n'}</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
              <View style={styles.itemLista}>
                <Text style={styles.textoItemLista}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('ListaJogos')}>
          <Text style={styles.textoItemLista} >+</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
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
    fontWeight: '700'
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
  botao: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f75210',
    width: '20%',
    borderRadius: 15
  }
});
