import { useParams } from "react-router-dom"
import "../styles/pages/article.css"
import { posts } from "../data/datatest"
import { Link } from "react-router-dom"

export const Article = () => {
    const {id}= useParams()
    const article= posts.find(e=>e.id===id)
    const otherArticles= posts.filter(e=>e.id!==id).reverse().slice(0,3)
    console.log(article)
  return (
    <>
        <section className="main-article">
            <article className="main-article-body">
            <h1 className="main-title">{article.title}</h1>
            <h2 className="main-sub-title">{article.subtitle}</h2>
            <p className="article-body">{article.body}</p>

            </article>

        </section>
        <section className="also-interesting">
            <h4 className="title-interest">Podria interesarte...</h4>
            <div className="articles-wrapper">{otherArticles.map((e,i)=>{
                return <article key={e.id} className="also-article">
                <h3 className="also-t">{e.title}</h3>
                <p className="also-text">{e.description}</p>
                <Link className="link-to-article" to={"/article/"+e.id}>Read more...</Link>
            </article>
            })}
               
            </div>
        </section>
    </>
  )
}
