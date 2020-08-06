import React from 'react';
import style from '../MainPage.module.css'
import { Window } from './Window';

export const Building: React.FC = ({}) => {

    //Array e incremento com todas as 12 janelas
    const allWindowsElement = [];
    for (var i = 0; i < 12; i++) {
        allWindowsElement.push(<Window/>);
    }

    return (

        <div className={style.building}>
            
            <div className={style.windows}>

                {allWindowsElement}

                <div className={style.ground_floor}/>
            </div>

        </div>

    );
  }
  