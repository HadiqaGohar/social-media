'use client'
import React, { useState } from 'react';
import { PiNotificationLight } from 'react-icons/pi';
import { TbGridDots } from 'react-icons/tb';
import { FaPlus, FaEllipsisH } from 'react-icons/fa'; // Added Edit and Save icons

function Profile() {
    // State for profile editing
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState("User Name");
    const [profileImage, setProfileImage] = useState("");
    const [newProfileImage, setNewProfileImage] = useState(null);

    // State for managing posts
    const [posts, setPosts] = useState<{ type: string, content: string, author: string, profileImageUrl: string, timeAgo: string }[]>([]);
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostType, setNewPostType] = useState("text"); // Default post type is text
    const [mediaFile, setMediaFile] = useState(null); // For image or video file
    const [isPostEditing, setIsPostEditing] = useState<{ [key: number]: boolean }>({}); // Track post edit state
    const [isOptionsVisible, setIsOptionsVisible] = useState<{ [key: number]: boolean }>({}); // Track options visibility

    // Handle profile image change
    const handleImageChange = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProfileImage(reader.result as any); // Update preview image
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle profile saving
    const handleSaveProfile = () => {
        if (newProfileImage) {
            setProfileImage(newProfileImage); // Update profile image
        }
        setIsEditing(false); // Close editing mode
    };

    // Handle new post submission
    const handleAddPost = () => {
        let content = newPostContent.trim();

        // If the post type is not text, set the content to the media file URL
        if (newPostType === "image" || newPostType === "video") {
            if (mediaFile) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPosts([...posts, {
                        type: newPostType,
                        content: reader.result as string,
                        author: username,
                        profileImageUrl: profileImage || "default-avatar.png",
                        timeAgo: "Just now"
                    }]);
                    setNewPostContent("");
                    setMediaFile(null); // Clear file input
                };
                reader.readAsDataURL(mediaFile); // Convert the file to a data URL
            } else {
                alert(`Please select a ${newPostType} file.`);
            }
        } else {
            if (content) {
                setPosts([...posts, {
                    type: "text",
                    content,
                    author: username,
                    profileImageUrl: profileImage || "default-avatar.png",
                    timeAgo: "Just now"
                }]); // Add new text post
                setNewPostContent(""); // Clear input
            } else {
                alert("Post content cannot be empty!");
            }
        }
    };

    // Handle footer icon click to add a default post
    // const handleFooterIconClick = () => {
    //     const defaultPost = "New post added from the footer!";
    //     setPosts([...posts, {
    //         type: "text",
    //         content: defaultPost,
    //         author: username,
    //         profileImageUrl: profileImage || "default-avatar.png",
    //         timeAgo: "Just now"
    //     }]);
    // };

    // Handle file upload (image or video)
    const handleFileChange = (event: { target: { files: any[]; }; }) => {
        const file = event.target.files[0];
        setMediaFile(file); // Store the selected file
    };



    // Handle post editing
    const togglePostEdit = (index: number) => {
        setIsPostEditing({ ...isPostEditing, [index]: !isPostEditing[index] });
    };

    // Handle save post edits
    const handleSavePostEdit = (index: number) => {
        togglePostEdit(index); // Save and exit editing mode
    };

    // Toggle options menu visibility
    const toggleOptionsVisibility = (index: number) => {
        setIsOptionsVisible({ ...isOptionsVisible, [index]: !isOptionsVisible[index] });
    };

    // Handle post deletion
    const handleDeletePost = (index: number) => {
        const updatedPosts = posts.filter((_, i) => i !== index);
        setPosts(updatedPosts);
        setIsOptionsVisible({ ...isOptionsVisible, [index]: false }); // Hide options after deletion
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            {/* Header Section */}
            <div className='bg-indigo-600 p-4 rounded-t-md shadow-md text-white flex items-center justify-between lg:mx-8 xl:mx-10 2xl:mx-16'>
                <div className="flex items-center">
                    <PiNotificationLight size={24} />
                    <h1 className="text-xl font-bold ml-4">My Profile</h1>
                </div>
                <TbGridDots size={24} />
            </div>

            {/* Welcome Section */}
            <div className='bg-indigo-600 p-4 shadow-md text-white lg:mx-8 xl:mx-10 2xl:mx-16'>
                <h2 className='mt-6'>Welcome Back!</h2>
                <h1 className='mb-4 mt-4 text-5xl font-sans'>
                    {username} <br />
                </h1>
            </div>

            {/* Profile Info Section */}
            <div className='bg-white p-4 rounded-b-md shadow-md text-indigo-600 lg:mx-8 xl:mx-10 2xl:mx-16'>
                {/* Profile Picture - Centered with grid */}
                <div className="grid place-items-center">
                    <img
                        src={profileImage || "default-avatar.png"}
                        alt="Profile Picture"
                        className='rounded-full bg-blue-600 h-[200px] w-[200px]'
                    />
                </div>

                {/* Stats Section */}
                <div className="flex flex-row gap-4 items-center justify-center mt-6 space-x-4">
                    <div className="bg-indigo-600 rounded-xl shadow-lg h-24 w-24 flex flex-col justify-center items-center text-white animate-stats">
                        <h3 className="text-2xl font-bold">{posts.length}</h3>
                        <span>Posts</span>
                    </div>
                    <div className="bg-indigo-600 rounded-xl shadow-lg h-24 w-24 flex flex-col justify-center items-center text-white animate-stats">
                        <h3 className="text-2xl font-bold">9M</h3>
                        <span>Followers</span>
                    </div>
                    <div className="bg-indigo-600 rounded-xl shadow-lg h-24 w-24 flex flex-col justify-center items-center text-white animate-stats">
                        <h3 className="text-2xl font-bold">38</h3>
                        <span>Following</span>
                    </div>
                </div>

                {/* Edit Profile Section */}
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
                        {/* <BiSolidEditAlt /> */}
                        Edit Profile
                    </button>
                )}

                {/* Add Post Section */}
                <div className="mt-8">
                    {/* Post Type Selection */}
                    <select
                        value={newPostType}
                        onChange={(e) => setNewPostType(e.target.value)}
                        className="border p-2 rounded w-[100px] mb-4"
                    >
                        <option value="text">Text</option>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>

                    {/* Post Content or Media Upload */}
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

                    {/* Add Post Button */}
                    <button
                        onClick={handleAddPost}
                        className="bg-indigo-600 text-white p-2 rounded w-[100px]"
                    >
                        {/* <FaPlus className="inline-block" />  */}
                        Add Post
                    </button>
                </div>

                {/* Posts Section */}
                <div className="mt-8 flex flex-col">
                    {posts.map((post, index) => (
                        <div key={index} className="border-b mb-4 pb-4">
                            <div className="flex items-center">
                                <img
                                    src={post.profileImageUrl || "default-avatar.png"}
                                    alt="Profile"
                                    className="rounded-full h-10 w-10 mr-2"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-semibold">{post.author}</h3>
                                        <div className="relative">
                                            <button onClick={() => toggleOptionsVisibility(index)} aria-label="Post options">
                                                <FaEllipsisH />
                                            </button>
                                            {isOptionsVisible[index] && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                                    <ul>
                                                        <li className="p-2 hover:bg-indigo-100 cursor-pointer" onClick={() => togglePostEdit(index)}>Edit Post</li>
                                                        {/* <li className="p-2 hover:bg-indigo-100 cursor-pointer" onClick={() => handleAddPost()}>Add Post</li> */}
                                                        <li className="p-2 hover:bg-indigo-100 cursor-pointer" onClick={() => handleDeletePost(index)}>Delete Post</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                                </div>
                            </div>
                            {post.type === "text" ? (
                                <p className="mt-2">{post.content}</p>
                            ) : (
                                <img src={post.content} alt={post.type} className="mt-2 w-[500px] md:w-auto mx-auto object-cover h-[600px]" />
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Profile;
