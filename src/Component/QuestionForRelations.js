import React from 'react';

const QuestionForRelations = ({ value, handelChange, next, previous }) => {
    return (
        <div>
            <button className="btn btn-primary" onClick={previous}>Back</button>
        </div>
    );
};

export default QuestionForRelations;