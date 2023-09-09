export type MenuType = {
    id: string
    slug: string
    title: string
    desc?: string
    img?: string
    color: string
}[]
//Function Order Type for page Products
export type ProducType = {
    id: string
    title: string
    desc?: string
    img?: string
    price: number
    options?: { title: string; additionalPrice: number } []
}
//Function Order Type for page orders
export type OrderType = {
    id: string
    userEmail: string
    price: number
    product: CartItemType[]
    status: string
    createdAt: Date
    intent_id: string
}
//Function Order Type for Cart item
export type CartItemType = {
    id: string
    title: string
    img?: string
    price: number
    optionTitle?: string
    quantity: number
}