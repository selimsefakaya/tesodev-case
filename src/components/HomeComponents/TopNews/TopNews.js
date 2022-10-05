import React, { useState } from "react";

import "./style.scss";
import left from "../../../images/left.png";
import right from "../../../images/right.png";
import listNews from "../../../slide.json";

const TopNews = () => {
    const [lastNews, setLastNews] = useState(3);
    const [firstNews, setFirstNews] = useState(listNews.length - 1);
    const [showNews] = useState(listNews.slice(0, 3));

    const upNews = () => {
        setLastNews((lastNews + 1) % listNews.length);
        setFirstNews((firstNews + 1) % listNews.length);

        showNews.push(listNews[lastNews]);
        showNews.shift();
    };

    const downNews = () => {
        setLastNews((lastNews + listNews.length - 1) % listNews.length);
        setFirstNews((firstNews + listNews.length - 1) % listNews.length);

        showNews.unshift(listNews[firstNews]);
        showNews.pop();
    };

    return (
        <div className="container-top-news">
            <h2>Top News</h2>
            <div className="box-news">
                <button className="btn-slide" onClick={downNews}>
                    <img src={left} alt="left slide" width="25px" />
                </button>
                <div className="box-news-items">
                    {showNews.map((item, index) => (
                        <div key={index} className="box-news-item">
                            <img src={item.img} alt={`news-${index}`} width="300px" />
                            <div className="box-news-content">
                                <p>{item.content}</p>
                                <span className="new-content-bottom">
                                    {item.date.slice(0, 10)} <span> . </span> {item.author}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn-slide" onClick={upNews}>
                    <img src={right} alt="right slide" width="25px" />
                </button>
            </div>
        </div>
    );
};

export default TopNews;
