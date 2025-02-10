import { Tab } from '@/types/Tab'
import React from 'react'
import { SvgComponent } from '../SvgComponent'
import styles from './TabItem.module.scss'

interface TabItemProps {
	tab: Tab
	onPin: (tabId: string) => void
	onClick: (tabUrl: string) => void
}

export const TabItem: React.FC<TabItemProps> = ({ tab, onPin, onClick }) => {
	return (
		<div className={styles.tab} onClick={() => onClick(tab.url)}>
			<SvgComponent width={16} height={16} className={styles.tabIcon}>
				<tab.icon />
			</SvgComponent>
			<span>{tab.label}</span>
			{/* <button onClick={() => onPin(tab.id)}>Pin</button> */}
		</div>
	)
}
