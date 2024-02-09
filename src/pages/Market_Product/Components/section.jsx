import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaBackspace } from "react-icons/fa";
import { MyContext } from '../../../utils/contextProvider';
import { Card } from 'flowbite-react';
import ads from '../../../assets/img/zackuser.jpg'
import "./section.sass"


export const Section = () => {
    const { id } = useParams();
    const [myData] = useContext(MyContext);
    const product = myData[0].profile.Products.find((product) => product.id === id);
    return (
        <>
            <div className=' animation h-screen flex items-center justify-center font-mono rounded-2xl  '>
                <div className='   h-[80%] w-[80%] flex'>
                    <div className=' w-[70%] h-[100%] flex gap-4'>
                        <div className='flex flex-col  gap-3  w-[10vw] ml-4'>
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                            <img src={product.image} alt="" className='h-[138px] w-[110px]' />
                        </div>
                        <div> <img className='h-[80vh] w-[35vw]' src={product.image} alt="" /></div>
                    </div>
                    <div className='bg-[#030712] border border-[#f9fafb4c] text-gray-300 h-[100%] w-[80%] p-5 flex flex-col justify-evenly rounded-xl'>
                        <div className='text-3xl font-bold  '>
                            {/* title */}
                            <div className='flex h-100%  justify-end'>
                                <Link className='px-1' to={'/market'}><FaBackspace className='text-4xl' /></Link>
                            </div>
                            <div>
                                {product.name}
                            </div>
                            <div>
                                {product.price} €
                            </div>
                        </div>
                        <div className='w-[80%]'>
                            <h2 className='font-bold'>Description:</h2>
                            {product.description}
                            {product.category}
                            {/* description */}
                        </div>
                        <div className='w-[90%]'>
                            {/* lorem */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem eius doloribus temporibus nesciunt fugit distinctio alias id similique officiis libero!
                        </div>
                        <div>
                            <span className='font-bold'>
                                Durée de formation
                            </span>
                            <div className='flex gap-4 py-3'>

                                <button className='outline outline-1 py-1 px-3 rounded-lg hover:bg-white  '>6 months</button>
                                <button className='outline outline-1 py-1 px-3 rounded-lg hover:bg-white  '>14 months</button>
                                <button className='outline outline-1 py-1 px-3 rounded-lg hover:bg-white  '>3 months</button>
                            </div>
                            <button className="outline outline-1 py-1 px-3 rounded-lg mt-4 w-[50%]  hover:bg-white ">ADD TO CARD</button>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}