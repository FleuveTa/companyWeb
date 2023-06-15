import { useState, useEffect } from "react";
import CommonFooter from "../Component/Footer";
import NavBar from "../Component/Navbar";
import { fetchAPIContentPage } from "../api";
import {BsFillTelephoneForwardFill, BsCalendarDay} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {BiCurrentLocation} from 'react-icons/bi'
import ScrollToTopButton from "../Component/TopButton";

export default function ContactPage() {
    const [news, setNews] = useState(null)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
        name,
        phone,
        email,
        content,
        };

        fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => {
            if (response.ok) {
            alert('Email sent successfully!');
            } else {
            alert('Email failed to send. Please try again.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    };

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
                <h1 className="font-bold m-auto text-6xl pt-60">LIÊN HỆ</h1>  
            </div>        
            <section className="bg-white flex justify-center items-center px-40 py-16">
                <div className="flex gap-0">
                    <div className="bg-white w-[700px] text-center h-[700px] py-10 border-2">
                    <h1 className="text-black font-bold text-4xl">Gửi thông tin để được tư vấn</h1>
                    <p className="text-black">
                        Vui lòng gửi email cho chúng tôi bất cứ lúc nào.
                        <br />
                        Chúng tôi sẵn sàng lắng nghe và hỗ trợ bạn.
                    </p>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                        />
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your Phone Number"
                            required
                            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                        />
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Your content"
                            required
                            className="w-full h-24 px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none"
                        ></textarea>
                        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                            Send
                        </button>
                    </form>
                    </div>
                    <div className="relative w-[700px] h-[700px]">
                        <div className="absolute inset-0">
                            <img
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yayUyMHRhYmxlfGVufDB8fDB8fHww&w=1000&q=80"
                            alt="Background"
                            />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-center px-5 ">
                            <h1 className="text-white text-4xl font-bold">Thông tin liên hệ</h1>
                            <p className="text-white pt-5 text-lg"><span><BsFillTelephoneForwardFill /></span>0983.398.222</p>
                            <p className="text-white pt-5 text-lg"><span><FiMail /></span>contact@ncsoft.tech</p>
                            <p className="text-white pt-5 text-lg"><span><BiCurrentLocation /></span>Hancorp Plaza, 72 Trần Đăng Ninh, phường Dịch Vọng, quận Cầu Giấy, Hà Nội, Việt Nam</p>
                            <p className="text-white pt-5 text-lg"><span><BsCalendarDay /></span>Thứ 2 - Thứ 6, Từ 8 giờ 30p sáng tới 5 giờ 30p chiều.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CommonFooter />
            <ScrollToTopButton />
        </div>      
    )   
} 