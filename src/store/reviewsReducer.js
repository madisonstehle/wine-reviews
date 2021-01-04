const initState = {
    initReviews: []
}

const reducer = (state = initState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'GET_REVIEWS':
            newState.initReviews = action.payload;
            break;
        
        case 'ADD_REVIEW':
            newState.initReviews = [...newState.initReviews, action.payload];
            break;

        default:
            break;
    }

    return newState;
}

export default reducer;