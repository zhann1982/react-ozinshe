import React, { useState } from 'react';
import styles from '@css/DragAndDropUploaderMulti.module.css';
import UploadIcon from '@icons/UploadIcon';

const DragAndDropUploaderMulti = ({ onImageUpload, id, valuePreselected }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    processFile(files);
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

  const processFile = (files) => {
    if (files.length>0) {
      onImageUpload && onImageUpload(files)
    } else {
      onImageUpload && onImageUpload(null); // Pass null to parent
    }
  };

  return (
    <div 
    style={{
      border: isDragging 
        ? '2px dashed #0052cc' 
        : '2px dashed rgba(143, 146, 161, 0.2)',
      backgroundColor: isDragging 
        ? '#f0f8ff' 
        : 'rgba(143, 146, 161, 0.05)',
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
        multiple
      />
      <div>
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
      
    </div>
  );
};

export default DragAndDropUploaderMulti;
