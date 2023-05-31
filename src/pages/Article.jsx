import { useParams } from "react-router-dom"
import "../styles/pages/article.css"
import { posts } from "../data/datatest"

export const Article = () => {
    const {id}= useParams()
    const article= posts.filter(e=>e.id===id)[0]
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
            <div className="articles-wrapper">
                <article className="also-article">
                    <h3 className="also-t">Also Title</h3>
                    <p className="also-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima labore illo similique harum consequuntur ut laboriosam nam nemo, omnis numquam deserunt hic atque itaque, porro aliquam, unde possimus quis?</p>
                </article>
                <article className="also-article">
                    <h3 className="also-t">Also Title</h3>
                    <p className="also-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima labore illo similique harum consequuntur ut laboriosam nam nemo, omnis numquam deserunt hic atque itaque, porro aliquam, unde possimus quis?</p>
                </article>
                <article className="also-article">
                    <h3 className="also-t">Also Title</h3>
                    <p className="also-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. In minima labore illo similique harum consequuntur ut laboriosam nam nemo, omnis numquam deserunt hic atque itaque, porro aliquam, unde possimus quis?</p>
                </article>
            </div>
        </section>
    </>
  )
}
