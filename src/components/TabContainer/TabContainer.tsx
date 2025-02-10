import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Tab } from '@/types/Tab'
import { tabsData } from '@/data/tabs'
import { Tabs } from '../Tabs/Tabs'
import styles from './TabContainer.module.scss'
import { TabDropdown } from '../TabDropDown/TabDropDown'

export const TabContainer: React.FC = () => {
	const [tabs, setTabs] = useState<Tab[]>([])
	const [pinnedTabs, setPinnedTabs] = useState<Tab[]>([])

	const router = useRouter()

	useEffect(() => {
		setTabs(tabsData)
	}, [])

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

	const handleDeleteTab = (tabId: string) => {
		setTabs(prevTabs => prevTabs.filter(tab => tab.id !== tabId))
		setPinnedTabs(prevPinnedTabs =>
			prevPinnedTabs.filter(tab => tab.id !== tabId)
		)
	}

	// Об'єднуємо закріплені та незакріплені вкладки
	const orderedTabs = [
		...pinnedTabs,
		...tabs.filter(
			tab => !pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)
		),
	]

	return (
		<div className={styles.tabContainer}>
			<Tabs
				tabs={orderedTabs} // Передаємо вкладки в правильному порядку
				pinnedTabs={pinnedTabs}
				onPin={handleTabPin}
				onClick={handleTabClick}
			/>
			{tabs.length > 0 && pinnedTabs.length < tabs.length && (
				<TabDropdown
					tabs={tabs.filter(
						tab => !pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)
					)}
					onDelete={handleDeleteTab}
				/>
			)}
		</div>
	)
}
