import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View>
        <Text style={styles.label}>Enter Title:</Text>
    <TextInput style={styles.Input} value={title} onChangeText={text => setTitle(text)}/>
    <Text style={styles.label}>Enter Content:</Text>
    <TextInput style={styles.Input} value={content} onChangeText={text => setContent(text)}/>
    <Button 
        title="Save Blog Post"
        onPress={() => onSubmit(title,content)}
    />
    </View>
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles= StyleSheet.create({
    label: {
        fontSize: 20,
        marginLeft: 15,
        marginBottom: 8
    },
    Input: {
        fontSize:18,
        padding: 10,
        marginHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default BlogPostForm;