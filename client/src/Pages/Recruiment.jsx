import { useState, useEffect } from "react";
import CommonFooter from "../Component/Footer";
import NavBar from "../Component/Navbar";
import { fetchAPIContentPage } from "../api";
import ScrollToTopButton from "../Component/TopButton";

export default function RecruimentPage() {
    const [recrui, setRecruit] = useState(null)

    useEffect(() => {
        (async () => {
          const response = await fetchAPIContentPage(4);
          setRecruit(response);
        })();
      }, []);
      
    return (
        <div className="h-screen text-black">
            <NavBar />  
            <div className="relative px-80 text-center bg-[url('https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg')] h-[800px]">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative z-10">
                    <h1 className="font-bold text-6xl pt-60 text-white">TUYỂN DỤNG</h1>
                </div>
            </div>
            <section className="bg-white flex flex-col justify-center items-center gap-40 px-40 py-16" >
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl">VỊ TRÍ TRỐNG <span className="text-cyan-400 text-4xl">HOT</span></h1>
                    <p>Tham gia với chúng tôi để tạo ra một bước đột phá. Đó là một hành trình và tất cả chúng ta chỉ mới bắt đầu</p>
                </div>
                <div>
                    {recrui == null 
                    ? 
                    (<p className="text-xl font-bold"> Chúng tôi chưa có tin tuyển dụng nào !</p>)
                    : 
                    <div className="flex gap-5">
                        {
                            recrui.map(item => 
                                <div key={item.id} className="flex flex-col items-center border-2 bg-black rounded w-80 p-8 m-4">
                                    <h1 className="text-white text-3xl font-bold">{item.title}</h1>
                                    <p className="text-white text-xl pt-5">Mô tả công việc:</p>
                                    <p className="text-purple-500 text-xl pt-5">{item.description}</p>
                                </div>
                            )
                        }
                    </div>
                    }
                </div>
            </section>
            <section className="flex flex-col h-80 justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2019/01/19/19/22/recruitment-3942378_640.jpg')]">
                    <h1 className="text-xl text-white py-4">Bạn tìm thấy một vị trí phù hợp ?</h1>
                    <h1 className="text-4xl text-white font-bold py-4">HÃY GỬI HỒ SƠ CHO CHÚNG TÔI</h1>
                    <a href="/contact">
                        <button className="rounded bg-black text-white px-4 py-2 text-lg">ỨNG TUYỂN</button>
                    </a>
            </section>
            <CommonFooter />
            <ScrollToTopButton />
        </div>      
    )   
} 