import React from 'react';

function Question({ data, onAnswer, userAnswer }) {
  return (
    <div>
      <h2>{data.question}</h2>
      <div className="options-container">
        {data.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              userAnswer === option ? 'selected' : ''
            }`}
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
