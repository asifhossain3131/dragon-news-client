import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNewsCard from './CategoryNewsCard';

const CategoryNews = () => {
const categoriesNews=useLoaderData()
 
    return (
        <>
            <h1>Total news- {categoriesNews.length}</h1>
            <div>
                {
 categoriesNews.map(categoryNews=><CategoryNewsCard key={categoryNews._id} categoryNews={categoryNews}></CategoryNewsCard>)
                }
            </div>
        </>
    );
};

export default CategoryNews;