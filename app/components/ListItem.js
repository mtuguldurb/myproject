import React from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import defaultStyles from '../config/styles'
import { ft, wp } from '../config/const'
import { Icon } from './Icon'

function ListItem({ title, subTitle, image, IconComponent, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <Text style={styles.title} numberOfLines={1}>
                        {title}
                    </Text>
                    {subTitle && (
                        <Text style={styles.subTitle} numberOfLines={2}>
                            {subTitle}
                        </Text>
                    )}
                </View>
                <Icon
                    iconFamily='AD'
                    color={defaultStyles.colors.medium}
                    name='right'
                    size={15}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
    },
    image: {
        borderRadius: wp(20) / 2,
        height: wp(20),
        width: wp(20),
    },
    subTitle: {
        color: defaultStyles.colors.medium,
        fontSize: ft(12),
    },
    title: {
        // fontWeight: 'bold',
        color: defaultStyles.colors.dark,
        fontSize: ft(14),
        textTransform: 'capitalize',
    },
})

export default ListItem
