import React, { useState } from "react";
import useDetails from "../../hooks/use-details";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import avatar3 from "../../assets/avatar3.png";

const NewsFeed = () => {
  const { user } = useDetails();
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <React.Fragment>
      <div className="w-4/5 m-auto mt-2 space-y-2 font-[Inter]">
        <p className="text-xl font-semibold tracking-wider">Feed</p>
        <div className="card px-6 py-5 min-h-32 space-y-2">
          <p className="font-semibold text-sm">Share your thoughts...</p>
          <div className="flex space-x-2 items-center">
            <img src={user.avatar} alt="" height={50} width={50} />
            <div className="post-input rounded-2xl">
              <p>What's on your mind?</p>
            </div>
          </div>
        </div>
        <div className="card px-6 py-5 min-h-52  space-y-2">
          <div className="flex space-x-2 items-center">
            <img src={user.avatar} alt="" height={50} width={50} />
            <div className="flex flex-col ">
              <p className="font-semibold text-sm">{user.name}</p>
              <p className="text-gray-500 text-xs">2 hours ago</p>
            </div>
          </div>
          <p className="text-base text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            suscipit, sapien nec consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos nisi, commodi velit blanditiis expedita,
            autem reprehenderit molestiae nobis ratione in labore? Tempora
            suscipit quo placeat!
          </p>
          <hr />
          <div className="flex justify-around">
            <div className="flex space-x-1 items-center">
              {isLiked ? <AiFillLike size={25} /> : <AiOutlineLike size={25} />}
              <button
                className="text-[#03a1ef]  hover:underline"
                onClick={() => setIsLiked(!isLiked)}
              >
                Like
              </button>
            </div>
            <div className="flex space-x-2 items-center">
              <FaCommentAlt size={20} />
              <button
                className="text-[#03a1ef]  hover:underline"
                onClick={() => setShowComments(!showComments)}
              >
                Comment
              </button>
            </div>
          </div>
          {showComments && (
            <div className="border-t pt-4 flex flex-col space-y-3 w-full">
              <div className="flex space-x-2 items-center w-full">
                <img src={avatar3} alt="" height={50} width={50} />
                <div className="flex flex-col space-y-1 justify-center">
                  <div className="flex flex-col  rounded-lg bg-gray-300  p-2">
                    <p className="text-sm font-semibold">Arpita Datta</p>
                    <p className="text-xs">2 hr</p>
                    <p className=" text-xs pt-1">Nice Status...</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 items-center">
                <img src={user.avatar} alt="" height={50} width={50} />
                <input
                  className="post-input rounded-2xl"
                  placeholder="Write your comment..."
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewsFeed;
