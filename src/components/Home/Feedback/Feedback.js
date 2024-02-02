import React from 'react';

const Feedback = ({feedback}) => {
    const {image, name, companyDesignation, desc} = feedback
    return (
        <div className='col-lg-4'>
            <div className="feedback-content">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Feedback;