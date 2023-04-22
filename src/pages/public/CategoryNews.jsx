import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNewsCard from './CategoryNewsCard';

const CategoryNews = () => {
    const {id}=useParams()
    const [categoriesNews, setCategoriesNews]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/categories/${id}`)
        .then(res=>res.json())
        .then(data=>setCategoriesNews(data))
    },[])
    return (
        <>
            <h1>category no- {id}</h1>
            <div>
                {
 categoriesNews.map(categoryNews=><CategoryNewsCard key={categoryNews._id} categoryNews={categoryNews}></CategoryNewsCard>)
                }
            </div>
        </>
    );
};

export default CategoryNews;