import { useState } from 'react'
import { Tab } from '@/types/Tab'
import styles from './TabDropDown.module.scss'
import { SvgComponent } from '../SvgComponent'
import { ArrowSelect } from '@/icons/ArrowSelect'
import { TabItem } from '../TabItem/TabItem'

interface TabDropdownProps {
	tabs: Tab[]
	onDelete: (tabId: string) => void
}

export const TabDropdown: React.FC<TabDropdownProps> = ({ tabs, onDelete }) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedTab, setSelectedTab] = useState<string>('')

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleSelectTab = (tabUrl: string) => {
		setSelectedTab(tabUrl)
		setIsOpen(false)
	}

	const filteredTabs = tabs.filter(tab => tab.url !== selectedTab)

	const handleDeleteTab = (tabId: string) => {
		onDelete(tabId)
	}

	return (
		<div className={styles.dropdown}>
			<div className={styles.selected} onClick={toggleDropdown}>
				<SvgComponent width={9} height={6} viewBox='0 0 9 6'>
					<ArrowSelect />
				</SvgComponent>
			</div>
			{isOpen && (
				<ul className={styles.dropDownList}>
					{filteredTabs.map(tab => (
						<li key={tab.id} className={styles.dropDownItem}>
							<TabItem
								tab={tab}
								onClick={handleSelectTab}
								className={styles.dropDownItem}
								isPinned={false}
							/>
							<button
								className={styles.deleteButton}
								onClick={() => handleDeleteTab(tab.id)}
							>
								&times;
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
