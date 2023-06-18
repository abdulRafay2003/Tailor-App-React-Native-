import React, { useState } from "react";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import CustomButton from "../components/Button";
import Theme from "../constants/Theme";

import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Image1 = require("../assets/images/logo.png");

export default function LoginScreen(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={Image1} resizeMode="cover" style={styles.logo} />
      <View style={styles.rect}>
        <Text style={styles.welcomeBack}>Welcome Back</Text>
        <View style={styles.materialButtonVioletRow}>
          <MaterialButtonViolet
            text="Customer"
            style={[
              styles.materialButtonViolet,
              { backgroundColor: selectedRole == 1 ? "#3F51B5" : "white" },
            ]}
            onPress={() => {
              setSelectedRole(1);
            }}
            textStyle={{color:selectedRole == 1 ? "white" : "black"}}
          />
          <MaterialButtonViolet
            text="Tailor"
            style={[
              styles.materialButtonViolet,
              { backgroundColor: selectedRole == 2 ? "#3F51B5" : "white" ,},
            ]}
            onPress={() => {
              setSelectedRole(2);
            }}
            textStyle={{color:selectedRole == 1 ? "black" : "white"}}
          />
        </View>
        <MaterialStackedLabelTextbox
          style={styles.materialStackedLabelTextbox}
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Email"
          placeholder="Enter your E-mail address"
        />
        <MaterialStackedLabelTextbox
          style={styles.materialStackedLabelTextbox1}
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="Password"
          secureTextEntry={true}
          placeholder="Enter your password"
        />

        <Text style={styles.forgetPassword}>Forget Password</Text>
        {/* <Button style={{width:"100%",borderWidth:1,borderColor:"red",backgroundColor:"red",borderRadius:10,height:40}} /> */}
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          size={18}
          label="Proceed"
          style={{ marginTop: 50 }}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("Greeting");
          }}
        >
          <Text style={styles.forgetPassword1}>Don't have an account ? </Text>
          <Text style={styles.forgetPassword1}>SignUp</Text>
        </TouchableOpacity>
        {/* <CustomButton
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
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    // borderWidth:1
  },
  logo: {
    width: 300,
    alignSelf: "center",
    height: 150,
    marginTop: 50,
    // marginLeft: 88,
    // borderWidth:1
  },
  rect: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: 20,
    padding: 25,
    // marginLeft: 18,
    // borderWidth:1,
    shadowColor: "grey",
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  welcomeBack: {
    fontFamily: Theme.boldfont,
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    marginTop: 10,
    // borderWidth:1
  },
  materialButtonViolet: {
    height: 52,
    width: "45%",
    borderRadius: 10,
    // borderWidth: 1,
  },
  materialButtonVioletRow: {
    // height: 52,
    flexDirection: "row",
    marginTop: 40,
    // marginLeft: 29,
    // marginRight: 29,
    // borderWidth:1,
    width: "100%",
    justifyContent: "space-around",
  },
  materialStackedLabelTextbox: {
    height: 60,
    width: "95%",
    alignSelf: "center",
    marginTop: 50,
    // marginLeft: 17,
    // borderWidth:1
  },
  materialStackedLabelTextbox1: {
    height: 60,
    width: "95%",
    alignSelf: "center",
    marginTop: 30,
  },
  forgetPassword: {
    fontFamily: Theme.boldfont,
    color: "black",
    marginTop: 20,
    // borderWidth:1,
    width: "95%",
    fontSize: 16,
    textAlign: "right",
    textDecorationLine: "underline",
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
    // marginTop: 15,
    textAlign: "center",
  },
});
