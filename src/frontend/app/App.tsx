import './App.css'
import store from './store.ts'
import {Provider} from "react-redux";
import QuizComponent from "../features/quiz/Quiz.component.tsx";
import {AppContainer, Header, MyLogo} from "./App.styles.ts";
import {MdFace} from "react-icons/md";

function App() {

  return (
    <>
      <Provider store={store}>
        <AppContainer>
          <Header>
            <MyLogo>
              <MdFace color={"lightPink"} />
                oritkozolin 2023
            </MyLogo>
          </Header>
          <QuizComponent/>
        </AppContainer>
      </Provider>
    </>
  )
}

export default App
