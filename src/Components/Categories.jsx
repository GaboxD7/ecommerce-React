import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";


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
                    <li key={el}>
                        <Link to={`/category/${el}`} className="dropdown-item">
                            {`${el}`}
                        </Link>
                    </li>
                 ))}
             </>
}