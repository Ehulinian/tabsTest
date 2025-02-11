export interface Tab {
	id: string
	label: string
	url: string
	order: number
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
