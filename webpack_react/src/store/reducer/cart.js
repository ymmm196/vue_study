import {
    REMOVE_FROM_CART,
    CHANGE_QTY,
    CLEAR_CART,
    ADD_TO_CART
} from '../action/cart';
let initialState = {
    goodslist: [{
        goods_id: 1,
        goods_name: '外星人 alienware area51 r5 酷睿i9-9980XE十八核',
        goods_price: 89999,
        goods_image: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/46657/40/10900/94828/5d80838fE6d07c725/05e9a227d0d9e641.jpg',
        goods_qty: 4
    }, {
        goods_id: 2,
        goods_name: '外星人Alienware Aurora游戏竞技吃鸡 R7 R8 A51 R9 一体式水冷电脑台式主机 51R i9-9980X 32G 2080Ti',
        goods_price: 72799,
        goods_image: 'https://img13.360buyimg.com/n5/s75x75_jfs/t1/95655/19/504/46428/5daec7afE7fd17001/18435f4fc841dd3f.jpg',
        goods_qty: 3
    }],
    totalPrice: 0
}

function reducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                goodslist: [payload, ...state.goodslist]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                goodslist: state.goodslist.filter(item => item.goods_id != payload)
            };
        case CHANGE_QTY:
            return {
                ...state,
                goodslist: state.goodslist.map(item => {
                    if (item.goods_id === payload.goods_id) {
                        item.goods_qty = payload.goods_qty
                    }
                    return item;
                })
            };
        case CLEAR_CART:
            return {
                ...state,
                goodslist: []
            };
        default:
            return state
    }
}

export default reducer;