import React, { useEffect, useState, useMemo } from 'react';
import log from '../../images/CatwikiLogo white.svg';
import background from '../../images/HeroImagelg.png';
import Card from './Card';
import image1 from '../../images/image 2.png';
import image2 from '../../images/image 1.png';
import image3 from '../../images/image 3.png';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { filterData, homeData } from '../../redux/action';
import { renderBreeds, renderCards } from '../../functions';
function Home() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.DataReducer.homeData);
    useEffect(
        () => {
            dispatch(homeData());
            setTimeout(() => {}, 2000);
        },
        [ dispatch ]
    );

    console.log(data, 'data');
    const [ displayInput, setDisplayInput ] = useState(false);
    const [ value, setValue ] = useState(false);
    return (
        <div className='w-full'>
            <div className=' mob:p-4  pl-[108px] flex flex-col h-5/6   pt-[108px] relative  rounded-t-3xl text-white '>
                <img
                    onClick={() => {
                        setDisplayInput(false);
                    }}
                    className='w-screen h-full  absolute object-cover top-0 left-0 z-4 lg:rounded-none  rounded-t-3xl'
                    src={background}
                    alt=''
                />
                <div
                    onClick={() => {
                        setDisplayInput(false);
                    }}
                    className='z-0 mob:w-3/4 mob:flex mob:justify-start mb-[12px] w-full'
                >
                    <img className='h-[90px] z-0  ' src={log} alt='catwiki' />
                </div>
                <h1
                    onClick={() => {
                        setDisplayInput(false);
                    }}
                    className='mb-[52px] mob:w-2/4 w-1/3 text-[24px] z-0 '
                >
                    Get to kwon more about your cat breed
                </h1>
                <div className='h-[70px] mob:w-3/4 bg-red-300 w-[400px] mob:mb-2 mb-36 z-4 '>
                    <div className='w-[400px] mob:w-full relative'>
                        <input
                            onClick={() => {
                                setDisplayInput(true);
                            }}
                            onChange={(e) => {
                                dispatch(filterData(e.target.value));
                            }}
                            type='text'
                            className='mob:w-full h-[70px] w-[400px] pl-[28px] rounded-3xl text-black outline-none placeholder:text-black text-18px'
                            placeholder={`Search`}
                        />
                        <span className='material-icons absolute right-[26px] top-[22px] text-black'>search</span>
                        <div className={`bg-white mob:block rounded-2xl mt-2 p-2 ${displayInput ? '' : 'hidden'}`}>
                            <div
                                className={`h-[100px] flex flex-col scrollbar scrollbar-thin scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-100  overflow-y-auto  text-black bg-white`}
                            >
                                {renderBreeds(data)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => {
                    setDisplayInput(false);
                }}
                className=' rounded-b-3xl pt-[40px] bg-brown mob:px-4  px-[108px]'
            >
                <div className=' relative mb-8 z-0'>
                    <h1 className='text-brownText text-[18px]  z-2 '>Most Searched Breeds</h1>
                    <span className='w-12 border-2 border-brownText absolute' />
                </div>
                <div className='flex w-full mob:flex-col font-bold justify-between '>
                    <h1 className='text-[48px] mob:w-5/6 w-3/6'>66+ Breeds For you to discover</h1>
                </div>
                <div className='flex w-full mt-[20px] flex-wrap justify-around  pb-10'>{renderCards(data)}</div>
            </div>
            <div className='flex w-full px-[108px] mob:px-0 mob:flex-col'>
                <div className=' w-[40%] mob:w-full flex flex-col justify-center '>
                    <div className='relative mb-4'>
                        <span className='absolute w-16 border-2 border-brownText' />
                        <h1 className='text-[48px]'>Why should you have a cat?</h1>
                    </div>
                    <p className='mb-4'>
                        Having a cat around you can actually trigger the release of calming chemicals in your body which
                        lower your stress and anxiety leves
                    </p>
                </div>
                <div className='flex w-[60%] mob:w-full'>
                    <div className='mob:p p-4 flex flex-col '>
                        <img className='m-2' src={image1} alt='cat' />
                        <img className='w-3/4 m-2 self-end' src={image2} alt='cat' />
                    </div>
                    <div className='mob:p p-4'>
                        <img src={image3} alt='cat' />
                    </div>
                </div>
                <div />
            </div>
        </div>
    );
}

export default Home;
