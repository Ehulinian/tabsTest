import { DashBoardIcon } from './../icons/DashboardIcon'
import { BankingIcon } from './../icons/BankingIcon'
import { TelefonieIcon } from './../icons/TelefonieIcon'
import { VerkaufIcon } from './../icons/VerkaufIcon'
import { StatistikIcon } from './../icons/StatistikIcon'
import { PostOfficeIcon } from './../icons/PostOfficeIcon'
import { HelpIcon } from './../icons/HelpIcon'
import { EinkaufIcon } from './../icons/EinkaufIcon'
import { RechnIcon } from './../icons/RechnIcon'
import { AccountIcon } from '@/icons/AccountIcon'
import { AdministrationIcon } from '@/icons/AdministrationIcon'
import { WarenbestandIcon } from '@/icons/WarebestandIcon'
import { AusWahlistenIcon } from '@/icons/AusWahlistenIcon'
import { Tab } from '@/types/Tab'

export const tabsData: Tab[] = [
	{
		id: '1',
		label: 'Dashboard',
		order: 1,
		url: '/dashboard',
		icon: DashBoardIcon,
	},
	{
		id: '2',
		label: 'Banking',
		order: 2,
		url: '/banking',
		icon: BankingIcon,
	},
	{
		id: '3',
		label: 'Telefonie',
		order: 3,
		url: '/telefonie',
		icon: TelefonieIcon,
	},
	{
		id: '4',
		label: 'Accounting',
		order: 4,
		url: '/accounting',
		icon: AccountIcon,
	},
	{
		id: '5',
		label: 'Verkauf',
		order: 5,
		url: '/verkauf',
		icon: VerkaufIcon,
	},
	{
		id: '6',
		label: 'Statistik',
		order: 6,
		url: '/statistik',
		icon: StatistikIcon,
	},
	{
		id: '7',
		label: 'Post Office',
		order: 7,
		url: '/post-office',
		icon: PostOfficeIcon,
	},
	{
		id: '8',
		label: 'Administration',
		order: 8,
		url: '/administration',
		icon: AdministrationIcon,
	},
	{
		id: '9',
		label: 'Help',
		order: 9,
		url: '/help',
		icon: HelpIcon,
	},
	{
		id: '10',
		label: 'Warenbestand',
		order: 10,
		url: '/warenbestand',
		icon: WarenbestandIcon,
	},
	{
		id: '11',
		label: 'Auswahlisten',
		order: 11,
		url: '/auswahlisten',
		icon: AusWahlistenIcon,
	},
	{
		id: '12',
		label: 'Einkauf',
		order: 12,
		url: '/einkauf',
		icon: EinkaufIcon,
	},
	{
		id: '13',
		label: 'Rechn',
		order: 13,
		url: '/rechn',
		icon: RechnIcon,
	},
]
