import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// import * as users from './assets/users.json';


export default function App() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData=()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'})
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUsersData(data)})
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return(
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : usersData.map(_user => <Text key={_user.id}>{_user.name}</Text>)}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
