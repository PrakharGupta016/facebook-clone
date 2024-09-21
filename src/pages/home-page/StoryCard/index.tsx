type StoryCardProps = {
  name: string;
  imgSrc: string;
  profile: string;
};

const StoryCard = ({ name, imgSrc, profile }: StoryCardProps) => {
  return (
    <>
      <div className="relative h-20 w-20 md:h-40 md:w-30 p-1 transition duration-100 transform ease-in hover:scale-105 hover:animate-pulse ">
        <img
          src={profile}
          alt="Profile"
          height={40}
          width={40}
          className="absolute opacity-0 lg:opacity-100 rounded-full object-cover z-10 top-1"
          loading="lazy"
        />
        <img
          src={imgSrc}
          className="object-cover filter brightness-75 rounded-full lg:rounded-3xl w-full h-full"
          loading="lazy"
        />
        <h1 className="absolute z-10 bottom-4 w-5/6 text-white opacity-0 lg:opacity-100 font-bold text-xs truncate">
          {name}
        </h1>
      </div>
    </>
  );
};
export default StoryCard;
