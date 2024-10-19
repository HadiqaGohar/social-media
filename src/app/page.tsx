"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { PiNotificationLight } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
import { TiHeart } from "react-icons/ti";

function Home() {
  const [likes, setLikes] = useState([28, 34, 98, 115, 789, 34, 531, 276, 2985, 3240, 5421, 941, 198, 1372, 423, 2379, 678, 1917, 133, 624]); // Track likes for each post

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const posts = [
    {
      id: 1,
      author: "Zoe",
      timeAgo: "38 min ago",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
      profileImageUrl: "https://imgv3.fotor.com/images/ai-headshot-generator/AI-generated-LinkedIn-profile-picture-of-a-female-with-long-hair-in-brown-and-white-suit-using-Fotor-AI-LinkedIn-photo-generator.jpg"
    },
    {
      id: 2,
      author: "Jack",
      timeAgo: "42 min ago",
      imageUrl: "https://t4.ftcdn.net/jpg/05/65/36/03/360_F_565360370_LrWWCTxczrmwqpsPYPljiFyE4gFqpecr.jpg",
      profileImageUrl: "https://media.istockphoto.com/id/1283231614/photo/portrait-of-happy-asian-handsome-young-man-in-fashionable-clothing.jpg?s=612x612&w=0&k=20&c=92SgRHJhWP2NUkzxtBqag43yRkYLjeFvg4_PcPYLynE="
    },
    {
      id: 3,
      author: "Ben",
      timeAgo: "57 min ago",
      imageUrl: "https://bahriatownlistings.com/wp-content/uploads/2023/11/Eiffel-tower-bahria-town-karachi-1024x1024.jpeg",
      profileImageUrl: "https://media.istockphoto.com/id/1163660532/photo/young-handnsome-asian-man-pointing-hand-to-empty-space.jpg?s=612x612&w=0&k=20&c=IXfI-92q8sXzjQvsD3oFSKwOSaYmePnhRc6vIIGSlR0="
    },
    {
      id: 4,
      author: "Clara",
      timeAgo: "59 min ago",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXeNC_MZqcffVGd5OrvnLry8jWl9ijU4hyQ&s",
      profileImageUrl: "https://media.istockphoto.com/id/483203543/photo/cheerful-laughing-woman-on-the-beach.jpg?s=612x612&w=0&k=20&c=qgXKrt3UBr1E6N__VuRYCVBPRW-BoJwj5HrpelUWAf0="
    },
    {
      id: 5,
      author: "David",
      timeAgo: "1 hour ago",
      imageUrl: "https://images.newscientist.com/wp-content/uploads/2023/02/07104439/SEI_142739270.jpg",
      profileImageUrl: "https://i.pinimg.com/736x/a9/da/cc/a9dacc0b10256f11d7f6791908290393.jpg"
    },
    {
      id: 6,
      author: "Elena",
      timeAgo: "3 hour ago",
      imageUrl: "https://www.rossmorevethospital.com.au/wp-content/uploads/2022/08/golden-baby-cat.jpeg",
      profileImageUrl: "https://img.freepik.com/premium-photo/most-beautiful-girls-fashion-model-front-solid-background_943617-1140.jpg"
    },
    {
      id: 7,
      author: "Felix",
      timeAgo: "6 hour ago",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/images-olympus/products/8204751_tile.jpg",
      profileImageUrl: "https://img.freepik.com/premium-photo/most-beautiful-modern-fashion-model-front-solid-background_943617-1276.jpg"
    },
    {
      id: 8,
      author: "Grace",
      timeAgo: "4 hour ago",
      imageUrl: "https://cdn.outsideonline.com/wp-content/uploads/2023/06/hiker-waterfall-nature_h.jpg",
      profileImageUrl: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726211905-c22a9127df4b8a8b96379e9d7a9d0d48-3.png"
    },
    {
      id: 9,
      author: "Isabella",
      timeAgo: "10 hour ago",
      imageUrl: "https://www.thescramble.com/wp-content/uploads/2019/03/family-dinner.1200.jpg.webp",
      profileImageUrl: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212800-cdcbed62ee40c402ff489b65bb759179-4.png"
    },
    {
      id: 10,
      author: "Kiara",
      timeAgo: "3 hour ago",
      imageUrl: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      profileImageUrl: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1714361380-037c9e6277cbce7da0c177d6984e9f70-2.png"
    },
   
   
    
    // Add more posts here (same structure)




    {
      id: 1,
      author: "Liam",
      timeAgo: "7 hour ago",
      imageUrl: "https://images.unsplash.com/photo-1654414883391-24e17446e4d4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBnaXJsfGVufDB8fDB8fHww",
      profileImageUrl: "https://img.freepik.com/fotos-premium/studio-portraet-eines-schoenen-teenagerjungen-auf-rosa-hintergrund_1016686-139917.jpg"
    },
    {
      id: 2,
      author: "Maya",
      timeAgo: "6 hour ago",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/6266a1e041192f558ea7a797/e9428bd7-2143-4721-a208-21a43419a0e5/BeyondIndoorPlay-13.jpg",
      profileImageUrl: "https://r2-us-west.photoai.com/1711916615-70dc801c540be6c0eb515eebbcd190e5-12.jpg"
    },
    {
      id: 3,
      author: "Noah",
      timeAgo: "8 hour ago",
      imageUrl: "https://www.bhg.com/thmb/fYKiVDhNg_XSUIQAyzFFsaSiFO0=/4000x0/filters:no_upscale():strip_icc()/garden-4fcf0177f89447b1b9868a76ac84990d.jpg",
      profileImageUrl: "https://img.freepik.com/premium-photo/teenager-boy-stylish-clothes-posing_641503-267710.jpg"
    },
    {
      id: 4,
      author: "Olivia",
      timeAgo: "11 hour ago",
      imageUrl: "https://th-thumbnailer.cdn-si-edu.com/CuUyANzT64sjHiOQUixgbXvt1qk=/fit-in/1072x0/filters:focal(960x640:961x641)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/a1/f3/a1f32a7a-1da5-4088-afc7-f2c0dda22aa3/plane-7013022_1920.jpg",
      profileImageUrl: "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=2048,f=jpeg,q=85/posts/images/655431852391265981/e7eacfe5-6b38-4c43-9ae9-5955be2e36b7"
    },
    {
      id: 5,
      author: "Priya",
      timeAgo: "38 min ago",
      imageUrl: "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41558-018-0332-5/MediaObjects/41558_2018_332_Figa_HTML.png",
      profileImageUrl: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?cs=srgb&dl=pexels-manei-2690323.jpg&fm=jpg"
    },
    {
      id: 6,
      author: "Quinn",
      timeAgo: "40 min ago",
      imageUrl: "https://www.teledataict.com/media/2021/09/benefits-of-working-from-home-1024x512-1.jpeg",
      profileImageUrl: "https://img.freepik.com/premium-photo/happy-fashion-smiling-african-american-girl-with-bright-summer-dress-solid-light-background_1114948-1836.jpg"
    },
    {
      id: 7,
      author: "Ryan",
      timeAgo: "3 hour ago",
      imageUrl: "https://dp-pic.com/wp-content/uploads/2024/05/a-young-standing-in-front-of-his-in-attitude-boys-attitude-dp-attitude-dpz-boy-attitude-dp-pic-new-dp-pic-2.jpg",
      profileImageUrl: "https://w0.peakpx.com/wallpaper/490/473/HD-wallpaper-attitude-boy-fashion-style-thumbnail.jpg"
    },
    {
      id: 8,
      author: "Sophia",
      timeAgo: "54 min ago",
      imageUrl: "https://nationaltoday.com/wp-content/uploads/2021/07/Rain-Day.jpg",
      profileImageUrl: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?cs=srgb&dl=pexels-kowalievska-1055691.jpg&fm=jpg"
    },
    {
      id: 9,
      author: "John",
      timeAgo: "11 hour ago",
      imageUrl: "https://img.freepik.com/premium-photo/wooden-boat-seaside-with-clear-sea-water_85212-1988.jpg",
      profileImageUrl: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1714361253-6c82437a4dbebbef68310101911ef7a8-1.png"
    },
    {
      id: 10,
      author: "Emilie",
      timeAgo: "7 hour ago",
      imageUrl: "https://capital-placement.com/wp-content/uploads/2021/07/The-benefits-of-travelling.jpg",
      profileImageUrl: "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?cs=srgb&dl=pexels-harsh-kushwaha-804217-1689731.jpg&fm=jpg"
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 ">
      <div className='bg-indigo-600 p-4 rounded-md shadow-md text-white flex items-center justify-between lg:mx-8 xl:mx-10 2xl:mx-16'>
        <div className="flex items-center">
          <PiNotificationLight size={24}  />
          <h1 className="text-xl font-bold ml-4">Home</h1>
        </div>
        <TbGridDots size={24} />
      </div>

      <div className='bg-white rounded-md shadow-md mt-4 p-4 lg:mx-8 xl:mx-10 2xl:mx-16'>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Top 20 Today</h2>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-3xl hover:bg-indigo-700 mt-2 md:mt-0">
            View All
          </button>
        </div>

        {/* Horizontal scrolling for followers */}
        <div className="flex overflow-x-auto space-x-4 mb-4 py-4"> {/* Enable horizontal scroll */}
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-green-500 rounded-full h-24 w-24 flex items-center justify-center">
                <img
                  src={post.profileImageUrl}
                  className='rounded-full h-24 w-24'
                  alt={`Profile of ${post.author}`}
                />
              </div>
              <span className="mt-2 text-sm">{post.author}</span>
            </div>
          ))}
        </div>

        {/* Clickable Links for Recent and Most Popular Posts as Headings */}
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <Link href="/recent-posts">
            <h2 className="text-gray-900 text-lg font-semibold cursor-pointer relative group">
              Recent Post
              <span className="absolute left-0 -bottom-1 h-[5px] w-full bg-indigo-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
          </Link>
          <Link href="/most-popular">
            <h2 className="text-gray-900 text-lg font-semibold cursor-pointer relative group">
              Most Popular
              <span className="absolute left-0 -bottom-1 h-[5px] w-full bg-indigo-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
          </Link>
        </div>

        <div className=" mt-6 p-4 bg-white flex flex-col gap-0 md:flex-row md:flex-wrap   rounded-lg shadow-md">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col mb-4 mx-auto">
              <div className='flex flex-row items-center mb-2'>
                <img
                  src={post.profileImageUrl}
                  alt="Post Thumbnail"
                  className="mr-2 h-[30px] w-[30px] rounded-full object-cover"
                />
                <h2 className='font-sans font-medium text-lg'>{post.author}</h2>
                <p className="text-gray-500 ml-2">{post.timeAgo}</p>
              </div>
              <div className="mb-2 h-[200px] w-full max-w-[300px]">
                <img
                  src={post.imageUrl}
                  alt="Post Image"
                  className="w-[300px] h-[200px] rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center mt-1">
                <TiHeart onClick={() => handleLike(index)} size={24} className="cursor-pointer text-red-500" />
                <span className="ml-2">{likes[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
