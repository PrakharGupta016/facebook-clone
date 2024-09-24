import {
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import { PostType } from "../Posts";

const Post = (props: PostType) => {
  return (
    <>
      <div>
        <div className="p-5 rounded-t-2xl  bg-white grid grid-cols-1 gap-3 shadow-sm">
          <div className="flex items-center space-x-2">
            <img
              src={props.photo}
              className="rounded-full"
              alt="dp"
              width={40}
              height={40}
            />
            <div>
              <p className="font-medium">{props.name}</p>
              <p className="text-xs text-gray-400">
                {new Date(props.timeStamp?.toDate()).toLocaleString()}
              </p>
            </div>
          </div>
          <div>
            <p>{props.message}</p>
          </div>
          <div>
            {props.postImage ? (
              <img src={props.postImage} className="h-56 md:h-96" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="  bg-white flex justify-center items-center rounded-b-2xl shadow-md text-gray-400 gap-4">
          <div className="inputIcon">
            <HandThumbUpIcon className="h-4" />
            <p className="text-xs">Like</p>
          </div>
          <div className="inputIcon">
            <ChatBubbleOvalLeftIcon className="h-4" />
            <p className="text-xs">Comment</p>
          </div>
          <div className="inputIcon">
            <HandThumbUpIcon className="h-4" />
            <p className="text-xs">Share</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
