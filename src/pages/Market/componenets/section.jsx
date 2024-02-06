import React, { useContext, useEffect, useState } from 'react';
import "./section.sass"
import { Sidebar } from 'flowbite-react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { Button, Modal } from 'flowbite-react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import ads from '../../../assets/img/digital.png'

export const Section = ({ data }) => {
    const [myData, setMyData] = useContext(MyContext);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [productName, setMyProductName] = useState('')
    const [priceProduct, setPriceProduct] = useState('')
    const [descreption, setDescreption] = useState('')
    const [category, setCategory] = useState('')
    const [images, setImg] = useState('')

    const [product, setProduct] = useState(
        {
            id: "wissal",
            name: "",
            price: "",
            description: "",
            image: "",
            type: "",
            categorie: "",
        }
    )
    const clearInputs = () => {
        setMyProductName('');
        setPriceProduct('');
        setDescreption('');
        setCategory('');
        setFile('');
    };
    console.log(product);
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(element => element === category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };
    const filterByCategory = (product) => {
        if (selectedCategories.length === 0 || selectedCategories.includes(product.category)) {
            return true;
        }
    };
    const Reset = () => {
        setSelectedCategories("");
    };
    const nameProduct = (e) => {
        setMyProductName(e.target.value)
        console.log(productName);
    }

    const price = (e) => {
        setPriceProduct(e.target.value)
        console.log(priceProduct);
    }
    const desc = (e) => {
        setDescreption(e.target.value)
        console.log(descreption);
    }
    const cat = (e) => {
        setCategory(e.target.value)
        console.log(category);
    }
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));

    }
    const submitData = (e) => {
        product.name = productName
        product.image = file
        product.categorie = category
        product.price = priceProduct
        product.description = descreption
        myData[0].profile.Products.unshift(product)
        
        setProduct((prevProduct) => ({
            id: prevProduct.id,
        }))
        console.log(myData[0]);
        clearInputs();
        
    }
    const removeProduct = (productId) => {
        // let filter = product.filter(element => element.id === "wissal");

    };

    return (
        <>
            <div className='h-[9vh] flex justify-center items-center  bg-gray-400 '>
                <h3 className='font-bold text-2xl font-mono  '>New Year , New skills .. GET YOUR COURSE WITH -10% :) </h3>
            </div>
            <div className='bg-neutral-100 h-fit flex gap-6 p-5 font-sans position-relative '>
                {/* left side-bar */}
                <div className='w-[18%] h-screen bg-neutral-200 position-fixed font-sans '>
                    <Sidebar aria-label="Sidebar  with call to action button example  " className=' flex flex-col   bg-black'>
                        <div >
                            {/* categories */}
                            <div className=' h-fit flex flex-col gap-4 '>
                                <div class="w-full max-w-sm h-[102%]  p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Catégories</h5>
                                    <div class="flex items-baseline text-gray-900 dark:text-white ">
                                    </div>
                                    <ul role="list" class=" py-3 w-[30vw] h-[25vh] flex flex-col justify-between">
                                        <li class="flex  decoration-gray-500 ">
                                            <div> <input type="checkbox" onClick={Reset} /><span className='ml-2' >All</span> </div>

                                        </li>
                                        <li class="flex items-center">
                                            <div><input type="checkbox" onChange={() => handleCategoryChange('Web Designer')} /><span className='ml-2'  >Web Designer</span></div>
                                        </li>
                                        <li class="flex">
                                        </li>
                                        <li class="flex">
                                            <div> <input type="checkbox" onChange={() => handleCategoryChange('Web developper')} /><span className='ml-2'  >Web developper</span></div>
                                        </li>
                                        <li class="flex  decoration-gray-500">
                                            <div> <input type="checkbox" onChange={() => handleCategoryChange('Programmation')} /><span className='ml-2' >Programmation</span></div>

                                        </li>
                                        <li class="flex  decoration-gray-500">
                                            <div> <input type="checkbox" onChange={() => handleCategoryChange('Vid Creating')} /><span className='ml-2'  >Vid Creating</span></div>

                                        </li>
                                        <li class="flex  decoration-gray-500">
                                            <div> <input type="checkbox" onChange={() => handleCategoryChange('Ecommerce')} /><span className='ml-2' >Ecommerce</span></div>

                                        </li>
                                    </ul>
                                </div>

                                <div>
                                </div>
                            </div>
                        </div>
                        {/* collections */}
                        <div>
                            <div>
                                <div class="w-full max-w-sm h-[102%]  p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Collection</h5>
                                    <div class="flex items-baseline text-gray-900 dark:text-white ">
                                    </div>
                                    <ul role="list" class=" py-3 w-[30vw] h-[25vh] flex flex-col justify-between">
                                        <li class="flex  decoration-gray-500 ">
                                            <div> <input type="radio" onClick={Reset} /><span className='ml-2' >All</span> </div>

                                        </li>
                                        <li class="flex items-center">
                                            <div><input type="radio" onChange={() => handleCategoryChange('Web Designer')} /><span className='ml-2'  >Web Designer</span></div>
                                        </li>
                                        <li class="flex">
                                        </li>
                                        <li class="flex">
                                            <div> <input type="radio" onChange={() => handleCategoryChange('Web developper')} /><span className='ml-2'  >Web developper</span></div>
                                        </li>
                                        <li class="flex  decoration-gray-500">
                                            <div> <input type="radio" onChange={() => handleCategoryChange('Programmation')} /><span className='ml-2' >Programmation</span></div>

                                        </li>
                                        <li class="flex  decoration-gray-500">
                                            <div> <input type="radio" onChange={() => handleCategoryChange('Vid Creating')} /><span className='ml-2'  >Vid Creating</span></div>

                                        </li>
                                        <li class="flex  decoration-gray-500">
                                            <div> <input type="radio" onChange={() => handleCategoryChange('Ecommerce')} /><span className='ml-2' >Ecommerce</span></div>

                                        </li>
                                    </ul>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>

                    </Sidebar>
                </div>
                {/* herro section */}
                <div className='w-[80%] bg-neutral-200 p-5 rounded-xl'>
                    <div >
                        <div>
                        </div>
                        <div>
                        </div>
                        <div className=' flex justify-between'>
                            <input type="text" placeholder="Search Product" className="w-[50%] px-3 py-1.5 rounded-2xl pl-8" onChange={handleSearchTextChange} />
                            <div>
                                {/* modaaaaal */}
                                <Button className='bg-purple-600' onClick={() => setOpenModal(true)}>Add Product</Button>
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header>Create ur Product </Modal.Header>
                                    <Modal.Body >
                                        <div className="space-y-6  flex gap-2 items-center font-mono">
                                            <div className='flex flex-col gap-2'>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input className=' rounded-xl' onChange={(e) => price(e)} value={priceProduct} type="text" placeholder='Price' />
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input className=' rounded-xl' onChange={(e) => nameProduct(e)} value={productName} type="text" placeholder='title of product' />
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input className=' rounded-xl' onChange={(e) => desc(e)} value={descreption} type="text" placeholder='describe ur product' />
                                                </p>

                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input className=' rounded-xl' onChange={(e) => cat(e)} value={category} type="text" placeholder='Category' />
                                                </p>
                                            </div>
                                            <div>
                                                <input type="file" onChange={handleChange} />
                                                <img src={file} value={images} />
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={() => { submitData(); setOpenModal(false); clearInputs(); }} >Create</Button>
                                        <Button color="gray" onClick={() => setOpenModal(false)}>
                                            Decline
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    {/* feeds */}
                    <div>
                        <div className="flex flex-wrap gap-4  cursor-pointer min-h-[100vh] p-3 ">
                            {myData.map(element =>
                                element.profile.Products.map(e =>
                                    <div>
                                        <div key={e.id} className="bg-white  h-[60vh] w-[18vw] p-2 rounded-lg shadow-md flex flex-col justify-between hover:scale-105 duration-700 ">
                                            <button onClick={() => removeProduct(e.id)} className={` ${element.profile.Products.includes(e) ? "" : "hidden"} font-mono font-bold text-xl`} >X</button>
                                            <img src={e.image} className='rounded-lg h-[45vh] w-[100%]' alt="" />
                                            <p className='text-2xl font-bold'> {e.price} € <span className='text-gray-500 line-through text-sm'>{e.price}€</span></p>
                                            <p> <span className='font-bold text-xl'></span>{e.name}</p>
                                            <p><span className='font-bold text-xl'></span> {e.category}</p>
                                            <p className='flex  '><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300' /><FaStar /><FaStar /></p>
                                            <div className='  mb-5'>

                                                <Link to={`/Products/${e.id}`} >
                                                    <div className=' flex justify-end '>
                                                        <button className='bg-purple-600 text-white py-1 px-2 rounded-xl' >More details...</button>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <div className='w-[20%] h-screen bg-neutral-200 position-fixed font-sans '>

                    <img src={ads} alt="" className='h-[100vh]' />
                </div>
            </div>

        </>
    )
}
