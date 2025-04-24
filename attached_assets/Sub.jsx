import React from 'react'

function Sub() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black py-16 px-4">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-600 to-black opacity-30 rounded-2xl blur-2xl"></div>

    {/* Content */}
    <div className="relative z-10 max-w-2xl text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl">
      <p className="text-pink-400 uppercase text-sm font-semibold tracking-widest">Stay Connected</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
        Subscribe For The Latest In Prop Trading News And Deals
      </h2>
      <div className="mt-6 flex items-center justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-64 md:w-80 px-4 py-3 text-white bg-black/80 border border-gray-700 rounded-full outline-none focus:border-pink-500 placeholder-gray-400"
        />
        <button className="px-6 py-3 text-sm font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600 transition">
          Subscribe
        </button>
      </div>
    </div>
  </div>
  )
}

export default Sub