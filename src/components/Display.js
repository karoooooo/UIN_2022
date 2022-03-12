 export default function Display () = {
    const articleList = {
        {nr: "1", title: Uno, content: Numero Uno, imgUrl: "_" },
        {nr: "2", title: Dos, content: Numero Dos, imgUrl: "_" },
        {nr: "3", title: Tres, content: Numero Tres, imgUrl: "_" }
    };
   
   return(
    articleList.map(
    ({text.value}) =>
        <section nr={nr.value}>
        <img src={imgUrl} alt={title}/>
            <article>
                <h1>{title}</h1>
                <p>{content}</p>
            </article>
        </section>
    )
    
   )    

}