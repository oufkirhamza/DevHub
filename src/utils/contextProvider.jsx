
import React, { createContext, useState } from 'react'
import avatar from "../assets/img/attachment_119362573.png"
import { Header } from '../layouts/header'
// import card from "../assets/img/Teach Online PNG Transparent, Online Teaching Linear Education Information, Chemistry Clipart, Computer, Online Education PNG Image For Free Download.jpeg"
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    // const [test, setTest] = useState('Hello Test')
    const [myData, setMyData] = useState([
        {
            userName: "admin",
            firstName: "admin",
            secondName: "admin",
            email: "admin@gmail.com",
            phone: "0600000000",
            passWord: "pasword123",
            dateDeNaissance: "02/03/2000",
            profile: {
                image: avatar,
                bio: "If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.",
                following: [],
                followers: [],
                postsProfile: [],
                postsGroupes: [],
                Products: [],
                groupes: [],
            },
        },
        {
            userName: "user1",
            firstName: "user1",
            secondName: "user1",
            email: "user1@gmail.com",
            phone: "0600000000",
            passWord: "pasword123",
            dateDeNaissance: "02/03/2000",
            profile: {
                image: avatar,
                bio: "If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.",
                following: [],
                followers: [],
                postsProfile: [],
                postsGroupes: [],
                Products: [

                    
                


                ],
                groupes: [],
            },
        },
        {
            userName: "user2",
            firstName: "user2",
            secondName: "user2",
            email: "user2@gmail.com",
            phone: "0600000000",
            passWord: "pasword123",
            dateDeNaissance: "02/03/2000",
            profile: {
                image: avatar,
                bio: "If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.",
                following: [],
                followers: [],
                postsProfile: [],
                postsGroupes: [],
                Products: [],
                groupes: [],
            },
        },
        {
            
            userName: "user3",
            firstName: "user3",
            secondName: "user3",
            email: "user3@gmail.com",
            phone: "0600000000",
            passWord: "pasword123",
            dateDeNaissance: "02/03/2000",
            profile: {
                image: avatar,
                bio: "If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.",
                following: [
                    {
                        userName: "user2",
                        firstName: "user2",
                        secondName: "user2",
                        email: "user2@gmail.com",
                        phone: "0600000000",
                        passWord: "pasword123",
                        dateDeNaissance: "02/03/2000",
                        profile: {
                            image: avatar,
                            bio: "If the automobile had followed the same development cycle as the computer, a Rolls-Royce would today cost $100, get a million miles per gallon, and explode once a year, killing everyone inside.",
                            following: [],
                            followers: [],
                            postsProfile: [],
                            postsGroupes: [],
                            Products: [
                                
                            ],
                            groupes: [],
                        },
                    }
                ],
                followers: [],
                postsProfile: [],
                postsGroupes: [],
                Products: [
                ],
                groupes: [],
            },
        },
    ])

    const [user, setUser] = useState(
        {
            userName: "",
            firstName: "",
            secondName: "",
            email: "",
            phone: "",
            passWord: "",
            dateDeNaissance: "",
            profile: {
                image: "",
                bio: "",
                following: [],
                followers: [],
                postsProfile: [],
                postsGroupes: [],
                Products: [],
                groupes: [],
            },
        }
    )
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
    const [poste, setPoste] = useState(
        {
            id: "",
            image: [],
            description: "",
            likes: [],
            comments: [],
        }
    )
    const [comment, setComment] = useState(
        {
            id:"",
            userName: "",
            description: "",
        }
    )
    const [groupe, setGroupe] = useState(
            {
                groupeName: "",
                members: [],
                accesPosts: [],
                id: "",
            }
    )

    console.log(myData);

    const [connectedUser, setConnectedUser] = useState([]);

    return (
        <>

            

            <MyContext.Provider value={[myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe , connectedUser, setConnectedUser]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
