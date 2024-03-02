import React from 'react';

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[15rem] m-3 overflow-hidden border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg'>
      <div className='h-[20rem] overflow-hidden'>
        <img
          src={product.imageUrl}
          alt="Product Image"
          className='w-full h-full object-cover'
        />
      </div>
      <div className='textPart bg-white p-3'>
        <div>
          <p className='font-bold text-gray-700'>
            {product.brand}
          </p>
          <p className='text-gray-600'>
            {product.title}
          </p>
        </div>
        <div className='flex items-center space-x-2 mt-2'>
          <p className='text-lg font-semibold text-indigo-600'>${product.discountedPrice}</p>
          <p className='line-through text-sm text-gray-500'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
