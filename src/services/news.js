import { category, country, api_key, articles_url } from "../config/rest_config"

const getArticles = async () => {
    try {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`)
        let data = await response.json();
        console.log("fetch", data);
        return data;
    } catch (error) {
        console.log("fetch error", error)
    }
}

export { getArticles }