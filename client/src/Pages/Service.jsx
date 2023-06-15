import CommonFooter from "../Component/Footer";
import NavBar from "../Component/Navbar";
import {SiJavascript, SiPhp, SiIonic, SiReact} from 'react-icons/si'
import {BiDollar} from 'react-icons/bi'
import ScrollToTopButton from "../Component/TopButton";
export default function ServicePage() {
    return (
        <div className="h-screen text-black">
            <NavBar />
            <div className="px-80 flex gap-10 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] text-white h-[800px]">
                <div className="pt-[200px] w-[600px]">
                    <h1 className="font-bold text-xl">TẠI NCSOFT</h1>
                    <h1 className="text-5xl font-bold">Chúng tôi cung cấp nhiều loại dịch vụ công nghệ thông tin</h1>
                    <p className="font-bold w-[350px]  mt-5">Chúng tôi có nhiều kỹ sư phần mềm chuyên nghiệp với hơn 10 năm kinh nghiệm trong việc cung cấp các dịch vụ công nghệ thông tin</p>
                </div>
                <div className="pt-[200px] w-80 h-80">
                    <img className="w-full h-full" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
                </div>
            </div>
            <div className="bg-transparent mt-[40]  flex justify-center items-center ">
                <div className="border-solid border-2 border-white bg-black ">
                    <h1 className="p-5 ">Tư vấn giải pháp công nghệ</h1>
                </div>
                <div className="border-solid border-2 border-white bg-black">
                    <h1 className="p-5 ">Gia công phát triển phần mềm</h1>
                </div>
                <div className="border-solid border-2 border-white bg-black">
                    <h1 className="p-5 ">Xây dựng ứng dụng web</h1>
                </div>
            </div>
            <section className="bg-white flex flex-col justify-center items-center gap-40 px-40 py-16" >
                <div className="flex gap-20 ">
                    <div className="w-[400px]">
                        <h1 className="font-bold text-xl">Dịch vụ tư vấn giải pháp công nghệ thông tin</h1>
                        <p>Chúng tôi sẽ nắm bắt những mục tiêu và nhu cầu trong tương lai để có thể tư vấn cho doanh nghiệp triển khai các giải pháp phù hợp với nhu cầu của các khoản đầu tư công nghệ cùng với đó là sự tăng trưởng cho doanh nghiệp.</p>
                    </div>
                    <div className="w-[400px] h-[400px]">
                        <img className="" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    </div>
                </div> 
                <div className="flex gap-20 ">
                    <div className="w-[400px] h-[400px]">
                        <img className="" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    </div>
                    <div className="w-[400px]">
                        <h1 className="font-bold text-xl">Tại sao nên gia công phần mềm?</h1>
                        <p>Gia công phần mềm đang được nhiều doanh nghiệp áp dụng và nó trở thành giải pháp hỗ trợ các doanh nghiệp tiết kiệm chi phí, tận dụng được Chuyên môn chuyên sâu của công ty làm gia công, nâng cao hiệu suất công việc, đem lại hiệu quả trong hoạt động kinh doanh. Mặt khác, các doanh nghiệp không sở hữu nguồn lực liên quan đến công nghệ nên việc tạo ra một sản phẩm phần mềm là một khó khăn, tốn thời gian và chi phí. Do đó, chuyển giao một phần hay toàn phần dự án phần mềm cho bên thứ ba là giải pháo mà nhiều doanh nghiệp đang hướng tới.</p>
                    </div>                 
                </div> 
                <div className="flex gap-20 ">
                    <div className="w-[400px]">
                        <h1 className="font-bold text-xl">Đến với chúng tôi</h1>
                        <p>Cùng với sự tư vấn chuyên nghiệp từ NCsoft các ứng dụng web được thiết kế riêng dựa trên ý tưởng của khách hàng cùng với đó là sự độc quyền về giao diện. Giúp cho trang web của bạn nổi bật giữa hàng ngàn trang web của các đối thủ khác.</p>
                    </div>
                    <div className="w-[400px] h-[400px]">
                        <img className="" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    </div>
                </div> 
            </section>
            <section className="flex flex-col h-80 justify-center items-center bg-[url('https://images.unsplash.com/photo-1515181866738-e7971323cb7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')]">
                    <h1 className="text-xl text-white py-4">Cần tư vấn?</h1>
                    <h1 className="text-4xl text-white font-bold py-4">HÃY LIÊN HỆ VỚI CHÚNG TÔI</h1>
                    <button className="rounded bg-black text-white px-4 py-2 text-lg">LIÊN HỆ</button>
            </section>
            <CommonFooter />
            <ScrollToTopButton />
        </div>  
    );
} 