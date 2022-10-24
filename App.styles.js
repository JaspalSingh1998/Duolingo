import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingTop: 50,
        paddingBottom: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "stretch"
    },
    optionsContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})

export default styles;