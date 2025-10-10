import { View, Text, Button, StyleSheet } from 'react-native';
import { globalStyles } from './styles';

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Welcome to your outfit roulette!</Text>
            <Button 
                title="Go to Outfit" 
                onPress={() => navigation.navigate('Outfit')} 
            />
        </View>
    );
}

