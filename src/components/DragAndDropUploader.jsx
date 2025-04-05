import React, { useState } from 'react';
import styles from '@css/DragAndDropUploader.module.css';
import UploadIcon from '@icons/UploadIcon';
import TrashIcon from '@icons/TrashIcon';

const DragAndDropUploader = ({ onImageUpload, id }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    processFile(file);
    event.target.value = null;
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
    } else {
      setPreviewImage(null);
      onImageUpload && onImageUpload(null); // Pass null to parent
    }
  };

  const clearFileInput = () => {
    setPreviewImage(null);
    processFile(null);
    onImageUpload && onImageUpload(null); // Pass null to parent
  };

  return (
    <div 
    style={{
      border: isDragging 
        ? '2px dashed #0052cc' 
        : previewImage ? 'none' : '2px dashed rgba(143, 146, 161, 0.2)',
      backgroundColor: isDragging 
        ? '#f0f8ff' 
        : previewImage ? 'transparent' : 'rgba(143, 146, 161, 0.05)',
    }}
      className={styles.dragAndDropContainerFilled}
      
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id={id}
      />
      <div style={{ display: previewImage?'none':'block' }}>
        <label htmlFor={id} className={styles.uploadIconLabel}>
            <div className={styles.uploadIconBox}>
              <UploadIcon width={24} height={24} />
            </div>
        </label>
        <p className={styles.uploadText}>
          Перетищите картинку или 
          <label htmlFor={id} className={styles.uploadLabel}>
            загрузите
          </label>
        </p>
      </div>
      <div className={styles.previewImageBox}>
        {previewImage && (
          <img
            src={previewImage}
            alt="Preview"
          />
        )}
        <div 
          className={styles.deleteIconBox} 
          onClick={clearFileInput}
          style={{ display: previewImage ? 'block' : 'none' }}
        >
          <TrashIcon width={20} height={20} />
        </div>
      </div>
      
    </div>
  );
};

export default DragAndDropUploader;
