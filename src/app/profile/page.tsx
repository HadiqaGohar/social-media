'use client';
import React, { useState } from 'react';
import { PiNotificationLight } from 'react-icons/pi';
import { TbGridDots } from 'react-icons/tb';
import { FaPlus, FaEllipsisH } from 'react-icons/fa'; // Icons for edit, save, etc.

interface Post {
    type: string;
    content: string;
    author: string;
    profileImageUrl: string;
    timeAgo: string;
}

function Profile() {
    // Profile state
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState("User Name");
    const [profileImage, setProfileImage] = useState<string>("");
    const [newProfileImage, setNewProfileImage] = useState<string | null>(null);

    // Posts state
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostContent, setNewPostContent] = useState("");
    const [newPostType, setNewPostType] = useState("text"); // Default post type is text
    const [mediaFile, setMediaFile] = useState<File | null>(null);
    const [isPostEditing, setIsPostEditing] = useState<{ [key: number]: boolean }>({});
    const [isOptionsVisible, setIsOptionsVisible] = useState<{ [key: number]: boolean }>({});

    // Handle profile image change
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

    // Save profile changes
    const handleSaveProfile = () => {
        if (newProfileImage) {
            setProfileImage(newProfileImage);
        }
        setIsEditing(false);
    };

    // Add new post
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
                        profileImageUrl: profileImage || "default-avatar.png",
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
                    profileImageUrl: profileImage || "default-avatar.png",
                    timeAgo: "Just now"
                }]);
                setNewPostContent("");
            } else {
                alert("Post content cannot be empty!");
            }
        }
    };

    // File upload handler
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setMediaFile(file || null);
    };

    // Post edit toggle
    const togglePostEdit = (index: number) => {
        setIsPostEditing({ ...isPostEditing, [index]: !isPostEditing[index] });
    };

    // Save post edit
    const handleSavePostEdit = (index: number) => {
        togglePostEdit(index);
    };

    // Toggle post options visibility
    const toggleOptionsVisibility = (index: number) => {
        setIsOptionsVisible({ ...isOptionsVisible, [index]: !isOptionsVisible[index] });
    };

    // Delete a post
    const handleDeletePost = (index: number) => {
        setPosts(posts.filter((_, i) => i !== index));
        setIsOptionsVisible({ ...isOptionsVisible, [index]: false });
    };

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            {/* Header */}
            <div className='bg-indigo-600 p-4 rounded-t-md shadow-md text-white flex items-center justify-between'>
                <div className="flex items-center">
                    <PiNotificationLight size={24} />
                    <h1 className="text-xl font-bold ml-4">My Profile</h1>
                </div>
                <TbGridDots size={24} />
            </div>

            {/* Welcome Section */}
            <div className='bg-indigo-600 p-4 shadow-md text-white'>
                <h2 className='mt-6'>Welcome Back!</h2>
                <h1 className='mb-4 mt-4 text-5xl font-sans'>
                    {username} <br />
                </h1>
            </div>

            {/* Profile Section */}
            <div className='bg-white p-4 rounded-b-md shadow-md text-indigo-600'>
                {/* Profile Image */}
                <div className="grid place-items-center">
                    <img
                        src={profileImage || "default-avatar.png"}
                        alt="Profile Picture"
                        className='rounded-full bg-blue-600 h-[200px] w-[200px]'
                    />
                </div>

                {/* Stats */}
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

                {/* Edit Profile */}
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

                {/* New Post Section */}
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

                {/* Post List */}
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
                                                <div className="absolute right-0 bg-white shadow-lg rounded p-2">
                                                    <button onClick={() => togglePostEdit(index)} className="block w-full text-left">Edit</button>
                                                    <button onClick={() => handleDeletePost(index)} className="block w-full text-left text-red-600">Delete</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-gray-500">{post.timeAgo}</span>
                                </div>
                            </div>
                            {isPostEditing[index] ? (
                                <div>
                                    <textarea
                                        value={post.content}
                                        onChange={(e) => {
                                            const updatedPosts = [...posts];
                                            updatedPosts[index].content = e.target.value;
                                            setPosts(updatedPosts);
                                        }}
                                        className="border p-2 rounded w-full mt-2"
                                    />
                                    <button
                                        onClick={() => handleSavePostEdit(index)}
                                        className="bg-indigo-600 text-white p-2 rounded mt-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : post.type === "text" ? (
                                <p className="mt-2">{post.content}</p>
                            ) : post.type === "image" ? (
                                <img src={post.content} alt="Post" className="mt-2 max-w-full" />
                            ) : post.type === "video" ? (
                                <video controls className="mt-2 max-w-full">
                                    <source src={post.content} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
