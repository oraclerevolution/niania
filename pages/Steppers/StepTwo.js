import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import CountryFlag from 'react-native-country-flag'

const StepTwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/credit_card.png')} style={styles.image} />
      <Text style={styles.title}>Mobile Money et Transfert Bancaire</Text>
      <Text style={styles.subtitle}>Vous avez la possibilité d'utiliser les Mobile Money pour envoyer de l'argent et faire egalement des Transferts Bancaire.</Text>
      <View style={{ position: "relative", top: "3%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%" }}>
        <Image source={require('../../assets/images/orange.png')} style={{width:60, height:45}} />
        <Image source={require('../../assets/images/mtn.jpg')} style={{width:60, height:45}} />
        <Image source={require('../../assets/images/Moov_Africa_logo.png')} style={{width:60, height:45}} />
        <Image source={require('../../assets/images/wave.jpg')} style={{width:60, height:45}} />
        <Image source={require('../../assets/images/visa.png')} style={{width:60, height:45}} />
      </View>
      <View style={{ position: "relative", top: "25%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%" }}>
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 19, textAlign: "left" }} onPress={() => navigation.navigate('StepOne')}>Précédent</Text>
        <Button mode='outlined' style={{ borderRadius: 40, borderColor: "#7c55fe", backgroundColor: "#7c55fe" }} labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: 17 }} onPress={() => navigation.navigate('StepThree')}>Continue </Button>
      </View>
    </View>
  )
}

export default StepTwo

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