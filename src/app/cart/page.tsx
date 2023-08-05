import Image from "next/image";
import React from "react";

const CartPage = () => {
	return (
		<div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
			<div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll no-scrollbar lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
				<div className="flex items-center justify-between mb-4">
					<Image src="" alt="" width={100} height={100} />
					<div className="">
						<h1 className="uppercase text-xl font-bold">Title</h1>
						<span>Option</span>
					</div>
					<h2 className="font-bold">₹</h2>
					<span className="cursor-pointer">X</span>
				</div>
			</div>
			<div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 2xl:text-xl 2xl:gap-6">
				<div className="flex justify-between">
					<span className="">Subtotal</span>
					<span className="">₹</span>
				</div>
				<div className="flex justify-between">
					<span className="">Service Cost</span>
					<span className="">₹</span>
				</div>
				<div className="flex justify-between">
					<span className="">Delivery Charges</span>
					<span className=" text-green-500">Free!</span>
				</div>
				<hr className="my-2" />
				<div className="flex justify-between">
					<span className="">Total(Incl. GST)</span>
					<span className=" font-bold">₹</span>
				</div>
				<button className="uppercase bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
					CheckOut
				</button>
			</div>
		</div>
	);
};

export default CartPage;