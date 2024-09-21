type StoryCardProps = {
  name: string;
  imgSrc: string;
  profile: string;
};

const StoryCard = ({ name, imgSrc, profile }: StoryCardProps) => {
  return (
    <>
      <div className="relative h-14 w-14 md:h-20 md:w-20 ">
          <img src={profile} height={40} width={40} className="absolute opacity-0 lg:opacity-100 rounded-full object-cover z-50 left-1"   loading='lazy' />
          <img src={imgSrc}  className="rounded-3xl object-cover h-full w-full brightness-75"  loading='lazy' />
          <h1 className="z-10 absolute bottom-4 opacity-0 lg:opacity-100 font-bold text-sm">{name}</h1>

      </div>
    </>
  );
};
export default StoryCard;
