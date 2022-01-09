import Image from "next/image";
import { useState } from "react";

type ImagePicker = {
  changeImage: (e: any) => void
}

const ImagePicker = ({ changeImage }: ImagePicker) => {


  const [imageSrc, setImageSrc] = useState(null);

  return (
    <>
      {
        imageSrc &&
        <Image src={imageSrc} width={250} height={250} alt="a" />
      }
      <input type="file" name="file" accept="image/*" onChange={(e: any) => {
        const src = URL.createObjectURL(e.target.files[0])
        if (e.target.files && e.target.files[0]) {
          setImageSrc(src);
        }

        changeImage(e.target.files[0])
      }} />
    </>
  )
}

export default ImagePicker