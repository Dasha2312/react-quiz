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
        title: 'answer #1 for question #1'
      },
      {
        id: 2,
        title: 'answer #2 for question #1'
      },
      {
        id: 3,
        title: 'answer #3 for question #1'
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
        title: 'answer #2 for question #2'
      },
      {
        id: 3,
        title: 'answer #3 for question #2'
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
        title: 'answer #2 for question #3'
      },
      {
        id: 3,
        title: 'answer #3 for question #3'
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
        title: 'answer #2 for question #4'
      },
      {
        id: 3,
        title: 'answer #3 for question #4'
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
        title: 'answer #2 for question #5'
      },
      {
        id: 3,
        title: 'answer #3 for question #5'
      },
    ]
  },
]

function QuestionBlock() {
  const [currentBlock, setCurrentBlock] = useState(1);
  const [answerArray, setAnswerArray] = useState([]);
  
  const {sendQuizMutation, sendQuizPending} = SendQuizMutation();
  console.log('isPending', sendQuizPending)

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
    console.log(data);
    const quizResult = {...data, answers: answerArray}
    console.log(quizResult)

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