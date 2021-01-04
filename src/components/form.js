import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/actions.js';

import useForm from '../hooks/useForm.js';

function Form({addReview}) {
    const defaults = {
        country: '',
        designation: '',
        points: '',
        price: '',
        tasterName: '',
        title: '',
        variety: '',
        winery: ''
    }

    const { handleChange, handleSubmit } = useForm(defaults);

    function submit(e) {
        e.preventDefault();
        handleSubmit(addReview);
        e.target.reset();
    }

    function change(e) {
        handleChange(e.target.id, e.target.value);
    }

    return (
        <form 
            onSubmit={(e) => {
                submit(e);
            }}>

            <h2>Add a Review</h2>

            <div>
                <label>Title</label>
                <input
                    id='title'
                    name='title'
                    type='text'
                    onChange={change}
                    required
                />
            </div>

            <div>
                <label>Points</label>
                <input
                    id='points'
                    name='points'
                    type='number'
                    onChange={change}
                    required
                />
            </div>

            <div>
                <label>Country</label>
                <input
                    id='country'
                    name='country'
                    type='text'
                    onChange={change}
                    required
                />
            </div>

            <div>
                <label>Variety</label>
                <input
                    id='variety'
                    name='variety'
                    type='text'
                    onChange={change}
                    required
                />
            </div>

            <div>
                <label>Designation</label>
                <input
                    id='designation'
                    name='designation'
                    type='text'
                    onChange={change}
                />
            </div>

            <div>
                <label>Price</label>
                <input
                    id='price'
                    name='price'
                    type='number'
                    onChange={change}
                />
            </div>

            <div>
                <label>Winery</label>
                <input
                    id='winery'
                    name='winery'
                    type='text'
                    onChange={change}
                />
            </div>

            <div>
                <label>Taster Name</label>
                <input
                    id='tasterName'
                    name='tasterName'
                    type='text'
                    onChange={change}
                />
            </div>


            <button
                type='submit'
                >
                Save
            </button>
        </form>

    )
}

const mapStateToProps = (state) => {
    return {
        initReviews: state.reviews.initReviews,
    }
}

const mapDispatchToProps = (dispatch, getState) => ({
    addReview: (data) => dispatch( actions.addReview(data) ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
