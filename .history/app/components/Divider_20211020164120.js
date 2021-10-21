import React from 'react'
import { Text, View } from 'react-native'
import colors from '../config/colors'
import { ft, wp } from '../config/const'

function Divider(props) {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					borderBottomWidth: 1,
					borderColor: colors.light,
					width: wp('40%'),
				}}
			/>
			<Text
				style={{
					fontSize: ft(14),
					color: colors.light,
					marginHorizontal: wp('2%'),
				}}
			>
				or
			</Text>
			<View
				style={{
					borderBottomWidth: 1,
					borderColor: colors.light,
					width: wp('40%'),
				}}
			/>
			<View />
		</View>
	)
}

export default Divider