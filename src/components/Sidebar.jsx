import React from 'react'
import { Stack, Typography } from '@mui/material';
import { categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <>
            <Stack direction="row" sx={{ height: { sm: 'auto', md: '95%' }, overflowY: 'auto', flexDirection: { md: 'column' }, ml: 2, mr: 3, position: 'relative', left: 0 }}>
                {categories.map((category) => {
                    return (
                        <button
                            key={category.name}
                            className="category-btn"
                            style={{ Width: '300px', color: category.name === selectedCategory ? 'white' : 'red', background: category.name === selectedCategory ? 'red' : '#000', paddingRight: '50px', whiteSpace: 'nowrap' }}
                            onClick={() => { setSelectedCategory(category.name) }}>
                            <span style={{ marginRight: '10px', paddingRight: '5px' }}>{category.icon}</span><span>{category.name}</span>
                        </button>
                    )
                })}
            </Stack>
        </>
    )
}

export default Sidebar