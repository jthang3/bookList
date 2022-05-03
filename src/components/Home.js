import style from "./Home.module.css";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Book from "./Book";
const Home = () => {
    const [search,setSearch] = useState("");
    const [listBook,setListBook] = useState([]);
    const [wish,setWish] = useState([]);
    const [value] = useDebounce(search,1000);
    const addWishList = (id,title) => {
        let newBook = wish.filter(book => book.id === id);
        if(newBook.length === 0) {
            setWish([
                ...wish,
                {
                    id: id,
                    title: title
                }
            ])

        }
    }
    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=bookname&startIndex=0&maxResults=20`)
            .then(data => data.json())
                .then(data => {
                    setListBook([
                        ...data.items
                    ])
                })
    },[])
    return(
        <div className={style.mainWrapper}>
            <div className={style.searchBook}>
                <input type = "text" onChange = {e => {setSearch(e.target.value)}} value = {search} placeholder = "Search" className = {style.searchInput} />
            </div>
            <div className = {style["booklist--holder"]}>
                {listBook.length > 0 ? listBook.map((data,index) => {
                    return(
                        <Book key={index} data = {data} addWish = {addWishList} />
                    )
                }):<h1>Loading...</h1>}
            </div>
        </div>
    )
}

export default Home;