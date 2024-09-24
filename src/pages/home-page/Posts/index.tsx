import { unsubscribe } from "diagnostics_channel";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import Post from "../Post";

export type PostType = {
  id: string,
  email:string,
  message:string,
  name:string,
  photo:string,
  postImage?:string,
  timeStamp:Timestamp
};

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        const data = snapshot.docs.map((val) => {
          return {
            id: val.id,
            ...val.data() ,
          } as PostType;
        });
        setPosts(data);
        console.log(data,'s')
        setLoading(false);
      },
      (error) => {
        console.error(error);
      }
    );

    return unsub;
  }, []);
  return <>
    {loading? <div>loading</div>:
        posts.map((val)=>(
            <Post
                {...val}
            />
        ))
    }
  </>;
};
export default Posts;
