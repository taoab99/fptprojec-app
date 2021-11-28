import { React } from 'react';
import { Link } from 'react-router-dom';
import { Router } from '../../router/Router';




export default function Nav() {

    return (
        <div className="router">
            {
                Router.map((route, index) => {
                    return <Link key={index}
                        to={
                            {
                                pathname: route.path,
                                state: route.enpont
                            }
                        }
                    >
                        <img style={{ width: '25px', color: "#fff" }} src={route.icon} alt={route.lable} />
                        <span>{route.lable}</span>
                    </Link>
                })
            }

        </div >
    )
}