import { Modal, message, Form, Input, Checkbox, DatePicker, Select, Spin } from "antd";
import React, { useState, useContext } from "react";
import { fetchAPICreateRecr } from "../../api";

const {TextArea} = Input
export default function AddModal({
  isModalOpen,
  setIsModalOpen,
  modalData,
  setModalData,
}) {

  const handleOk = async () => {
    
    const res = await fetchAPICreateRecr(modalData)
    setIsModalOpen(false)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    console.log(e.target.name)
    setModalData({
      ...modalData,
      [e.target.name]: e.target.value,
    });
    console.log(modalData)
  };
  
  return (
        <div
            style={{
                marginLeft: 20,
            }}
        >      
              <Modal
              title="Thêm tin tuyển dụng"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
            
                        <Input placeholder="Tên vị trí" name="title" onChange={handleChange} />
                                    
                        <TextArea placeholder="Mô tả công việc" name="description" onChange={handleChange} />
                    
            </Modal>    
        </div>

  );
}
