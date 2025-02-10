import React from 'react'

interface SvgComponentProps {
	width?: number
	height?: number
	className?: string
	children?: React.ReactNode
	viewBox?: string
}

export const SvgComponent: React.FC<SvgComponentProps> = ({
	width,
	height,
	className,
	children,
	viewBox,
	...props
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox={viewBox}
			{...props}
		>
			{children}
		</svg>
	)
}
