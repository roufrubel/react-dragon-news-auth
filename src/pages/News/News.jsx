import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";


const News = () => {
    const [news, setNews] = useState([]);
    useEffect( () => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    }, [])
    return (
        <div>
            {
                news.map(nw =><NewsCard nw={nw} key={nw._id}></NewsCard>)
            }
        </div>
    );
};

export default News;