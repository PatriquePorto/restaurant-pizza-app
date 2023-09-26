"use client"

import React from 'react'
import { useRouter } from 'next/navigation';

interface ButtonAddCartProps {
    id: string;
  }
  
  const ButtonAddCart: React.FC<ButtonAddCartProps> = ({ id }) => {
    const router = useRouter();
  
    const handleRedirect = () => {
      // Perform product verification using the id prop
      if (id) {
        router.push(`/product/${id}`);
      } else {
        // Handle the case where id is not provided
        // e.g. show an error message or redirect to a different page
      }
    };
  
    return (
      <button className="bg-red-500 text-white p-2 rounded-md" onClick={handleRedirect}>
        Add to Cart
      </button>
    );
  };
  
  export default ButtonAddCart;