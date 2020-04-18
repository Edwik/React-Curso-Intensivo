import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchInput, Pane, Avatar } from 'evergreen-ui'
import usuario from './../../assets/images/imagen.png';

function Header() {

    const NavBar = styled.div`
        display:flex;
        flex-direction: row;
        width:95%;
    `

    const NavBarLista = styled.ul`
        list-style-type: none;
        display:flex;
        margin:10px;
    `

    const Link = styled.a`
         text-decoration:none;
         margin:10px;
         color:white;
    `
    const User = styled(Pane)`
        margin-left:auto;
    `
    const [busqueda, setBusqueda] = useState('');

    return (
        <NavBar>
            <NavBarLista>
                <li><Link href="#movies">MOVIES</Link></li>
                <li><Link href="#tvseries">TV SERIES</Link></li>
                <li><Link href="#channels">CHANNELS</Link></li>
                <li><Link href="#app">APP</Link></li>
                <li><Link href="#settings">SETTINGS</Link></li>
            </NavBarLista>
            <SearchInput
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                placeholder="Find your movie" height={30} marginBottom={40} marginTop={5}
                onClick={() => { console.log(`busqueda ${busqueda}`) }}
            />
            <User>
                <Avatar src={usuario} marginBottom={40} marginTop={8} />
            </User>
        </NavBar>
    )
}

export { Header }