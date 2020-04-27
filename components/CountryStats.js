import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';

   function CountryStats(props) {

  return (
    <Card style={styles.container}>
      <View style={styles.countryStatsContainer}>
        <Ionicons bold={false} name="ios-stats" color="#0f9653" size={26} />
        <Text style={{ marginLeft: 5, fontSize: 17, marginTop: 6 }}>
          Statistics
        </Text>
      </View>
      <View style={styles.statsItemsContainer}>
        <View>
          {/* Confirmed cases */}
          <View style={styles.statsItems}>
            <Text style={styles.confirmed}>
              Confirmed
            </Text>
            <Text style={styles.numbers}>1,500</Text>
          </View>
          {/* Active cases */}
          <View style={[styles.statsItems, styles.spacing]}>
            <Text style={styles.Active}>Active</Text>
            <Text style={styles.numbers}>1,344</Text>
          </View>
        </View>
        <View style={styles.border}>
          {/* Recovered cases */}
          <View style={styles.statsItems}>
            <Text style={styles.Recovered}>
              Recovered
            </Text>
            <Text style={styles.numbers}>1,500</Text>
          </View>
          {/* Critical cases */}
          <View style={[styles.statsItems, styles.spacing]}>
            <Text style={styles.Critical}>Critical</Text>
            <Text style={styles.numbers}>4</Text>
          </View>
        </View>
        <View style={styles.lastItem}>
          {/* Deaths */}
          <View style={styles.statsItems}>
            <Text style={styles.Deaths}>Deaths</Text>
            <Text style={styles.numbers}>1,500</Text>
          </View>
          {/* Tests */}
          <View style={[styles.statsItems, styles.spacing]}>
            <Text style={styles.Tests}>Tests</Text>
            <Text style={styles.numbers}>4</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    marginHorizontal: 10,
  },
  countryStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -8,
  },
  statsItemsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginTop: 20,
  },
  border: {
    borderLeftWidth: StyleSheet.hairlineWidth,

    borderColor: 'grey',
    marginLeft: 15,
  },
  statsItems: {
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingHorizontal: 10,
  },
  lastItem: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    marginLeft: 15,
    borderColor: 'grey',
  },
  numbers: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  spacing: {
    marginTop: 25,
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
  Active:{
    fontWeight:"600",
    color:"#f5bb40"
  },
  Critical:{
    fontWeight:"600",
    color:"#912121"
  },
  Tests:{
    fontWeight:"600",
    color:"#6207a8"
  },
});

const ListingsQuery = gql `
 query {
  country(name:"Malaysia") {
      country
      countryInfo {
          _id
          lat
          long
          flag
          iso2
          iso3
      }
      continent
      result {
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
}


`

const CountryStatsWrapper = graphql(ListingsQuery)(CountryStats)

export default CountryStatsWrapper;