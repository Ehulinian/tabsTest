import React from 'react'

interface SvgComponentProps {
	width?: number
	height?: number
	className?: string
	children?: React.ReactNode
}

export const SvgComponent: React.FC<SvgComponentProps> = ({
	width = 24,
	height = 24,
	className,
	children,
	...props
}) => {
	return (
		<svg width={width} height={height} className={className} {...props}>
			{children}
		</svg>
	)
}
