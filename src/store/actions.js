import axios from 'axios';

// export const getReviews = () => {
//     async dispatch => {
//         let results = await axios.get('https://lightninglaw.azurewebsites.net/api/reviews');
//         console.log(results.data);
//         dispatch(renderReviews(results.data));
//     }
// }

export const renderReviews = payload => {
    return {
        type: 'GET_REVIEWS',
        payload
    }
}