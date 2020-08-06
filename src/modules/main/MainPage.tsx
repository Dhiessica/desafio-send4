import React from 'react';
import style from './MainPage.module.css'
import { Building } from './Building/Building';

export default function MainPage() {

    return (
        <div>

            <div className={style.container} >

                <Building/>

            </div>

            <div className={style.back}>

            </div>

        </div>
    );
  }
  