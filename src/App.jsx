import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useState } from 'react'
import Registr from './Registr'
import Test from "./Test";
import Finish from "./Finsh";

function App() {

  const[clases, setClases] = useState('');
  const[level, setLevel] = useState('');
  const[name, setName] = useState('');

  const[correct1, setCorrect1] = useState('');
  const[correct2, setCorrect2] = useState('');
  const[correct3, setCorrect3] = useState('');
  const[correct4, setCorrect4] = useState('');
  const[correct5, setCorrect5] = useState('');
  const[correct6, setCorrect6] = useState('');
  const[correct7, setCorrect7] = useState('');
  const[correct8, setCorrect8] = useState('');
  const[correct9, setCorrect9] = useState('');
  const[correct10, setCorrect10] = useState('');
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registr pikcselect={setClases} piklevel={setLevel} nameplayer={setName}/>}/>
        <Route path="/Test" element={
          <Test
            classelect={clases}
            getlevel={level}
            answer1={setCorrect1}
            answer2={setCorrect2}
            answer3={setCorrect3}
            answer4={setCorrect4}
            answer5={setCorrect5}
            answer6={setCorrect6}
            answer7={setCorrect7}
            answer8={setCorrect8}
            answer9={setCorrect9}
            answer10={setCorrect10}
            />
          }/>
          <Route
            path="/Finish"
            element={<Finish name={name}
            clases={clases}
            answer1={correct1}
            answer2={correct2}
            answer3={correct3}
            answer4={correct4}
            answer5={correct5}
            answer6={correct6}
            answer7={correct7}
            answer8={correct8}
            answer9={correct9}
            answer10={correct10}
            />
          }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
