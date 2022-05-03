import { Fragment, useEffect, useState } from "react";
import style from "./Book.module.css";

const Book = ({data, addWish}) => {
    const {volumeInfo: {imageLinks: {smallThumbnail}}} = data;
    const {volumeInfo: {title}} = data;
    const {volumeInfo: {publisher}} = data;
    const {volumeInfo: {publishedDate}} = data;
    const {volumeInfo: {authors}} = data;
    const {volumeInfo: {description}} = data;

    return(
        <div className={style.mainCard} id = {data.id} onClick = {(e) => {
            addWish(data.id,title)
        }}>
            <section className={style.pictureHolder}>
                <img className = {style.picture} src={smallThumbnail} />
            </section>
            <section className={style.infoHolder}> 
                <h2>{title}</h2>
                <div className={style["author--name"]}>
                    <p className={style["label--holder"]}>Author:</p>
                    {authors?.length > 0 ? <p>{authors[0]}</p>:null}
                </div>
                <div className={style.publisher}>
                    <p className={style["label--holder"]}>Publisher:</p>
                    <p>{publisher}</p>
                </div>
                <div className={style["publish--date"]}>
                    <p className={style["label--holder"]}>Published Date:</p>
                    <p>{publishedDate}</p>
                </div>
                    {description ? <p className = {style["book--description"]}>{description}</p>:null}
            </section>
        </div>
    )
}

export default Book;