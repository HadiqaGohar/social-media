'use client';
import React, { useState } from 'react';
import { PiNotificationLight } from 'react-icons/pi';
import { TbGridDots } from 'react-icons/tb';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import Image from 'next/image';

// Ensure the path is correct based on your project structure
const DEFAULT_AVATAR = "/default-avatar.png"; // Update this path as needed

interface Post {
    type: string;
    content: string;
    author: string;
    profileImageUrl: string;
    timeAgo: string;
}

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState("User Name");
    const [profileImage, setProfileImage] = useState<string>(DEFAULT_AVATAR);
    const [newProfileImage, setNewProfileImage] = useState<string | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostType, setNewPostType] = useState("text");
    const [mediaFile, setMediaFile] = useState<File | null>(null);
    const [isPostEditing, setIsPostEditing] = useState<{ [key: number]: boolean }>({});
    const [isOptionsVisible, setIsOptionsVisible] = useState<{ [key: number]: boolean }>({});

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveProfile = () => {
        if (newProfileImage) {
            setProfileImage(newProfileImage);
        }
        setIsEditing(false);
    };

    const handleAddPost = () => {
        let content = newPostContent.trim();

        if (newPostType === "image" || newPostType === "video") {
            if (mediaFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPosts([...posts, {
                        type: newPostType,
                        content: reader.result as string,
                        author: username,
                        profileImageUrl: profileImage,
                        timeAgo: "Just now"
                    }]);
                    setNewPostContent("");
                    setMediaFile(null);
                };
                reader.readAsDataURL(mediaFile);
            } else {
                alert(`Please select a ${newPostType} file.`);
            }
        } else {
            if (content) {
                setPosts([...posts, {
                    type: "text",
                    content,
                    author: username,
                    profileImageUrl: profileImage,
                    timeAgo: "Just now"
                }]);
                setNewPostContent("");
            } else {
                alert("Post content cannot be empty!");
            }
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setMediaFile(file || null);
    };

    const togglePostEdit = (index: number) => {
        setIsPostEditing({ ...isPostEditing, [index]: !isPostEditing[index] });
    };

    const handleSavePostEdit = (index: number) => {
        togglePostEdit(index);
    };

    const toggleOptionsVisibility = (index: number) => {
        setIsOptionsVisible({ ...isOptionsVisible, [index]: !isOptionsVisible[index] });
    };

    const handleDeletePost = (index: number) => {
        setPosts(posts.filter((_, i) => i !== index));
        setIsOptionsVisible({ ...isOptionsVisible, [index]: false });
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            <div className='bg-indigo-600 p-4 rounded-t-md shadow-md text-white flex items-center justify-between'>
                <div className="flex items-center">
                    <PiNotificationLight size={24} />
                    <h1 className="text-xl font-bold ml-4">My Profile</h1>
                </div>
                <TbGridDots size={24} />
            </div>

            <div className='bg-indigo-600 p-4 shadow-md text-white'>
                <h2 className='mt-6'>Welcome Back!</h2>
                <h1 className='mb-4 mt-4 text-5xl font-sans'>
                    {username} <br />
                </h1>
            </div>

            <div className='bg-white p-4 rounded-b-md shadow-md text-indigo-600'>
                <div className="grid place-items-center">
                    <Image
                        src={profileImage}
                        alt="Profile Picture"
                        className='rounded-full bg-blue-600 h-[200px] w-[200px]'
                        height={200} width={200}
                    />
                </div>

                <div className="flex justify-center mt-6 space-x-4">
                    <div className="bg-indigo-600 rounded-xl h-24 w-24 flex flex-col justify-center items-center text-white">
                        <h3 className="text-2xl font-bold">{posts.length}</h3>
                        <span>Posts</span>
                    </div>
                    <div className="bg-indigo-600 rounded-xl h-24 w-24 flex flex-col justify-center items-center text-white">
                        <h3 className="text-2xl font-bold">9M</h3>
                        <span>Followers</span>
                    </div>
                    <div className="bg-indigo-600 rounded-xl h-24 w-24 flex flex-col justify-center items-center text-white">
                        <h3 className="text-2xl font-bold">38</h3>
                        <span>Following</span>
                    </div>
                </div>

                {isEditing ? (
                    <div className="mt-4">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="border p-2 rounded w-full mb-4"
                            placeholder="Edit Username"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border p-2 rounded w-full mb-4"
                        />
                        <button
                            onClick={handleSaveProfile}
                            className="bg-indigo-600 text-white p-2 rounded w-full"
                        >
                            Save Changes
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-indigo-600 text-white p-2 rounded w-[100px] mt-4"
                    >
                        Edit Profile
                    </button>
                )}

                <div className="mt-8">
                    <select
                        value={newPostType}
                        onChange={(e) => setNewPostType(e.target.value)}
                        className="border p-2 rounded w-[100px] mb-4"
                    >
                        <option value="text">Text</option>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>

                    {newPostType === "text" ? (
                        <textarea
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            className="border p-2 rounded w-full mb-4"
                            placeholder="Write something..."
                        />
                    ) : (
                        <input
                            type="file"
                            accept={newPostType === "image" ? "image/*" : "video/*"}
                            onChange={handleFileChange}
                            className="border p-2 rounded w-full mb-4"
                        />
                    )}

                    <button
                        onClick={handleAddPost}
                        className="bg-indigo-600 text-white p-2 rounded w-[100px]"
                    >
                        Add Post
                    </button>
                </div>

                <div className="mt-8 flex flex-col">
                    {posts.map((post, index) => (
                        <div key={index} className="border-b mb-4 pb-4">
                            <div className="flex items-center">
                                <Image
                                    src={post.profileImageUrl || DEFAULT_AVATAR}
                                    alt="Profile"
                                    className="rounded-full h-10 w-10 mr-2"
                                    height={40} width={40}
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold">{post.author}</h3>
                                        <div className="relative">
                                            <button onClick={() => toggleOptionsVisibility(index)} aria-label="Post options">
                                                <FaEllipsisH />
                                            </button>
                                            {isOptionsVisible[index] && (
                                                <div className="absolute right-0 bg-white shadow-lg rounded p-2">
                                                    <button onClick={() => togglePostEdit(index)} className="block w-full text-left">Edit</button>
                                                    <button onClick={() => handleDeletePost(index)} className="block w-full text-left text-red-600">Delete</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                                </div>
                            </div>
                            {post.type === "text" ? (
                                <p>{post.content}</p>
                            ) : (
                                <Image
                                    src={post.content}
                                    alt="Post"
                                    className="mt-2 max-w-full"
                                    width={100}
                                    height={100}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
