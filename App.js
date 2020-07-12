import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';
import { AppLoading } from "expo";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const goals = [
  {
    key: '1',
    label: 'Test Goal',
    milestones: [
      {
        label: 'Test Milestore',
        completed: false
      },
      {
        label: 'Test Milestore 2',
        completed: true
      }
    ]
  },
  {
    key: '2',
    label: 'Test Goal 2',
    milestones: [
      {
        label: 'Test Milestore',
        completed: false
      },
      {
        label: 'Test Milestore 2',
        completed: true
      }
    ]
  },
  {
    key: '3',
    label: 'Test Goal 3',
    milestones: [
      {
        label: 'Test Milestore',
        completed: false
      },
      {
        label: 'Test Milestore 2',
        completed: true
      }
    ]
  }
]

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Goals</Text>
    </View>
  );
};

const GoalCard = (props) => {
  console.log("GoalCard -> props", props)
  return (
    <View style={styles.card}>
      <Text style={styles.cardHeader}>{props.item.label}</Text>
    </View>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_900Black });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={goals}
          renderItem={GoalCard}
          ListHeaderComponent={Header}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  header: {
    paddingLeft: 20,
    height: 200,
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Inter_900Black",
  },
  card: {
    backgroundColor: "#424242",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: (Dimensions.get("window").width / 2) - 20,
    height: 200
  },
  cardHeader: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Inter_900Black",
  },
});
