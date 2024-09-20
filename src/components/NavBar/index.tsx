import {
  BellIcon,
  ChatBubbleLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FlagIcon,
  HomeIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  UserIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";
import HeaderIcon from "../HeaderIcon";

const NavBar = () => {
  return (
    <div className="flex p-2 items-center shadow-md  sticky top-0 z-50 bg-white">
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
            className="hidden md:inline-flex bg-transparent  ml-2 outline-none"
            placeholder="search"
            type="text"
          />
        </div>
      </div>
      <div className="flex-grow flex lg:gap-4  sm:gap-2 justify-center">
        <HeaderIcon active={true} Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>
      <div className="flex items-center sm:gap-2 justify-end">
          <ViewColumnsIcon className="icon"/>
          <ChatBubbleLeftIcon className="icon"/>
          <BellIcon className="icon"/>
          <ChevronUpIcon className="icon"/>
      </div>
    </div>
  );
};
export default NavBar;
