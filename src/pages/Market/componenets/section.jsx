import React, { useContext, useState } from 'react';
import "./section.sass"
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { Button, Dropdown, Modal } from 'flowbite-react';
import ads from '../../../assets/img/digital.png'
import { FaHome } from 'react-icons/fa';
import { FaUser, FaUserPlus } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi2";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TiDeleteOutline } from "react-icons/ti";

export const Section = ({ data }) => {
    const [myData, setMyData] = useContext(MyContext);
    const [openModal, setOpenModal] = useState(false);
    const [screenArray, setScreenArray] = useState(myData);
    const [productName, setMyProductName] = useState('');
    const [priceProduct, setPriceProduct] = useState('');
    const [descreption, setDescreption] = useState('');
    const [category, setCategory] = useState('');
    const [file, setFile] = useState('');

    const nameProduct = (e) => {
        setMyProductName(e.target.value);
    }

    const price = (e) => {
        setPriceProduct(e.target.value);
    }

    const desc = (e) => {
        setDescreption(e.target.value);
    }

    const cat = (e) => {
        setCategory(e.target.value);
    }

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const submitData = () => {
        if (!productName || !priceProduct || !descreption || !category || !file) {
            alert("Remplissez tous les champs svp");
            return;
        }
        const newProduct = {
            id: Date.now().toString(),
            name: productName,
            price: priceProduct,
            description: descreption,
            image: file,
            type: "",
            categorie: category,
        };
        // Insérer le nouveau produit au début de la liste
        setMyData(prevData => {
            const newData = [...prevData];
            newData[0].profile.Products.unshift(newProduct);
            return newData;
        });
        clearInputs();
    }

    const deleteProduct = (productId) => {
        setMyData(prevData => {
            const newData = prevData.map(element => ({
                ...element,
                profile: {
                    ...element.profile,
                    Products: element.profile.Products.filter(product => product.id !== productId)
                }
            }));
            return newData;
        });
    };

    const clearInputs = () => {
        setMyProductName('');
        setPriceProduct('');
        setDescreption('');
        setCategory('');
        setFile('');
    };
    const filterElement = (event) => {
        let newTab = myData.filter(element => element.productName.toLowerCase().includes(event.target.value.toLowerCase()));
        console.log(newTab);
        setScreenArray(newTab);
    }

    const [user, setUser, poste, setPoste, comment, setComment, groupe, setGroupe, connected, setConnected] = useContext(MyContext);

    return (
        <>
            {/* navbar */}
            <div className='nav bg-[#030712] fixed top-0 w-[100%] z-50  flex items-center py-3 px-5 justify-between  shadow-lg shadow-[#6c28d955]'>
                <Link className='text-xl font-bold text-[#bcbcbc] hover:text-[#F9FAFB]' to={'/home'}><img width={50} alt="logo" /></Link>
                <div className='navbar flex justify-around w-[40%]'>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/home'}><FaHome /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/profile'}><FaUser /> </Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/market'}><MdLocalGroceryStore /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/suggestions'}><FaUserPlus /></Link>
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/groupes'}><HiUserGroup /></Link>
                </div>
                <input className='w-[40%] p-1 px-3 rounded-full border-none outline-none font-mono' type="text" placeholder='search freinds' />
                <div className='flex gap-2'>
                    <RiLogoutBoxLine className='text-[#F9FAFB] text-2xl cursor-pointer' />
                    <Link className='text-[#bcbcbc] hover:text-[#F9FAFB] text-2xl' to={'/settings'}><IoIosSettings /></Link>
                </div>
            </div>
            <div className='h-[9vh] flex justify-center items-center bg-[#030712]   '>
                <h3 className='font-bold text-2xl font-mono  '>New Year , New skills .. GET YOUR COURSE WITH -10% :) </h3>
            </div>
            <div className='p-0 m-0'>
                <div className='bg-[#030712] h-fit flex gap-6 p-5 font-mono position-relative  '>
                    <div class=" group bg-[#030712] w-[20vw] text-gray-300  before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-[#6D28D9] via-[#321463] to-[#12022c] before:absolute before:top-0 w-70 P-3 relative  border border-[#f9fafb4c] flex flex-col  gap-2  rounded-2xl overflow-hidden">
                        <p className='text-gray-300 text-2xl z-10 p-4 border-b-2'>Filter </p>
                        <div class="z-10 bg-[#030712] text-[#F9FAFB] flex flex-col p-5">
                            <p className='font-bold'>Catégories</p>
                            <div className='p-2'> <input type="checkbox" /><span className='ml-2' >All</span> </div>
                            <div className='p-2'><input type="checkbox" /><span className='ml-2'  >Web Designer</span></div>
                            <div className='p-2'> <input type="checkbox" /><span className='ml-2'  >Web developper</span></div>
                            <div className='p-2'> <input type="checkbox" /><span className='ml-2' >Programmation</span></div>
                            <div className='p-2'> <input type="checkbox" /><span className='ml-2'  >Vid Creating</span></div>
                            <div className='p-2'> <input type="checkbox" /><span className='ml-2' >Ecommerce</span></div>
                        </div>
                        <div class="z-10  bg-[#030712] text-[#F9FAFB] flex flex-col p-5">
                            <p className='font-bold'>Collection</p>
                            <div className='p-3'> <input type="radio" /><span className='ml-2' >All</span> </div>
                            <div className='p-3'><input type="radio" /><span className='ml-2'  >Web Designer</span></div>
                            <div className='p-3'> <input type="radio" /><span className='ml-2'  >Web developper</span></div>
                            <div className='p-3'> <input type="radio" /><span className='ml-2' >Programmation</span></div>
                            <div className='p-3'> <input type="radio" /><span className='ml-2'  >Vid Creating</span></div>
                            <div className='p-3'> <input type="radio" /><span className='ml-2' >Ecommerce</span></div>
                        </div>
                    </div>
                    <div className='w-[80%] bg-[#030712] border border-[#f9fafb4c]   p-5 rounded-xl'>
                        <div>
                            <div>
                            </div>
                            <div>
                            </div>
                            <div className=' flex justify-between'>
                                <input onChange={(e) => filterElement(e)} type="text" placeholder="Search Product" className="w-[50%] px-3 py-1.5 rounded-2xl pl-8" />
                                <div>
                                    {/* modal */}
                                    <Button className='bg-purple-600' onClick={() => setOpenModal(true)}>Add Product</Button>
                                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                        <Modal.Header>Create ur Product </Modal.Header>
                                        <Modal.Body>
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
                                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 bg-white">
                                                        <input className=' rounded-xl' onChange={(e) => cat(e)} value={category} type="text" placeholder='Category' />
                                                        {/* <Dropdown label="Category" className='w-[30vw] ' dismissOnClick={false}>
                                                            <Dropdown.Item>Dashboard</Dropdown.Item>
                                                            <Dropdown.Item>Settings</Dropdown.Item>
                                                            <Dropdown.Item>Earnings</Dropdown.Item>
                                                            <Dropdown.Item>Sign out</Dropdown.Item>
                                                        </Dropdown> */}
                                                    </p>
                                                </div>
                                                <div>
                                                    <input type="file" onChange={handleChange} />
                                                    <img src={file} alt="" />
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={() => { submitData(); setOpenModal(false); }} >Create</Button>
                                            <Button color="gray" onClick={() => setOpenModal(false)}>Decline</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        {/* feeds */}
                        <div>
                            <div className="flex flex-wrap gap-4  cursor-pointer min-h-[100vh] p-3  ">
                                {myData && myData.map(element =>
                                    element.profile.Products.map(e => (
                                        <div key={e.id}>
                                            <div className="bg-white  h-[60vh] w-[18vw] p-2 rounded-lg shadow-md flex relative flex-col justify-between hover:scale-105 duration-700 ">
                                                <button onClick={() => deleteProduct(e.id)} className="absolute top-2 right-2 font-mono font-bold text-xl"><TiDeleteOutline className='text-2xl' /></button>
                                                <img src={e.image} className="rounded-lg h-[45vh] w-[100%]" alt="" />
                                                <div className="flex justify-between ">
                                                    <div className=" w-[70%]">
                                                        <p className="text-2xl font-bold"> {e.price} € <span className="text-gray-500 line-through text-sm">{e.price + "50"}€</span></p>
                                                        <p> <span className="font-bold text-xl"></span>{e.name}</p>
                                                        <p><span className="font-bold text-xl"></span> {e.category}</p>
                                                        <p className="flex  "><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar className="text-yellow-300" /><FaStar /><FaStar /></p>
                                                    </div>
                                                    <div className=" flex flex-col justify-end" >
                                                        <Link to={`/Products/${e.id}`} >
                                                            <div className=" flex justify-end ">
                                                                <button className="bg-purple-600 text-white py-1 px-2 rounded-xl">More...</button>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='w-[20%] h-screen  rounded-xl  position-fixed font-sans flex items-center px-3'>
                        <img src={ads} alt="" className='h-[100vh] w-[35vw] rounded-xl' />
                        {/* <div className='text-6xl font-mono '>
                            NEW YEAR NEW SKILLS :)
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}