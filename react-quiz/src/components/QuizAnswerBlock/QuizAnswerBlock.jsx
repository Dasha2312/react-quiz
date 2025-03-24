import React from 'react';

function QuizAnswerBlock({answer, handleAnswerClick}) {
  return (
    <div onClick={handleAnswerClick}>
      {answer.title}
    </div>
  );
}

export default QuizAnswerBlock;