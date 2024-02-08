import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaBackspace } from "react-icons/fa";
import { MyContext } from '../../../utils/contextProvider';
import { Card } from 'flowbite-react';
import ads from '../../../assets/img/zackuser.jpg'

export const Section = () => {
    const { id } = useParams();
    const [myData] = useContext(MyContext);
    const product = myData[0].profile.Products.find((product) => product.id === id);
    return (
        <>
            <div className='bg-gray-400 h-screen flex items-center justify-center font-mono'>
                <div className='bg-white h-[80%] w-[80%] flex'>
                    <div className=' w-[70%] h-[100%] flex gap-4'>
                        <div className='flex flex-col  gap-3  w-[10vw] ml-4'>
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                        </div>
                        <div> <img className='h-[80vh] w-[35vw]' src={product.image} alt="" /></div>
                    </div>
                    <div className='bg-gray-300 h-[100%] w-[80%] p-5 flex flex-col justify-evenly'>
                        <div className='text-3xl font-bold '>
                            {/* title */}
                            {product.name}
                            {product.price} €
                        </div>
                        <div>
                            {product.description}
                            {product.category}
                            {/* description */}
                        </div>
                        <div >
                            {/* lorem */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eius doloribus temporibus nesciunt fugit distinctio alias id similique officiis libero!
                        </div>
                        <div>
                            <span className='font-bold'>
                                Durée de formation
                            </span>
                            <div className='flex gap-4'>

                                <button className='outline outline-1 py-1 px-3 rounded-lg hover:bg-black'>6 months</button>
                                <button className='outline outline-1 py-1 px-3 rounded-lg hover:bg-black'>14 months</button>
                                <button className='outline outline-1 py-1 px-3 rounded-lg hover:bg-black'>3 months</button>
                            </div>
                            <button className="outline outline-1 py-1 px-3 rounded-lg mt-4">ADD TO CARD</button>

                        </div>
                        <div>
                            <div className='flex h-100% ml-20vw'>
                                <Link className='px-1' to={'/market'}><FaBackspace className='text-4xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}