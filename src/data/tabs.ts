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
		url: '/dashboard',
		icon: DashBoardIcon,
	},
	{
		id: '2',
		label: 'Banking',
		url: '/banking',
		icon: BankingIcon,
	},
	{
		id: '3',
		label: 'Telefonie',
		url: '/telefonie',
		icon: TelefonieIcon,
	},
	{
		id: '4',
		label: 'Accounting',
		url: '/accounting',
		icon: AccountIcon,
	},
	{
		id: '5',
		label: 'Verkauf',
		url: '/verkauf',
		icon: VerkaufIcon,
	},
	{
		id: '6',
		label: 'Statistik',
		url: '/statistik',
		icon: StatistikIcon,
	},
	{
		id: '7',
		label: 'Post Office',
		url: '/post-office',
		icon: PostOfficeIcon,
	},
	{
		id: '8',
		label: 'Administration',
		url: '/administration',
		icon: AdministrationIcon,
	},
	{
		id: '9',
		label: 'Help',
		url: '/help',
		icon: HelpIcon,
	},
	{
		id: '10',
		label: 'Warenbestand',
		url: '/warenbestand',
		icon: WarenbestandIcon,
	},
	{
		id: '11',
		label: 'Auswahlisten',
		url: '/auswahlisten',
		icon: AusWahlistenIcon,
	},
	{
		id: '12',
		label: 'Einkauf',
		url: '/einkauf',
		icon: EinkaufIcon,
	},
	{
		id: '13',
		label: 'Rechn',
		url: '/rechn',
		icon: RechnIcon,
	},
]
