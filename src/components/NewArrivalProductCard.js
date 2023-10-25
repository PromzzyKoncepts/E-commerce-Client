import React from 'react'

function NewArrivalProductCard() {
    const products = new Array(50)
    console.log(products)
  return (
    <div>
        <a href="#" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="" alt="product1." class="h-full w-full object-cover object-center group-hover:opacity-75"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
    </div>
  )
}

export default NewArrivalProductCard