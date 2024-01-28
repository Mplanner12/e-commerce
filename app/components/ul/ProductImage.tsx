import Image from "next/image";
import React from "react";
import { VscAccount } from "react-icons/vsc";

type ProductImageProps = {
  className?: string;
  src?: string | null;
};

const ProductImage = ({ className, src }: ProductImageProps) => {
  return (
    <div className={`relative h-12 w-12 overflow-hidden rounded ${className}`}>
      {src == null ? (
        <VscAccount className="h-full w-full" />
      ) : (
        <Image
          src={src}
          alt="productImage"
          quality={100}
          fill
          sizes="(max-width: 900px) 30vw, 80px"
        />
      )}
    </div>
  );
};

export default ProductImage;
