export const CHANGE_QTY = 'CHANGE_QTY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

// 生成action对象
function add(goods) {
    return {
        type: ADD_TO_CART,
        payload: goods
    }
}

function remove(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

function clear() {
    return {
        type: CLEAR_CART
    }
}

function changeQty(goods_id, goods_qty) {
    return {
        type: CHANGE_QTY,
        payload: {
            goods_id,
            goods_qty
        }
    }
}

export default {
    add,
    remove,
    clear,
    changeQty
}