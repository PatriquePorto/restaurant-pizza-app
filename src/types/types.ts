export type MenuType = {
    id: string
    slug: string
    title: string
    desc?: string
    img?: string
    color: string
}[]

export type ProducType = {
    id: string
    title: string
    desc?: string
    img?: string
    price: number
    options?: { title: string; additionalPrice: number } []
}