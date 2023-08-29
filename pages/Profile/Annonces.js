import { StyleSheet, Text, View, FlatList, ActivityIndicator, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Annonces = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Received from Assia Jean',
      date: "28/08/23",
      image: "/Users/assia.ngoran/Desktop/codes-projects/niania/assets/icon.png"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Send to Yann Doe',
      date: "28/08/23",
      image: "/Users/assia.ngoran/Desktop/codes-projects/niania/assets/icon.png",
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Send to Regis Animan',
      date: "28/08/23",
      image: "/Users/assia.ngoran/Desktop/codes-projects/niania/assets/icon.png",
    },
  ];

  const Item = ({ id, title, date, image }) => (
    <View style={{ padding: 10, borderWidth: 1, borderColor:"lightgray", borderRadius:"10px", flex: 1, flexDirection: "column", marginBottom:"2%" }}>
      <ImageBackground source={require("../../assets/icon.png")} style={{ width: "100%", height: 180, position: "relative", }}>
        <View style={{height:"45%", width:"10%", position:"absolute", right:0, flexDirection:"column", justifyContent:"space-between", marginTop:"2%"}}>
          <View style={{justifyContent:"center", alignItems:"center", padding:8, backgroundColor:"lightgray"}}>
            <MaterialCommunityIcons name="heart-outline" color={"#000"} size={22} />
          </View>
          <View style={{justifyContent:"center", alignItems:"center", padding:8, backgroundColor:"lightgray"}}>
            <MaterialCommunityIcons name="share-outline" color={"#000"} size={22} />
          </View>
        </View>
      </ImageBackground>
      <Text style={{ fontWeight: "bold", fontSize: 19 }}>{title}</Text>
      <Text style={{ color: 'gray'}}>{date}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="Annonces" showHeader={true} return={navigation} />
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item id={item.id} title={item.title} date={item.date} amount={item.image} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default Annonces

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})