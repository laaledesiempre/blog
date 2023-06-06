import "../styles/pages/Home.css"
import { posts } from "../data/datatest"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
    <section className="home-wrapper">
      <article className="welcome">
        <h3 className="welcome-title"> Welcome</h3>
        <h4 className="start-reading">~ start reading</h4>
      </article>
      <article className="article-wrapper">
        <ul className="article-lists">
          {posts.map((e)=>{
            return <li className="article-list-element" key={e.id}>
              <Link className="link-on-list" to={"/article/"+e.id}> {"> "} {e.title}</Link>
            </li>
          })}
        </ul>
      </article>
    </section>
    </>
  )
}
