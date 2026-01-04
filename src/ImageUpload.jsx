import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
    };

    return (
        <div className="upload-page">
            <h2>Upload Topper Image</h2>

            <label className="upload-box">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    hidden
                />
                Click to Upload Image
            </label>

            {image && (
                <div className="preview">
                    <img src={URL.createObjectURL(image)} alt="Preview" />
                    <p>{image.name}</p>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
