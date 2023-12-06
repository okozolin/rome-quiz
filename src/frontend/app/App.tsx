import './App.css'
import store from './store.ts'
import {Provider} from "react-redux";
import QuizComponent from "../features/quiz/QuizComponent.tsx";

function App() {

  return (
    <>
      <Provider store={store}>
        <div>
            <h1>Orit</h1>
            <QuizComponent/>
        </div>
      </Provider>
    </>
  )
}

export default App
