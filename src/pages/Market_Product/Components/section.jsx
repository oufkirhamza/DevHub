import React, { useState } from 'react';
import "./section.sass"
import { Link, useParams } from 'react-router-dom';
import myImage from "../../../assets/img/video.png";
import myImage1 from "../../../assets/img/web-design.png";
import myImage2 from "../../../assets/img/photography.png";
import myImage3 from "../../../assets/img/filming.png";
import myImage4 from "../../../assets/img/video.png";
import myImage5 from "../../../assets/img/git.png";
import myImage6 from "../../../assets/img/video.png";
import { FaBackspace } from "react-icons/fa";

export const Section = () => {

    const { id } = useParams()
    const [Data, setData] = useState(
        [
            {
                id: 1,
                price: 10.99,
                description: "Do you need a web design for your product or service",
                category: "Web Design",
                city: "Paris",
                image: myImage
            },
            {
                id: 2,
                price: 5.99,
                description: "API pour convertir des devises étrangères",
                category: "Vid Creating",
                city: "New York",
                image: myImage1

            },
            {
                id: 3,
                price: 15.99,
                description: "Service de messagerie instantanée ",
                category: "Communication",
                city: "San Francisco",
                image: myImage2

            },
            {
                id: 4,
                price: 20.99,
                description: "Service d'analyse lorem hdgjhgdf ",
                category: "Web Design",
                city: "Berlin",
                image: myImage5

            },
            {
                id: 5,
                price: 7.99,
                description: "API pour obtenir des données météorologiques boutiques ",
                category: "Science",
                city: "London",
                image: myImage3
            },
            {
                id: 6,
                price: 25.99,
                description: " créer des boutiques ",
                category: "Commerce",
                city: "Tokyo",
                image: myImage3
            },
            {
                id: 7,
                price: 12.99,
                description: "Service de conversion de la parole en texte",
                category: "Web Design",
                city: "Toronto",
                image: myImage6
            },
            {
                id: 8,
                price: 8.99,
                description: "API pour traduire des textes dans différentes langues",
                category: "Linguistique",
                city: "Sydney",
                image: myImage2

            },
            {
                id: 9,
                price: 18.99,
                description: "Outil de gestion de projet collaboratif en ligne",
                category: "Affaires",
                city: "Madrid",
                image: myImage1
            },
            {
                id: 10,
                price: 14.99,
                description: "Service pour reconnaître les objets et les visages dans les images",
                category: "Web Design",
                city: "Rome",
                image: myImage2

            },
            {
                id: 11,
                price: 30.99,
                description: "Hébergement de bases de données relationnelles et NoSQL",
                category: "Divertiss",
                city: "Singapore",
                image: myImage2

            },
            {
                id: 12,
                price: 6.99,
                description: "API pour obtenir la localisation géographique d'une adresse",
                category: "Technologie",
                city: "Hong Kong",
                image: myImage2

            },
            {
                id: 13,
                price: 22.99,
                description: "Plateforme de streaming vidéo en direct et à la demande",
                category: "Divertiss",
                city: "Los Angeles",
                image: myImage2

            },
            {
                id: 14,
                price: 17.99,
                description: "API pour détecter et reconnaître les visages dans les images",
                category: "Web Design",
                city: "Seoul",
                image: myImage2

            },
            {
                id: 15,
                price: 16.99,
                description: "Outil de gestion des stocks pour les entreprises",
                category: "Commerce",
                city: "Beijing",
                image: myImage2

            },

        ]
    )
    const check = Data.filter((Data) => Data.id == id)



    return (
        <>
            <div className='bg-neutral-100 h-screen flex flex-col   justify-center items-center overflow-y-hidden  font-mono'>




                {
                    check.map((element, index) =>
                        <>

                            <a href="#" class=" flex-col h-[46%] items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                                <div className='flex  justify-between'>
                                    <img src={element.image} alt="" />
                                    <Link className='px-1 ' to={'/market'}> <FaBackspace className='text-4xl' /></Link>

                                </div>
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {element.category} </h5>
                                    <p class="mb-3  text-gray-700 dark:text-gray-400 font-bold text-2xl"> {element.price}</p>
                                    <p>{element.description} Lorem ipsum dolor,  Tempora asperiores ut magnam placeat corporis ab quis dignissimos cumque suscipit nesciunt.</p>
                                    <p>{element.city}</p>
                                </div>
                                <div className=' flex justify-end'>

                                    <button className='bg-violet-600 py-1 px-3 rounded-lg '>Add </button>
                                </div>

                            </a>
                        </>
                    )
                }
            </div>

        </>
    );
};

