import React from 'react';
import { connect } from 'react-redux';


function Header(props) {
    return (
        <header className="App-header">
            <h1
                style={{
                    fontFamily:'sans-serif'
                }}>Wine Reviews</h1>
            <h3
                style={{ 
                    border: '1px solid black',
                    display: 'inline-block',
                    backgroundColor: '#EBF1DF',
                    padding: '20px',
                    margin: '40px',
                    fontSize: '30px'
                }}
            >{props.initReviews.length}</h3>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        initReviews: state.reviews.initReviews,
    }
}


export default connect(mapStateToProps)(Header);