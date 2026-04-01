import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";

function Finish ({name, clases, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10}) {

    // <img src="/img/ptuchka.png" alt="" />
    // <img src="/img/crestuk.png" alt="" />
    // const[rights, setRights] = useState([]);
    // const[wrongs, setWrongs] = useState([]);

    // const[znak1, setZnak1] = useState();
    // const[znak2, setZnak2] = useState();
    // const[znak3, setZnak3] = useState();
    // const[znak4, setZnak4] = useState();
    // const[znak5, setZnak5] = useState();
    // const[znak6, setZnak6] = useState();
    // const[znak7, setZnak7] = useState();
    // const[znak8, setZnak8] = useState();
    // const[znak9, setZnak9] = useState();
    // const[znak10, setZnak10] = useState();
    
    let rights = 0;
    let wrongs = 0;

    let znak1;
    let znak2;
    let znak3;
    let znak4;
    let znak5;
    let znak6;
    let znak7;
    let znak8;
    let znak9;
    let znak10;

    const renavigate = useNavigate();

    const perzagryska = () => {
        renavigate('/');

        setTimeout(()=>renavigate(0), 1)
    }

    useEffect(() => {
        document.body.className = "Images5";
        document.title = "Результат";
    });

    if(clases === "UKR_history") {
        if (answer1 === '988') {
            znak1 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak1 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer2 === 'Данило Галицький') {
            znak2 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak2 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer3 === 'четветрий Універсал Української Центральної Ради') {
            znak3 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak3 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer4 === '24 серпня 1991 року') {
            znak4 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak4 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer5 === 'Пилип Орлик') {
            znak5 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak5 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer6 === 'У 1709 році') {
            znak6 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak6 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer7 === 'Початок Національно-визвольної війни') {
            znak7 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak7 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer8 === 'Петро Калнишевський') {
            znak8 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak8 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer9 === 'У IX столітті') {
            znak9 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak9 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer10 === 'Початок Другої світової війни. ') {
            znak10 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak10 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }
    }
    else if (clases === "EU_history") {
        if (answer1 === 'Людовик XIV') {
            znak1 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak1 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer2 === 'Штурм Бастилії ') {
            znak2 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak2 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer3 === 'Національні збори Франції ') {
            znak3 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak3 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer4 === 'Отто фон Бісмарк') {
            znak4 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak4 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer5 === 'Перша світова війна') {
            znak5 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak5 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer6 === '1989') {
            znak6 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak6 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer7 === 'Джордж Вашингтон') {
            znak7 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak7 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer8 === 'Опублікування 95 тез Мартіном Лютером') {
            znak8 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak8 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer9 === 'Христофор Колумб') {
            znak9 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak9 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer10 === 'XVIII століття') {
            znak10 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak10 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }
    }
    else if (clases === "UKR_literatyre") {
        if (answer1 === 'Тарас Шевченко') {
            znak1 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak1 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer2 === 'Чорна рада') {
            znak2 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak2 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer3 === 'Іван Нечуй-Левицький') {
            znak3 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak3 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer4 === 'Драма-феєрія') {
            znak4 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak4 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer5 === 'Захар Беркут') {
            znak5 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak5 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer6 === 'Леся Українка') {
            znak6 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak6 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer7 === 'Енеїда') {
            znak7 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak7 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer8 === 'Іван Багряний') {
            znak8 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak8 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer9 === 'Імпресіонізм') {
            znak9 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak9 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }

        if (answer10 === 'Гайдамаки') {
            znak10 = <img src="/img/ptuchka.png" alt="" />
            rights++
        }else{
            znak10 = <img src="/img/crestuk.png" alt="" />
            wrongs++
        }
    }
    // useEffect(() => {
        
    //     if(clases === "UKR_history") {
    //         if (answer1 === '988') {
    //             setZnak1(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak1(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer2 === 'Данило Галицький') {
    //             setZnak2(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak2(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer3 === 'четветрий Універсал Української Центральної Ради') {
    //             setZnak3(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak3(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer4 === '24 серпня 1991 року') {
    //             setZnak4(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak4(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer5 === 'Пилип Орлик') {
    //             setZnak5(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak5(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer6 === 'У 1709 році') {
    //             setZnak6(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak6(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer7 === 'Початок Національно-визвольної війни') {
    //             setZnak7(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak7(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer8 === 'Петро Калнишевський') {
    //             setZnak8(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak8(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer9 === 'У IX столітті') {
    //             setZnak9(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak9(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }

    //         if (answer10 === 'Початок Другої світової війни. ') {
    //             setZnak10(<img src="/img/ptuchka.png" alt="" />)
    //             setRights([...rights, 1])
    //         }else{
    //             setZnak10(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs([...wrongs, 1])
    //         }
    //     }
    //     else if (clases === "EU_history") {
    //         if (answer1 === 'Людовик XIV') {
    //             setZnak1(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak1(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer2 === 'Штурм Бастилії ') {
    //             setZnak2(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak2(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer3 === 'Національні збори Франції ') {
    //             setZnak3(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak3(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer4 === 'Отто фон Бісмарк') {
    //             setZnak4(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak4(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer5 === 'Перша світова війна') {
    //             setZnak5(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak5(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer6 === '1989') {
    //             setZnak6(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak6(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer7 === 'Джордж Вашингтон') {
    //             setZnak7(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak7(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer8 === 'Опублікування 95 тез Мартіном Лютером') {
    //             setZnak8(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak8(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer9 === 'Христофор Колумб') {
    //             setZnak9(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak9(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer10 === 'XVIII століття') {
    //             setZnak10(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak10(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }
    //     }
    //     else if (clases === "UKR_literatyre") {
    //         if (answer1 === 'Тарас Шевченко') {
    //             setZnak1(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak1(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer2 === 'Чорна рада') {
    //             setZnak2(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak2(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer3 === 'Іван Нечуй-Левицький') {
    //             setZnak3(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak3(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer4 === 'Драма-феєрія') {
    //             setZnak4(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak4(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer5 === 'Захар Беркут') {
    //             setZnak5(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak5(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer6 === 'Леся Українка') {
    //             setZnak6(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak6(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer7 === 'Енеїда') {
    //             setZnak7(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak7(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer8 === 'Іван Багряний') {
    //             setZnak8(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak8(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer9 === 'Імпресіонізм') {
    //             setZnak9(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak9(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }

    //         if (answer10 === 'Гайдамаки') {
    //             setZnak10(<img src="/img/ptuchka.png" alt="" />)
    //             setRights(rights + 1)
    //         }else{
    //             setZnak10(<img src="/img/crestuk.png" alt="" />)
    //             setWrongs(wrongs + 1)
    //         }
    //     }
    // }, [wrongs])

    return(
        <div className='resultat'>
            <div className='nam'>
                <u>{name}</u>
            </div>
            <div className='vidpovidi'>
                <div className='left'>
                    <div>
                        <p>{answer1}</p>
                        {znak1}
                    </div>
                    <div>
                        <p>{answer2}</p>
                        {znak2}
                    </div>
                    <div>
                        <p>{answer3}</p>
                        {znak3}
                    </div>
                    <div>
                        <p>{answer4}</p>
                        {znak4}
                    </div>
                    <div>
                        <p>{answer5}</p>
                        {znak5}
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <p>{answer6}</p>
                        {znak6}
                    </div>
                    <div>
                        <p>{answer7}</p>
                        {znak7}
                    </div>
                    <div>
                        <p>{answer8}</p>
                        {znak8}
                    </div>
                    <div>
                        <p>{answer9}</p>
                        {znak9}
                    </div>
                    <div>
                        <p>{answer10}</p>
                        {znak10}
                    </div>
                </div>
            </div>
            <div className='ruska'></div>
            <div className='infa'>
                <div>
                    <p>Кількість питань....................</p>
                    <p>10</p>
                </div>
                <div>
                    <p>Правильні відповіді.................</p>
                    <p>{rights}</p>
                </div>
                <div>
                    <p>Неправильні відповіді.............</p>
                    <p>{wrongs}</p>
                </div>
            </div>
            <div className='knp'>
                <button onClick={perzagryska}>Новий Тест</button>
            </div>
        </div>
    )
}

export default Finish