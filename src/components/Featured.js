import React from 'react'
import AnimeCard from './AnimeCard'

function Featured({ topAnime }) {
    return (
        /*
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
        */
       <main id="main-featured">
            <div className="flex-grid">
                {topAnime.map(anime => (
                    <a href={anime.url} target="_empty">
                        <div className="col has-spacer">
                            <img src={anime.image_url}></img>
                            <h1 className="anime-title">{ anime.title }</h1>
                        </div>
                    </a>
                ))}
            </div>
       </main>
    )
}

export default Featured
