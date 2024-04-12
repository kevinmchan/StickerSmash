import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';


const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

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
          {
            showOptions ? (
              <View style={styles.optionsContainer}>
                <IconButton onPress={() => setShowOptions(false)} icon="undo" label="Reset" />
                <CircleButton onPress={() => True} />
                <IconButton onPress={() => True} icon="save-alt" label="Save" />
              </View>
            ) : (
              <>
                <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
                <Button label="Use this photo" onPress={() => setShowOptions(true)} />
              </>
            )
          }
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
    flexGrow: 1,
    flexShrink: 0,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    marginVertical: 5,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsContainer: {
    flex: 1,
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
