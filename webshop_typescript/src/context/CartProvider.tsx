export type CartItemType = {
    sku: string,
    name: string,
    price: number,
    qty: number
}

type CartStateType = { cart: CartItemType[]}

const initCartState: CartStateType = { cart: []}

const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QUANITITY: "QUANTITY",
    SUBMIT: "SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
    type:string,
    payload?:CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction):
CartStateType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.ADD:{
            !if (!action.payload){
                throw new Error ('action.payload missing in ADD function')
            }
            const { sku, name, price } = action.payload
            const filteredCart: CartItemType[] = state.cart.filter(
                item => item.sku != sku)
                const itemExists: CartItemType | undefined = state.cart.find(item => item.sku === sku)
                const qty: number = itemExists ? itemExists.qty + 1 : 1
                return {...state, cart: [...filteredCart, {sku, name, price, qty}]} 
        }
        case REDUCER_ACTION_TYPE.REMOVE:{
            !if (!action.payload){
                throw new Error ('action.payload missing in REMOVE function')
            }
        }
        case REDUCER_ACTION_TYPE.QUANITITY:{
            !if (!action.payload){
                throw new Error ('action.payload missing in QUANTITY fnction')
            }
        }
        case REDUCER_ACTION_TYPE.SUBMIT:{
        return { ...state, cart: []}
        }
        default:
            throw new Error('Unidentified reducer action type')
    }
}