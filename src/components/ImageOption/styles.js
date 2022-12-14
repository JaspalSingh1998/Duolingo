import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "lightgrey",
        borderRadius: 10,

        // Size
        width: '48%',
        height: '48%',
        padding: 10,

        alignItems: 'center'
    },
    optionImage: {
        width: '100%',
        flex: 1,
    },
    optionText: {}
})

export default styles;