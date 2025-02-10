import { Tab } from '@/types/Tab'
import React from 'react'
import styles from './TabDropDown.module.scss'

interface TabDropdownProps {
	tabs: Tab[]
}

export const TabDropdown: React.FC<TabDropdownProps> = ({ tabs }) => {
	return (
		<div className={styles.dropdown}>
			<ul className={styles.dropDownList}>
				{tabs.map(tab => (
					<li key={tab.id}>
						<a href={tab.url}>{tab.label}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
