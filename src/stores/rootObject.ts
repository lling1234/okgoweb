export interface RootObject {
	status: number
	message: string
	data: Datum2[]
}

export interface Datum2 {
	id: number
	sort: number
	name: string
	source_key: string
	icon_color: string
	data: Datum[]
	create_time: string
}

export interface Datum {
	id: number
	title: string
	extra: string
	link: string
}
