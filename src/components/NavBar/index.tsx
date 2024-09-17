import { FlagIcon, HomeIcon, HomeModernIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <div className="p-2">
      <div className="flex items-center gap-2">
        <img
          src={"https://links.papareact.com/5me"}
          height={40}
          width={40}
          loading="lazy"
          alt="fb"
        />
        <div className="flex bg-gray-100 rounded-full p-2 items-center">
          <MagnifyingGlassIcon className="h-5 text-gray-600" />
          <input
            className="bg-transparent  ml-2 outline-none"
            placeholder="search"
            type="text"
          />
        </div>
        <div className="flex-grow flex gap-4 ">
                <div>
                        <HomeIcon className="h-7 text-blue-600"/>
                </div>
                <div>
                        <FlagIcon className="h-7"/>
                </div>
                <div>
                        
                </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
