import Image from "next/image";
import ArtistSkeleton from "./skeletons/skeleton";

interface CardProps {
  name: string;
  source: string;
}

const Card = ({ source, name }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <>
        <Image
          src={source}
          width={150}
          height={150}
          alt="homezone_profile"
          className="rounded-full border-2 border-[#E631A1]"
        />
        <p className="text-white">{name}</p>
      </>
    </div>
  );
};

export default Card;
