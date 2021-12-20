import React from "react"

function Article({title, date, preview}){
    return(
        <>
        <h3>{title}</h3>
        <small>{date ? date : "January 1, 1970"}</small>
        <p>{preview}</p>
        </>
    )
}

export default Article;