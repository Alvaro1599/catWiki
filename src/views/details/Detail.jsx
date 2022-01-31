import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detail, homeData } from '../../redux/action';
import Bars from './Bars';

function Detail() {
    const data = useSelector((selector) => selector.DataReducer);
    const params = useParams().id;
    const dispatch = useDispatch();
    console.log(data, 'bbbbbbb');
    const newData = data.detail ? data.detail[0] : null;
    console.log(newData, 'aaaa');
    useEffect(() => {
        dispatch(homeData());
        dispatch(detail(params));
    }, []);
    return (
        <div>
            {newData ? (
                <div>
                    <div className='w-full flex pt-10'>
                        <div className='w-1/2 h-80  flex justify-center rounded-3xl'>
                            <img
                                className='w-8/12  rounded-3xl object-cover'
                                src={`https://cdn2.thecatapi.com/images/${newData.breeds[0].reference_image_id}.jpg`}
                                alt=''
                            />
                        </div>
                        <div className='w-1/2'>
                            <h1 className='text-[36px] font-bold'>{newData.breeds[0].name}</h1>
                            <p className='mb-4'>{newData.breeds[0].description}</p>
                            <div className='p-2 flexs'>
                                <label className='font-bold'>Temperament:</label>
                                <h1>{newData.breeds[0].temperament}</h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold '>Origin:</label>
                                <h1>{newData.breeds[0].origin}</h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold '>Life Span:</label>
                                <h1>{newData.breeds[0].life_span}</h1>
                            </div>
                            <div className='p-2  pt-4 flex'>
                                <label className='font-bold w-4/12'>Adaptability:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].adaptability} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Afecction level:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].affection_level} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Child Friendly:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].child_friendly} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Gromming:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].grooming} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Intelligence:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].intelligence} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Healt issues:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].health_issues} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Social needs:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].social_needs} />
                                </h1>
                            </div>
                            <div className='p-2 flex'>
                                <label className='font-bold w-4/12'>Stranger friendly:</label>
                                <h1>
                                    <Bars length={newData.breeds[0].stranger_friendly} />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    );
}

export default Detail;
