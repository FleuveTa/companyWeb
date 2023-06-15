import { useState, useEffect } from "react";
import CommonFooter from "../Component/Footer";
import NavBar from "../Component/Navbar";
import { fetchAPIContentPage } from "../api";
import ScrollToTopButton from "../Component/TopButton";

export default function NewsPage() {
    const [news, setNews] = useState(null)

    useEffect(() => {
        (async () => {
          const response = await fetchAPIContentPage(5);
          console.log(response)
          setNews(response);
        })();
      }, []);
    return (
        <div className="h-screen text-black">
            <NavBar />
            <div className="px-80 text-center  bg-[url('https://media.istockphoto.com/id/484638160/photo/black-and-white-shot-of-hands-working-with-digital-tablet.jpg?s=612x612&w=0&k=20&c=MK3fjGFL38ZrtIaCGMTxwvjqGR7HKcI0lP1xF-JLYH8=')] text-white h-[800px]">
                <h1 className="font-bold m-auto text-6xl pt-60">TIN TỨC</h1>  
            </div>
            
            <section className="bg-white flex flex-col justify-center items-center gap-40 px-40 py-16" >
                <div>
                    {news == null || news.length === 0
                    ? 
                    (<p className="text-xl font-bold"> Không có tin tức mới !</p>)
                    : 
                    <div className="flex gap-5">
                        {
                            news.map(item => 
                                <div className="flex w-[300px] flex-col items-center align-center border-2 bg-black rounded">
                                    <h1 className="text-white text-3xl font-bold">{item.title}</h1>
                                    <p className="text-white text-xl pt-5">Mô tả công việc :</p>
                                    <p className="text-purple-500 text-xl pt-5 w-[300px]">{item.description}</p>
                                </div>
                            )
                        }
                    </div>
                    }
                </div>
            </section>
            <CommonFooter />
            <ScrollToTopButton />
        </div>      
    )   
} 