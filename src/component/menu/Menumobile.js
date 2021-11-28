import { React, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toogleMenu } from '../../app/SliceReducer/ToggleMenuSlice';
import Inputsearch from './Inputsearch';
import Nav from './Nav';
import SinginPopover from './SinginPopover';

export default function Menumobile() {
    const ref = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        const handlewindow = (event) => {
            const target = event.target;
            const handeleToggle = toogleMenu();
            if (target === ref.current) {
                dispatch(handeleToggle);
            }
        }
        window.addEventListener('click', handlewindow);
        return () => {
            window.removeEventListener('click', handlewindow);
        }
    }, [dispatch])

    return (
        <div className="menu-mobile" ref={ref}>
            <div className="menu-mobile-content">
                <div className="menu-content-top">
                    <Inputsearch />
                </div>
                <Nav />
                <SinginPopover />
            </div>
        </div>
    )
}