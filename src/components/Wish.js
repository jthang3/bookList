import style from "./Wish.module.css";
const Wish = ({wish,deleteWish}) => {
    let displayValue = () => {
        return(
            wish.map((data,key) => {
                return(
                    <div key={key} className = {style["wish--main-wrapper"]}>
                        <div className = {style["wish--lists"]}>
                            <h2>{data.title}</h2>
                            <button onClick={() => {
                                deleteWish(data.id)
                            }}>DELETE</button>
                        </div>
                    </div>
                )
            })

        )
    }
    return(
        <div>
            {displayValue()}
        </div>
    )
}

export default Wish;