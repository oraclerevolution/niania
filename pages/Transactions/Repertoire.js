import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import * as Contacts from "expo-contacts"
import { Modal, Portal, PaperProvider } from 'react-native-paper'

const Repertoire = ({ navigation }) => {
  const [phoneNumberData, setPhoneNumberData] = useState([]);
  const [phoneNumberSelected, setPhoneNumberSelected] = useState(null);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20};

  const Item = ({ id, lastName, firstName, phoneNumbers }) => (
    <TouchableOpacity style={{ flex: 1, flexDirection: "column", borderBottomWidth: 0.5, borderColor: "lightgray", height: 50, justifyContent: "center", paddingLeft: 10 }} onPress={() => selectNumberForSend(phoneNumbers)}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>{lastName} {firstName}</Text>
      <Text style={{ color: 'gray' }}>{phoneNumbers[0].number}</Text>
    </TouchableOpacity>
  );

  const PhoneNumberItem = ({number}) => (
    <TouchableOpacity style={{ flex: 1, flexDirection: "column", borderBottomWidth: 0.5, borderColor: "lightgray", height: 50, justifyContent: "center", paddingLeft: 10 }} onPress={() => navigation.navigate("SendForm", {correspondant: number})}>
      <Text style={{ fontSize: 17, fontWeight: "bold" }}>{number}</Text>
    </TouchableOpacity>
  );

  const selectNumberForSend = (data) => {
    if(data.length === 1){
      navigation.navigate("SendForm", {correspondant: data[0].number});
    }else if(data.length > 1){
      setPhoneNumberSelected(data);
      showModal();
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setPhoneNumberData(data);
        }
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header title="Répertoire" return={navigation} showHeader={true} />
      <View style={styles.container}>
        <FlatList
          data={phoneNumberData}
          renderItem={({ item }) => <Item id={item.id} lastName={item.lastName} firstName={item.firstName} phoneNumbers={item.phoneNumbers} />}
          keyExtractor={item => item.id}
        />
        <PaperProvider>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <Text style={{marginBottom:10}}>Selectionnez le numero destinataire:</Text>
              <FlatList
                data={phoneNumberSelected}
                renderItem={({ item }) => <PhoneNumberItem number={item.number} />}
                keyExtractor={item => item.id}
              />
            </Modal>
          </Portal>
        </PaperProvider>
      </View>
    </View>
  )
}

export default Repertoire

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})