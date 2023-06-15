import {CiLocationOn} from 'react-icons/ci'
import {IoMdMail} from 'react-icons/io'
import {FaPhoneVolume} from 'react-icons/fa'
export default function CommonFooter() {
    return (
        <>
            <section className="bg-[#070936] flex flex-col  items-center ">
            <div className="py-10">
                <h1 className="font-bold text-4xl text-white">NCSOFT</h1>
            </div>
            <div className="flex text-white gap-20">
                <div className="w-[350px] text-center flex flex-col items-center">
                    <CiLocationOn className='mb-4 w-8 h-8' />
                    <p>Hancorp Plaza, 72 Trần Đăng Ninh, phường Dịch Vọng, quận Cầu Giấy, Hà Nội, Việt Nam</p>
                </div>
                <div className="w-[350px] text-center flex flex-col items-center">
                    <IoMdMail className='mb-4 w-8 h-8' />
                    <p>contact@ncsoft.tech</p>
                </div>
                <div className="w-[350px] text-center flex flex-col items-center">
                    <FaPhoneVolume className='mb-4 w-8 h-8' />
                    <p>0963.398.222</p>
                </div>
            </div>
            <div className="block md:flex  gap-10 py-6 text-white">
                <a className='block '>Về chúng tôi</a>
                <a className='block '>Dịch vụ</a>
                <a className='block '>Tuyển dụng</a>
                <a className='block'>Tin tức</a>
                <a className='block '>Liên hệ</a>
            </div>
            <div>
                <p className='text-white'>©2023 Bản quyền thuộc về NCsoft</p>
            </div>
            </section>
        </>
        
    );
}