import React from 'react';
import {CardType} from "./cardInfo";
import InfoIcon from '@mui/icons-material/Info';
import s from './Card.module.css'


export const Card = (props: CardType) => {
    return (
        <div  style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: "center center",
            backgroundSize: 'cover',



            width: "300px",
            height: "190px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div className={s.header}></div>
            <h3>{props.name}</h3>
                <InfoIcon />
            <p>{props.info}</p>
        </div>
    );
};

