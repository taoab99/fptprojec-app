import { React, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Menu from './menu';
import Menumobile from './Menumobile';
import Nav from './Nav';
import '../../Sass/index.sass';


export default function RootMenu(props) {

    const toogleMenu = useSelector(state => state.toggleMenu.value);

    useEffect(() => {
        // const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        //     console.log(user);
        // });
        return () => {
            // unregisterAuthObserver();
        }
    }, [])
    return (
        <div className="Rootmenu">
            <Menu />
            <Nav />
            {
                toogleMenu && <Menumobile />
            }
        </div>

    )
}