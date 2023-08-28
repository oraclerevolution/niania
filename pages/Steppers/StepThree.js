import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, IconButton } from 'react-native-paper'

const StepThree = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/pdv.png')} style={styles.image} />
      <Text style={styles.title}>Trouvez des points de ventes</Text>
      <Text style={styles.subtitle}>Vous pouvez également recharger votre compte niania ou envoyer de l'argent avec des points de ventes.</Text>
      <View style={{ position: "relative", top: "25%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:"100%" }}>
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 19, textAlign: "left" }} onPress={() => navigation.navigate('StepTwo')}>Précédent</Text>
        <Button mode='outlined' style={{ borderRadius: 40, borderColor: "#7c55fe", backgroundColor: "#7c55fe" }} labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: 17 }} icon={() => <IconButton icon="login" size={20} iconColor='#fff' />} onPress={() => navigation.navigate('Login')}>Terminer </Button>
      </View>
    </View>
  )
}

export default StepThree

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