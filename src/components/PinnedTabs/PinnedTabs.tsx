import { TabItem } from '../TabItem/TabItem'
import { Tab } from '@/types/Tab'
import styles from './PinnedTabs.module.scss'

interface PinnedTabsProps {
	pinnedTabs: Tab[]
	onPin: (tabId: string) => void
	onClick: (tabUrl: string) => void
}

export const PinnedTabs: React.FC<PinnedTabsProps> = ({
	pinnedTabs,
	onPin,
	onClick,
}) => {
	return (
		<div className={styles.tabBar}>
			{pinnedTabs.map(tab => (
				<div key={tab.id} className={styles.tabItem}>
					<TabItem tab={tab} onPin={onPin} onClick={onClick} />
				</div>
			))}
		</div>
	)
}
