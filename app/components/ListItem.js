import React from 'react'
import {
    Image,
    View,
    StyleSheet,
    TouchableHighlight,
    Text,
    TouchableOpacity,
} from 'react-native'

import colors from '../config/colors'
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
                    color={colors.white}
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
        marginLeft: 10,
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: wp(20),
        height: wp(20),
        borderRadius: wp(20) / 2,
    },
    title: {
        // fontWeight: 'bold',
        fontSize: ft(14),
        color: colors.white,
        textTransform: 'capitalize',
    },
    subTitle: {
        color: colors.medium,
        fontSize: ft(12),
    },
})

export default ListItem
