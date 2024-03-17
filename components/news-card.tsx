import { INews } from "@/types";

const NewsCard = ({
  title,
  description,
}: Pick<INews, "title" | "description">) => {
  return (
    <div className="border px-5 bg-white rounded-2xl py-3">
      <div className="font-bold">{title}</div>
      <div className="text-sm line-clamp-2">{description}</div>
    </div>
  );
};

export default NewsCard;
