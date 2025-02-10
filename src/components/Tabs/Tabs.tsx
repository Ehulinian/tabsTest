import { TabItem } from '../TabItem/TabItem'
import { Tab } from '@/types/Tab'
import styles from './Tabs.module.scss'

interface TabsProps {
	tabs: Tab[]
	onPin: (tabId: string) => void
	activeTab: string
	onClick: (tabUrl: string) => void
	pinnedTabs: Tab[]
}

export const Tabs: React.FC<TabsProps> = ({
	tabs,
	onPin,
	onClick,
	activeTab,
	pinnedTabs,
}) => {
	return (
		<div className={styles.tabBar}>
			{tabs.map(tab => (
				<div key={tab.id} className={styles.tabItem}>
					<TabItem
						activeTab={activeTab}
						key={tab.id}
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
