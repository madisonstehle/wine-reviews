import axios from 'axios';

export const getReviews = () => async dispatch => {
    let results = await axios.get('https://lightninglaw.azurewebsites.net/api/reviews');
    dispatch(renderReviews(results.data))
  }

const renderReviews = payload => {
    console.log('AXIOS CALL', payload);

    return {
        type: 'GET_REVIEWS',
        payload
    }
}