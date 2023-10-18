import React from 'react';

function Banner({title, txt}) {

    return (
        <div className="about-sec-head gap-2">
            <h1 className="display-3 fw-bold text-white text-center">{title}</h1>
            <p className="text-white-50">{txt}</p>
        </div>
    );
}

export default Banner;