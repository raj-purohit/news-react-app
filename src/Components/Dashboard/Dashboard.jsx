import React, { useEffect, useState, useRef } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Card, CardContent, CardMedia } from "@material-ui/core";
import { DashboardWrapper } from "./Dashboard.styled";

import axios from "axios";

function Dashboard() {
    const newsUrl = "https://newsapi.org/v2/top-headlines";
    const newsKey = process.env.REACT_APP_NEWS_KEY;
    const itemsPerPage = 20;
    const divRef = useRef()

    const [ articles, setArticles ] = useState([])
    const [ searchText, setSearchText ] = useState("")
    const [ country, setCountry ] = useState("in");
    const [ category, setCategory ] = useState("general")
    const [ totalRecords, setTotalRecords ] = useState(0)
    const [ currentPage, setCurrentPage ] = useState(1)

    useEffect(() => {
        async function mountFunction() {
            let data = await getArticles()
            setArticles(data.articles)
            setTotalRecords(data.totalResults)
            setCurrentPage(currentPage + 1)
        }
        mountFunction()
    },[])

    useEffect(() => {
        handleSearchClick()
    },[country, category])

    const handleChange = (e, type) => {
        if(type === "search")
            setSearchText(e.target.value)

        if(type === "country") {
            setCountry(e.target.value)
            setCurrentPage(1)
        }
        
        if(type === "category")  {
            setCategory(e.target.value)
            setCurrentPage(1)
        }
        
    }

    const handleSearchClick = async () => {
        let result = await getArticles({
            q : searchText
        })
        setArticles(result.articles)
        setTotalRecords(result.totalResults)
    }

    const getArticles = async (data = {}) => {
        let result = await axios.get(newsUrl, {
            params : {
                q           : data && data.q || "",
                category    : category,
                country     : country,
                sortBy      : "publishedAt",
                page        : currentPage,
                pageSize    : itemsPerPage,
                apiKey      : newsKey,
            }
        })

        return result.data
    }

    const handleOnScroll = async () => {
        let scrollTop = divRef.current.getScrollTop();
        let scrollHeight = divRef.current.getScrollHeight();
        let clientHeight = divRef.current.getClientHeight();

        if(scrollTop + clientHeight >= scrollHeight) {
            if(currentPage <= Math.ceil(totalRecords / itemsPerPage)) {
                let result = await getArticles()
                setArticles([
                    ...articles,
                    ...result.articles
                ])
                setCurrentPage(currentPage + 1)
            }
        }
    }

    return(
        <DashboardWrapper>
            <div className="header">
                <TextField
                    label="Search"
                    onChange={(e) => handleChange(e,"search")}
                    value={searchText}
                    className="search"
                />
                <FormControl className="country">
                    <InputLabel id="country">Country</InputLabel>
                    <Select
                        labelId="country"
                        id="country-select"
                        value={country}
                        onChange={(e) => handleChange(e,"country")}
                    >
                    <MenuItem value="in">India</MenuItem>
                    <MenuItem value="us">US</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className="category">
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="category-select"
                        value={category}
                        onChange={(e) => handleChange(e,"category")}
                    >
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" className="search-btn" onClick={handleSearchClick}>
                    Search
                </Button>
            </div>
            <Scrollbars
                autoHide
                style={{ height : "calc(100vh - 60px)", width  : "100vw" }}
                ref={divRef}
                onScroll ={() => {
                    handleOnScroll()
                }}
            >
                <div className="card-container">
                    {
                        articles.map((article,index) => 
                            <ArticleCard
                                article = {article}
                                key = {index}
                            />
                        )
                    }
                </div>
            </Scrollbars>
        </DashboardWrapper>
    )
}

function ArticleCard(props) {
    return(
        <Card className="card-wrapper">
            <CardContent className="card-content">
                <p className="title">
                    {props.article.title}
                </p>
                <p className="description">
                    {props.article.description}
                </p>
                <p className="source">
                    Source By {props.article.source.name}
                </p>
            </CardContent>  
            <CardMedia
                className="card-media"
                component="img"
                alt="image"
                height="140"
                image={props.article.urlToImage}
                title="image"
            />
        </Card>
    )
}

export default Dashboard