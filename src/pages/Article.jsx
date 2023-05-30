import "../styles/pages/article.css"

export const Article = () => {
  return (
    <>
        <section className="main-article">
            <article className="main-article-body">
            <h1 className="main-title">Example text</h1>
            <h2 className="main-sub-title">example sub title</h2>
            <p className="article-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium, quas quod pariatur odit cum corporis quae magnam magni laborum enim illo amet a minima blanditiis ipsa ea dolore voluptates?</p>

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
