import { StyleSheet, View, Text, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return <PrimaryButton label={label} onPress={onPress} />;
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

function PrimaryButton({ label, onPress }) {
  return (
    <View style={[styles.buttonContainer, { borderColor: '#ffd33d' }]}>
      <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor: '#fff' }]}>
        <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
        <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    padding: 3,
    margin: 3,
    borderWidth: 3,
    borderRadius: 18,
    borderColor: '#fff',
  },
  button: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});