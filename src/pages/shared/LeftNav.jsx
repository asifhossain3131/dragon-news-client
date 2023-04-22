import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <>
        <h5>All categories</h5>
        <div>
{
    categories.map(category=> <p key={category.id}>
        <Link to={`/category/${category.id}`} className='text-decoration-none ps-3 fw-semibold text-secondary'>{category.name}</Link>
    </p>)
}
        </div>
       </>
    );
};

export default LeftNav;