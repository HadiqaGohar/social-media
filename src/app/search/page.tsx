'use client';
import React, { useState } from "react";
import { PiNotificationLight } from "react-icons/pi";
import { TbGridDots, TbSearch } from "react-icons/tb";

// Sample product data with image URLs and names
const products = [
  { id: 1, name: "Mountain Sky River", imageUrl: "https://cdn.pixabay.com/photo/2018/12/15/18/35/mountain-3877434_960_720.jpg" },
  { id: 2, name: "River Green Forest Stone", imageUrl: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Forest Garden Sunset ", imageUrl: "https://img.freepik.com/free-photo/beautiful-japanese-forest-scene_23-2151498109.jpg" },
  { id: 4, name: "Desert Sun Soil", imageUrl: "https://t4.ftcdn.net/jpg/02/78/52/07/360_F_278520748_G9sRQdSValj67Hihmt4r3ji6SLRT3ViA.jpg" },
  { id: 5, name: "Ocean Water Sea", imageUrl: "https://img.freepik.com/free-photo/beautiful-nature-landscape-with-black-sandy-beach-ocean_23-2151380422.jpg" },
  { id: 6, name: "Nature", imageUrl: "https://static.vecteezy.com/system/resources/previews/032/250/860/large_2x/beautiful-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-nature-wallpaper-ai-generated-free-photo.jpg" },
  { id: 7, name: "Mountain River", imageUrl: "https://vastphotos.com/files/uploads/photos/10556/lake-landscape-photo-m.jpg?v=20230830084557" },
  { id: 8, name: "butterfly Nature ", imageUrl: "https://images.unsplash.com/photo-1667822348825-f2149f3a2f60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXRpZnVsJTIwYnV0dGVyZmx5fGVufDB8fDB8fHww" },
  { id: 9, name: "Night Sky Star", imageUrl: "https://www.cpr.org/cdn-cgi/image/width=3840,quality=75,format=auto/https://wp-cpr.s3.amazonaws.com/uploads/2022/05/Dark-Sky-at-Sand-dunes.jpg" },
  { id: 10, name: "Sun set", imageUrl: "https://images8.alphacoders.com/426/thumb-1920-426497.jpg" },
  { id: 11, name: "Sun flower ", imageUrl: "https://m.media-amazon.com/images/I/81TGrWvgdOL._AC_UF1000,1000_QL80_.jpg" },
  { id: 12, name: "Fire Forest", imageUrl: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs43017-021-00239-8/MediaObjects/43017_2021_239_Figa_HTML.png" },
  { id: 13, name: "Elephant Wild Forest Animal", imageUrl: "https://cdn.mos.cms.futurecdn.net/ATbXyvTWdhWBBBnGfa958f-1200-80.jpg" },
  { id: 14, name: "Snow fall", imageUrl: "https://img.goodfon.com/original/2858x1720/4/81/winter-night-forest-snow-nature-zimniaia-noch-les-sneg-priro.jpg" },
  { id: 15, name: "Moon Night Sky ", imageUrl: "https://thumbs.dreamstime.com/b/full-moon-sky-beautiful-city-night-full-moon-sky-beautiful-city-night-124523428.jpg" },
  { id: 16, name: "Sky ", imageUrl: "https://cdn.britannica.com/74/182174-050-6755AB49/balloon-sky.jpg" },
  { id: 17, name: "Ocean Airoplane Sky Fly", imageUrl: "https://cdn.mos.cms.futurecdn.net/Tpwmmfo3CiAJvwd4vXGzvn.jpg" },
  { id: 18, name: "Nature Ship Boat Ocean", imageUrl: "https://s.rfi.fr/media/display/882dd6ac-6b8d-11ef-8b9f-005056bf30b7/w:1280/p:4x3/French%20sailing%20cargo%20ship%20Anemos_Credit_TOWT_Ronan%20Gladu.png" },
  { id: 19, name: "RAin leave Water Green", imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/010/876/623/original/drops-of-rain-with-green-tree-nature-background-romantic-shot-scene-content-colorful-raindrops-free-video.jpg" },
  { id: 20, name: "Snow mountain", imageUrl: "https://img.freepik.com/premium-photo/snow-nature-background_398492-5838.jpg" },
  
];

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search input and filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className='mx-4 bg-indigo-600 p-4 rounded-md shadow-md text-white flex items-center justify-between lg:mx-8 xl:mx-10 2xl:mx-16'>
        <div className="flex items-center">
          <PiNotificationLight size={24} className="mr-2" />
          <h1 className="text-lg lg:text-xl font-bold mr-2">Search</h1>
        </div>

        <div className="flex items-center space-x-2 bg-white p-1 rounded-md mr-2">
          {/* Search Icon inside the search bar */}
          <TbSearch size={24} className="cursor-pointer text-gray-500" />

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none p-2 w-full text-black bg-transparent focus:outline-none"
          />

          
        </div>
        {/* Grid Icon */}
        <TbGridDots size={24} className="cursor-pointer text-white" />
      </div>

      {/* Product Display */}
      <div className="mx-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 lg:mx-8 xl:mx-10 2xl:mx-16">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-[300px] object-cover"
              />
              
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchProduct;
