import React, { useState } from 'react';

const M_PostNews = () => {
  const userId = sessionStorage.getItem('userId');//유저아이디    

  //제목
  const [title, setTitle] = useState('');
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  //내용
  const [content, setContent] = useState('');
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  //이미지url
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    } else {
      setSelectedImage(null);
      console.log('이미지 파일이 선택되지 않았거나 이미지 파일 형식이 아닙니다.');
    }
  };

  //서버 통신 api
  const handleImageUpload = () => {
    if (!selectedImage) {
      console.log('이미지 파일이 선택되지 않았습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('content', content);
    formData.append('title', title);
    formData.append('file', selectedImage);

    fetch('http://localhost:8004/admin/warm-case-admin-register', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('후기게시글 성공:', data);
      })
      .catch(error => {
        console.error('후기게시글 오류:', error);
      });
  };

  return (
    <div>
      <div>{userId}</div>
      <div><input type="text" value={title} onChange={handleChangeTitle} placeholder="제목" /></div>
      <div><input type="text" value={content} onChange={handleChangeContent} placeholder="내용" /></div>
      <div><input type="file" accept="image/*" onChange={handleImageChange} /></div>
      <div><button onClick={handleImageUpload}>저장</button></div>
    </div>
  );
};
export default M_PostNews;