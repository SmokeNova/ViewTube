import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import { Stack } from '@mui/material';
import { SearchBar } from './'

const Navbar = () => {
  return (
    <Stack direction="row" p={2} sx={{ justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: '#000', zIndex: 999 }}>
      <Link to="/" display="flex" alignitems="center">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar