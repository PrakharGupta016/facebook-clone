import {
  CameraIcon,
  FaceSmileIcon,
  FireIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import { ChangeEventHandler, createRef, useRef, useState } from "react";
import { db, storage } from "../../../firebase";
import { collection, addDoc, serverTimestamp, setDoc, updateDoc, doc } from "firebase/firestore"; 
import { useAuth } from "../../../contexts/authContext";
import { ref, uploadBytes, getDownloadURL, uploadString } from 'firebase/storage';

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
          if(photo)
          {
            const uploadPhoto = ref(storage,`posts/${res.id}`)
            uploadString(uploadPhoto, photo,'data_url').then((snapshot) => {
                getDownloadURL(uploadPhoto).then((url)=>{
                  setDoc(doc(db,`posts/${res.id}`),
                    {
                        postImage :url
                    },{merge:true}).then(res=>console.log(res))
                })
            });
          }
        setPost("")
      })

  };
  
 
  const addImage = (e:any)=>{
      const filereader = new FileReader;
      if(e.target.files[0])
      {
          filereader.readAsDataURL(e.target.files[0]);
      }

      filereader.onload = (readerEvent)=>{
        setPhoto(readerEvent.target?.result as string)
      }
      
  }
  const onRemove = ()=>{
    setPhoto(null)
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
          <button hidden type='submit'>Submit</button>
          {photo && <><img onClick={onRemove} src={photo} height={10} width={50}/></>}
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
          <input ref={fileRef} hidden type="file" onChange={addImage}/>
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
