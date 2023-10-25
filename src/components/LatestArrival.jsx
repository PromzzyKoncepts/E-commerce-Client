import React from "react";
import NewArrivalProductCard from "./NewArrivalProductCard";

const LatestArrival = () => {
    const productObject = {
        id: 1,
        href: "",
        imageAlt: "",
        imagSrc: "",
        price: "$20",
        name: "Shirt",
    };

    const product = new Array(50).fill(productObject);

    console.log(product);
    // Array.from({length: 10}, () => )
    return (
        <div>
            <div className="bg-gray-800 w-full min-h-screen">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Latest Arrivals2</h2>

                    <div className="grid grid-cols-4  gap-5 w-9/12 m-auto">
                        {product.map((item) => (
                            <a
                                key={product.id}
                                href={product.href}
                                className="group w-[200px] bg-[#e2e2e2] h-[200px]"
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">
                                    {product.name}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                    {product.price}
                                </p>
                            </a>
                            // <div>Tina</div>
                        ))}
                    </div>
                    {/* <NewArrivalProductCard /> */}
                </div>
            </div>
        </div>
    );
};

export default LatestArrival;
