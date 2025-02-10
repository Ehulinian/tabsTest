import { useState } from 'react'
import styles from './TabDropDown.module.scss'
import { SvgComponent } from '../SvgComponent'
import { ArrowSelect } from '@/icons/ArrowSelect'
import { CloseIcon } from '@/icons/CloseIcon'
import { Tab } from '@/types/Tab'

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
						<li
							key={tab.id}
							className={styles.dropDownItem}
							onClick={() => handleSelectTab(tab.url)}
						>
							<div className={styles.item}>
								<SvgComponent width={16} height={16}>
									<tab.icon />
								</SvgComponent>
								<span className={styles.tabTitle}>{tab.label}</span>
							</div>

							<button
								className={styles.deleteButton}
								onClick={e => {
									e.stopPropagation()
									handleDeleteTab(tab.id)
								}}
							>
								<SvgComponent width={16} height={16}>
									<CloseIcon />
								</SvgComponent>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
