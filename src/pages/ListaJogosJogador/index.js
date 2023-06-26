import React, { useState, useEffect } from 'react';
import base64 from 'base-64';
import {
   SafeAreaView,
   Text,
   StyleSheet,
   View,
   FlatList,
   TextInput,
   ActivityIndicator,
   Image,
   Touchable,
   TouchableOpacity
} from 'react-native';
import { SERVER_ADDRESS } from '@env';


export default function ListaJogosJogador({ route,navigation }) {
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
                  <TouchableOpacity onPress={()=> navigation.navigate('Perfil')}>
                     <View style={styles.itemLista}>
                        <Text style={styles.textoItemLista}>{item.nome}</Text>
                     </View>
                  </TouchableOpacity>
        )}
      />
         <TouchableOpacity style={styles.botao} onPress={()=> navigation.navigate('ListaJogos')}> 
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
   titulo:{
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
   botao:{
      marginTop: 10,
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#f75210',
      width: '20%',
      borderRadius: 15
   }
});















/* const App = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredData(responseJson);
        setMasterData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter(
        function (item) {
          if (item.title) {
            const itemData = item.title.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
      });
      setFilteredData(newData);
    } else {
      setFilteredData(masterData);
    }
    setSearch(text);
  };

  const ItemView = ({item}) => {
    return (
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {' - '}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    alert('Id : ' + item.id + '\n\nTarefa : ' + item.title );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Procure Aqui"
        />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
  },
  itemStyle: {
    backgroundColor: '#0066CC',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    color: 'white',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0066CC',
  },
});
 */

/* export default App; */