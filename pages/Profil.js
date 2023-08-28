import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { List, Switch, Badge } from 'react-native-paper';

const Profil = ({ navigation }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [showSwitch, setShowSwitch] = React.useState(true);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <View style={{ flex: 1 }}>
            <Header title="Profil" />
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignItems: "center" }}>
                    <Image source={require('../assets/images/undraw_profile.png')} style={{ width: 150, height: 150, borderRadius: 120,marginBottom: "2%" }} />
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>Assia N'Goran</Text>
                    {/* <View style={{ padding: 5, borderRadius: 15, width: 90, backgroundColor: "#48c295", marginTop: "2%", marginBottom: "2%" }}>
                        <Text style={{ color: "#000", fontSize: 15, textAlign: "center" }}>Vérifié <MaterialCommunityIcons name="check" color={"#000"} size={20} /></Text>
                    </View> */}
                    {Platform.OS === "android" ? (
                        <View style={{ flex: 1, flexDirection: 'row', width: "100%", alignItems: "center", justifyContent: "center", marginTop: "3%" }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>23</Text>
                                <Text style={{ textAlign: 'center' }}>Transferts</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>34</Text>
                                <Text style={{ textAlign: 'center' }}>Paiements</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>8</Text>
                                <Text style={{ textAlign: 'center' }}>Referals</Text>
                            </View>
                        </View>
                    ):(
                        <View style={{ flex: 1, flexDirection: 'row', width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>23</Text>
                                <Text style={{ textAlign: 'center' }}>Transferts</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>34</Text>
                                <Text style={{ textAlign: 'center' }}>Paiements</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "column" }}>
                                <Text style={{ textAlign: 'center', fontWeight: "bold", fontSize: 24 }}>8</Text>
                                <Text style={{ textAlign: 'center' }}>Referals</Text>
                            </View>
                        </View>
                    )}
                </View>
                <View style={{ flex: 1.5 }}>
                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "4%" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Niania Pro</Text>
                        {showSwitch ? <Switch value={isSwitchOn} onValueChange={onToggleSwitch} /> : null}
                    </View> */}
                    <List.Item
                        title="Annonces"
                        left={props => <List.Icon {...props} icon="information" />}
                        right={props => <Badge>3</Badge>}
                    />
                    <List.Item
                        title="Parrainage"
                        left={props => <List.Icon {...props} icon="account-multiple-plus" />}
                    />
                    <List.Item
                        title="Aide & Assistance"
                        left={props => <List.Icon {...props} icon="help-circle" />}
                    />
                    <List.Item
                        title="Partager l'application"
                        left={props => <List.Icon {...props} icon="share" />}
                    />
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", paddingBottom: 6, backgroundColor:"#fff" }}>
                {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
                <Text style={{color: "gray" }}>Version 23.08.06-00001</Text>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", }}>
                    <Text style={{color: "gray" }}>Conditions générales  </Text>
                    <Text style={{color: "gray" }}>|</Text>
                    <Text style={{color: "gray" }}>  Avis de confidentialités</Text>
                </View>
            </View>
        </View>
    )
}

export default Profil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sendView: {
        // borderRadius: 10,
        backgroundColor: "#ac91fc",
        margin: "1%",
        padding: "2%",
        borderRadius: 90,
        height: 220,
        width: 220
    },
})