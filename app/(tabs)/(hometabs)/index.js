import { FlatList, StyleSheet, Text, View } from 'react-native';
import FouroneCard from '../../../components/cards/FouroneCard';

const data = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; // Dummy data

const Index = () => {
  const renderItem = () => <FouroneCard />;

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={styles.heading}>index</Text>
  <FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item, index) => index.toString()}
  numColumns={2}
  columnWrapperStyle={styles.row} // ✅ ensures row layout works well
  contentContainerStyle={styles.list}
/>

    </View>
  );
};

export default Index;


const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
 list: {
  paddingHorizontal: 10, // create padding around entire grid
  paddingBottom: 20,
},
row: {
  justifyContent: 'space-between', // ✅ ensures even space between columns
  marginBottom: 10,
},

});
