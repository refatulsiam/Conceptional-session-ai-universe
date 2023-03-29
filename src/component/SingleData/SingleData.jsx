import React from 'react';

const SingleData = (props) => {
    // console.log(props.singleData);
    const {image, features, name, published_in} = props.singleData;
    console.log(features);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure><img className='w-full h-64' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleData;