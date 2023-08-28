import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import CountryFlag from 'react-native-country-flag'

const StepOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/transfer_money.png')} style={styles.image} />
      <Text style={styles.title}>Envoyez et recevez de l'argent de partout</Text>
      <Text style={styles.subtitle}>Grâce à niania envoyez et recevez de l'argent dans plusieurs pays.</Text>
      <View style={{ position: "relative", top: "3%", flexDirection: "row", justifyContent: "center", alignItems: "center", width:"100%" }}>
        <CountryFlag isoCode="ci" size={35} style={{margin:"3%"}} />
        <CountryFlag isoCode="ml" size={35} style={{margin:"3%"}} />
        <CountryFlag isoCode="bf" size={35} style={{margin:"3%"}} />
        <CountryFlag isoCode="sn" size={35} style={{margin:"3%"}} />
      </View>
      <View style={{ position: "relative", top: "25%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%" }}>
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 19, textAlign: "left" }} onPress={() => navigation.navigate('Onboarding')}>Précédent</Text>
        <Button mode='outlined' style={{ borderRadius: 40, borderColor: "#7c55fe", backgroundColor: "#7c55fe" }} labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: 17 }} onPress={() => navigation.navigate('StepTwo')}>Continue </Button>
      </View>
    </View>
  )
}

export default StepOne

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20
  },
  image: {
    width: 280,
    height: 200,
    marginBottom:"4%"
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#7c55fe",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 19,
    color: "gray",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "5%",
    fontWeight: "bold",
    textAlign: "center"
  }
})