import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function Outfit() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Here's a suggestion to today's outfit!</Text>
        </View>
    );
}

