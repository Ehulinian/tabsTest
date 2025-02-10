import React, { useState, useEffect } from 'react'
import { Tab } from '@/types/Tab'
import { tabsData } from '@/data/tabs'
import { Tabs } from '../Tabs/Tabs'
import styles from './TabContainer.module.scss'
import { TabDropdown } from '../TabDropDown/TabDropDown'
import { useRouter } from 'next/router'

export const TabContainer: React.FC = () => {
	const [tabs, setTabs] = useState<Tab[]>([])
	const [pinnedTabs, setPinnedTabs] = useState<Tab[]>([])
	const [activeTab, setActiveTab] = useState<string>('')

	const router = useRouter()

	useEffect(() => {
		setTabs(tabsData)
	}, [])

	useEffect(() => {
		setTabs(tabsData)

		const activeTabId = window.location.hash.replace('#', '')
		if (activeTabId) {
			const tab = tabs.find(tab => tab.id === activeTabId)
			if (tab) {
				setActiveTab(tab.id)
			}
		}
	}, [tabs])

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

	const handleTabClick = (tabId: string) => {
		router.push(`#${tabId}`, undefined, { shallow: true })
		setActiveTab(tabId)
	}

	const handleDeleteTab = (tabId: string) => {
		setTabs(prevTabs => prevTabs.filter(tab => tab.id !== tabId))
		setPinnedTabs(prevPinnedTabs =>
			prevPinnedTabs.filter(tab => tab.id !== tabId)
		)
	}

	const orderedTabs = [
		...pinnedTabs,
		...tabs.filter(
			tab => !pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)
		),
	]

	return (
		<div className={styles.tabContainer}>
			<Tabs
				tabs={orderedTabs}
				activeTab={activeTab}
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
