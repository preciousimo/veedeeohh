import Navbar from "../components/Navbar";
import Topics from "../components/Topics";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

function Home() {

  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="">
          {/* Topics */}
          <Topics />
          {/* Content */}
          <Content />
        </div>
      </div>

      {/* Shorts */}
    </div>
  );
}

export default Home;
