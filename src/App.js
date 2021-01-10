import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import Featured from './components/Featured'
import Search from './components/Search'

function App() {
  const [animeList, SetAnimeList] = useState([]);
	const [topAnime, SetTopAnime] = useState([]);
	const [search, SetSearch] = useState("");

  const GetTopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(res => res.json());

		SetTopAnime(temp.top.slice(0, 5));
  }
  
  const HandleSearch = e => {
    e.preventDefault()

    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
      .then(res => res.json())
  
    SetAnimeList(temp.results);
  }

  useEffect(() => {
    GetTopAnime()
  }, [])

  if (search == "") {
    return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
        <Sidebar topAnime={topAnime}/>
        <Search HandleSearch={HandleSearch} search={search} SetSearch={SetSearch} animeList={animeList} id="search"></Search>
        <Featured topAnime={topAnime}/>
      </div>
    </div>
    );
  }
  else {
    return (
      <div className="App">
        <Header/>
        <div className="content-wrap">
          <Sidebar topAnime={topAnime}/>
          <Search HandleSearch={HandleSearch} search={search} SetSearch={SetSearch} animeList={animeList}></Search>
          <MainContent HandleSearch={HandleSearch} search={search} SetSearch={SetSearch} animeList={animeList}/>
        </div>
      </div>
    );
  }
}

export default App;
