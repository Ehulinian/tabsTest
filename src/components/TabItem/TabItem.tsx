import React, { useState } from 'react'
import { Tab } from '@/types/Tab'
import { SvgComponent } from '../SvgComponent'
import styles from './TabItem.module.scss'
import { PinIcon } from '@/icons/Pin'

interface TabItemProps {
	tab: Tab
	onPin?: (tabId: string) => void
	onClick: (tabUrl: string) => void
	className?: string
	isPinned?: boolean
	activeTab?: string
}

export const TabItem: React.FC<TabItemProps> = ({
	tab,
	onPin,
	onClick,
	className,
	isPinned,
	activeTab,
}) => {
	const [isHovered, setIsHovered] = useState(false)

	const isActive = activeTab === tab.id

	const isActivePinned = isPinned && isActive

	const handlePinClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		onPin?.(tab.id)
	}

	const handleTabClick = () => {
		onClick(tab.id)
	}

	return (
		<div
			className={`${styles.tab} ${className} ${isActive ? styles.active : ''} ${
				isActivePinned ? styles.activePinned : ''
			} ${isPinned ? styles.pinned : ''}`}
			onClick={handleTabClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<SvgComponent width={16} height={16} className={styles.tabIcon}>
				<tab.icon />
			</SvgComponent>
			<span className={`${styles.name} ${isPinned ? styles.hiddenLabel : ''}`}>
				{tab.label}
			</span>

			{isHovered && !isPinned && (
				<button onClick={handlePinClick} className={styles.pinButton}>
					<SvgComponent width={16} height={16} className={styles.tabIcon}>
						<PinIcon />
					</SvgComponent>
					<span>Pin Tab</span>
				</button>
			)}

			{isPinned && isHovered && (
				<button onClick={handlePinClick} className={styles.pinButton}>
					<SvgComponent width={16} height={16} className={styles.tabIcon}>
						<PinIcon />
					</SvgComponent>
					<span>Unpin Tab</span>
				</button>
			)}
		</div>
	)
}
