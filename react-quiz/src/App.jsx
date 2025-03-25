import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import QuizBlock from './components/QuizBlock/QuizBlock'
import { ToastContainer } from 'react-toastify';

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <QuizBlock />
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </QueryClientProvider>
  )
}

export default App
