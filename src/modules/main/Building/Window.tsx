import React from 'react';
import style from '../MainPage.module.css';
import { useState } from 'react';

export const Window: React.FC = ({}) =>{

    //Recebe style quando acesa ou apagada
    const [color, setColor] = useState(style.window_off);

    //Verifica style atual do element clicado e insere o inverso on/off
    const updateColor = (cssClass:any) =>{

        if(cssClass === style.window_off){
            setColor(style.window_on);
        }else{
            setColor(style.window_off);
        }
    }
    
    return (
        <div className={color} onClick={() => updateColor(color)}/>
    );
};