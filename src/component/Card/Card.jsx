import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const loadData = async () =>{
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
            const value = await res.json();
            // console.log(value.data.tools);
            setData(value.data.tools)
        }
        loadData();
    },[])
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 mt-7'>
        {
            data.map((singleData) => {
                // console.log(singleData)
                
                return <SingleData singleData={singleData}/>
            })
         }

         
         {      /* *********single line data map**********
                {
                    data.map((singleData) => (
                        <SingleData singleData={singleData} key = {singleData.id}/>
                ))}
                Don't read to return fuction 
                */
         }

        </div>   
        </>
    );
};

export default Card;