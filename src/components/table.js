import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions.js';
import useSortData from '../hooks/useSortData.js';

import '../styles/table.css';

function ReviewTable(props) {
    const { items, requestSort } = useSortData(props.initReviews);

    useEffect( () => {
        actions.getReviews();
    }, [items, props.initReviews]);

    let renderingArr = items ? items : props.initReviews;

    let rows = renderingArr.map((review, idx) => {
        const { title, variety, winery, points, price, designation} = review;
        return (
            <tr key={idx}>
                <td>{title}</td>
                <td>{variety}</td>
                <td>{winery}</td>
                <td>{points}</td>
                <td>{price ? `$${price}.00` : '$00.00'}</td>
                <td>{designation}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <button
                            type='button'
                            onClick={ () => requestSort('title')}>
                            TITLE
                        </button>
                    </th>
                    <th>
                        <button
                            type='button'
                            onClick={ () => requestSort('variety')}>
                            VARIETY
                        </button>
                    </th>
                    <th>
                        <button
                            type='button'
                            onClick={ () => requestSort('winery')}>
                            WINERY
                        </button>                        
                    </th>
                    <th>
                        <button
                            type='button'
                            onClick={ () => requestSort('points')}>
                            POINTS
                        </button>   
                    </th>
                    <th>
                        <button
                            type='button'
                            onClick={ () => requestSort('price')}>
                            PRICE
                        </button>  
                    </th>
                    <th>
                        <button
                            type='button'
                            onClick={ () => requestSort('designation')}>
                            DESIGNATION
                        </button>  
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
