import axios from "axios"

export async function apiSendQuiz(data) {
  try {
    const response = await axios.post('/quiz', data);
    
    return response.data

  } catch (error) {
    throw error.response?.data || error.message || { message: "Невідома помилка" };
  }
  
}