import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Tab } from '@/types/Tab'
import { tabsData } from '@/data/tabs'
import { PinnedTabs } from '../PinnedTabs/PinnedTabs'
import styles from './TabContainer.module.scss'

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
	}, [])

	const nonPinnedTabs = tabs.filter(
		tab => !pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)
	)

	return (
		<div className={styles.tabContainer}>
			<PinnedTabs
				pinnedTabs={tabs}
				onPin={handleTabPin}
				onClick={handleTabClick}
			/>

			{/* {nonPinnedTabs.length > 0 && <TabDropdown tabs={nonPinnedTabs} />} */}
		</div>
	)
}
