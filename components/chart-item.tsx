interface AlbumProps {
  name: string;
  album: string;
  id: number;
}

const ChartItem = ({ name, album, id }: AlbumProps) => {
  return (
    <div className="grid grid-cols-2 border-b text-white space-y-4 items-center ">
      <div className="flex gap-x-2">
        <div>{id}</div>
        <div>{name}</div>
      </div>
      <div className="line-clamp-1">{album}</div>
    </div>
  );
};

export default ChartItem;
