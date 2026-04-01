import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"

function Registr ({pikcselect, piklevel, nameplayer}) {

    const[names, setNames] = useState('');
    const[urok, setUrok] = useState('');
    const[levels, setLevels] = useState('');

    const navigate = useNavigate();
    
    

    useEffect (()=> {
        document.title = "Реєстрація"
    }, [])

    function addinfa () {

        if (names.length > 2 && names.length <= 11) {
            nameplayer(names)
            if (urok) {
                pikcselect(urok)
                if(levels){
                    piklevel(levels)
                    navigate("/Test")
                }else{
                    alert('Виберіть рівень важкості')
                }
            }else{
                alert('Необрана тема')
            }
        }else{
            alert('Неправильний формат Імені')
        }
    }


    return(
        <div className="forma">
            <div className="name">
                <input type="text" onChange={(e)=>{setNames(e.target.value)}}/>
                <p>Ім'я</p>
            </div>
            <div className="pick">
                <select defaultValue='' onChange={(e) => {setUrok(e.target.value)}}>
                    <option value="" disabled>Обрати тему!</option>
                    <option value="UKR_history">Історія України</option>
                    <option value="EU_history">Історія Європи</option>
                    <option value="UKR_literatyre">Українська Література</option>
                </select>
            </div>
            <div className="check">
                <div>
                    <input type="radio" name="checks" value="easy" onChange={(e) => {setLevels(e.target.value)}}/>
                    <p>Легкий</p>
                </div>
                <div>
                    <input type="radio" name="checks" value="normal" onChange={(e) => {setLevels(e.target.value)}}/>
                    <p>Середній</p>
                </div>
                <div>
                    <input type="radio" name="checks" value="hard" onChange={(e) => {setLevels(e.target.value)}}/>
                    <p>Важкий</p>
                </div>
                <p>Рівень важкості</p>
            </div>
            {/* <Link to="/Test"> */}
                <button onClick={addinfa}>Розпочати</button>
            {/* </Link> */}
        </div>
    )
}

export default Registr