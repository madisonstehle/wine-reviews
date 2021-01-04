import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';

import '../styles/table.css';

function ReviewTable(props) {
    const { getReviews } = props;

    useEffect( () => {
        console.log('hello useEffect')
        getReviews();
    }, []);

    let rows = props.initReviews.map((review, idx) => {
        const { title, variety, winery, points, price, designation} = review;
        return (
            <tr key={idx}>
                <td>{title}</td>
                <td>{variety}</td>
                <td>{winery}</td>
                <td>{points}</td>
                <td>{price}</td>
                <td>{designation}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Variety
                    </th>
                    <th>
                        Winery
                    </th>
                    <th>
                        Points
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Designation
                    </th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}


const mapStateToProps = (state) => {
    return {
        initReviews: state.reviews.initReviews,
    }
}

const mapDispatchToProps = (dispatch, getState) => ({
    getReviews: (data) => dispatch( actions.getReviews(data) ),
    addReview: (data) => dispatch( actions.addReview(data) )
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTable);
