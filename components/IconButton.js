import { StyleSheet, Pressable, View, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButton({ onPress, icon, label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={styles.button}>
                <MaterialIcons name={icon} size={24} color='#fff' />
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 3,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
        padding: 5,
    },
});