import React from 'react';
import '../styles/Layout.css';

const PageOverview = (props) => {
    return (
        <div class="main">
            <h1>{props.header}</h1>
            {props.topImgSrc !== undefined &&
                <img src={props.topImgSrc} alt={"image of " + props.topPhotoSrc} className="headerImg"/>
            }
            <div className="row">
                {props.profileImgSrc !== undefined &&
                <div className="column">
                    <img src={props.profileImgSrc} alt={"image of " + props.profileImgSrc} id="profileImg"/>
                </div>}
                <div className="column">
                    <p>{props.children}</p>
                </div>
            </div>

        </div>
    );
};

const ListOverview = (props) => {
    return (
        <div>

        </div>
    )
}

export { PageOverview, ListOverview };