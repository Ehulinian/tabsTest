import { Tab } from '@/types/Tab'
import React from 'react'

interface TabItemProps {
	tab: Tab
	onPin: (tabId: string) => void
	onClick: (tabUrl: string) => void
}

export const TabItem: React.FC<TabItemProps> = ({ tab, onPin, onClick }) => {
	return (
		<div className='tab' onClick={() => onClick(tab.url)}>
			<span>{tab.label}</span>
			<button onClick={() => onPin(tab.id)}>Pin</button>
		</div>
	)
}
