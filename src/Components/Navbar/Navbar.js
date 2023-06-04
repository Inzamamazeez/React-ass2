import style from  './Navbar.module.css';
import { Link } from 'react-router-dom'

import { BsFillCalendarHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

export default function Navbar() {
    return (
        <>
            <div className={style.main_navbar}>
                <h1>NetFlixa!</h1>

                <div className={style.sub_lists_nav}>
                    <Link to={'/'} className={style.link}><AiFillHome values='Home' className={style.imported_iconss} /></Link>
                    <Link to={'/myfavourites'} className={style.link}><BsFillCalendarHeartFill className={style.imported_iconss} /></Link>
                </div>
            </div>
        </>
    )
}

