import { useState } from "react";
import { useForm, Controller } from "react-hook-form"

import styles from "./QuestionBlock.module.scss"
import QuizAnswerBlock from "../QuizAnswerBlock/QuizAnswerBlock";
import QuizForm from "../QuizForm/QuizForm";
import SendQuizMutation from "../../hooks/sendQuizMutation";

const questions = [
  {
    id: 1,
    title: 'question #1',
    answers: [
      {
        id: 1,
        title: 'cat'
      },
      {
        id: 2,
        title: 'dog'
      },
      {
        id: 3,
        title: 'chicken'
      },
    ]
  },
  {
    id: 2,
    title: 'question #2',
    answers: [
      {
        id: 1,
        title: 'beet'
      },
      {
        id: 2,
        title: 'potato'
      },
      {
        id: 3,
        title: 'tomato'
      },
    ]
  },
  {
    id: 3,
    title: 'question #3',
    answers: [
      {
        id: 1,
        title: 'zebra'
      },
      {
        id: 2,
        title: 'lion'
      },
      {
        id: 3,
        title: 'crocodile'
      },
    ]
  },
  {
    id: 4,
    title: 'question #4',
    answers: [
      {
        id: 1,
        title: 'cockatoo'
      },
      {
        id: 2,
        title: 'flamingo'
      },
      {
        id: 3,
        title: 'rhinoceros'
      },
    ]
  },
  {
    id: 5,
    title: 'question #5',
    answers: [
      {
        id: 1,
        title: 'elephant'
      },
      {
        id: 2,
        title: 'cow'
      },
      {
        id: 3,
        title: 'milk'
      },
    ]
  },
]

function QuestionBlock() {
  const [currentBlock, setCurrentBlock] = useState(1);
  const [answerArray, setAnswerArray] = useState([]);
  
  const {sendQuizMutation, sendQuizPending} = SendQuizMutation();

  const {register, handleSubmit, control, formState: { errors }, setValue} = useForm({
    defaultValues: {
      phone: "",
      name: "",
      email: "",
    },
    mode: "onChange",
  });


  function handleAnswerClick(e) {
    let textAnswer = e.target.textContent;
    const newAnswer = {
      id: crypto.randomUUID(),
      text: textAnswer
    }

    setCurrentBlock(prev => prev + 1)
    setAnswerArray(prev => [...prev, newAnswer])
  }

  function onSubmit(data) {
    const quizResult = {...data, answers: answerArray}

    sendQuizMutation(quizResult, {
      //for text you can change it on onSettled
      onSuccess: () => {
        setValue("phone", "");
        setValue("name", "");
        setValue("email", "");
        setAnswerArray([]);
        setCurrentBlock(1)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {currentBlock <= questions.length 
        ? (
            <>
              {questions.map(question => {
                return (
                  <div key={question.id} id={question.id} style={{display: currentBlock == question.id ? 'block' : 'none' }}>
                    <div className={`${styles.questionTitle}`}>{question.title}</div>
                    {question.answers.map(answer => <QuizAnswerBlock answer={answer} key={answer.id} handleAnswerClick={handleAnswerClick} />)}
                  </div>
                )
              })}
              <div className={`${styles.questionCounter}`}>{`${currentBlock}/${questions.length}`}</div>
            </>
          ) : (
            <QuizForm register={register} errors={errors} control={control} Controller={Controller} sendQuizPending={sendQuizPending}  />
          )
      }
        
    </form>
  );
}

export default QuestionBlock;