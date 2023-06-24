import React, { useState, useEffect } from 'react';

import {
   SafeAreaView,
   Text,
   StyleSheet,
   View,
   FlatList,
   TextInput,
   TouchableOpacity
} from 'react-native';



export default function App() {

   const data = [
      {
         id: 1,
         jogador1: "Chico",
         pontos: "32",
         jogador2: "Erich",
         resultado: "Vitória"
      },
      {
         id: 2,
         jogador1: "Chico",
         pontos: "-32",
         jogador2: "Erich",
         resultado: "Derrota"
      },{
         id: 3,
         jogador1: "Chico",
         pontos: "-30",
         jogador2: "Erich",
         resultado: "Derrota"
      },{
         id: 4,
         jogador1: "Chico",
         pontos: "31",
         jogador2: "Erich",
         resultado: "Vitória"
      },{
         id: 5,
         jogador1: "Chico",
         pontos: "35",
         jogador2: "Erich",
         resultado: "Vitória"
      },
   ]
   
   const nick = "ChicoGameplay";
   const pontuacao = 1200;

   const onPress = () => {};

   return (

      <SafeAreaView style={{ flex: 1 }}>

         <View style={styles.container}>
            <Text style={styles.titulo}>{nick}</Text>
            <Text style={styles.titulo}>Score: {pontuacao}</Text>
            <Text>{'\n'}</Text>
            <TextInput
               style={styles.buscarJogadorImput}
               underlineColorAndroid="transparent"
               placeholder="Procurar Jogador"
            />
            <TouchableOpacity style={styles.botaoBuscar} onPress={onPress}>
               <Text style={styles.buscarJogador}>Buscar</Text>
            </TouchableOpacity>
            <Text>{''}</Text>

            <TouchableOpacity style={styles.botao} onPress={onPress}>
               <Text style={styles.adicionar}>+</Text>
            </TouchableOpacity>
           

            <FlatList
               data={data}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                  <TouchableOpacity>
                     <View style={styles.itemLista}>
                        <Text style={styles.resultado}>{item.resultado}</Text>

   
                        <Text style={styles.jogador1Estilo}>{item.jogador1}</Text>
                        <Text style={styles.pontosEstilo}>{item.pontos}</Text> 
                        <Text style={styles.jogador2Estilo}>{item.jogador2}</Text>
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
      fontWeight: 'bold',
      //textAlign: 'left',
      //display: 'flex'
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
   buscarJogador:{
      color: "white",
      fontWeight: "bold",
      fontSize: 18
   },
   resultado:{
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
   },
   pontosEstilo:{
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      //display: 'inline-block'
   },
   botaoBuscar:{
      marginTop: 5,
      padding: 2,
      alignItems: 'center',
      backgroundColor: '#f75210',
      width: '25%',
      borderRadius: 15,
   },
   botao:{
      marginTop: 10,
      padding: 20,
      alignItems: 'center',
      backgroundColor: '#f75210',
      width: '20%',
      borderRadius: 15,
      
   },
   adicionar:{
      color: "white",
      fontWeight: "bold",
      fontSize: 18
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