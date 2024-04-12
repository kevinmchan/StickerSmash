import { Modal, View, Pressable, Text, StyleSheet } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.pickerTitle}>Pick an emoji</Text>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <MaterialIcons name="close" color='#fff' size={18} />
          </Pressable>
        </View>
        <View style={styles.pickerContainer}>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#25292e',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1a1d21',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  pickerContainer: {
  },
  pickerTitle: {
    color: '#fff',
    fontSize: 18,
    padding: 6,
  },
  closeButton: {
  },
  closeButtonText: {
  },
});