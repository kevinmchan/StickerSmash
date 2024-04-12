import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';


const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log('Image picker cancelled');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button label="Choose a photo" theme='primary' onPress={pickImageAsync} />
          <Button label="Use this photo" />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'stretch',
  },
  contentContainer: {
    flex: 1,
  },
  imageContainer: {
    flexGrow: 3,
    flexShrink: 0,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  }
});
