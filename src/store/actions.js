import axios from 'axios';

export const getReviews = () => async dispatch => {
    let results = await axios.get('https://lightninglaw.azurewebsites.net/api/reviews');
    dispatch(renderReviews(results.body))
  }

const renderReviews = payload => {
    console.log('AXIOS CALL', payload);

    return {
        type: 'GET_REVIEWS',
        payload
    }
}

export const addReview = payload => {
    return {
        type: 'ADD_REVIEW',
        payload
    }
}