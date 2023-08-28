import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { List } from 'react-native-paper'
import CountryFlag from 'react-native-country-flag'

const Send = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header title="Envoyez de l'argent" return={navigation} showHeader={true} />
            <View style={styles.container}>
                <View style={styles.view}>
                    <List.Item
                        title="Niania (all users)"
                        left={props => <Image source={require('../../assets/icon.png')} style={{ width: 35, height: 25, position:"relative", left:12, marginRight:20}} />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                        onPress={() => navigation.navigate('SendForm')}
                    />
                    <List.Item
                        title="Wave (Senegal, Côte d'ivoire)"
                        left={props => <Image source={require('../../assets/images/wave.jpg')} style={{ width: 35, height: 25, position:"relative", left:12, marginRight:20}} />}
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Retrait Côte d'Ivoire (XOF Mobile Money)"
                        left={props => <CountryFlag isoCode="ci" size={20} style={{ margin: "3%" }} />
                        }
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Retrait Mali (XOF Mobile Money)"
                        left={props => <CountryFlag isoCode="ml" size={20} style={{ margin: "3%" }} />
                        }
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Retrait Burkina Faso (XOF Mobile Money)"
                        left={props => <CountryFlag isoCode="bf" size={20} style={{ margin: "3%" }} />
                        }
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    <List.Item
                        title="Retrait Cameroun (XAF Mobile Money)"
                        left={props => <CountryFlag isoCode="cm" size={20} style={{ margin: "3%" }} />
                        }
                        right={props => <List.Icon {...props} icon="chevron-right" />}
                    />
                    
                </View>
            </View>
        </View>
    )
}

export default Send

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#fff",
        width: "100%",
    }
})