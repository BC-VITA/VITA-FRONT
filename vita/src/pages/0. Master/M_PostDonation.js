import React, { useState } from 'react';

const M_PostDonation = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const userId = sessionStorage.getItem('userId');

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
          setSelectedImage(file);
        } else {
          setSelectedImage(null);
          console.log('이미지 파일이 선택되지 않았거나 이미지 파일 형식이 아닙니다.');
        }
      };
      
      const handleImageUpload = () => {
        if (!selectedImage) {
          console.log('이미지 파일이 선택되지 않았습니다.');
          return;
        }
      
        const formData = new FormData();
        formData.append('file', selectedImage);
        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('content', content);
      
        fetch('http://localhost:8004/donate/board', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log('이미지 업로드 성공:', data);
          })
          .catch(error => {
            console.error('이미지 업로드 오류:', error);
          });
      };

    return (
        <div>
            <div>{userId}</div>
            <input type="text" value={title} onChange={handleChangeTitle} placeholder="제목" />
            <input type="text" value={content} onChange={handleChangeContent} placeholder="내용" />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>저장</button>
        </div>
    );
};

export default M_PostDonation;
