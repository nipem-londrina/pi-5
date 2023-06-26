import React, { useState, useEffect } from 'react';
import base64 from 'base-64';
import {
   SafeAreaView,
   Text,
   StyleSheet,
   View,
   FlatList,
   TextInput,
   TouchableOpacity
} from 'react-native';
import { SERVER_ADDRESS } from '@env';


export default function Perfil({ route, navigation }) {
   const { username, password, jogo } = route.params;
   const auth = { 'Authorization': `Basic ` + base64.encode(`${username}:${password}`) };
   const onPress = () => { };

   const [nick, setNick] = useState('');
   const [pontuacao, setPontuacao] = useState('');
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(`http://${SERVER_ADDRESS}/api/v1/jogo/${jogo}/jogador/me`, { headers: auth })
         .then(res => res.json())
         .then(jogador => {
            setNick(jogador.nome)
            setPontuacao(jogador.elo)
            return jogador.id
         })
         .then(id => fetch(`http://${SERVER_ADDRESS}/api/v1/jogo/${jogo}/partida/jogador/${id}`, { headers: auth }))
         .then(res => res.json())
         .then(partidas => setData(partidas))
         .catch(e => {
            console.error(e)
         })
   }, []);

   return (

      <SafeAreaView style={{ flex: 1 }}>

         <View style={styles.container}>
            <Text style={styles.titulo}>{nick}</Text>
            <Text style={styles.titulo}>Score: {pontuacao}</Text>
            <Text>{'\n'}</Text>

            {/*
            <TextInput
               style={styles.buscarJogadorImput}
               underlineColorAndroid="transparent"
               placeholder="Procurar Jogador"
            />
            <TouchableOpacity style={styles.botaoBuscar} onPress={onPress}>
               <Text style={styles.buscarJogador}>Buscar</Text>
            </TouchableOpacity>
            */}

            <Text>{''}</Text>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('RegistroPartida', route.params)}>
               <Text style={styles.adicionar}>+</Text>
            </TouchableOpacity>


            <FlatList
               data={data}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <TouchableOpacity>
                     <View style={styles.itemLista}>
                        <Text style={styles.resultado}>{item.resultado}</Text>
                        <Text style={styles.jogador1Estilo}>{item.jogador}</Text>
                        <Text style={styles.jogador1Estilo}>({item.jogadorElo})</Text>
                        <Text style={styles.jogador2Estilo}>{item.adversario}</Text>
                        <Text style={styles.jogador2Estilo}>({item.adversarioElo})</Text>
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

   },
   titulo: {
      fontSize: 25,
      color: 'white',
      marginTop: 40,
      fontWeight: '700',
      textAlign: 'center'
   },
   itemLista: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#f75210',
      width: '100%',
      borderRadius: 15
   },
   jogador1Estilo: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
   },
   jogador2Estilo: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'right'
   },
   buscarJogadorImput: {
      height: 40,
      width: "98%",
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#f75210',
      backgroundColor: "white",

   },
   buscarJogador: {
      color: "white",
      fontWeight: "bold",
      fontSize: 18
   },
   resultado: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
   },
   pontosEstilo: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
   },
   botaoBuscar: {
      marginTop: 5,
      padding: 2,
      alignItems: 'center',
      backgroundColor: '#f75210',
      width: '25%',
      borderRadius: 15,
   },
   botao: {
      marginTop: 10,
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#f75210',
      width: '20%',
      borderRadius: 15,

   },
   adicionar: {
      color: "white",
      fontWeight: "bold",
      fontSize: 18
   }
});
