import React from 'react';
import Card from './Card';

const CardList = ({avatars}) => {
    const cardsArray = avatars.map((user, i) => {
        // Below code was added to demo the 'Error Boundry' feature introduced in React 16 .
        // if(true){
        //     throw new Error('NOOOOOOO!');
        // }
        return (
                <Card 
                    key={i} 
                    id={user.id} 
                    name={user.name /*+ " " + user.surname*/} 
                    email={user.email}
                    /*region={user.region}*/
                />
        );
    })
    return(
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;