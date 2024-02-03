
import React, { createContext, useState } from 'react'
import avatar from "../assets/img/avatar-profile.jpg"
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
                Products: [],
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
                following: [],
                followers: [],
                postsProfile: [],
                postsGroupes: [],
                Products: [],
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
            image: "",
            description: "",
            likes: [],
            comments: [],
        }
    )
    const [comment, setComment] = useState(
        {
            userName: "",
            descriptio: "",
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

    return (
        <>
            <MyContext.Provider value={[myData, setMyData, user, setUser, product, setProduct, poste, setPoste, comment, setComment, groupe, setGroupe]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
