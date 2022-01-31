import React from 'react';

function Bars(props) {
    return (
        <div className='w-[300px] flex  justify-between'>
            {Array.from({ length: 5 }).map((x, y) => {
                if (y < props.length) {
                    return (
                        <div className='relative  h-4'>
                            {<span className={`w-14 absolute rounded-lg  border-[6px] border-brownText`} />}
                        </div>
                    );
                }
                return (
                    <div className='relative  h-4'>
                        {<span className={`w-14 absolute rounded-lg  border-[6px] border-gray-300`} />}
                    </div>
                );
            })}
        </div>
    );
}

export default Bars;
