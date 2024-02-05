
import React, { createContext, useState } from 'react'
import avatar from "../assets/img/avatar-profile.jpg"
import card from "../assets/img/Teach Online PNG Transparent, Online Teaching Linear Education Information, Chemistry Clipart, Computer, Online Education PNG Image For Free Download.jpeg"
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
                Products: [
                    {
                        userName: "user2",
                        id: 4,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos, educational content, social media clips, and more. Committed to delivering high-quality productions that resonate with viewers and elevate brands. Let's collaborate to bring your ideas to life through compelling video content!",
                        category: "Video Creating",
                        city: "Paris",
                        Rating: "",
                        image: card

                    },
                    {
                        userName: "user1",
                        id: 2,
                        price: 199,
                        small_desc: "Do you need a web design for your product or service ",
                        description: " Expert web designer offering captivating designs and seamless user experiences for websites. Proficient in layout design, color theory, typography selection, and responsive web development. Dedicated to delivering high-quality, customized solutions tailored to client needs and brand identity. Experienced in creating visually stunning and user-friendly interfaces that drive engagement and elevate online presence. Let's collaborate to bring your digital vision to life!",
                        category: "Web Designer",
                        city: "Paris",
                        Rating: "",
                        image: card

                    },


                ],
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

                    {
                        userName: "user1",
                        id: 3,
                        price: 350,
                        small_desc: "Do you need a web design for your product or service ",
                        description: " Expert web designer offering captivating designs and seamless user experiences for websites. Proficient in layout design, color theory, typography selection, and responsive web development. Dedicated to delivering high-quality, customized solutions tailored to client needs and brand identity. Experienced in creating visually stunning and user-friendly interfaces that drive engagement and elevate online presence. Let's collaborate to bring your digital vision to life!",
                        category: "Web Designer",
                        city: "Paris",
                        Rating: "",
                        image: card

                    },



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
                Products: [
                    {
                        userName: "user3",
                        id: 5,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos, educational content, social media clips, and more. Committed to delivering high-quality productions that resonate with viewers and elevate brands. Let's collaborate to bring your ideas to life through compelling video content!",
                        category: "Video Creating",
                        city: "Berlin",
                        Rating: "",
                        image: card

                    },
                    {
                        userName: "user3",
                        id: 5,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos,",
                        category: "Web developper",
                        city: "Los Angeles",
                        Rating: "",
                        image: card

                    },
                ],
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
                Products: [
                    {
                        userName: "user3",
                        id: 5,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile visual  ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos,",
                        category: "Vid Creating",
                        city: "Los Angeles",
                        Rating: "",
                        image: card

                    },
                    {
                        userName: "user3",
                        id: 5,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos,",
                        category: "Vid Creating",
                        city: "Los Angeles",
                        Rating: "",
                        image: card

                    },
                    {
                        userName: "user3",
                        id: 5,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos,",
                        category: "Ecommerce",
                        city: "Los Angeles",
                        Rating: "",
                        image: card

                    },
                    {
                        userName: "user5",
                        id: 6,
                        price: 300.99,
                        small_desc: "video creator skilled in crafting engaging and versatile ",
                        description: "Professional video creator specializing in producing engaging and impactful visual content for various platforms. Proficient in video editing, animation, and storytelling techniques to captivate audiences and convey messages effectively. Experienced in crafting promotional videos,",
                        category: "Programmation",
                        city: "Los Angeles",
                        Rating: "",
                        image: card

                    },
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
                Products: [

                ],
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
