import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import * as actions from '../store/actions.js';

function ReviewTable(props) {
    const { getReviews } = props;

    useEffect( () => {
        console.log('hello useEffect')
        getReviews();
    }, []);

    let rows = props.initReviews.map((review, idx) => {
        const { title, variety, winery, points, price, description} = review;
        return (
            <tr key={idx}>
                <td>{title}</td>
                <td>{variety}</td>
                <td>{winery}</td>
                <td>{points}</td>
                <td>{price}</td>
                <td>{description}</td>
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
                        Description
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTable);
