import {Route,Routes} from "react-router-dom";
import style from "./Nav.module.css";
const Nav = () => {
    return(
        <div className={style.mainWrapper}>
            <div className={style.mainWrapper__mainTitle}>
                Book Library
            </div>
            <div>
                Home
            </div>
            <div>
                Wish lists
            </div>
        </div>
    )
}
export default Nav;