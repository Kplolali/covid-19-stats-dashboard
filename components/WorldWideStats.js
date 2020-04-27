import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';

   function WorldwideStats(props) {

    const { data } = props;
    const [realTime, setRealTime] = useState({data: data.globalTotal})
   
   function UpdateData(){

   }
  
  return (
    <Card style={styles.container}>
      <View style={styles.worldStatsContainer}>
        <Ionicons name="ios-globe" size={26} color="#320bbd" />
        <Text style={{ marginLeft: 5, fontSize: 17, }}>
          Worldwide Statistics
        </Text>
      </View>
      <View style={styles.statsItemsContainer}>
        <View style={styles.statsItems}>
          <Text style={styles.confirmed}>Confirmed</Text>
          <Text style={styles.numbers}>0</Text>
        </View>
        <View style={styles.statsItems}>
          <Text style={styles.Recovered}>Recovered</Text>
          <Text style={styles.numbers}>0</Text>
        </View>
        <View style={[styles.statsItems, styles.lastItem]}>
          <Text style={styles.Deaths}>Deaths</Text>
          <Text style={styles.numbers}>0</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    marginHorizontal: 10,
  },
  worldStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsItemsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginTop: 20,
  },
  statsItems: {
    justifyContent: 'space-between',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    paddingRight: 20,
    paddingHorizontal: 6,
  },
  lastItem: {
    borderRightWidth: 0,
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  confirmed:{
    fontWeight:"600",
    color:"#6a0bdd"
  },
  Recovered:{
    fontWeight:"600",
    color:"#0f9653"
  },
  Deaths:{
    fontWeight:"600",
    color:"#fc3a78"
  },
});

const ListingsQuery = gql `
query{
  globalTotal {
      affectedCountries
      tests
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      casesPerOneMillion
      deathsPerOneMillion
      testsPerOneMillion
      updated
  }
}

`

const WorldwideWrapper = graphql(ListingsQuery)(WorldwideStats)
export default WorldwideWrapper;