import { useEffect, useState } from "react";
import { Link} from "react-router-dom";


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);
    return (
        <div className="ml-4 space-y-6 mt-4">
            {
                categories.map(category =><Link to={`/category/${category.id}`} className=" block text-xl font-semibold " key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default Categories;