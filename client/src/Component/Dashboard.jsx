import { useState, useEffect } from "react";
import { fetchAPIContentAll, fetchAPIDelRecr, fetchAPIUpdateContent } from "../api";
import { Button, Input } from "antd";
import AddModal from "./Modal/AddModal";
import ScrollToTopButton from "./TopButton";

const {TextArea} = Input
export default function DashBoard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({'title' : '', 'description' : ''});
    const [content, setContent] = useState(null)
    const [content2, setContent2] = useState(null)
    const [content3, setContent3] = useState(null)
    const [content4, setContent4] = useState(null)
    const [content5, setContent5] = useState(null)
    const [content1, setContent1] = useState(null)

    useEffect(() => {
        (async () => {
          const response = await fetchAPIContentAll();
          console.log(response)
          setContent(response);
          setContent1(response.filter( item => {
            return item.page_id === 1;
          }))
          setContent2(response.filter( item => {
            return item.page_id === 2;
          }))
          setContent3(response.filter( item => {
            return item.page_id === 3;
          }))
          setContent4(response.filter( item => {
            return item.page_id === 4;
          }))
          console.log(content4)
          setContent5(response.filter( item => {
            return item.page_id === 5;
          }))
        })();
      }, []);


    const handleDescriptionChange = (event, itemId) => {
        const updatedContent2 = content2.map((item) =>
            item.id === itemId ? { ...item, description: event.target.value } : item
        );
        setContent2(updatedContent2);
    };


    const updateAboutPage = async (id) => {
        const data = JSON.stringify(content2)
        console.log(data)
        const res = await fetchAPIUpdateContent(data)
        console.log(res)
    }

    const handleDeleteRecr = async (id) => {
        console.log("deleted : " + id)
        const newCon = content4.filter(item => item.id != id)
        setContent4(newCon)
        const res = await fetchAPIDelRecr(id)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

      
    return (
        <>
        <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalData={modalData} setModalData={setModalData}/>
        {content4 == null ? (<p>Loading</p>) :
        <div className="h-100% bg-gradient-to-r from-gray-700 to-gray-500"> 
            <h1 className="text-7xl text-center font-extrabold">ADMIN DB</h1>
            <div className="px-40 pt-20">
                <h1 className="text-2xl font-bold">ABOUT US</h1>
                <div className="w-[800px] pt-10">
                    {content2.map((item) => (
                        <div key={item.id} className="flex gap-10">
                            <h1>{item.title}</h1>
                            <TextArea value={item.description} onChange={(e) => handleDescriptionChange(e, item.id)}/>
                        </div>
                    ))}
                </div>
                <button className="rounded bg-black text-white px-4 my-10 pt-4 text-lg hover:bg-purple-700" onClick={() => updateAboutPage()}>SUBMIT</button>
            </div>
            <div className="px-40">
                <h1 className="text-2xl font-bold">SERVICE</h1>
                <div className="w-[800px] pt-10">
                    {content2.map((item) => (
                        <div key={item.id} className="flex gap-10">
                            <h1>{item.title}</h1>
                            <TextArea value={item.description} onChange={(e) => handleDescriptionChange(e, item.id)}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-40 pt-20">
                <h1 className="text-2xl font-bold">RECRUIMENT</h1>
                <h1 className="text-xl font-bold">CÁC TIN TUYỂN DỤNG</h1>
                <div className="w-[1000px] pt-10">
                    {content4.map((item) => (
                        <div key={item.id} className="flex gap-10">
                            <h1 className="text-white">Vị trí : {item.title}</h1>
                            <TextArea value={item.description} onChange={(e) => handleDescriptionChange(e, item.id)}/>
                            <button className="bg-red-500 border-2 rounded" onClick={() => handleDeleteRecr(item.id)}>Xoá tuyển dụng này</button>
                        </div>
                    ))}
                </div>
                <button className="bg-blue-500 border-2 rounded mt-6" onClick={openModal}>THÊM TUYỂN DỤNG MỚI</button>
            </div>
            <div className="px-40 pt-20">
                <h1 className="text-2xl font-bold">CONTACT</h1>
                <div className="w-[800px] pt-10">
                    {content2.map((item) => (
                        <div key={item.id} className="flex gap-10">
                            <h1>{item.title}</h1>
                            <TextArea value={item.description} onChange={(e) => handleDescriptionChange(e, item.id)}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-40 pt-20">
                <h1 className="text-2xl font-bold">MAIN PAGE</h1>
                <div className="w-[800px] pt-10">
                    {content2.map((item) => (
                        <div key={item.id} className="flex gap-10">
                            <h1>{item.title}</h1>
                            <TextArea value={item.description} onChange={(e) => handleDescriptionChange(e, item.id)}/>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollToTopButton />
        </div>}
        </>
    )
}