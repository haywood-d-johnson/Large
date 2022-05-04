import { csrfFetch } from "./csrf";

const GET_ALL = "business/get_all";
const SET_BUSINESS = "business/setBusiness";
const REMOVE_BUSINESS = "business/REMOVE_BUSINESS";

const getAll = list => {
    return { type: GET_ALL, list };
};

const setBusiness = business => {
    return {
        type: SET_BUSINESS,
        payload: business,
    };
};

const removeBusiness = businessId => {
    return {
        type: REMOVE_BUSINESS,
    };
};

const initialState = { list: [] };

// sorts business alphabetically
// const sortBusinessAlpha = list =>
//     list.sort((a, b) => a.title - b.title).map(b => b.id);

export const getAllBusinesses = () => async dispatch => {
    const res = await fetch(`/api/business`);

    if (res.ok) {
        const list = await res.json();
        dispatch(getAll(list));
    }
};

export const getOneBusiness = id => async dispatch => {
    const res = await fetch(`/api/business/${id}`);
    if (res.ok) {
        const { business } = await res.json();
        dispatch(setBusiness(business));
    }
};

const businessReducer = (state = initialState, action) => {
    let setState;
    switch (action.type) {
        case SET_BUSINESS:
            if (!state[action.payload.id]) {
                setState = {
                    ...state,
                    [action.payload.id]: action.payload,
                };

                const allList = setState.list.map(i => setState[i]);
                allList.push(action.payload);
                setState.list = allList;
                return setState;
            } else {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }
        case GET_ALL:
            const bList = {};
            action.list.businesses.forEach(i => {
                bList[i.id] = i;
            });
            return { ...bList, ...state, list: action.list.businesses };
        default:
            return state;
    }
};

export default businessReducer;
