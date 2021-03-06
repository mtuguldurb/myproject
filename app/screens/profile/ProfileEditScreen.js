import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { Button, FormInput } from '../../components'
import defaultStyles from '../../config/styles'
import { ft, hp, wp } from '../../config/const'

const HORIZONTAL_SPACE = wp(5)
function ProfileEditScreen({ route }) {
    const user = route.params
    return (
        <View style={styles.background}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity>
                    <Image
                        style={{
                            width: wp(25),
                            height: wp(25),
                            borderRadius: wp(25) / 2,
                        }}
                        source={require('../../assets/avatar.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <View style={styles.container}>
                    <FormInput
                        // color={defaultStyles.colors.black}
                        value={user.name}
                        placeholder='Name'
                    />
                </View>
                <View style={styles.container}>
                    <FormInput
                        // color={defaultStyles.colors.black}
                        placeholder='Email'
                    />
                </View>
                <View style={styles.container}>
                    <FormInput
                        // color={defaultStyles.colors.black}
                        placeholder='Password'
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    title='Save changes'
                    filled
                    borderTextColor={defaultStyles.colors.white}
                    backgroundColor={defaultStyles.colors.primary}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: defaultStyles.colors.white,
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: HORIZONTAL_SPACE,
    },
    container: {
        marginVertical: hp(1.5),
    },
})

export default ProfileEditScreen
