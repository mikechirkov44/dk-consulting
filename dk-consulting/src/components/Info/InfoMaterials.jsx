import {useEffect, useState} from "react";
import articlesService from "../../services/articlesService";
import { Pagination } from "../UI/Pagination";


export const InfoMaterials = () => {

    const [articles, setArticles] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [isLoading, setLoading] = useState(false);
    //localStorage.clear()

    console.log(articles)

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(articles.length/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(currentPosts)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const paginateNext = () => {
        pageNumbers.length >= currentPage+1 ? setCurrentPage(currentPage+1) : setCurrentPage(1)
    }
    const paginatePrev = () => {
        0 >= currentPage-1 ? setCurrentPage(pageNumbers.length) : setCurrentPage(currentPage-1)
    }

    useEffect(()=>{
        setLoading(true);
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            setLoggedIn(true);
            console.log("user found");
            articlesService.getArticles({for_clients: "true"}).then( (res) => {
                console.log(res);
                setArticles(res);
                setLoading(false);
            }).catch(err => {
                console.log(err)})
        } else {
            console.log("user unauthorized");
            setLoading(false);
        }
       
    }, []);



    return (
        <section> 
            
            {
                isLoading ? <p>Загрузка</p> : <ul className="py-[52px] max-w-[1290px] mx-auto relative lg:max-w-[940px] lg:py-[60px] md:max-w-[690px] sm:max-w-[420px] sm:py-[20px] xs:max-w-[290px] xs:py-5">
                {loggedIn === false
                    ? <li>
                        <h1 className="par text-center lg:text-lg md:text-lg sm:text-sm xs:text-xs">Вам необходимо зарегистрироваться или авторизироваться, чтобы увидеть пользовательские материалы</h1>
                      </li>
                    : <div>
                        {currentPosts.map((article, i) => {
                            return (
                                <li key={i} className="border-blue border-b-[1px] py-5 flex items-center">
                                    <a href={article.file_name} className="h-auto mr-7 mb-0 sm:w-12 sm:mr-4 xs:w-12 xs:mr-3 group">
                                        <svg className="w-full h-auto group-hover:fill-[#4D8BBE]" width="124" height="95" viewBox="0 0 124 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M122.868 14.9363H48.5187C47.381 14.9363 46.297 14.4518 45.5382 13.604L35.8824 2.81573C35.1236 1.96793 34.0397 1.4834 32.9019 1.4834H5.20215C2.99301 1.4834 1.20215 3.27426 1.20215 5.48339V14.9363M122.868 14.9363H1.20215M122.868 14.9363V22.8308M1.20215 14.9363V22.8308M1.20215 22.8308V89.6498C1.20215 91.859 2.99301 93.6498 5.20215 93.6498H118.868C121.077 93.6498 122.868 91.859 122.868 89.6498V22.8308M1.20215 22.8308H122.868" stroke="#4D8BBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path className="group-hover:fill-[#ffffff]" d="M62.5097 74.7337C62.9002 75.1242 63.5334 75.1242 63.9239 74.7337L70.2879 68.3697C70.6784 67.9792 70.6784 67.346 70.2879 66.9555C69.8973 66.565 69.2642 66.565 68.8737 66.9555L63.2168 72.6123L57.5599 66.9555C57.1694 66.565 56.5363 66.565 56.1457 66.9555C55.7552 67.346 55.7552 67.9792 56.1457 68.3697L62.5097 74.7337ZM62.2168 42.4396L62.2168 74.0266L64.2168 74.0266L64.2168 42.4396L62.2168 42.4396Z" fill="#4D8BBE"/>
                                            <line className="group-hover:stroke-[#ffffff]" x1="47.2227" y1="82.0257" x2="79.2109" y2="82.0257" stroke="#4D8BBE" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </a>
                                    <div>
                                        <h3 className="text-2xl lg:text-xl md:text-xl md:mb-2 sm:mb-2 sm:text-base xs:text-base xs:mb-1">{article.title}</h3>
                                        <p className="text-xl font-light lg:text-base md:text-base sm:text-xs xs:text-xs">{article.description}</p>
                                    </div>
                                </li>
                            )
                        }) }
                    </div>
                }
            </ul>
            
            }
            {currentPosts.length <= postsPerPage 
                ? <Pagination pageNumbers={pageNumbers} paginate={paginate} paginateNext={paginateNext} paginatePrev={paginatePrev}/>
                : <></>
            }
            
        </section>
    )
}
