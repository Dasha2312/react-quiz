import React from 'react';
import QuestionBlock from '../QuestionBlock/QuestionBlock';
import QuizImageBlock from '../QuizImageBlock/QuizImageBlock';
import styles from "./QuizBlock.module.scss"

function QuizBlock() {
  return (
    <div className={`${styles.QuizBlock}`}>
      <div className={`${styles.QuizBlock__left}`}>
        <QuestionBlock />
      </div>
      <div className={`${styles.QuizBlock__right}`}>
        <QuizImageBlock />
      </div>
    </div>
  );
}

export default QuizBlock;