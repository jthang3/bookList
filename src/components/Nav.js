import { Link } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = () => {
    return(
        <div className={style.mainWrapper}>
            <div className={style.mainWrapper__mainTitle}>
                Book Library
            </div>
            <Link className = {style.home} to = "/">Home</Link>
            <Link className = {style.wish} to = "/wish">Wish Lists</Link>
        </div>
    )
}
export default Nav;