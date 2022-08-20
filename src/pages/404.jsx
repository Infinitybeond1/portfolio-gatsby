import React from 'react';
import '../styles/404.css';
import { LinkBreak } from 'phosphor-react'

function Error() {
  return (
    <>
      <div className="ed">
        <div className="ei">  
          <LinkBreak size={120} color="#cce9ea"/>
        </div>
        <div className="et" size={50}>  
          <p>
            Hmm... This is awkward, it seems the page doesn't exist
          </p>
        </div>
      </div>      
    </>
  );
}

export default Error;
