import {
  CameraIcon,
  FaceSmileIcon,
  FireIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { ChangeEventHandler, createRef, useRef, useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { useAuth } from "../../../contexts/authContext";
import { timeStamp } from "console";


const InputBox = () => {
  const {user} = useAuth();
  const [post,setPost] = useState("");
  const [photo,setPhoto] = useState<string |null>(null);
  
  const fileRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(post)
      if(post === '')
          return;
      addDoc(collection(db,'posts'),{
          message: post,
          name:user?.providerData[0].displayName,
          photo:user?.providerData[0].photoURL,
          email:user?.providerData[0].email,
          timeStamp: serverTimestamp()
      }).then((res)=>{
        console.log('posted')
        setPost("")
      })

  };
  
 
  const fileHandler = (e:any)=>{
      const filereader = new FileReader;
      if(e.target.files[0])
      {
          filereader.readAsDataURL(e.target.files[0]);
      }

      filereader.onload = (readerEvent)=>{
        setPhoto(readerEvent.target?.result as string)
      }
      
  }
  return (
    <div className="grid grid-cols-1 gap-2  p-2 shadow-md rounded-2xl text-gray-500 bg-white">
      <div className="flex gap-2 items-center p-4 ">
        <img
          className="rounded-full"
          src={user?.providerData[0].photoURL??"https://links.papareact.com/l4v"}
          height={30}
          width={30}
        />
        <form className="flex flex-1" onSubmit={onSubmitHandler}>
          <input
            placeholder="What's on you mind"
            className="flex-grow bg-gray-100 rounded-full p-2 outline-none h-12"
            value={post}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPost(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
        
      </div>
      <hr/>
      <div className="flex justify-evenly gap-8 p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs md:text-md lg:text-base">Live video</p>
        </div>
        <div onClick={()=>fileRef.current?.click()}className="inputIcon">
          <CameraIcon className="h-7 text-green-600" />
          <p className="text-xs md:text-md lg:text-base">Photo/Video</p>
          <input ref={fileRef} hidden type="file" onChange={fileHandler}/>
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
