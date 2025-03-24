import { useState } from "react";
import QuizAnswerBlock from "../QuizAnswerBlock/QuizAnswerBlock";

const questions = [
  {
    id: 1,
    title: 'question #1',
    answers: [
      {
        id: 1,
        title: 'answer #1 for question #1'
      },
      {
        id: 2,
        title: 'answer #1 for question #1'
      },
      {
        id: 3,
        title: 'answer #1 for question #1'
      },
    ]
  },
  {
    id: 2,
    title: 'question #2',
    answers: [
      {
        id: 1,
        title: 'answer #1 for question #2'
      },
      {
        id: 2,
        title: 'answer #1 for question #2'
      },
      {
        id: 3,
        title: 'answer #1 for question #2'
      },
    ]
  },
  {
    id: 3,
    title: 'question #3',
    answers: [
      {
        id: 1,
        title: 'answer #1 for question #3'
      },
      {
        id: 2,
        title: 'answer #1 for question #3'
      },
      {
        id: 3,
        title: 'answer #1 for question #3'
      },
    ]
  },
  {
    id: 4,
    title: 'question #4',
    answers: [
      {
        id: 1,
        title: 'answer #1 for question #4'
      },
      {
        id: 2,
        title: 'answer #1 for question #4'
      },
      {
        id: 3,
        title: 'answer #1 for question #4'
      },
    ]
  },
  {
    id: 5,
    title: 'question #5',
    answers: [
      {
        id: 1,
        title: 'answer #1 for question #5'
      },
      {
        id: 2,
        title: 'answer #1 for question #5'
      },
      {
        id: 3,
        title: 'answer #1 for question #5'
      },
    ]
  },
]

function QuestionBlock() {
  const [currentBlock, setCurrentBlock] = useState(1);

  function handleAnswerClick() {
    setCurrentBlock(prev => prev + 1)
  }


  return (
    <div >
      {questions.map(question => {
        return (
          <div key={question.id} id={question.id} style={{display: currentBlock == question.id ? 'block' : 'none' }}>
            <div>{question.title}</div>
            {question.answers.map(answer => <QuizAnswerBlock answer={answer} key={answer.id} handleAnswerClick={handleAnswerClick} />)}
          </div>
        )
      })}
      <div>{`${currentBlock}/${questions.length}`}</div>
    </div>
  );
}

export default QuestionBlock;