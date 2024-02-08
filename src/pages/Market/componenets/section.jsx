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
    const connectedUser = myData[0];
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
        // verifier si l'input est vide
        if (!productName || !priceProduct || !descreption || !category || !file) {
            alert(" remplir tous les champs svvvvp");
            return;
        }
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
    const removeProduct = (productId , user) => {
        const connectedUser = myData.find(userData => userData.userName === user.userName);
        const productIndex = connectedUser.profile.Products.findIndex(prod => prod.id === productId);
        if (productIndex !== -1) {
            connectedUser.profile.Products.splice(productIndex, 1);
            setMyData([...myData]); 
        } else {
            alert("Vous n'êtes pas autorisé à supprimer ce produit");
        }

    };

    return (
        <>
            <div className='h-[9vh] flex justify-center items-center bg-[#030712]   '>
                <h3 className='font-bold text-2xl font-mono  '>New Year , New skills .. GET YOUR COURSE WITH -10% :) </h3>
            </div>
            <div className='p-0 m-0'>

                <div className='bg-[#030712] h-fit flex gap-6 p-5 font-mono position-relative  '>
                    {/* left side-bar */}
                    <div class=" group bg-[#030712] w-[20vw] text-gray-300  before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#6D28D9] via-[#321463] to-[#12022c] before:absolute before:top-0 w-70 P-3 relative  border border-[#f9fafb4c] flex flex-col  gap-2  rounded-2xl overflow-hidden">
                        <p className='text-gray-300 text-2xl z-10 p-4 border-b-2'>Filter </p>
                        <div class="z-10 bg-[#030712] text-[#F9FAFB] flex flex-col p-5">
                            <p className='font-bold'>Catégories</p>

                            <div className='p-2'> <input type="checkbox" onClick={Reset} /><span className='ml-2' >All</span> </div>
                            <div className='p-2'><input type="checkbox" onChange={() => handleCategoryChange('Web Designer')} /><span className='ml-2'  >Web Designer</span></div>
                            <div className='p-2'> <input type="checkbox" onChange={() => handleCategoryChange('Web developper')} /><span className='ml-2'  >Web developper</span></div>
                            <div className='p-2'> <input type="checkbox" onChange={() => handleCategoryChange('Programmation')} /><span className='ml-2' >Programmation</span></div>
                            <div className='p-2'> <input type="checkbox" onChange={() => handleCategoryChange('Vid Creating')} /><span className='ml-2'  >Vid Creating</span></div>
                            <div className='p-2'> <input type="checkbox" onChange={() => handleCategoryChange('Ecommerce')} /><span className='ml-2' >Ecommerce</span></div>

                        </div>
                        <div class="z-10  bg-[#030712] text-[#F9FAFB] flex flex-col p-5">
                            <p className='font-bold'>Collection</p>
                            <div className='p-3'> <input type="radio" onClick={Reset} /><span className='ml-2' >All</span> </div>
                            <div className='p-3'><input type="radio" onChange={() => handleCategoryChange('Web Designer')} /><span className='ml-2'  >Web Designer</span></div>
                            <div className='p-3'> <input type="radio" onChange={() => handleCategoryChange('Web developper')} /><span className='ml-2'  >Web developper</span></div>
                            <div className='p-3'> <input type="radio" onChange={() => handleCategoryChange('Programmation')} /><span className='ml-2' >Programmation</span></div>
                            <div className='p-3'> <input type="radio" onChange={() => handleCategoryChange('Vid Creating')} /><span className='ml-2'  >Vid Creating</span></div>
                            <div className='p-3'> <input type="radio" onChange={() => handleCategoryChange('Ecommerce')} /><span className='ml-2' >Ecommerce</span></div>

                        </div>
                    </div>
                    {/* herro section */}
                    <div className='w-[80%] bg-[#030712] border border-[#f9fafb4c]   p-5 rounded-xl'>
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
                            <div className="flex flex-wrap gap-4  cursor-pointer min-h-[100vh] p-3  ">
                                {myData.map(element =>
                                    element.profile.Products.map(e =>
                                        <div>
                                            <div key={e.id} className="bg-white  h-[60vh] w-[18vw] p-2 rounded-lg shadow-md flex flex-col justify-between hover:scale-105 duration-700 ">
                                                <button onClick={() => removeProduct(e.id )} className={` ${element.profile.Products.includes(e) ? "" : "hidden"} font-mono font-bold text-xl`} >supp</button>
                                                <img src={e.image} className='rounded-lg h-[45vh] w-[100%]' alt="" />
                                                <div className='flex justify-between '>
                                                <div className=' w-[70%]'>

                                                <p className='text-2xl font-bold'> {e.price} € <span className='text-gray-500 line-through text-sm'>{e.price}€</span></p>
                                                <p> <span className='font-bold text-xl'></span>{e.name}</p>
                                                <p><span className='font-bold text-xl'></span> {e.category}</p>
                                                <p className='flex  '><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300' /><FaStar /><FaStar /></p>
                                                </div>

                                                <div className=' flex flex-col justify-end' >

                                                    <Link to={`/Products/${e.id}`} >
                                                        <div className=' flex justify-end '>
                                                            <button className='bg-purple-600 text-white py-1 px-2 rounded-xl' >More...</button>
                                                        </div>
                                                    </Link>
                                                </div>
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
            </div>

        </>
    )
}
