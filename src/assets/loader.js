import React from 'react';
import {Circles} from "react-loader-spinner";

function Loader(props) {
    return (

        props.visible && <div className={"loader"}><Circles
            height="100"
            width="100"
            color="#0044ff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
        /></div>
    );
}

export default Loader;