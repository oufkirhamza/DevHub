import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaBackspace } from "react-icons/fa";
import { MyContext } from '../../../utils/contextProvider';
import { Card } from 'flowbite-react';

export const Section = () => {
    const { id } = useParams();
    const [myData] = useContext(MyContext);
    // Filtrer les données pour trouver l'élément correspondant à l'ID
    const check = myData.find((data) => data.profile.Products.some((product) => product.id === parseInt(id)));
    const product = check.profile.Products.find((product) => product.id === parseInt(id));
    return (
        <div className='bg-neutral-100 w-[100vw] h-screen flex  justify-center items-center overflow-y-hidden font-sans'>
            <img src={product.image} className='w-[60%]' alt="" />
            <a href="#" className="flex h-[75%]  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col justify-between p-4 leading-normal w-[70%]">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.userName}</h5>
                    <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold text-2xl">{product.price} € <span className='text-gray-500 line-through text-sm'>{product.price + 50}€</span></p>
                    <p>{product.description}</p>
                    <p>{product.city}</p>
                </div>
                <div>
                    <div className='flex  h-[100%] ml-[20vw]'>
                        <Link className='px-1' to={'/market'}><FaBackspace className='text-4xl' /></Link>
                    </div>
                </div>

            </a>

        </div>
    );
};