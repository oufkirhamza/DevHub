import React, { useContext, useState } from 'react';
import "./section.sass"
import { IoIosArrowForward, IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';

export const Section = ({ data }) => {
    const [selectedCategory, SearchCategorie] = useState("");
    const [myData] = useContext(MyContext);

    // Filtrer les données pour trouver l'élément correspondant à l'ID
    // const check = myData.find((data) => data.profile.Products.some((product) => product.id === parseInt(id)));


    // const product = check.profile.Products.find((product) => product.id === parseInt(id));

    const Filter = (category) => {
        SearchCategorie(category);
    };

    
    const Reset = () => {
        SearchCategorie("");
    };
    const filterElement = (event) => {
        // let newTab = movie.filter(element => element.title.toLowerCase().includes(event.target.value.toLowerCase()));
    }
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchText, setSearchText] = useState('');


    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const filterByCategory = (product) => {
        if (selectedCategories.length === 0 || selectedCategories.includes(product.category)) {
            return true;
        }
        
    };

    const filterBySearchText = (product) => {
        return product.category.toLowerCase().includes(searchText.toLowerCase());
    };
 

    return (
        <>
            <div className='bg-neutral-100 h-fit flex gap-6 p-5 font-sans position-relative '>
                {/* left side-bar */}
                <div className='w-[18%] h-screen bg-neutral-200 position-fixed '>
                    <div className='text-xl flex justify-between p-2 border-b-2 border-gray-400'>
                        <h1 className='font-bold'>Catégories</h1>
                        <span onClick={Reset} className='cursor-pointer' >Reset</span>
                    </div>


                    <div className='categorie p-3 grid grid-cols-1 gap-2'>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Web Design")}>Web Design</button>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Vid Creating")}>Vid Creating</button>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Divertiss")}>Divertiss</button>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Technologie")}>Technologie</button>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Affaires")}>Affaires</button>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Finance")}>Finance</button>
                        <button className='py-2 shadow-lg outline-neutral-200 bg-neutral-300 outline  rounded-xl hover:bg-violet-600 ' onClick={() => Filter("Linguistique")}>Linguistique</button>



                    </div>
                </div>

                {/* herro section */}
                <div className='w-[88%] bg-neutral-200 p-5 rounded-xl'>
                    <div className='bg-violet-200 h-[23vh] p-4 py-7 flex flex-col gap-3 rounded-lg'>
                        <h1 className="text-2xl font-bold ">Discover your ideal product right here! </h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dignissimos? Lorem, ip</p>


                        <div style={{ position: 'relative' }}>
                            <input onChange={handleSearchTextChange}type="text" placeholder="Search Product" className="w-[90%] px-3 py-1.5 rounded-2xl pl-8" />
                            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                <IoIosSearch />
                            </span>
                        </div>

                    </div>
                    {/* cards - products */}
                    <div>
                        <div className="grid grid-cols-4 gap-4 py-5 cursor-pointer min-h-[100vh]">
                            {/* {filteredData.map(product => (
                                <div key={product.id} className="bg-white  h-[40vh] p-4 rounded-lg shadow-md hover:scale-105 duration-700 ">
                                    <img src={product.image} className='rounded-lg' alt="" />
                                    <h2 className="text-lg font-semibold">{product.type}</h2>
                                    <p> <span className='font-bold text-xl'>Description:</span>{product.description}</p>
                                    <p className='text-xl font-bold'>Prix: {product.price} €</p>
                                    <p><span className='font-bold text-xl'>Catégorie:</span> {product.category}</p>
                                    <p>Ville: {product.city}</p>
                                    <Link to={`/Products/${product.id}`} className="  absolute bottom-3 right-3 text-blue-500 hover:text-blue-700">
                                        <IoIosArrowForward />
                                    </Link>
                                </div>
                                
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

