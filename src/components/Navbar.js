import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Header, Avatar, Icon } from "@rneui/themed";

const Navbar = () => {
  const logo = require("../../assets/logoPB.png");

  return (
    <Header
      containerStyle={styles.headerContainer}
      placement="center"
      leftComponent={<Image source={logo} style={styles.image} />}
      centerComponent={
        <Icon
          name="search"
          color="#757582"
          size={15}
          containerStyle={styles.icon}
        />
      }
      rightComponent={
        <Avatar
          size={40}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 11,
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 0.91,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    width: 119,
    height: 32,
    marginLeft: 5,
  },
});

export default Navbar;
