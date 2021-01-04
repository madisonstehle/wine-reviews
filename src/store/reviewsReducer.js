const initState = {
    initReviews: [
        {
            country: "Italy",
            designation: "Vulk� Bianco",
            points: 87,
            price: null,
            province: "Sicily & Sardinia",
            tasterName: null,
            title: "Nicosia 2013 Vulk� Bianco  (Etna)",
            variety: "White Blend",
            winery: "Nicosia"
        },
        {
            country: "Portugal",
            designation: "Things",
            points: 87,
            price: null,
            province: "Sicily & Sardinia",
            tasterName: null,
            title: "thing",
            variety: "White Blend",
            winery: "Nicosia"
        },
    ]
}

const reducer = (state = initState, action) => {
    const newState = {...state};

    switch (action.type) {
        case 'GET_REVIEWS':
            newState.initReviews = action.payload;
            break;

        default:
            break;
    }

    return newState;
}

export default reducer;