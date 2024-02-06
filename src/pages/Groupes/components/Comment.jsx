import React, { useState } from "react";
import "./Modale.sass";
import { CiCirclePlus } from "react-icons/ci";
import { FaImage, FaImages, FaRegComment } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";



export default function Comment() {
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

    const [comment, setComment] = useState('')

    const saveComment = (e) => {
        console.log(e.target.value);
    }

    const addComment = (e) => {
        // console.log(setComment);
    }



    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <FaRegComment className="text-4xl" />

            </button>

            {modal && (
                <div className="modal w-[100%]">
                    <div onClick={toggleModal} className="overlay "></div>
                    <div className="modal-content flex flex-col gap-3 w-[100%]">
                        <h1 className="text-2xl text-center">Your Comment</h1>
                        <div className="flex items-center gap-3 p-3">
                            <input onChange={(e) => saveComment(e)} type="text" className="w-[100%] p-4 rounded-lg" placeholder="Your comment here" />
                            <button onClick={addComment} className="border border-black px-3 py-1 rounded-full">
                                Submit
                            </button>
                        </div>


                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>


                    </div>
                </div>
            )}

        </>
    );
}