import React from 'react';
import Data from '../data.json';

    const Down = (props) => {
        return(
            <div
            onClick={props.onClick}
             style={{
                 display:"flex",
                 flexDirection:"row",
                 justifyContent:"center",
                 alignItems:"center",
            marginBottom:"15px",
            transform:"translateY(+155px)",
            maxWidth:"50px"
          }}>
              <img src={Data.icons.down} alt="down"></img>
           </div>
        )
    }


export default Down;