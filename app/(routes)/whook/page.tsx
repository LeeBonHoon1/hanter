import Artist from "@/components/artist";
import Banner from "@/components/banner";
import Chartlist from "@/components/chart-list";
import RealTimeChart from "@/components/realtime-chart";
import News from "@/components/news";

const WhookPage = () => {
  return (
    <div className="max-w-xl pb-12 px-6  h-full">
      <Banner />
      <RealTimeChart />
      <Artist />
      <Chartlist />
      <News />
    </div>
  );
};

export default WhookPage;
