import { Tab } from '@/types/Tab'
import { TabItem } from '../TabItem/TabItem'
import styles from './Tabs.module.scss'
import { useState } from 'react'

interface TabsProps {
	tabs: Tab[]
	onPin: (tabId: string) => void
	activeTab: string
	onClick: (tabUrl: string) => void
	pinnedTabs: Tab[]
	setTabs: (tabs: Tab[]) => void
}

export const Tabs: React.FC<TabsProps> = ({
	tabs,
	onPin,
	onClick,
	activeTab,
	pinnedTabs,
	setTabs,
}) => {
	const [currentTab, setCurrentTab] = useState<Tab | null>(null)
	const [drabbingTab, setDraggingTab] = useState<Tab | null>(null)

	const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, tab: Tab) => {
		if (pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)) {
			e.preventDefault()
			return
		}
		setCurrentTab(tab)
		setDraggingTab(tab)
		e.currentTarget.classList.add(styles.dragging)
	}

	const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
		setDraggingTab(null)
		e.currentTarget.classList.remove(styles.dragging)

		const allTabs = document.querySelectorAll(`.${styles.tabItem}`)
		allTabs.forEach(tab => tab.classList.remove(styles.placeholder))
	}

	const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.currentTarget.classList.add(styles.placeholder)
	}

	const dropHandler = (e: React.DragEvent<HTMLDivElement>, tab: Tab) => {
		e.preventDefault()
		if (!currentTab) return

		setTimeout(() => {
			setTabs(
				tabs.map(t => {
					if (t.id === tab.id) {
						return { ...t, order: currentTab.order }
					}
					if (t.id === currentTab.id) {
						return { ...t, order: tab.order }
					}
					return t
				})
			)
		}, 100)

		e.currentTarget.classList.remove(styles.placeholder)
	}

	const sortedTabs = (a: Tab, b: Tab) => {
		if (
			pinnedTabs.some(pinnedTab => pinnedTab.id === a.id) &&
			!pinnedTabs.some(pinnedTab => pinnedTab.id === b.id)
		) {
			return -1
		}
		if (
			!pinnedTabs.some(pinnedTab => pinnedTab.id === a.id) &&
			pinnedTabs.some(pinnedTab => pinnedTab.id === b.id)
		) {
			return 1
		}

		if (a.order > b.order) {
			return 1
		} else {
			return -1
		}
	}

	return (
		<div className={styles.tabBar}>
			{tabs.sort(sortedTabs).map(tab => (
				<div
					key={tab.id}
					draggable={true}
					onDragStart={e => dragStartHandler(e, tab)}
					onDragLeave={e => dragEndHandler(e)}
					onDragOver={e => dragOverHandler(e)}
					onDragEnd={e => dragEndHandler(e)}
					onDrop={e => dropHandler(e, tab)}
					className={styles.tabItem}
				>
					<TabItem
						activeTab={activeTab}
						tab={tab}
						onPin={onPin}
						onClick={onClick}
						isPinned={pinnedTabs.some(pinnedTab => pinnedTab.id === tab.id)}
					/>
				</div>
			))}
		</div>
	)
}
