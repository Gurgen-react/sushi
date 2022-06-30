import React, {useState} from 'react';
import {CardInfoType, cardsInfo} from "./card/cardInfo";
import {Card} from "./card/Card";

export const PaginationBlock = () => {
    //массив с карточками
    const [cards, setCardsInfo] = useState<CardInfoType>(cardsInfo)
    return (
        <>


            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0 auto',
                width: '1000px',
                height: '400px',
                overflowY: "scroll",


            }}>
                {cards.map((c, id) => {
                    return <Card
                        key={id}
                        name={c.name}
                        image={c.image}
                        info={c.info}
                    />
                })}
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi harum itaque molestias ut. Ab
            asperiores beatae blanditiis cumque delectus dignissimos doloremque earum eius eligendi, est excepturi
            facere fugiat in itaque laboriosam libero molestias neque nulla numquam possimus quasi quo recusandae
            repellat, sint sunt temporibus velit veniam. Magnam, nemo, reiciendis.

        </>

    );
};

