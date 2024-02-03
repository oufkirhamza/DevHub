
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';

export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)

    const [myData, setMyData] = useContext(MyContext)
    const [user, setUser] = useContext(MyContext)
    const [product, setProduct] = useContext(MyContext)
    const [poste, setPoste] = useContext(MyContext)
    const [comment, setComment] = useContext(MyContext)
    const [groupe, setGroupe] = useContext(MyContext)
    console.log(myData);
    return (
        <>
            <h1>Hello from home</h1>
        </>
    );
}
