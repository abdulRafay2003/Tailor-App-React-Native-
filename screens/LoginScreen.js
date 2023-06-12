import React, { useState } from "react";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import CustomButton from "../components/Button";
import Theme from "../constants/Theme";

import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Image1 = require("../assets/images/logo.png");

export default function LoginScreen(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Image1} resizeMode="cover" style={styles.logo} />
      <View style={styles.rect}>
        <Text style={styles.welcomeBack}>Welcome Back.</Text>
        <View style={styles.materialButtonVioletRow}>
          <MaterialButtonViolet
            text="Customer"
            style={styles.materialButtonViolet}
          />
          <MaterialButtonViolet
            text="Tailor"
            style={styles.materialButtonViolet1}
          />
        </View>
        <MaterialStackedLabelTextbox
          style={styles.materialStackedLabelTextbox}
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Email"
        />
        <MaterialStackedLabelTextbox
          style={styles.materialStackedLabelTextbox1}
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="Password"
          secureTextEntry={true}
        />

        <Text style={styles.forgetPassword}>Forget Password</Text>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          size={18}
          label="Proceed"
          style={{ marginTop: 120, marginLeft: 100, marginRight: 100 }}
        />
        <Text style={styles.forgetPassword1}>Don't have an account?</Text>
        <CustomButton
          onPress={() => {
            navigation.navigate("Greeting");
          }}
          size={15}
          label="SignUp"
          style={{
            marginLeft: 100,
            marginRight: 100,
            color: Theme.darkSecondary,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
  logo: {
    width: 200,
    height: 72,
    marginTop: 50,
    marginLeft: 88,
  },
  rect: {
    width: 357,
    height: 663,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    marginTop: 60,
    marginLeft: 18,
  },
  welcomeBack: {
    fontFamily: Theme.boldfont,
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    width: 223,
    height: 35,
    marginTop: 26,
    marginLeft: 17,
  },
  materialButtonViolet: {
    height: 52,
    width: 140,
    borderRadius: 10,
  },
  materialButtonViolet1: {
    height: 52,
    width: 140,
    borderRadius: 10,
    marginLeft: 19,
  },
  materialButtonVioletRow: {
    height: 52,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 29,
    marginRight: 29,
  },
  materialStackedLabelTextbox: {
    height: 60,
    width: 312,
    marginTop: 30,
    marginLeft: 17,
  },
  materialStackedLabelTextbox1: {
    height: 60,
    width: 312,
    marginTop: 27,
    marginLeft: 17,
  },
  forgetPassword: {
    fontFamily: Theme.boldfont,
    color: "#121212",
    marginTop: 20,
    marginLeft: 219,
  },
  materialButtonViolet2: {
    height: 47,
    width: 312,
    borderRadius: 10,
    marginTop: 21,
    marginLeft: 17,
  },
  forgetPassword1: {
    fontFamily: Theme.quickRegular,
    color: "#121212",
    marginTop: 15,
    textAlign: "center",
  },
});
