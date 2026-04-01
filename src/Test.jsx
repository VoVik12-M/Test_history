import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Question1 from './components/lessons/question_1';
import Question2 from './components/lessons/question_2';
import Question3 from './components/lessons/question_3';
import Question4 from './components/lessons/question_4';
import Question5 from './components/lessons/question_5';
import Question6 from './components/lessons/question_6';
import Question7 from './components/lessons/question_7';
import Question8 from './components/lessons/question_8';
import Question9 from './components/lessons/question_9';
import Question10 from './components/lessons/question_10';

function Test ({classelect, getlevel, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10}) {

    const[formaName, setFormaname] = useState("");
    const[strilka, setStrilka] = useState(1);
    const[question, setQuestion] = useState();

    const[vidpovid1, setVidpovid1] = useState('');
    const[vidpovid2, setVidpovid2] = useState('');
    const[vidpovid3, setVidpovid3] = useState('');
    const[vidpovid4, setVidpovid4] = useState('');
    const[vidpovid5, setVidpovid5] = useState('');
    const[vidpovid6, setVidpovid6] = useState('');
    const[vidpovid7, setVidpovid7] = useState('');
    const[vidpovid8, setVidpovid8] = useState('');
    const[vidpovid9, setVidpovid9] = useState('');
    const[vidpovid10, setVidpovid10] = useState('');
    
    const navigate2 = useNavigate();

    console.log(strilka);
    

    const next_kn = () => {
        if(vidpovid1){
            setStrilka(strilka+1)
        }
        else if(vidpovid2){
            setStrilka(strilka+1)
        }
        else if(vidpovid3){
            setStrilka(strilka+1)
        }
        else if(vidpovid4){
            setStrilka(strilka+1)
        }
        else if(vidpovid5){
            setStrilka(strilka+1)
        }
        else if(vidpovid6){
            setStrilka(strilka+1)
        }
        else if(vidpovid7){
            setStrilka(strilka+1)
        }
        else if(vidpovid8){
            setStrilka(strilka+1)
        }
        else if(vidpovid9){
            setStrilka(strilka+1)
        }
        else if(vidpovid10){
            setStrilka(strilka+1)
        }
        else{
            alert('Оберіть відповідь')
        }
    };

    // let strilka = 5;
    // let question;
    useEffect(() => {
        if(strilka === 1) {
            setQuestion(<Question1 classelect={classelect} getlevel={getlevel} answer1={answer1} clic={setVidpovid1}/>)
        }
        else if(strilka === 2) {
            setVidpovid1(0)
            setQuestion(<Question2 classelect={classelect} getlevel={getlevel} answer2={answer2} clic={setVidpovid2}/>)
        }
        else if(strilka === 3) {
            setVidpovid2(0)
            setQuestion(<Question3 classelect={classelect} getlevel={getlevel} answer3={answer3} clic={setVidpovid3}/>)
        }
        else if(strilka === 4) {
            setVidpovid3(0)
            setQuestion(<Question4 classelect={classelect} getlevel={getlevel} answer4={answer4} clic={setVidpovid4}/>)
        }
        else if(strilka === 5) {
            setVidpovid4(0)
            setQuestion(<Question5 classelect={classelect} getlevel={getlevel} answer5={answer5} clic={setVidpovid5}/>)
        }
        else if(strilka === 6) {
            setVidpovid5(0)
            setQuestion(<Question6 classelect={classelect} getlevel={getlevel} answer6={answer6} clic={setVidpovid6}/>)
        }
        else if(strilka === 7) {
            setVidpovid6(0)
            setQuestion(<Question7 classelect={classelect} getlevel={getlevel} answer7={answer7} clic={setVidpovid7}/>)
        }
        else if(strilka === 8) {
            setVidpovid7(0)
            setQuestion(<Question8 classelect={classelect} getlevel={getlevel} answer8={answer8} clic={setVidpovid8}/>)
        }
        else if(strilka === 9) {
            setVidpovid8(0)
            setQuestion(<Question9 classelect={classelect} getlevel={getlevel} answer9={answer9} clic={setVidpovid9}/>)
        }
        else if(strilka === 10) {
            setVidpovid9(0)
            setQuestion(<Question10 classelect={classelect} getlevel={getlevel} answer10={answer10} clic={setVidpovid10}/>)
        }
        else if(strilka === 11) {
            setVidpovid10(0)
            navigate2('/Finish')
        }
    }, [strilka])

    useEffect(() => {

        if(classelect === "UKR_history") {
            setFormaname("forma-2")
        }
        else if(classelect === "EU_history") {
            setFormaname("forma-3")
        }
        else if(classelect === "UKR_literatyre") {
            setFormaname("forma-4")
        };
    }, [])

    return(
        <div className={formaName}>
            {question}
            <div className="container-3">
                <button className='NEXT' onClick={next_kn}>Далі</button>
                {/* <img onClick={left_kn} src="/img/left.png" />
                <img onClick={right_kn} src="/img/right.png" /> */}
            </div>
        </div>
    )
}

export default Test