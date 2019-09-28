import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitle}>タイトル</Text>
                        <Text style={styles.memoHeaderDate}>2019/09/25</Text>
                    </View>
                </View>
                <View style={styles.memoContent}>
                    <Text>内容</Text>
                </View>

                <CircleButton color='white' style={styles.editButton}>+</CircleButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoHeader: {
        height: 100,
        backgroundColor:'#17313C',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold', 
        color: '#fff',
        marginBottom: 4,
    },
    memoHeaderDate: {
        fontSize: 12,
        color: '#fff'
    },
    memoContent: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#fff',
        flex: 1
    },
    editButton: {
        top: 75,
    }
})

export default MemoDetailScreen;