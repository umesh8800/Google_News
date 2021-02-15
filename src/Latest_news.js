import React, { useEffect } from 'react'
import axios from 'axios'
import './index.css'
import Navbar from './Navbar'

function Latest_news() {
    const [news, setNews] = React.useState([])
    const [search,setSearch]=React.useState("")

    useEffect(() => {

        axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-10&sortBy=publishedAt&apiKey=4c0f69f361ed489aa8cc629509445e36')
            .then(res => {
                console.log(res);
                setNews(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    console.log(setSearch,"ssssss")
    console.log(news, "yyy");
    return (
        <>
            <Navbar className="nabu" />
            <h1 style={{ height: "60px" }}></h1><br /><br />
            <marquee direction="right" style={{ color: "red" }} className="direction"> <h1 style={{ height: "100px" }}><img src="https://previews.123rf.com/images/ymgerman/ymgerman1501/ymgerman150100494/36105444-breaking-news-symbol-3d-render-white-background.jpg" style={{ width: "50px", height: "50px", borderRadius: "80%" }} /> Welcome to google News <img src="https://previews.123rf.com/images/ymgerman/ymgerman1501/ymgerman150100494/36105444-breaking-news-symbol-3d-render-white-background.jpg" style={{ width: "50px", height: "50px", borderRadius: "80%" }} /></h1></marquee>
            {
                news.articles && news.articles.map((post, index) => (

                    <div className="card" style={{ width: "50rem", height: "50rem", textAlign: "center", marginBottom: 50 }}>
                        <img src={post.urlToImage} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{index} {post.title}</h5>
                            <p className="card-text"><p>{post.description}.</p></p>
                            <p className="auther-name"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKInw3jM-VnjBNK6Z4XZ8kw8GH-NyNpGubw&usqp=CAU" className="author" /> :<i>{post.author}</i> </p>
                            <p href="#" class="y">{post.publishedAt} </p>
                            
                        </div>

                    </div>
                ))}
        </>

    )
}

export default Latest_news;
