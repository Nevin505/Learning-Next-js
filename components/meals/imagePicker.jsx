"use client";
import { useRef, useState } from "react";
import classes from "./imagepicker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(0);
  const imageRef = useRef();
  const handlePick = () => {
    imageRef.current.click();
  };
  const handleImageChange = (e) => {
    const files=e.target.files[0]
    if(!files){
      setPickedImage(null);
      return;
    }
    const blobUrl = URL.createObjectURL(files);
    console.log("the blob url", blobUrl);
    
    setPickedImage(blobUrl);
    
  }
  console.log("then vlaue", pickedImage);

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? <p>No image picked yet.</p> :
            <Image src={pickedImage} fill />}
        </div>
        <input
          ref={imageRef}
          className={classes.input}
          type="file"
          accept="image/png,image/jpeg"
          name={name}
          id={name}
          required
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handlePick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
