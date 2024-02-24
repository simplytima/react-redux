import {produce} from "immer";

const initialState = {
    items: []
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = state.items.findIndex(item => item.id == action.payload.id);
            if(product != -1){
                return produce(state, copy => {
                    copy.items[product].quantity += 1
                })
            }else{
                return produce(state, copy => {
                    copy.items.push(action.payload);
                })
            }

            
        case 'REMOVE_FROM_CART':
            return produce(state, copy => {
                copy.items = copy.items.filter(item => item.id !== action.payload)
            })
        
        case 'inc':
            const productIndex = state.items.findIndex(item => item.id == action.payload.id);
            return produce(state, copy => {
                copy.items[productIndex].quantity += 1
            })

        case 'dec':
            const productIn = state.items.findIndex(item => item.id == action.payload.id);
            if (state.items[productIn].quantity >1) {
                return produce(state, copy => {
                    copy.items[productIn].quantity -= 1
                })
            } else {
                return state;
            }


        default:
            return state;
    }
}; 

export default Reducer;