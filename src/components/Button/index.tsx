import React, { ReactElement } from 'react'
import { ButtonStyled } from './styles'

interface ButtonProps {
	width?: string
	height?: string
	children?: React.ReactNode
	bgColor?: string
	textColor: string
}
const MyButton = ({
	width,
	height,
	children,
	bgColor,
	textColor
}: ButtonProps): ReactElement => {
	return (
		<>
			<ButtonStyled
				width={width}
				height={height}
				bgColor={bgColor}
				textColor={textColor}
			>
				{children}
			</ButtonStyled>
		</>
	)
}

export default MyButton
