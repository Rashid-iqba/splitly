import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const FouroneCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imgallign}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
        />
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/697/3000/2000"
        />
      </View>
         <View style={styles.imgallign}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
        />
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/697/3000/2000"
        />
      </View>
      <Text>FouroneCard</Text>
    </View>
  );
};

export default FouroneCard;

const styles = StyleSheet.create({
card: {
  width: (Dimensions.get('window').width - 40) / 2, // ← total horizontal spacing
  backgroundColor: '#f9f9f9',
  borderRadius: 8,
  overflow: 'hidden',
}
,
  imgallign: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 100,
    margin: 2,
    backgroundColor: '#ccc',
  },
});
