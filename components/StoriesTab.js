import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
//import LinearGradient from 'react-native-linear-gradient'
import userList from "../userList.json";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const StoriesTab = () => {
  return (
    <ScrollView style={{ flex: 1 }} horizontal>
      <View>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/49.jpg" }}
          style={styles.img}
        />
      </View>
      <View style={{ position: "absolute" }}>
        <View style={styles.addBtnContainer}>
          <AntDesign
            name="pluscircle"
            size={12}
            color="green"
            style={{ marginLeft: 30 }}
          />
          <Text style={[styles.userName, { textTransform: "capitalize" }]}>
            Your Story
          </Text>
        </View>
      </View>
      {userList.map((item) => (
        <View style={{ width: 74, padding: 5 }}>
          <LinearGradient
            colors={["#8a3ab9", "#e95934", "#bc2a8d"]}
            style={{ padding: 2, borderRadius: 50 }}
          >
            <Image
              source={{ uri: item.photo }}
              style={[styles.img, { borderWidth: 4 }]}
            />
          </LinearGradient>
          <Text style={styles.userName}>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default StoriesTab;

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: "#ffff",
  },
  userName: {
    textAlign: "center",
    textTransform: "lowercase",
    fontSize: 13,
    marginTop: 3,
  },
  addBtnContainer: {
    marginTop: 55,
    marginLeft: 5,
    borderColor: "#ffffff",
    justifyContent: "center",
  },
  addBtn: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12,
  },
});
