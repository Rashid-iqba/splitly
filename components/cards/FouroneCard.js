import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const FouroneCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imgallign}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="contain"
        />
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/697/3000/2000"
          contentFit="contain"
        />
      </View>
      <View style={styles.imgallign}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="contain"
        />
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/697/3000/2000"
          contentFit="contain"
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
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden',
    padding:5
  }
  ,
  imgallign: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    height: 80,
    //  padding:5,
    margin:2,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});
