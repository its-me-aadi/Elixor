import React from "react";

import "../../styles/page1.css"
import Img1 from "../../Assets/page1-img.png";

function Page1() {
    return (
        <React.Fragment>
            <div className="pg1-main-div">
                <img className="page1-img" src={Img1} alt="page1-img" />
            </div>
            <div className="pg1-text">
                <p className="pg1-l1">Welcome to Elixzor</p>
                <p className="pg1-l2">Bring your vision to life, frame by frame.</p>
                <button className="pg1-btn">Get Started</button>
            </div>
        </React.Fragment>

    )
}

export default Page1