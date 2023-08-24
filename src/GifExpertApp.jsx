import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['batman'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                onNewCategory={(newCategory) => onAddCategory(newCategory)}
            />

            <ol>
                {categories.map((category, i) => (
                    <GifGrid category={category} key={i} />
                ))}
            </ol>
        </>
    )
}
