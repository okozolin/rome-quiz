import './App.css'
import store from './store.ts'
import {Provider} from "react-redux";
import Quiz from "../features/quiz/Quiz.component.tsx";
import {AppContainer, Header, MyLogo} from "./App.styles.ts";
import {MdFace} from "react-icons/md";

function App() {

  return (
    <>
      <Provider store={store}>
        <AppContainer>
          <Header>
            <MyLogo>
              <MdFace />
                oritkozolin 2023
            </MyLogo>
          </Header>
          <Quiz/>
        </AppContainer>
      </Provider>
    </>
  )
}

export default App
