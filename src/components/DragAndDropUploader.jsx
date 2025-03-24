import React, { useState } from 'react';
import styles from '../assets/css/DragAndDropUploader.module.css';

const DragAndDropUploader = ({ onImageUpload }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    processFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    processFile(file);
  };

  const processFile = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        onImageUpload && onImageUpload(file); // Pass file to parent
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className={styles.dragAndDropContainer}
      style={{
        border: isDragging ? '2px dashed blue' : '2px dashed gray',
        backgroundColor: isDragging ? '#f0f8ff' : '#fafafa',
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>{isDragging ? 'Drop your image here!' : 'Drag and drop an image or click to upload'}</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'blue' }}>
        Select Image
      </label>
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          style={{ marginTop: '10px', maxWidth: '100%', borderRadius: '10px' }}
        />
      )}
    </div>
  );
};

export default DragAndDropUploader;
