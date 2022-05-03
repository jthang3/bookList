import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Book from "./Book";
const Home = ({addWish}) => {
    const [search,setSearch] = useState("");
    const [listBook,setListBook] = useState([]);
    const [value] = useDebounce(search,1000);
    console.log(search,"simple search");
    console.log(value,"Debounce search");
    useEffect(()=>{
        if(value) {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&startIndex=0&maxResults=20`)
            .then(data => data.json())
                .then(data => {
                    setListBook([
                        ...data.items
                    ])
                })
        }
        else {
            fetch(`https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20`)
                .then(data => data.json())
                    .then(data => {
                        setListBook([
                            ...data.items
                        ])
                    })

        }
    },[value])
    return(
        <div className={style.mainWrapper}>
            <div className={style.searchBook}>
                <input type = "text" onChange = {e => {setSearch(e.target.value)}} value = {search} placeholder = "Search" className = {style.searchInput} />
            </div>
            <div className = {style["booklist--holder"]}>
                {listBook.length > 0 ? listBook.map((data,index) => {
                    return(
                        <Book key={index} data = {data} addWish = {addWish} />
                    )
                }):<h1>Loading...</h1>}
            </div>
        </div>
    )
}

export default Home;