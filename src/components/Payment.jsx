import { Link } from "react-router-dom";
import React, { useState } from "react";

function Payment() {
  const [counter, setCount] = useState(0);
  const [counter2, setCount2] = useState(0);
  const [counter3, setCount3] = useState(0);
  return (
    <div className="flex justify-between w-full h-[720px] bg-white ">
      <div className="container-pay-left mt-[100px] p-10">
        <h1 className="text-black text-4xl font-semibold ">Your Cart</h1>
        <div className="flex-row bg-gray-100 w-[500px] h-[430px] shadow-md mt-5 rounded-2xl px-5">
          <div className="flex justify-between">
            <div className="flex-row">
              <div className="flex items-center pl-3 w-full h-[130px]  ">
                <img
                  src="src/assets/image copy 2.png"
                  alt=""
                  className="w-[100px] h-[100px]"
                />
                <div className="flex-row px-2">
                  <p className="text-sm font-semibold">iPhone 17 pro max</p>
                  <p className="text-sm font-bold ">$1,099</p>
                </div>
              </div>{" "}
            </div>
            <div className="py-3">
              <i class="fa-solid fa-trash text-red-500 pb-10 pl-20"></i>

              <div className="w-[100px] h-[35px] border border-gray-300 flex justify-center items-center rounded-md">
                <div className="flex items-center justify-between w-full px-3">
                  <button
                    onClick={() => setCount(counter > 0 ? counter - 1 : 0)}
                    className="text-black text-xl font-bold hover:text-gray-600"
                  >
                    −
                  </button>

                  <p className="text-[15px] font-medium">{counter}</p>

                  <button
                    onClick={() => setCount(counter + 1)}
                    className="text-black text-xl font-bold hover:text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-gray-400 px-5" />
          <div className="flex justify-between">
            <div className="flex-row">
              <div className="flex items-center pl-3 w-full h-[150px]  ">
                <img
                  src="src/assets/image copy.png"
                  alt=""
                  className="w-[100px] h-[100px]"
                />
                <div className="flex-row px-2">
                  <p className="text-sm font-semibold">iPhone 17 pro max</p>
                  <p className="text-sm  font-bold ">$1,099</p>
                </div>
              </div>{" "}
            </div>
            <div className="pt-8">
              <i class="fa-solid fa-trash text-red-500 pb-10 pl-20"></i>
              <div className="w-[100px] h-[35px] border border-gray-300 flex justify-center items-center rounded-md">
                <div className="flex items-center justify-between w-full px-3">
                  <button
                    onClick={() => setCount2(counter2 > 0 ? counter2 - 1 : 0)}
                    className="text-black text-xl font-bold hover:text-gray-600"
                  >
                    −
                  </button>

                  <p className="text-[15px] font-medium">{counter2}</p>

                  <button
                    onClick={() => setCount2(counter2 + 1)}
                    className="text-black text-xl font-bold hover:text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-gray-400 px-5" />
          <div className="flex justify-between">
            <div className="flex-row">
              <div className="flex items-center pl-3 w-full h-[130px]  ">
                <img
                  src="src/assets/image copy 3.png"
                  alt=""
                  className="w-[100px] h-[100px]"
                />
                <div className="flex-row px-2">
                  <p className="text-sm font-semibold">iPhone 17 pro max</p>
                  <p className="text-sm  font-bold ">$1,099</p>
                </div>
              </div>{" "}
            </div>
            <div className="py-5">
              <i class="fa-solid fa-trash text-red-500 pb-10 pl-20"></i>

              <div className="w-[100px] h-[35px] border border-gray-300 flex justify-center items-center rounded-md">
                <div className="flex items-center justify-between w-full px-3">
                  <button
                    onClick={() => setCount3(counter3 > 0 ? counter3 - 1 : 0)}
                    className="text-black text-xl font-bold hover:text-gray-600"
                  >
                    −
                  </button>

                  <p className="text-[15px] font-medium">{counter3}</p>

                  <button
                    onClick={() => setCount3(counter3 + 1)}
                    className="text-black text-xl font-bold hover:text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container-pay-right flex-row w-[50%] mt-[100px] px-5">
        <h1 className="text-4xl text-black font-bold p-10 ">Payment Detail</h1>
        <label htmlFor="" className="text-gray-400">
          Card Holder name
        </label>
        <div className="relative w-[600px] pt-2 pb-5">
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 text-black p-2 pr-10 rounded bg-transparent"
          />
          <i className="fa-solid fa-user-pen text-gray-400 absolute right-3 top-7 -translate-y-1/2"></i>
        </div>
        <label htmlFor="" className="text-gray-400">
          Card Number
        </label>
        <div className="relative w-[600px] pt-2">
          <input
            type="text"
            placeholder="xxx xxx xxx"
            className="w-full border border-gray-300 text-black p-2 pr-10 rounded bg-transparent"
          />
        </div>
        <div className="flex gap-5 mt-5">
          <div>
            <label htmlFor="" className="text-gray-400">
              Expiry Date
            </label>
            <div className="relative w-[290px] pt-2">
              <input
                type="text"
                placeholder="xxx xxx xxx"
                className="w-full border border-gray-300 text-black p-2 pr-10 rounded bg-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="" className="text-gray-400">
              Expiry Date
            </label>
            <div className="relative w-[290px] pt-2">
              <input
                type="text"
                placeholder="xxx xxx xxx"
                className="w-full border border-gray-300 text-black p-2 pr-10 rounded bg-transparent"
              />
            </div>
          </div>
        </div>
        <div className=" w-[600px] pt-6">
          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <p>Subtotal</p>
            <p>$3,297</p>
          </div>
          <div className="flex justify-between text-gray-700 text-sm mb-2">
            <p>Shipping</p>
            <p>$15</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-black text-lg">
            <p>Total</p>
            <p>$3,312</p>
          </div>

          <button className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
            Proceed to Payment
          </button>
        </div>
        <div className="flex justify-center pr-30 gap-5 mt-5">
          <img src="src/assets/image copy 50.png" alt="" className="w-[60px] h-[40px]"/>
          <img src="src/assets/image copy 48.png" alt="" className="w-[60px] h-[40px]"/>
          <img src="src/assets/image copy 51.png" alt="" className="w-[60px] h-[40px]"/>
        </div>
      </div>
    </div>
  );
}

export default Payment;
