import React, { useContext, useEffect, useState } from "react";
import "./Modale.sass";
import { CiCirclePlus } from "react-icons/ci";
import { FaImage, FaImages, FaRegComment } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { MyContext } from "../../../utils/contextProvider";




export default function Creategrp() {

    // const [groupe, setGroupe] = useContext(MyContext)
    const [grpName, setGrpName] = useState('')
    

    const [myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment] = useContext(MyContext)
    // console.log(myData[0].profile.groupes);
    const [groupe, setGroupe] = useState({
        groupeName: '',
        members: [],
        accesPosts: [],
        id: 0,
    });
    // console.log(groupe);

    // console.log(myData);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    // let id = 0
    // const addGroup = () => {
    // myData[0].profile.groupes.push(groupe)
    //     groupe.groupeName=grpName
    //     groupe.id= id+=1
    // console.log(myData[0].profile);
    // console.log(groupe);
    //     setGrpName("")

    // }

    const handleChange = (e) => {
        console.log(e.target.value);
        setGrpName(e.target.value);
        console.log("grpName:", grpName);
    };

    const addGroup = () => {
        setGroupe((prevGroupe) => ({
            id: prevGroupe.id + 1,
            groupeName: grpName,
        }));
        setGrpName(''); 
        toggleModal();
    };

    useEffect(() => {
        if (groupe.groupeName !== '') {
            const updatedMyData = [...myData];
            updatedMyData[0].profile.groupes.push({ ...groupe });
            console.log(updatedMyData);
            setMyData(updatedMyData);
        } 
    }, [groupe.groupeName]);


    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                <button className="bg-white w-[100%] py-4 rounded-lg">Create a groupe</button>
            </button>

            {modal && (
                <div className="modal w-[100%]">
                    <div onClick={toggleModal} className="overlay "></div>
                    <div className="modal-content flex flex-col gap-3 w-[100%]">
                        <h1 className="text-2xl text-center">Your Comment</h1>
                        <div className="flex items-center gap-3 p-3">
                            <input onChange={(e) => setGrpName(e.target.value)} value={grpName} type="text" className="w-[100%] p-4 rounded-lg" placeholder="Groupe name" />
                            <button onClick={addGroup} className="border border-black px-3 py-1 rounded-full">
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