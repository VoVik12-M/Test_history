import { Ukr_his_less, Euro_his_less, Ukr_literature } from '../../Lesons_spusku';
import { useState, useEffect, useRef } from 'react'

function Question2 ({classelect, getlevel, answer2, clic}) {

    const[zagolovok, setZagolovok] = useState()
    const[cnopka1, setCnopka1] = useState();
    const[cnopka2, setCnopka2] = useState();

    const color_btn = useRef();
    const color_btn2 = useRef();
    const color_btn3 = useRef();
    const color_btn4 = useRef();
    const color_btn5 = useRef();
    const color_btn6 = useRef();
    
    const Cor_ans = (e) => {
        answer2(e.target.value)
        clic(1)
        if (classelect === "UKR_history" || classelect === "EU_history") {
            if(getlevel === 'easy') {
                if (e.target.value === color_btn.current.value) {
                    color_btn.current.style.background = '#c99c66'
                    color_btn2.current.style.background = 'transparent'
                }else{
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = '#c99c66'
                }
            }
            else if (getlevel === 'normal') {
                if (e.target.value === color_btn.current.value) {
                    color_btn.current.style.background = '#c99c66'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn2.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = '#c99c66'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn3.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = '#c99c66'
                    color_btn4.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn4.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = '#c99c66'
                }
            }
            else if (getlevel === 'hard') {
                if (e.target.value === color_btn.current.value) {
                    color_btn.current.style.background = '#c99c66'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = 'transparent'
                    color_btn5.current.style.background = 'transparent'
                    color_btn6.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn2.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = '#c99c66'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = 'transparent'
                    color_btn5.current.style.background = 'transparent'
                    color_btn6.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn3.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = '#c99c66'
                    color_btn4.current.style.background = 'transparent'
                    color_btn5.current.style.background = 'transparent'
                    color_btn6.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn4.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = '#c99c66'
                    color_btn5.current.style.background = 'transparent'
                    color_btn6.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn5.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = 'transparent'
                    color_btn5.current.style.background = '#c99c66'
                    color_btn6.current.style.background = 'transparent'
                }
                else if (e.target.value === color_btn6.current.value) {
                    color_btn.current.style.background = 'transparent'
                    color_btn2.current.style.background = 'transparent'
                    color_btn3.current.style.background = 'transparent'
                    color_btn4.current.style.background = 'transparent'
                    color_btn5.current.style.background = 'transparent'
                    color_btn6.current.style.background = '#c99c66'
                }
            }
        }else{
            if(getlevel === 'easy') {
                if (e.target.value === color_btn.current.value) {
                    color_btn.current.style.background = '#c99c6650'
                    color_btn.current.style.color = '#81461e'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                }else{
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#c99c6650'
                    color_btn2.current.style.color = '#81461e'
                }
            }
            else if (getlevel === 'normal') {
                if (e.target.value === color_btn.current.value) {
                    color_btn.current.style.background = '#c99c6650'
                    color_btn.current.style.color = '#81461e'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                }
                else if (e.target.value === color_btn2.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#c99c6650'
                    color_btn2.current.style.color = '#81461e'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                }
                else if (e.target.value === color_btn3.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#c99c6650'
                    color_btn3.current.style.color = '#81461e'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                }
                else if (e.target.value === color_btn4.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#c99c6650'
                    color_btn4.current.style.color = '#81461e'
                }
            }
            else if (getlevel === 'hard') {
                if (e.target.value === color_btn.current.value) {
                    color_btn.current.style.background = '#c99c6650'
                    color_btn.current.style.color = '#81461e'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                                        
                    color_btn5.current.style.background = '#81461e'
                    color_btn5.current.style.color = 'white'
                                        
                    color_btn6.current.style.background = '#81461e'
                    color_btn6.current.style.color = 'white'
                }
                else if (e.target.value === color_btn2.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#c99c6650'
                    color_btn2.current.style.color = '#81461e'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                                        
                    color_btn5.current.style.background = '#81461e'
                    color_btn5.current.style.color = 'white'
                                        
                    color_btn6.current.style.background = '#81461e'
                    color_btn6.current.style.color = 'white'
                }
                else if (e.target.value === color_btn3.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#c99c6650'
                    color_btn3.current.style.color = '#81461e'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                                        
                    color_btn5.current.style.background = '#81461e'
                    color_btn5.current.style.color = 'white'
                                        
                    color_btn6.current.style.background = '#81461e'
                    color_btn6.current.style.color = 'white'
                }
                else if (e.target.value === color_btn4.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#c99c6650'
                    color_btn4.current.style.color = '#81461e'
                                        
                    color_btn5.current.style.background = '#81461e'
                    color_btn5.current.style.color = 'white'
                                        
                    color_btn6.current.style.background = '#81461e'
                    color_btn6.current.style.color = 'white'
                }
                else if (e.target.value === color_btn5.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                                        
                    color_btn5.current.style.background = '#c99c6650'
                    color_btn5.current.style.color = '#81461e'
                                        
                    color_btn6.current.style.background = '#81461e'
                    color_btn6.current.style.color = 'white'
                }
                else if (e.target.value === color_btn6.current.value) {
                    color_btn.current.style.background = '#81461e'
                    color_btn.current.style.color = 'white'

                    color_btn2.current.style.background = '#81461e'
                    color_btn2.current.style.color = 'white'
                    
                    color_btn3.current.style.background = '#81461e'
                    color_btn3.current.style.color = 'white'
                    
                    color_btn4.current.style.background = '#81461e'
                    color_btn4.current.style.color = 'white'
                                        
                    color_btn5.current.style.background = '#81461e'
                    color_btn5.current.style.color = 'white'
                                        
                    color_btn6.current.style.background = '#c99c6650'
                    color_btn6.current.style.color = '#81461e'
                }
            }
        }
    };

    useEffect(()=>{
        if(classelect === "UKR_history") {
            document.title = "Історія України"
            document.body.className = "Images2";
            setZagolovok(Ukr_his_less[1].zagolovok);
            if(getlevel === 'easy') {
                setCnopka1(<button ref={color_btn} value={Ukr_his_less[1].var3} onClick={Cor_ans}>{Ukr_his_less[1].var3}</button>)
                setCnopka2(<button ref={color_btn2} value={Ukr_his_less[1].var1} onClick={Cor_ans}>{Ukr_his_less[1].var1}</button>)
                
            }
            else if(getlevel === 'normal') {
                setCnopka1(<div>
                    <button ref={color_btn} value={Ukr_his_less[1].var1} onClick={Cor_ans}>{Ukr_his_less[1].var1}</button>
                    <button ref={color_btn2} value={Ukr_his_less[1].var5} onClick={Cor_ans}>{Ukr_his_less[1].var5}</button>
                </div>
                )
                setCnopka2(<div>
                    <button ref={color_btn3} value={Ukr_his_less[1].var3} onClick={Cor_ans}>{Ukr_his_less[1].var3}</button>
                    <button ref={color_btn4} value={Ukr_his_less[1].var2} onClick={Cor_ans}>{Ukr_his_less[1].var2}</button>
                </div>
                )
            }
            else if(getlevel === 'hard') {
                setCnopka1(<div>
                    <button ref={color_btn} value={Ukr_his_less[1].var1} onClick={Cor_ans}>{Ukr_his_less[1].var1}</button>
                    <button ref={color_btn2} value={Ukr_his_less[1].var2} onClick={Cor_ans}>{Ukr_his_less[1].var2}</button>
                    <button ref={color_btn3} value={Ukr_his_less[1].var6} onClick={Cor_ans}>{Ukr_his_less[1].var6}</button>
                </div>
                )
                setCnopka2(<div>
                    <button ref={color_btn4} value={Ukr_his_less[1].var4} onClick={Cor_ans}>{Ukr_his_less[1].var4}</button>
                    <button ref={color_btn5} value={Ukr_his_less[1].var5} onClick={Cor_ans}>{Ukr_his_less[1].var5}</button>
                    <button ref={color_btn6} value={Ukr_his_less[1].var3} onClick={Cor_ans}>{Ukr_his_less[1].var3}</button>
                </div>
                )
            }
        }
        else if(classelect === "EU_history") {
            document.title = "Історія Європи"
            document.body.className = "Images3";
            setZagolovok(Euro_his_less[1].zagolovok);
            if(getlevel === 'easy') {
                setCnopka1(<button ref={color_btn} value={Euro_his_less[1].var3} onClick={Cor_ans}>{Euro_his_less[1].var3}</button>)
                setCnopka2(<button ref={color_btn2} value={Euro_his_less[1].var1} onClick={Cor_ans}>{Euro_his_less[1].var1}</button>)
                
            }
            else if(getlevel === 'normal') {
                setCnopka1(<div>
                    <button ref={color_btn} value={Euro_his_less[1].var6} onClick={Cor_ans}>{Euro_his_less[1].var6}</button>
                    <button ref={color_btn2} value={Euro_his_less[1].var5} onClick={Cor_ans}>{Euro_his_less[1].var5}</button>
                </div>
                )
                setCnopka2(<div>
                    <button ref={color_btn3} value={Euro_his_less[1].var1} onClick={Cor_ans}>{Euro_his_less[1].var1}</button>
                    <button ref={color_btn4} value={Euro_his_less[1].var2} onClick={Cor_ans}>{Euro_his_less[1].var2}</button>
                </div>
                )
            }
            else if(getlevel === 'hard') {
                setCnopka1(<div>
                    <button ref={color_btn} value={Euro_his_less[1].var1} onClick={Cor_ans}>{Euro_his_less[1].var1}</button>
                    <button ref={color_btn2} value={Euro_his_less[1].var2} onClick={Cor_ans}>{Euro_his_less[1].var2}</button>
                    <button ref={color_btn3} value={Euro_his_less[1].var3} onClick={Cor_ans}>{Euro_his_less[1].var3}</button>
                </div>
                )
                setCnopka2(<div>
                    <button ref={color_btn4} value={Euro_his_less[1].var4} onClick={Cor_ans}>{Euro_his_less[1].var4}</button>
                    <button ref={color_btn5} value={Euro_his_less[1].var5} onClick={Cor_ans}>{Euro_his_less[1].var5}</button>
                    <button ref={color_btn6} value={Euro_his_less[1].var6} onClick={Cor_ans}>{Euro_his_less[1].var6}</button>
                </div>
                )
            }
        }
        else if(classelect === "UKR_literatyre") {
            document.title = "Українська Література"
            document.body.className = "Images4";
            setZagolovok(Ukr_literature[1].zagolovok)
            if(getlevel === 'easy') {
                setCnopka1(<button ref={color_btn} value={Ukr_literature[1].var3} onClick={Cor_ans}>{Ukr_literature[1].var3}</button>)
                setCnopka2(<button ref={color_btn2} value={Ukr_literature[1].var1} onClick={Cor_ans}>{Ukr_literature[1].var1}</button>)
                
            }
            else if(getlevel === 'normal') {
                setCnopka1(<div>
                    <button ref={color_btn} value={Ukr_literature[1].var6} onClick={Cor_ans}>{Ukr_literature[1].var6}</button>
                    <button ref={color_btn2} value={Ukr_literature[1].var5} onClick={Cor_ans}>{Ukr_literature[1].var5}</button>
                </div>
                )
                setCnopka2(<div>
                    <button ref={color_btn3} value={Ukr_literature[1].var1} onClick={Cor_ans}>{Ukr_literature[1].var1}</button>
                    <button ref={color_btn4} value={Ukr_literature[1].var2} onClick={Cor_ans}>{Ukr_literature[1].var2}</button>
                </div>
                )
            }
            else if(getlevel === 'hard') {
                setCnopka1(<div>
                    <button ref={color_btn} value={Ukr_literature[1].var1} onClick={Cor_ans}>{Ukr_literature[1].var1}</button>
                    <button ref={color_btn2} value={Ukr_literature[1].var2} onClick={Cor_ans}>{Ukr_literature[1].var2}</button>
                    <button ref={color_btn3} value={Ukr_literature[1].var3} onClick={Cor_ans}>{Ukr_literature[1].var3}</button>
                </div>
                )
                setCnopka2(<div>
                    <button ref={color_btn4} value={Ukr_literature[1].var4} onClick={Cor_ans}>{Ukr_literature[1].var4}</button>
                    <button ref={color_btn5} value={Ukr_literature[1].var5} onClick={Cor_ans}>{Ukr_literature[1].var5}</button>
                    <button ref={color_btn6} value={Ukr_literature[1].var6} onClick={Cor_ans}>{Ukr_literature[1].var6}</button>
                </div>
                )
            }
        };
    },[]);


    return(
        <div>
            <div className="container-1">
                <div><p>{zagolovok}</p></div>
            </div>
            <div className="container-2">
                <div className="btn">
                    {cnopka1}
                </div>
                <div className="btn">
                    {cnopka2}
                </div>
            </div>
        </div>
    )
}

export default Question2