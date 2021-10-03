import axios from 'axios';

export const getData = () => {
    return async (dispatch) => {
        const res = await axios.get('https://cube-backend-401.herokuapp.com/product/mechanic');
        dispatch(handleApiData(res.data));
        console.log(res.data);
    };
};


export const handleApiData = (payload) => {
    return {
        type: 'LOAD_PRODUCTS',
        payload,
    };
};


export function getItems(name) {
    return {
        type: 'changeActive',
        payload: name
    }
}

export function changeBasketItems(product) {
    return {
        type: 'Change-Basket-Items',
        payload: product
    }
}

export function changeSelected(category) {
    return {
        type: 'ChangeActive',
        payload: category
    }
}

export function addItemsToCart(product) {
    return {
        type: 'AddItemsCart',
        payload: product
    }
};