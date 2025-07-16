import React from "react";
import { Home, Gamepad2, Car, Dumbbell, Clapperboard, MonitorSmartphone, Music, BookOpenText, Newspaper, User, Users, Star, Wrench } from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ sidebarOpen, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebarOpen ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div
          onClick={() => {
            setCategory(0);
          }}
          className={`side-link ${category === 0 ? "active" : ""}`}
        >
          <Home size={19} />
          {sidebarOpen && <p>Home</p>}
        </div>
        <div
          onClick={() => {
            setCategory(20);
          }}
          className={`side-link ${category === 20 ? "active" : ""}`}
        >
          <Gamepad2 size={20} />
          {sidebarOpen && <p>Gaming</p>}
        </div>
        <div
          onClick={() => {
            setCategory(2);
          }}
          className={`side-link ${category === 2 ? "active" : ""}`}
        >
          <Car size={20} />
          {sidebarOpen && <p> Automobiles</p>}
        </div>
        <div
          onClick={() => {
            setCategory(17);
          }}
          className={`side-link ${category === 17 ? "active" : ""}`}
        >
          <Dumbbell size={19} />
          {sidebarOpen && <p>Sports</p>}
        </div>
        <div
          onClick={() => {
            setCategory(24);
          }}
          className={`side-link ${category === 24 ? "active" : ""}`}
        >
          <Clapperboard size={20} />
          {sidebarOpen && <p>Entertainment</p>}
        </div>
        <div
          onClick={() => {
            setCategory(28);
          }}
          className={`side-link ${category === 28 ? "active" : ""}`}
        >
          <MonitorSmartphone size={20} />
          {sidebarOpen && <p>Technology</p>}
        </div>
        <div
          onClick={() => {
            setCategory(10);
          }}
          className={`side-link ${category === 10 ? "active" : ""}`}
        >
          <Music size={19} />
          {sidebarOpen && <p>Music</p>}
        </div>
        <div
          onClick={() => {
            setCategory(22);
          }}
          className={`side-link ${category === 22 ? "active" : ""}`}
        >
          <BookOpenText size={19} />
          {sidebarOpen && <p>Blogs</p>}
        </div>
        <div
          onClick={() => {
            setCategory(25);
          }}
          className={`side-link ${category === 25 ? "active" : ""}`}
        >
          <Newspaper size={19} />
          {sidebarOpen && <p>News</p>}
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className={`side-link`}>
          <User size={20} />
          {sidebarOpen && <p>PewDiePie</p>}
        </div>
        <div className={`side-link`}>
          <Users size={20} />
          {sidebarOpen && <p>MrBeast</p>}
        </div>
        <div className={`side-link`}>
          <Star size={22} />
          {sidebarOpen && <p>Justin Bieber</p>}
        </div>
        <div className={`side-link`}>
          <Wrench size={20} />
          {sidebarOpen && <p>5-Minute Crafts</p>}
        </div>
        <div className={`side-link`}>
          <User size={20} />
          {sidebarOpen && <p>Nas Daily</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
