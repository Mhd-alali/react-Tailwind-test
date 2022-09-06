import React from 'react';

function Slider({width}) {
    return ( 
    <div className='w-[400px] h-4 rounded-full bg-white relative text-slate-400'>
        <div className="flex justify-between -translate-y-7">
            <p>0</p>
            <p>50</p>
            <p>100</p>
        </div>
        <div style={{width:width+"%"}} className={`h-4 rounded-full bg-yellow-300 absolute z-20 left-0 top-0 transition-all`}></div>
        <p className='text-right'>%</p>
    </div> );
}

export default Slider;