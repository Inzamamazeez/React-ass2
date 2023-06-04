import style from './Favorite.module.css';
import { useSelector } from 'react-redux'

export default function Favourites() {


    const selects = useSelector(state => state.favourites.noofFav)
    // console.log(selects)

    return (
        <>
            <div className={style.heading_header}>
                <h1>Movies Fav Lists</h1>
            </div>

            <div className={style.main_div}>
                {
                    selects.map((item) => {
                        return (

                            <div className={style.main_cards} key={item.imdbID}>
                                <div className={style.sub_cards}>
                                    <img src={item.Poster} alt="" />
                                    <h3>{item.Title}</h3>
                                    <p>{item.Type}</p>
                                    <p>{item.Year}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}