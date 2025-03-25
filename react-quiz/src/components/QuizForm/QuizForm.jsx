import InputText from "../../UI/InputText/InputText";
import IntlTelInputBlock from "../../UI/IntlTelInputBlock/IntlTelInputBlock";
import styles from "./QuizForm.module.scss"


function QuizForm({register, errors, control, Controller, sendQuizPending}) {
  return (
    <div className={styles.QuizForm__content}>
      <InputText type="text" placeholder="Your Name" errors={errors} register={register} name="name" disabled={sendQuizPending} />
      <InputText type="email" placeholder="Your Email"  errors={errors} register={register} name="email" disabled={sendQuizPending} />
      <IntlTelInputBlock control={control} Controller={Controller} disabled={sendQuizPending}/>
      <div className={styles.QuizForm__contentBottom}>
        <button type='submit' className={styles.QuizForm__button} disabled={sendQuizPending}>Send</button>
      </div>
    </div>
  );
}

export default QuizForm;