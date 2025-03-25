import styles from "./QuizAnswerBlock.module.scss"

function QuizAnswerBlock({answer, handleAnswerClick}) {
  return (
    <div onClick={(e) => handleAnswerClick(e)} className={`${styles.answerBlock}`}>
      {answer.title}
    </div>
  );
}

export default QuizAnswerBlock;