import { View, Text, Button } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Button 
                title="Go to Outfit" 
                onPress={() => navigation.navigate('Outfit')} 
            />
        </View>
    );
}