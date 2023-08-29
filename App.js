import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './pages/Onboarding';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Send from './pages/Transactions/Send';
import Receive from './pages/Transactions/Receive';
import StepOne from './pages/Steppers/StepOne';
import StepTwo from './pages/Steppers/StepTwo';
import StepThree from './pages/Steppers/StepThree';
import CodeOtp from './pages/Auth/CodeOtp';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Profil from './pages/Profil';
import SendForm from './pages/Transactions/SendForm';
import Annonces from './pages/Profile/Annonces';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#ac91fc',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Accueil',
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen name="Send" 
        component={Send} 
        options={{
          tabBarLabel: 'Envoyer',
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="send" color={color} size={30} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Receive" 
        component={Receive} 
        options={{
          tabBarLabel: 'Recevoir',
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="arrow-down" color={color} size={30} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Profil" 
        component={Profil} 
        options={{
          tabBarLabel: 'Profil',
          tabBarShowLabel: true,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const navigationBeforeLogin = () => {
  return (
    <Stack.Navigator initialRouteName='Onboarding'>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Send" component={Send} options={{ headerShown: false }} />
      <Stack.Screen name="Receive" component={Receive} options={{ headerShown: false }} />
      <Stack.Screen name="StepOne" component={StepOne} options={{ headerShown: false }} />
      <Stack.Screen name="StepTwo" component={StepTwo} options={{ headerShown: false }} />
      <Stack.Screen name="StepThree" component={StepThree} options={{ headerShown: false }} />
      <Stack.Screen name="CodeOtp" component={CodeOtp} options={{ headerShown: false }} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="SendForm" component={SendForm} options={{ headerShown: false }} />
      <Stack.Screen name="Annonces" component={Annonces} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {navigationBeforeLogin()}
    </NavigationContainer>
  );
}
