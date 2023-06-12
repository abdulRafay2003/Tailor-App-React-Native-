import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const productTypes = [
  { label: "Shirt", value: "Shirt" },
  { label: "Pants", value: "Pants" },
  { label: "Dress", value: "Dress" },
];

const garmentTypes = [
  { label: "Casual", value: "Casual" },
  { label: "Formal", value: "Formal" },
  { label: "Party", value: "Party" },
];

const colors = [
  { label: "Red", value: "Red" },
  { label: "Blue", value: "Blue" },
  { label: "Green", value: "Green" },
];

const sizes = [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
];

const OrderScreen = () => {
  const navigation = useNavigation();

  const [productType, setProductType] = useState("");
  const [garmentType, setGarmentType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [designDetails, setDesignDetails] = useState("");
  const [image, setImage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    // Logic to handle confirming the order
    setShowModal(false);
    setProductType("");
    setGarmentType("");
    setColor("");
    setSize("");
    setDesignDetails("");
    setImage("");
    setDeliveryDate("");
    setPrice("");
    setDeliveryAddress("");
    setOtherDetails("");
    showAlert();
    navigateToHome();
  };

  const handleCancelOrder = () => {
    // Logic to handle canceling the order
    setShowModal(false);
  };

  const showAlert = () => {
    Alert.alert("Order Placed", "Your order has been placed successfully.");
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Product Type:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setProductType(value)}
          items={productTypes}
          placeholder={{ label: "Select product type", value: null }}
          value={productType}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Garment Type:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setGarmentType(value)}
          items={garmentTypes}
          placeholder={{ label: "Select garment type", value: null }}
          value={garmentType}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Color:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setColor(value)}
          items={colors}
          placeholder={{ label: "Select color", value: null }}
          value={color}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Size:</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          onValueChange={(value) => setSize(value)}
          items={sizes}
          placeholder={{ label: "Select size", value: null }}
          value={size}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Design Details:</Text>
        <TextInput
          style={[styles.textInput, { height: 100 }]}
          multiline
          placeholder="Enter design details"
          value={designDetails}
          onChangeText={setDesignDetails}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Image:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter image URL"
          value={image}
          onChangeText={setImage}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Delivery Date:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter delivery date"
          value={deliveryDate}
          onChangeText={setDeliveryDate}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter price"
          value={price}
          onChangeText={setPrice}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Delivery Address:</Text>
        <TextInput
          style={[styles.textInput, { height: 100 }]}
          multiline
          placeholder="Enter delivery address"
          value={deliveryAddress}
          onChangeText={setDeliveryAddress}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Other Details:</Text>
        <TextInput
          style={[styles.textInput, { height: 100 }]}
          multiline
          placeholder="Enter other details"
          value={otherDetails}
          onChangeText={setOtherDetails}
        />
      </View>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>

      <Modal visible={showModal} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Order</Text>
            <Text style={styles.modalText}>Product Type: {productType}</Text>
            <Text style={styles.modalText}>Garment Type: {garmentType}</Text>
            <Text style={styles.modalText}>Color: {color}</Text>
            <Text style={styles.modalText}>Size: {size}</Text>
            <Text style={styles.modalText}>
              Design Details: {designDetails}
            </Text>
            <Text style={styles.modalText}>Delivery Date: {deliveryDate}</Text>
            <Text style={styles.modalText}>Price: {price}</Text>
            <Text style={styles.modalText}>
              Delivery Address: {deliveryAddress}
            </Text>
            <Text style={styles.modalText}>Other Details: {otherDetails}</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmOrder}
              >
                <Text style={styles.modalButtonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelOrder}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#EBEBEB",
    marginTop: 35,
    paddingBottom: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    padding: 10,
  },
  placeOrderButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  placeOrderButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  confirmButton: {
    backgroundColor: "#007BFF",
  },
  cancelButton: {
    backgroundColor: "#FF0000",
  },
  modalButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default OrderScreen;
