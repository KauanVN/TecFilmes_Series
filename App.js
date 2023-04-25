import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import BannerFilmes from './src/components/bannerFilmes'; 
import Filmes from './src/data/movies';
import Series from './src/data/series';
import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardMovies from './src/components/cardFilmes';
import CardSeries from './src/components/cardSeries';
import React from 'react';

export default function App() {
  return(
    <View style={styles.container}>
      
     <Header></Header>

     <SearchBar></SearchBar>

     <BannerFilmes></BannerFilmes>

     <View style={{width:"90%"}}>
     <Text style = {{fontSize:25,




                    color: 'white',




                    fontWeight:'bold',




                     marginRight: 75,




                     textAlign:'center'}}>Filmes</Text>
     < FlatList
     horizontal = {true}
    data= {Filmes}
    keyExtractor = {(item) => item.id}
    renderItem = { ({item}) => (

      <CardMovies

        

        titulo = {item.nome}

        nota = {item.nota}

        imagem = {item.imagem}




        />

    ) }

    />
<Text style = {{fontSize:25,




                    color: 'white',




                    fontWeight:'bold',




                     marginRight: 75,




                     textAlign:'center'}}>Séries</Text>
< FlatList
     horizontal = {true}
    data= {Series}
    keyExtractor = {(item) => item.id}
    renderItem = { ({item}) => (


      <CardSeries        

        titulo = {item.nome}

        nota = {item.nota}

        imagem = {item.imagem}

        />

    ) }

    />


    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
});
