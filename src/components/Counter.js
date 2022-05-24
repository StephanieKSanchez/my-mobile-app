import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText} >You clicked the button {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        width: '80vw',
        margin: 14,
        padding: 14,
        backgroundColor: 'beige',
    },
    counterText: {
        fontSize: 30,
        textAlign: 'center',
    }
})