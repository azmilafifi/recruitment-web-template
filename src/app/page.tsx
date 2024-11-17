import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LatestJobs from "@/components/LatestJobs/LatestJobs";
import Partnership from "@/components/Partnership/Partnership";
import SearchJobs from "@/components/SearchJobs/SearchJobs";

export default function Home() {
  return (
    <>
      <Header />
      <SearchJobs />
      <Partnership />
      <LatestJobs />
      <Footer />
    </>
  )
}
