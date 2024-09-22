import {
  CameraIcon,
  FaceSmileIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

const InputBox = () => {
  const onSubmitHandler = () => {};
  return (
    <div className="grid grid-cols-1 gap-2  p-2 shadow-md rounded-2xl text-gray-500 bg-white">
      <div className="flex gap-2 items-center p-4 ">
        <img
          className="rounded-full"
          src={"https://links.papareact.com/l4v"}
          height={30}
          width={30}
        />
        <form className="flex flex-1">
          <input
            placeholder="What's on you mind"
            className="flex-grow bg-gray-100 rounded-full p-2 outline-none h-12"
          />
        </form>
        <button onClick={onSubmitHandler}>Submit</button>
      </div>
      <hr/>
      <div className="flex justify-evenly gap-8 p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs md:text-md lg:text-base">Live video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-600" />
          <p className="text-xs md:text-md lg:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-500" />
          <p className="text-xs md:text-md lg:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
export default InputBox;
