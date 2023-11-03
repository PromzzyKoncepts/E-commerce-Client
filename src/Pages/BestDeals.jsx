import React from 'react'

function BestDeals() {

    const productObject = {
        id: 1,
        href: "",
        imageAlt: "",
        imagSrc: "",
        price: "$20",
        name: "Shirt"
    };
    const products = new Array(50).fill(productObject);
  return (
    <div>
        <h2>Best Deals</h2>
        <div>
            {
                products.map(item => (
                    <a href={productObject.href} key={productObject.id}>
                        <div>
                            <img src={productObject.imagSrc} alt={productObject.imageAlt} />
                            <h3>{productObject.price}</h3>
                            <p>{productObject.name}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default BestDeals