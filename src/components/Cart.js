import React from 'react'
import { useSelector } from 'react-redux';
import Description from './Description';
import { FOOD_URL } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice.js';
import swal from 'sweetalert';

import swal from 'sweetalert';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const DeleteItem = (index, itemName) => {
    swal({
      title: `Delete ${itemName}?`,
      icon: "warning",
      buttons: {
        cancel: "No",
        confirm: {
          text: "Delete",
          className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
        },
      },
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(removeItem(index));
      }
    });
  };

  const deleteOrder = () => {
    swal({
      title: "Clear Cart?",
      icon: "error",
      buttons: {
        cancel: "No",
        confirm: {
          text: "Clear",
          className: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",
        },
      },
    })
    .then((willClear) => {
      if (willClear) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <div className='text-center'>
      <h1 className='p-1 m-1 font-bold text-2xl' >Cart</h1>
      {cartItems.length > 0 && (
        <button
          type="button"
          className="rounded-lg h-7 font-bold cursor-pointer bg-red-500 text-white my-0 mx-3 px-2"
          onClick={deleteOrder}
        >
          Clear Cart
        </button>
      )}
      <div className="mx-auto max-w-xl flex flex-wrap justify-center gap-4">
        {cartItems.length > 0 && (
          <ul className="p-0 list-none">
            {cartItems.map((item, index) => (
              <li key={item?.card?.info?.id} className="p-4 mb-5 bg-white rounded-xl shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4 ">
                    <p className="my-1 mx-0 text-lg text-gray-600 break-words font-bold">
                      {item?.card?.info?.name}
                    </p>
                    <p className="my-1 mx-0 text-md text-gray-600 break-words font-semibold">
                      ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                    </p>
                    <p className="my-1 mx-0 text-md text-gray-600 break-words font-semibold">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating || 4.1} (
                      {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 10})
                    </p>
                    <Description description={item?.card?.info?.description} />
                  </div>
                  <div className="flex flex-col items-end relative">
                    <img
                      className="w-32 h-32 mb-3 rounded-xl bg-red-200"
                      src={FOOD_URL + item?.card?.info?.imageId}
                      alt="Food Item"
                    />
                    <button
                      className="absolute top-24 right-[25px] py-2 px-3 mt-2 bg-red-500 text-white font-bold border-none rounded-md cursor-pointer items-center hover:bg-red-600"
                      onClick={() => DeleteItem(index, item?.card?.info?.name)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <hr className="mt-4 w-[100%] border-[1px] border-[#dddddd]" />
              </li>
            ))}
          </ul>
        )}
      </div>
      {cartItems.length == 0 && (
        <div>
          <div className="flex justify-center">
            <img
              src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--shopping-ecommerce-simple-error-state-pack-user-interface-illustrations-6024626.png?f=webp'
              className='h-96'
            />
          </div>
          <p className='p-1 m-1 font-bold text-3xl'>Looks....Like your cart is empty!!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;