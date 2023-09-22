"use client"
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate()
  },[])
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative left-3 w-10 h-10 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" width={30} height={30} />
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
