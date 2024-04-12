import { StyleSheet, Pressable, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CircleButton({ onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={styles.button}>
                <MaterialIcons name="add" size={32} color="#25292e" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 68,
        height: 68,
        borderRadius: 34,
        padding: 3,
        borderColor: '#ffd33d',
        borderWidth: 4,
    },
    button: {
        borderRadius: 34,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});