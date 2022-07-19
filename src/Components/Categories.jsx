import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Categories () {
    const [caregory, serCategory] = useState([])

    useEffect(() => {

        const db = getFirestore();
        const CategoriesCollection = collection(db, 'categories')
        getDocs(CategoriesCollection).then((documentos) => {

            serCategory((documentos.docs.map(doc => doc.data().name )))

        })


    }, [])

    return   <>
                    
                {caregory.map((el) => ( 
                <NavDropdown.Item>
                        <Link key={el} className="barra-link-off2" to={`/category/${el}`} >
                            {`${el}`}
                        </Link>
                </NavDropdown.Item>
       
                 ))}
             </>
}