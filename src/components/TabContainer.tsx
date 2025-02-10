import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TabItem } from './TabItem'
import { TabDropdown } from './TabDropDown'
import { Tab } from '@/types/Tab'
import tabsData from '../data/tabs.json'

export const TabContainer: React.FC = () => {
	const [tabs, setTabs] = useState<Tab[]>([])
	const [pinnedTabs, setPinnedTabs] = useState<Tab[]>([])

	const router = useRouter()

	const handleTabPin = (tabId: string) => {
		setPinnedTabs(prevPinnedTabs => {
			const isPinned = prevPinnedTabs.some(tab => tab.id === tabId)
			if (isPinned) {
				return prevPinnedTabs.filter(tab => tab.id !== tabId)
			} else {
				const tabToPin = tabs.find(tab => tab.id === tabId)
				return tabToPin ? [...prevPinnedTabs, tabToPin] : prevPinnedTabs
			}
		})
	}

	const handleTabClick = (tabUrl: string) => {
		router.push(tabUrl)
	}

	useEffect(() => {
		setTabs(tabsData)
		setPinnedTabs([])
	}, [])

	const nonPinnedTabs = tabs.filter(
		tab => !pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)
	)

	return (
		<div className='tab-container'>
			<div className='tab-bar'>
				{pinnedTabs.length > 0 ? (
					pinnedTabs.map(tab => (
						<TabItem
							key={tab.id}
							tab={tab}
							onPin={handleTabPin}
							onClick={handleTabClick}
						/>
					))
				) : (
					<p>No pinned tabs</p>
				)}
			</div>

			{nonPinnedTabs.length > 0 && <TabDropdown tabs={nonPinnedTabs} />}
		</div>
	)
}
