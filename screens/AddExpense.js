import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { GlobalColors } from '../constants/styles';
import TextButton from '../components/TextButton';
import { writeToDB } from '../firebase/firestore';
import { useState } from 'react';

function AddExpense( {navigation} ) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    function onCancel() {
        navigation.navigate('AllExpenses');
    }

    async function onSubmit() {
        if (!amount || !description || isNaN(amount) || amount < 0) {
            Alert.alert(
                'Invalid input',
                'Please check your input values',
                [
                  {
                    text: 'OK',
                    style: 'destructive',
                  }
                ]
            );
            return;
        }
        const expense = { amount: amount, description: description, important: false };
        await writeToDB(expense);
        navigation.navigate('AllExpenses');
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                    <View style={styles.form}>
                        <Text style={styles.title}>Your Expense</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>
                                Amount
                            </Text>
                            <TextInput 
                                style={styles.input} 
                                onChangeText={setAmount} 
                                value={amount} 
                                keyboardType="number-pad"
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>
                                Description
                            </Text>
                            <TextInput 
                                style={styles.inputMultiline} 
                                onChangeText={setDescription} 
                                value={description} 
                            />
                        </View>
                        <View style={styles.buttons}>
                            <TextButton text={'Cancel'} style={styles.button} onPress={onCancel} />
                            <TextButton text={'Submit'} style={styles.button} onPress={onSubmit} />
                        </View>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalColors.colors.mediumpurple,
        flex: 1,
    },
    form: {
        marginTop: 30
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalColors.colors.slateblue,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalColors.colors.lightpurple,
        color: GlobalColors.colors.mediumpurple,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
        backgroundColor: GlobalColors.colors.lightpurple,
        color: GlobalColors.colors.mediumpurple,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    }
});

export default AddExpense;