import React, { useContext, useEffect, useState } from 'react';
import "./section.sass"
import { Sidebar } from 'flowbite-react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { Button, Modal } from 'flowbite-react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

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
            id: "",
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

    return (
        <>
            <div className='h-[10vh]  bg-sky-200 '>
                <h3>New Year , New skills </h3>
            </div>
            <div className='bg-neutral-100 h-fit flex gap-6 p-5 font-sans position-relative '>
                {/* left side-bar */}
                <div className='w-[18%] h-screen bg-neutral-200 position-fixed font-sans '>
                    <Sidebar aria-label="Sidebar with call to action button example  " className='flex flex-col justify-between h-screen bg-black'>
                        <div>
                            <div>
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
                        <div className='mt-3'>
                            <div class="w-full max-w-sm h-[102%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
                                <div class="flex items-baseline text-gray-900 dark:text-white">
                                    <span class="text-3xl font-semibold">$</span>
                                    <span class="text-5xl font-extrabold tracking-tight">19</span>
                                    <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                                </div>
                                <ul role="list" class="space-y-5 my-7">
                                    <li class="flex items-center">
                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>
                                    </li>
                                    <li class="flex">
                                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>
                                    </li>
                                    <li class="flex  decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">API Access</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
                                    </li>
                                    <li class="flex line-through decoration-gray-500">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
                                    </li>
                                </ul>
                                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </Sidebar>
                </div>
                {/* herro section */}
                <div className='w-[88%] bg-neutral-200 p-5 rounded-xl'>
                    <div >
                        <div>
                        </div>
                        <div>
                        </div>
                        <div className=' flex '>
                            <input type="text" placeholder="Search Product" className="w-[50%] px-3 py-1.5 rounded-2xl pl-8" onChange={handleSearchTextChange} />
                            <div>
                                {/* modaaaaal */}
                                <Button className='bg-lime-500' onClick={() => setOpenModal(true)}>Add</Button>
                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                    <Modal.Header>Terms of Service</Modal.Header>
                                    <Modal.Body>
                                        <div className="space-y-6 flex gap-2 items-center">
                                            <div>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input onChange={(e) => price(e)} value={priceProduct} type="text" />
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input onChange={(e) => nameProduct(e)} value={productName} type="text" />
                                                </p>


                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input onChange={(e) => desc(e)} value={descreption} type="text" />
                                                </p>

                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    <input onChange={(e) => cat(e)} value={category} type="text" />
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
                        <div className="flex flex-wrap gap-4  cursor-pointer min-h-[100vh] p-3">
                            {myData.map(element =>
                                element.profile.Products.map(e =>
                                    <div>
                                        <div key={e.id} className="bg-white  h-[57] w-[100%] p-4 rounded-lg shadow-md flex flex-col justify-between hover:scale-105 duration-700 ">
                                            <img src={e.image} className='rounded-lg h-[40vh] w-[100%]' alt="" />
                                            <p className='text-2xl font-bold'> {e.price} € <span className='text-gray-500 line-through text-sm'>{e.price}€</span></p>
                                            <p> <span className='font-bold text-xl'></span>{e.name}</p>
                                            <p><span className='font-bold text-xl'></span> {e.category}</p>
                                            <p className='flex  '><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300' /><FaStar className='text-yellow-300' /><FaStar /><FaStar /></p>
                                            <Link to={`/Products/${e.id}`} className="    text-blue-500">
                                                <div className=' flex justify-end'>
                                                    <button className='' >Show details</button>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer container>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="https://flowbite.com"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                name="Wissu"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">wissalu</Footer.Link>
                                    <Footer.Link href="#">tech CSS</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Github</Footer.Link>
                                    <Footer.Link href="#">Discord</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}
