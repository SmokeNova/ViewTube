import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../utils/constants';
import { Paper } from '@mui/material';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
        setSearchTerm("");
    }

    return (
        <Paper component="form" onSubmit={handleSubmit} sx={{ pl: 2, borderRadius: 20, mr: { sm: 5, } }}>
            <input className='search-bar' type="text" value={searchTerm} placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
            <IconButton sx={{ p: '10px', color: 'red' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar