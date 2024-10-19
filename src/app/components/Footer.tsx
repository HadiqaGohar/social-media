"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiHeart, FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import AddPostModal from './AddPostModal'; // Import the modal component
import { FaUserCircle } from 'react-icons/fa';

function Footer() {
  const [userAvatar, setUserAvatar] = useState("");
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const avatar = localStorage.getItem("userAvatar") || ""; 
    setUserAvatar(avatar);
  }, []);

  const handleAddPostClick = () => {
    setShowModal(true); // Show the modal when the add icon is clicked
  };

  return (
    <>
      <div className='fixed bottom-0 left-0 right-0 rounded-t-3xl bg-white shadow-lg p-4 lg:mx-8 xl:mx-10 2xl:mx-16'>
        <nav>
          <ul className='flex flex-row justify-around'>
            <li className='transition-transform transform hover:scale-110'>
              <Link href="/">
                <span className="text-indigo-600 text-2xl">
                  <GoHomeFill />
                </span>
              </Link>
            </li>
            <li className='transition-transform transform hover:scale-110'>
              <Link href="/notification">
                <span className="text-indigo-600 text-2xl">
                  <FiHeart />
                </span>
              </Link>
            </li>
            {/* <li className='transition-transform transform hover:scale-110'>
              <div className='rounded-md bg-indigo-600 cursor-pointer' onClick={handleAddPostClick}>
                <span className="text-white text-2xl">
                  <IoMdAdd />
                </span>
              </div>
            </li> */}
            <li className='transition-transform transform hover:scale-110'>
              <Link href="/search">
                <span className="text-indigo-600 text-2xl">
                  <FiSearch />
                </span>
              </Link>
            </li>
            <li className='transition-transform transform hover:scale-110'>
              <Link href="/profile">
              <span className="text-indigo-600 text-2xl">
              <FaUserCircle />
                </span>
              </Link>
              
            </li>
          </ul>
        </nav>
      </div>
      {/* Add Post Modal */}
      {showModal && <AddPostModal onClose={() => setShowModal(false)} onAddPost={(post) => console.log(post)} />} {/* Render the modal */}
    </>
  );
}

export default Footer;
