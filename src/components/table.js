import React from 'react';
import { connect } from 'react-redux';


import * as actions from '../store/actions.js';

function ReviewTable(props) {
    console.log(props);


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
        </table>
    )
}


const mapStateToProps = (state) => {
    return {
        initReviews: state.reviews.initReviews,
    }
}

const mapDispatchToProps = (dispatch, getState) => ({
    renderReviews: (data) => dispatch( actions.renderReviews(data) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewTable);
