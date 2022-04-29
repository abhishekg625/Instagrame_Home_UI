import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import userList from "../userList.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Posts = ({ name, photo, post }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postHeadContainer}>
        <View style={styles.postHead}>
          {/* <Image style={styles.image} source={{ uri:photo }} />
          <Text style={styles.nameText}>{name}</Text> */}
          {userList.map((item, index) => (
            <View style={styles.postHead}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image source={{ uri: item.photo }} style={styles.image} />
                <View
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "space-around",
                  }}
                >
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={24}
                    color="black"
                  />
                </View>
              </View>

              <Text style={styles.nameText}>{item.name}</Text>

              <Image source={{ uri: item.post }} style={styles.imagePost} />
              <View
                style={{ flexDirection: "row", marginTop: 10, marginBottom: 5 }}
              >
                <View>
                  <AntDesign name="hearto" size={24} color="black"/>
                </View>
                <View style={{marginLeft:5, marginRight:5}}>
                  <Feather name="message-circle" size={24} color="black" />
                </View>
                <View>
                  <Feather name="send" size={24} color="black" />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 405,
    paddingTop: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 5,
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  imagePost: {
    height: 220,
    width: 335,
    borderWidth: 1,
  },
  nameText: {
    marginLeft: 10,
  },
});
