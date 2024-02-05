import React, { useState } from "react";
import "./Modale.sass";
import { CiCirclePlus } from "react-icons/ci";
import { FaImage, FaImages } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";



export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <CiCirclePlus className='text-3xl mr-10' />
            </button>

            {modal && (
                <div className="modal ">
                    <div onClick={toggleModal} className="overlay "></div>
                    <div className="modal-content flex flex-col gap-3 ">
                        <h1 className="text-2xl text-center">Post Something</h1>
                        <div className="flex items-center gap-5">
                            <div className="">
                            <FaImages className="text-8xl" />
                                <input type="file" onChange={handleChange} placeholder="Upload image" />
                                <img className=' rounded-' src={file} /> 
                            </div>

                            <div className="flex items-center gap-3 w-[50%]">
                                <input className="py-3 px-5 rounded-full " type="text"  placeholder="Type something"/>
                                <FaPen  className="text-xl"/>
                            </div>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>

                        <div className="flex justify-end">
                            <button className="border border-black px-3 py-1 rounded-full">
                            Submit
                        </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}