import { View, Pressable, Text, StyleSheet } from 'react-native';
import { GlobalColors } from '../constants/styles';

function TextButton({ text, onPress, style }) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.pressed}
                android_ripple={{ color: GlobalColors.colors.slateblue, foreground: true }}
            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {text}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalColors.colors.slateblue
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity:0.75
    }
});

export default TextButton;