import { Button, Text, Touchable, TouchableOpacity } from 'react-native';
import { StyleSheet, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>
        There are 8 available events
      </Text>

      <View style={styles.card}>

        <View style={[styles.centeredView, { marginTop: 20, marginBottom: 80 }]}>
          <Text style={styles.cardTitleText}>
            House Clean Up!!!
          </Text>
          <Text style={styles.bodyText}>
            There's been a lot of trash building up, I want this to be cleaned up really quickly in the next couple of days, text me if you can do it
          </Text>
        </View>

        <View style={styles.centeredView}>
          <Text style={styles.points}>
            10
          </Text>
          <Text style={styles.extraInfo}>
            Points available
          </Text>
          <Text style={styles.bodyText}>
            5 people have already signed up
          </Text>
        </View>

        <View style={[styles.centeredView, { marginTop: 60 }]}>

        </View>

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#EF3E3E'}]}>
          <Text style= {{color: 'white'}}>Save for later</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {backgroundColor: '#659654'}]}>
          <Text style= {{color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20, // Adjust as needed
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 3,
    borderRadius: 12,
    margin: 10,
    borderColor: 'white', // Change as needed
    justifyContent: 'center', // This will center children vertically
    alignItems: 'center', // This will center children horizontally
    backgroundColor: '#3E3E3E',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth,
    backgroundColor: 'black', // Change this to the desired color
  },
  card: {
    padding: 10,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    width: screenWidth - 40,
    height: 400,
  },

  bodyText: {
    color: 'black',
    fontSize: 14,
  },

  titleText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginTop: 80,
  },

  cardTitleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },

  centeredView: {
    alignItems: 'center',
  },

  points: {
    color: 'black',
    fontSize: 100,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: -10,
  },
  extraInfo: {
    color: 'gray',
    fontSize: 20,
    alignSelf: 'center',
  }
});
