import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons'
//import { FlatList } from "react-native-gesture-handler";

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context);

    return <View>
        <FlatList 
            data={state}
            keyExtractor={(blogpost) => blogpost.title}
            renderItem={({ item }) => {
                return( 
                <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                    <View style={styles.row}> 
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={ () => deleteBlogPost(item.id) }>
                            <Feather style={styles.icon} name="trash" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                );
            }} />
    </View>
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () =>  (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )
    };
};

// IndexScreen.navigationOptions = ({ navigation }) => {
//     return { 
        
//         headerRight: (
//           <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//             <Feather name="plus" size={30} />
//           </TouchableOpacity>
//         )
//       };
//     };


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'grey' 
    },
    title: {
        fontSize: 16
    },
    icon: {
        fontSize: 20
    }
});

export default IndexScreen;