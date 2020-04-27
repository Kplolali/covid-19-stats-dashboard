import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import WorldWideStats from './components/WorldWideStats';
import CountryStats from './components/CountryStats';
import DropdownComponent from './components/DropDown';

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://covid19-graphql.netlify.app/'}),
  cache : new InMemoryCache()
})

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{'COVID-19\nWorldwide'}</Text>
      </View>
      <WorldWideStats />
      <View style={styles.selectCountryContainer}>
        <Text style={{ paddingTop:25, paddingHorizontal:15, fontWeight:"bold" }}>Select Country:</Text>
      </View>
      <View>
        <DropdownComponent />
      </View>
      <CountryStats />
      <View style={styles.dateContainer}>
        <Text style={{ color: 'grey', fontWeight:"400" }}>Last Updated:Mon Apr 27 2020</Text>
      </View>
    </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ece6f2',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    paddingHorizontal:15,
    paddingVertical:15,
    borderBottomWidth:2, 
    borderBottomColor:'#C4C4C4',
    marginBottom:30
  },
  headerText:{
    fontSize:30,
    fontWeight:'bold',
  },
  selectCountryContainer: {
    paddingHorizontal: 10,
  },
  dateContainer: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 10,
  },
  
});