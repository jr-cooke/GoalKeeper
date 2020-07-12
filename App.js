import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text, Dimensions, TouchableOpacity, Modal, Platform, TextInput } from 'react-native';
import { AppLoading } from "expo";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Feather } from '@expo/vector-icons'; 

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
  },
  {
    key: '5',
    label: 'Test Goal 5',
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
    key: '4',
    label: 'Test Goal 4',
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
    key: '6',
    label: 'Test Goal 6',
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
    key: '7',
    label: 'Test Goal 7',
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
    key: '8',
    label: 'Test Goal 8',
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

const Footer = () => {
  return (
    <View style={styles.footer} />
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

const NewGoalToggle = (props) => {
  return (
    <TouchableOpacity style={styles.fob} onPress={props.onPress}>
      <Feather name="plus" size={30} color="#101010" />
    </TouchableOpacity>
  )
}

const NewGoalModal = (props) => {
  return (
    <Modal visible={props.visible} onRequestClose={props.close} animationType='slide'>
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity style={styles.modalHeaderAction} onPress={props.close}>
            <Feather name="x" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.modalHeaderText}>Add New Goal</Text>
          <TouchableOpacity style={styles.modalHeaderAction}>
            <Feather name="check" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default function App() {
  const [showNewGoalModal, toggleShowNewGoalModal] = useState(false);
  const [fontsLoaded] = useFonts({ Inter_900Black });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <FlatList
          data={goals}
          renderItem={GoalCard}
          ListHeaderComponent={Header}
          ListFooterComponent={Footer}
          numColumns={2}
        />
        <NewGoalToggle onPress={() => toggleShowNewGoalModal(true)} />
        <NewGoalModal visible={showNewGoalModal} close={() => toggleShowNewGoalModal(false)} />
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
    paddingTop: 40,
    height: 160,
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
  fob: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderRadius: 50,
    right: 30,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 110
  },
  modal: {
    flex: 1,
    backgroundColor: '#101010',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "Inter_900Black",
  },
  modalHeaderAction: {
  }
});
