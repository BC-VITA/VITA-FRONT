import React, { useState } from 'react';

const M_PostDonation = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

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
            console.log('이미지파일형식이 아님');
        }
    };

    const handleImageUpload = () => {
        if (!selectedImage) {
            console.log('이미지파일형식이 아님');
            return;
        }

        const data = {
            image: selectedImage,
            title: title,
            content: content
        };

        fetch('http://localhost:8004/donate/board', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Image uploaded successfully:', data);
            })
            .catch((error) => {
                console.error('Error uploading image:', error);
            });
    };

    return (
        <div>
            <input type="text" value={title} onChange={handleChangeTitle} placeholder="제목" />
            <input type="text" value={content} onChange={handleChangeContent} placeholder="내용" />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>저장</button>
        </div>
    );
};

export default M_PostDonation;
