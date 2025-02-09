import React, { useState } from "react";

function Number({selectedNum,setSelectedNum,error}) {
    const num = [1, 2, 3, 4, 5, 6];
    
    return (
        <div className="main2">
            <h2 className="error">{error}</h2>
            <div className="con4">
            {num.map((nn, index) => (
                <div 
                    key={index} 
                    className={`box ${selectedNum === nn ? "selected" : ""}`}
                    onClick={() => setSelectedNum(nn)}>                
                    {nn}
                </div>
            ))}
            
            </div>
            <p className="last">SELECT A NUMBER</p>
        </div>
    );
}

export default Number;
