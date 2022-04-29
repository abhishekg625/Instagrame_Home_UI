import { StyleSheet } from "react-native";
import HomeScreen from "./components/HomeScreen";
import FriendsTab from "./components/FriendsTab";
import MessagesTab from "./components/MessagesTab";
import SettingsTab from "./components/SettingsTab";
import ProfileTab from "./components/ProfileTab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import BottomTab from "./components/BottomTab";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Feed"
       activeColor="#f0edf6"
       inactiveColor="#3e2465"
       
       //barStyle={{ backgroundColor: '#694fad' }}
       >
      
        <Tab.Screen name="Feed" component={HomeScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen name="Friends" component={FriendsTab}
         options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={"#eb343d"} size={size} />
          ),
        }}
        />
      <Tab.Screen name="Messages" component={MessagesTab}
      options={{
        tabBarLabel: 'Messages',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles" color={"#34b4eb"} size={size} />
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsTab}
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="hammer" color={"#8a6a6a"} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={ProfileTab}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={"#e85810"} size={size} />
        ),
      }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
