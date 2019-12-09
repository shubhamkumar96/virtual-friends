import React from 'react';

const Card = ({id, name, email, region}) => {
    return (
        <div className = 'tc bg-moon-gray dib br3 pa1 ma2 grow bw2 shadow-5'>
            {/* <img src={`https://robohash.org/${id}?100x100`} alt="robots"/> */}
            <img src={`http://flathash.com/${name}`} alt="avatars"/>  
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <h4>{region}</h4>
            </div>
        </div>
    );
}

export default Card;