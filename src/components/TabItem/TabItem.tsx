import React, { useState } from 'react'
import { Tab } from '@/types/Tab'
import { useRouter } from 'next/router'
import { SvgComponent } from '../SvgComponent'
import styles from './TabItem.module.scss'
import { PinIcon } from '@/icons/Pin'

interface TabItemProps {
	tab: Tab
	onPin: (tabId: string) => void
	onClick: (tabUrl: string) => void
	className?: string
	isPinned?: boolean
}

export const TabItem: React.FC<TabItemProps> = ({
	tab,
	onPin,
	onClick,
	className,
	isPinned,
}) => {
	const [isHovered, setIsHovered] = useState(false)
	const router = useRouter()
	const isActive = router.pathname === tab.url

	const handlePinClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		onPin(tab.id)
	}

	return (
		<div
			className={`${styles.tab} ${className} ${isActive ? styles.active : ''} ${
				isPinned ? styles.pinned : ''
			}`}
			onClick={() => onClick(tab.url)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<SvgComponent width={16} height={16} className={styles.tabIcon}>
				<tab.icon />
			</SvgComponent>
			<span className={`${styles.name} ${isPinned ? styles.hiddenLabel : ''}`}>
				{tab.label}
			</span>

			{isHovered && (
				<button onClick={handlePinClick} className={styles.pinButton}>
					<SvgComponent width={16} height={16} className={styles.tabIcon}>
						<PinIcon />
					</SvgComponent>
					<span>Pin Tab</span>
				</button>
			)}
		</div>
	)
}
