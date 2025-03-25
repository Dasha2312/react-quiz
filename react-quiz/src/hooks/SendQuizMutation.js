import { useMutation } from "@tanstack/react-query";
import { apiSendQuiz } from "../API/apiSendQuiz";
import { toast } from "react-toastify";

function SendQuizMutation() {
  const {mutate: sendQuizMutation, isPending: sendQuizPending} = useMutation({
    mutationFn: apiSendQuiz,
    onSuccess: async () => {
      console.log('Quiz has been sent')
      toast.success('Hey 👋! The quiz has been successfully submitted');
    },
    onError: (error) => {
      console.log(error)
      toast.error (error);
    }
  })

  return {sendQuizMutation, sendQuizPending}
}

export default SendQuizMutation;