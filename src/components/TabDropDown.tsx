import { Tab } from '@/types/Tab'
import React from 'react'

interface TabDropdownProps {
	tabs: Tab[]
}

export const TabDropdown: React.FC<TabDropdownProps> = ({ tabs }) => {
	return (
		<div className='tab-dropdown'>
			<ul>
				{tabs.map(tab => (
					<li key={tab.id}>
						<a href={tab.url}>{tab.label}</a>
					</li>
				))}
			</ul>
		</div>
	)
}
