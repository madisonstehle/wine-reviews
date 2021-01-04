import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../store/actions.js';

function Form() {
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

    return (
        <form>
            <h2>Add a Review</h2>

            <div>
                <label>Title</label>
                <input
                    id='title'
                    name='title'
                    type='text'
                    // onChange={}
                    required
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

export default Form;