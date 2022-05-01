import React from 'react';

import './Loading.css';

const Loading = () => {
   return (
      <div className="loading">
         <div className="outer_Circle">
            <div className="middle_Circle">
               <div className="inner_Circle"></div>
            </div>
         </div>
      </div>
   );
};

export default Loading;
