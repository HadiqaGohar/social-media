'use client'
import React, { useState } from 'react';
import { PiNotificationLight } from 'react-icons/pi';
import { TbGridDots } from 'react-icons/tb';
import Image from 'next/image';
function Notification() {
  const [followStatus, setFollowStatus] = useState({
    emilie: 'follow',
    john: 'following',
    sarah: 'follow back',
    alice: 'follow',
    mark: 'follow',
    sophia: 'following',
    ben: 'following',
    kiara: 'follow back',
    grace: 'follow',
    isabella: 'follow',
  });

  const handleFollow = (user: string) => {
    setFollowStatus((prevState:any) => {
      const currentStatus = prevState[user];
      if (currentStatus === 'follow') {
        return { ...prevState, [user]: 'following' };
      } else if (currentStatus === 'following') {
        return { ...prevState, [user]: 'follow back' };
      } else {
        return { ...prevState, [user]: 'follow' };
      }
    });
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-indigo-600 p-4 rounded-md shadow-md text-white flex items-center justify-between lg:mx-8 xl:mx-10 2xl:mx-16">
        <div className="flex items-center">
          <PiNotificationLight size={24}  />
          <h1 className="text-xl font-bold ml-4">Notifications</h1>
        </div>
        <TbGridDots size={24} />
      </div>

      <div className="bg-white rounded-md shadow-md mt-4 p-4 lg:mx-8 xl:mx-10 2xl:mx-16">
        {/* New Notifications Section */}
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold">New</h2>

          {/* Notification for Emilie */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" // Add Emilie's image URL here
                alt="Emilie"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
                width={30}
                height={30}
              />
              <div>
                <h1 className="font-medium">Emilie <span className="text-sm">started</span></h1>
                <p>following you. <span>1d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.emilie === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.emilie === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('emilie')}
            >
              {followStatus.emilie === 'follow' ? 'Follow' : followStatus.emilie === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for John */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src="https://media.istockphoto.com/id/1283231614/photo/portrait-of-happy-asian-handsome-young-man-in-fashionable-clothing.jpg?s=612x612&w=0&k=20&c=92SgRHJhWP2NUkzxtBqag43yRkYLjeFvg4_PcPYLynE=" // Add John's image URL here
                alt="John"
                width={30}
                height={30}
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">John <span className="text-sm">commented on</span></h1>
                <p>your post: &quot;Great job!&quot; <span>2d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.john === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.john === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('john')}
            >
              {followStatus.john === 'follow' ? 'Follow' : followStatus.john === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for Sarah */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
                src="https://i.pinimg.com/736x/ac/57/2d/ac572ded8c70bea6559db0c77263063c.jpg" // Add Sarah's image URL here
                width={30}
                height={30}
                alt="Sarah"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Sarah <span className="text-sm">liked</span></h1>
                <p>your photo. <span>3d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.sarah === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.sarah === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('sarah')}
            >
              {followStatus.sarah === 'follow' ? 'Follow' : followStatus.sarah === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for Alice */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://i1.pickpik.com/photos/629/148/853/stylish-boy-fashion-man-s-fashion-blurry-background-cb851d2a32353520b5de13b5076882af.jpg" // Add Alice's image URL here
                alt="Alice"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Alice <span className="text-sm">shared</span></h1>
                <p>your post. <span>4d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.alice === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.alice === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('alice')}
            >
              {followStatus.alice === 'follow' ? 'Follow' : followStatus.alice === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for Mark */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://as1.ftcdn.net/v2/jpg/02/16/78/48/1000_F_216784807_MsExAAUQANJ8yqJMVaILoe8mROgzVEDh.jpg" // Add Mark's image URL here
                alt="Mark"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Mark <span className="text-sm">liked</span></h1>
                <p>your comment. <span>5d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.mark === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.mark === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('mark')}
            >
              {followStatus.mark === 'follow' ? 'Follow' : followStatus.mark === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>
        </div>

        {/* Last 7 Days Section */}
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold">Last 7 Days</h2>
          {/* Example Notification for Older Interaction */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://img.freepik.com/premium-photo/stylish-young-man-black-mock-up-clothes-with-cap-hoodie-protective-covid-mask-walks-city_338491-12401.jpg" // Add another user's image URL here
                alt="User"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">User <span className="text-sm">reacted to</span></h1>
                <p>your story. <span>6d</span></p>
              </div>
            </div>
            <button className="px-4 py-1 rounded bg-blue-500 text-white">Follow</button>
          </div>
        </div>

        {/* Last Month */}
        {/* New Notifications Section */}
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-semibold">Last Month</h2>

          {/* Notification for Sophia */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgRuQGdf6jhbEmUYoOMjDeMBfh7GHJLwLhBw&s" // Add Emilie's image URL here
                alt="Sophia"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Sophia <span className="text-sm">started</span></h1>
                <p>following you. <span>1d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.sophia === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.sophia === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('sophia')}
            >
              {followStatus.sophia === 'follow' ? 'Follow' : followStatus.sophia === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for Ben */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://www.styledbysally.com.au/wp-content/uploads/2017/07/349712f1f849f6ecae741e2282a77a40-guy-fashion-style-fashion.jpg" // Add John's image URL here
                alt="ben"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Ben <span className="text-sm">commented on</span></h1>
                <p>your post: &quot;Nice Dp!&quot; <span>2d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.ben === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.ben === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('ben')}
            >
              {followStatus.ben === 'follow' ? 'Follow' : followStatus.ben === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for kiara */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?cs=srgb&dl=pexels-olenagoldman-1021693.jpg&fm=jpg" // Add Sarah's image URL here
                alt="kiara"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Kiara <span className="text-sm">liked</span></h1>
                <p>your photo. <span>3d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.kiara === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.kiara === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('kiara')}
            >
              {followStatus.kiara === 'follow' ? 'Follow' : followStatus.kiara === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for grace */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4DOLpdsXTFgH43wUB_yhwXQRKzfpEv0KFQ&s" // Add Alice's image URL here
                alt="grace"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Grace <span className="text-sm">shared</span></h1>
                <p>your post. <span>4d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.grace === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.grace === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('alice')}
            >
              {followStatus.grace === 'follow' ? 'Follow' : followStatus.grace === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>

          {/* Notification for isabella */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Image
              width={30}
              height={30}
                src="https://thumbs.dreamstime.com/b/beauty-brunette-model-girl-perfect-makeup-trendy-accessories-fashion-wear-88929334.jpg" // Add Mark's image URL here
                alt="isabella"
                className="h-[30px] w-[30px] rounded-full object-cover mr-2"
              />
              <div>
                <h1 className="font-medium">Isabella <span className="text-sm">liked</span></h1>
                <p>your comment. <span>5d</span></p>
              </div>
            </div>
            <button
              className={`px-4 py-1 rounded ${followStatus.isabella === 'follow'
                  ? 'bg-blue-500 text-white'
                  : followStatus.isabella === 'following'
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-indigo-500 text-white'
                }`}
              onClick={() => handleFollow('isabella')}
            >
              {followStatus.isabella === 'follow' ? 'Follow' : followStatus.isabella === 'following' ? 'Following' : 'Follow Back'}
            </button>
          </div>
      </div>
    </div>
    </div >
  );
}

export default Notification;
