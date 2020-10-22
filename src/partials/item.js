import React from 'react';

const Item = (props) => {
    return (
        <div className="row">
            {props.imgSrc !== undefined &&
          <div className="column">
            <img src={props.imgSrc} alt={"image of " + props.imgSrc} 
              className={props.imgType !== undefined && props.imgType}/>
          </div>}
          <div className="column">
            <p>{props.children}</p>
          </div>
        </div>
    );
}

export default Item;