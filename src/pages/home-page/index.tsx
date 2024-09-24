import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const HomePage = () => {
  return <>
        <div className="overflow-y-auto flex justify-center">
           <div className="grid grid-cols-1 gap-2">
           <Stories/>
           <InputBox/>
           <div className="flex flex-col gap-4">
            <Posts/>
           </div>
           </div>
        </div>

  </>;
};
export default HomePage;
