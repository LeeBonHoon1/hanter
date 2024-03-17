import { PropsWithChildren } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Loading from "@/components/loading";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-xl mx-auto bg-[#2E2E37]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
