import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Theme from "../constants/Theme";
import { useNavigation } from "@react-navigation/native";

const reviews = [
  {
    id: 1,
    title: "Review 1",
    author: "John Smith",
    date: "January 5, 2020",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
  },
  {
    id: 2,
    title: "Review 2",
    author: "Jane Smith",
    date: "January 10, 2020",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
  },
];

const portfolios = [
  {
    id: 1,
    title: "Portfolio 1",
    author: "John Doe",
    date: "February 1, 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
  },
  {
    id: 2,
    title: "Portfolio 2",
    author: "Jane Doe",
    date: "February 5, 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
  },
  {
    id: 3,
    title: "Portfolio 3",
    author: "Syed Haris",
    date: "February 5, 2023",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.",
  },
];

const TailorDetailsScreen = (props) => {
  const { tailor } = props.route.params;
  const [displaySection, setDisplaySection] = useState("portfolio");
  const navigation = useNavigation();

  const handlePortfolioClick = () => {
    setDisplaySection("portfolio");
  };

  const handleReviewsClick = () => {
    setDisplaySection("reviews");
  };

  const handlePlaceOrder = () => {
    navigation.navigate("OrderScreen", { tailor });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: tailor.icon }} style={styles.avatar} />
          <Text style={styles.name}>{tailor.name}</Text>
        </View>

        <View style={styles.gridContainer}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>{tailor.location}</Text>
          </View>

          <View style={styles.gridItem}>
            <Text style={styles.label}>Experience:</Text>
            <Text style={styles.value}>{tailor.experience}</Text>
          </View>

          <View style={styles.gridItem}>
            <Text style={styles.label}>Specialization:</Text>
            <Text style={styles.value}>{tailor.specialization}</Text>
          </View>

          <View style={styles.gridItem}>
            <Text style={styles.label}>Total Orders:</Text>
            <Text style={styles.value}>{tailor.totalOrders}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, displaySection === "portfolio" && styles.buttonActive]}
            onPress={handlePortfolioClick}
          >
            <Text style={styles.buttonText}>Portfolio</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, displaySection === "reviews" && styles.buttonActive]}
            onPress={handleReviewsClick}
          >
            <Text style={styles.buttonText}>Reviews</Text>
          </TouchableOpacity>
        </View>

        {displaySection === "portfolio" && (
          <>
            <Text style={styles.sectionTitle}>Portfolio</Text>
            {portfolios.map((portfolio) => (
              <TouchableOpacity key={portfolio.id} style={styles.portfolioItem}>
                <Text style={styles.portfolioTitle}>{portfolio.title}</Text>
                <Text style={styles.portfolioAuthor}>{portfolio.author}</Text>
                <Text style={styles.portfolioDate}>{portfolio.date}</Text>
                <Text style={styles.portfolioDescription}>{portfolio.description}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {displaySection === "reviews" && (
          <>
            <Text style={styles.sectionTitle}>Reviews</Text>
            {reviews.map((review) => (
              <TouchableOpacity key={review.id} style={styles.reviewItem}>
                <Text style={styles.reviewTitle}>{review.title}</Text>
                <Text style={styles.reviewAuthor}>{review.author}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
                <Text style={styles.reviewContent}>{review.content}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EBEBEB",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  gridItem: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonActive: {
    backgroundColor: Theme.secondary,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  reviewItem: {
    marginBottom: 20,
  },
  reviewTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewAuthor: {
    fontSize: 14,
    marginBottom: 5,
  },
  reviewDate: {
    fontSize: 12,
    marginBottom: 5,
  },
  reviewContent: {
    fontSize: 14,
  },
  portfolioItem: {
    marginBottom: 20,
  },
  portfolioTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  portfolioAuthor: {
    fontSize: 14,
    marginBottom: 5,
  },
  portfolioDate: {
    fontSize: 12,
    marginBottom: 5,
  },
  portfolioDescription: {
    fontSize: 14,
  },
  placeOrderButton: {
    backgroundColor: "#FF4500",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  placeOrderButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default TailorDetailsScreen;
