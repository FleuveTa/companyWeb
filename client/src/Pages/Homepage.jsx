import CommonFooter from "../Component/Footer";
import NavBar from "../Component/Navbar";
import {SiJavascript, SiPhp, SiIonic, SiReact} from 'react-icons/si'
import {BiDollar} from 'react-icons/bi'
import { useState, useEffect } from "react";
import { fetchAPIContentPage } from "../api";
import ScrollToTopButton from "../Component/TopButton";
import { Carousel } from "@material-tailwind/react";
export default function HomePage() {
    const [content, setContent] = useState(null)

    useEffect(() => {
        (async () => {
          const response = await fetchAPIContentPage(2);
          console.log(response)
          setContent(response);
        })();
      }, []);

    return (
        content == null ? (<p>No data</p>) :
        (<div className="h-screen text-black">
            <NavBar />
            <div className="px-[500px] bg-[url('https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_1280.jpg')] text-white h-[800px]">
                <h1 className="text-7xl pt-[200px]  font-bold">Tầm nhìn của chúng tôi</h1>
                <p className="font w-[350px]  mt-5">{content[0].description}</p>
            </div>
            <section className="bg-white flex gap-40 pl-40 py-16" >
                <div>
                    <div>
                        <p>KINH NGHIỆM. Ý TƯỞNG. DỊCH VỤ</p>
                        <h1 className="text-4xl font-bold pt-4">Chúng Tôi Là Ai?</h1>
                    </div>
                    <div className="flex gap-3 pt-6">
                        <SiJavascript size={70} />
                        <SiPhp size={70} />
                        <SiIonic size={70} />
                        <SiReact size={70} />
                    </div>
                    <div className="pt-10 w-[350px]">
                        <p className="">{content[1].description}</p>
                    </div>
                </div>
                
                <div className="relative w-[400px] h-[400px] ">
                    <img className="w-full h-full object-cover hover:scale-125 transition-transform duration-300" alt="img" src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1239&q=80" width={200} height={200} />
                </div> 
                
            </section>
            <section className="bg-white text-center text-black border-2 ">
                <div>
                    <h1 className="text-3xl pt-5">VÌ SAO CHỌN NCSOFT?</h1>
                </div>
                <div className="flex justify-center py-10 items-start gap-10">
                    <div className="flex flex-col bg-cyan-700  items-center border-solid border-2 border-white w-[250px] h-[300px]">
                        <BiDollar size={30}/>
                        <h1 className="text-2xl">Nhanh chóng - Tiết kiệm chi phí</h1>
                        <p>{content[2].description}</p>
                    </div>
                    <div className="flex flex-col bg-cyan-700 items-center border-solid border-2 border-white w-[250px] h-[300px]">
                        <BiDollar size={30}/>
                        <h1 className="text-2xl">Bảo mật thông tin</h1>
                        <p>{content[3].description}</p>
                    </div>
                    <div className="flex flex-col bg-cyan-700 items-center border-solid border-2 border-white w-[250px] h-[300px]">
                        <BiDollar size={30}/>
                        <h1 className="text-2xl">Luôn luôn cải tiến - Luôn luôn thay đổi</h1>
                        <p>{content[4].description}</p>
                    </div>
                    <div className="flex flex-col bg-cyan-700 items-center border-solid border-2 border-white w-[250px] h-[300px]">
                        <BiDollar size={30}/>
                        <h1 className="text-2xl">Giỏi chuyên môn giàu kinh nghiệm</h1>
                        <p>{content[5].description}</p>
                    </div>
                </div>
            </section>
            <section className="py-10 flex flex-col">
                <div className="pl-40">
                    <h1>TẠI NCSOFT</h1>
                    <h1 className="font-bold text-4xl">HOẠT ĐỘNG CỦA CHÚNG TÔI</h1>
                </div>
                <div className="w-[600px] h-[600px] mx-auto">
                    <Carousel className="rounded-xl pt-5 w-full h-full" transition={{ duration: 1 }}>
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
                
            </section>
            <section className="flex flex-col h-80 justify-center items-center bg-[url('https://images.unsplash.com/photo-1515181866738-e7971323cb7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')]">
                    <h1 className="text-xl text-white py-4">Cần tư vấn?</h1>
                    <h1 className="text-4xl text-white font-bold py-4">HÃY LIÊN HỆ VỚI CHÚNG TÔI</h1>
                    <button className="rounded bg-black text-white px-4 py-2 text-lg">LIÊN HỆ</button>
            </section>
            <CommonFooter />
            <ScrollToTopButton />
        </div>)
        
    )   
} 