import React from 'react'

function Featured({ topAnime }) {
    return (
        <section className="cards">
                {topAnime.map(anime => (
                    <a href={anime.url} target="_empty" class="card">
                        <div class="card__image" style={{backgroundImage: `url(${anime.image_url})`}}></div>
                        <div class="card__content">
                            <div class="card__title">{ anime.title }</div>
                            <div class="card__readmore">Read More</div>
                        </div>
                    </a>
                ))}
        </section>
    )
}

export default Featured
