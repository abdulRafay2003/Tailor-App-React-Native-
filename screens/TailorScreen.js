import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
} from 'react-native';
import TailorDetailsScreen from './TailorDetailsScreen';


export default function TailorScreen(props) {
  const tailorData = [
    {
      id: 1,
      color: '#FF4500',
      icon: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Taylor Smith',
      location: 'New York',
      experience: '10 years',
      specialization: 'Wedding Dresses',
      totalOrders: 100,
      tags: ['tag 1', 'Mobile dev', 'RN', 'Bootdey'],
    },
    {
      id: 2,
      color: '#87CEEB',
      icon: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Haris Pasha',
      location: 'Los Angeles',
      experience: '8 years',
      specialization: 'Men Suits',
      totalOrders: 80,
      tags: ['tag 1','Dey-Dey', 'Developer'],
    },
    {
      id: 3,
      color: '#4682B4',
      icon: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      name: 'Oliver Davis',
      location: 'London',
      experience: '5 years',
      specialization: 'Custom Shirts',
      totalOrders: 60,
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      id: 4,
      color: '#6A5ACD',
      icon: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      name: 'Sophia Wilson',
      location: 'Sydney',
      experience: '3 years',
      specialization: 'Evening Gowns',
      totalOrders: 40,
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
    {
      id: 5,
      color: '#FF69B4',
      icon: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      name: 'Aiden Johnson',
      location: 'Toronto',
      experience: '6 years',
      specialization: 'Casual Wear',
      totalOrders: 70,
      tags: ['tag 1', 'tag 2', 'tag 3'],
    },
  ];

  const [tailors, setTailors] = useState(tailorData);
  const [query, setQuery] = useState('');

  const cardClickEventListener = item => {
    props.navigation.navigate('TailorDetails', { tailor: item });
  };
  
  

  const tagClickEventListener = tagName => {
    Alert.alert(tagName);
  };

  const renderTags = item => {
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={styles.btnColor}
          onPress={() => tagClickEventListener(tag)}>
          <Text>{tag}</Text>
        </TouchableOpacity>
      );
    });
  };

  const filteredTailors = tailors.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{ uri: 'https://img.icons8.com/color/70/000000/search.png' }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search..."
            underlineColorAndroid="transparent"
            onChangeText={q => setQuery(q)}
          />
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={filteredTailors}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => cardClickEventListener(item)}
            style={[styles.card, { backgroundColor: "#F7F9FB" }]}>
            <Image style={styles.cardImage} source={{ uri: item.icon }} />
            <View style={styles.cardContent}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>Location: {item.location}</Text>
              <Text style={styles.details}>Experience: {item.experience}</Text>
              <Text style={styles.details}>Specialization: {item.specialization}</Text>
              <Text style={styles.details}>Total Orders: {item.totalOrders}</Text>
              <View style={styles.tags}>{renderTags(item)}</View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  cardContent: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  details: {
    marginBottom: 5,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btnColor: {
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#EEE',
  },
});
