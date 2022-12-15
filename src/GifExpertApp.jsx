import React, { useState } from 'react';
//con archivo de barril
import {AddCategory, GifGrid} from './components';
// import { AddCategory } from './components/AddCategory';
// import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

const [categories, setCategories] =  useState([ 'The last Of Us',]);

const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories ]);
    // categories.push(newCategory);
    console.log(newCategory)
}

    return(
        <> 
             <h1>GiftExpertApp</h1>
            <AddCategory 
            // setCategories={setCategories}
            onNewCategory={(event) => onAddCategory(event)}
             />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
                {
                categories.map((category) => 
                    (
                        <GifGrid key={category} 
                        category={category}
                        />
                        // <div key={category}>
                        //     <h3>{category}</h3>
                        //     <li>{category}</li>
                        // </div>
                    ))
                }
                
                {/* Gif Item */}
        </>
    )
}