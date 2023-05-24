import "./App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as DashbordIcon } from "./assets/dashbord.svg";
import { ReactComponent as UsersIcon } from "./assets/user.svg";
import { ReactComponent as StartIcon } from "./assets/start.svg";
import { ReactComponent as HistoryIcon } from "./assets/history.svg";
import { ReactComponent as GamesIcon } from "./assets/game.svg";
import { ReactComponent as MessagesIcon } from "./assets/messages.svg";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import { ReactComponent as NotificationIcon } from "./assets/notification.svg";
import { Avatar, Button, IconButton } from "@material-tailwind/react";
import GamePage from "./pages/games";
import HistoryPage from "./pages/history";
import FriendsPage from "./pages/friends";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import MessagesPage from "./pages/messages";
import Login from "./pages/login";

const RouteData = [
  {
    path: "/",
    title: "Home",
    component: <HomePage />,
    logo: <DashbordIcon />,
  },
  {
    path: "/profile",
    title: "Profile",
    component: <ProfilePage />,
    logo: <UsersIcon />,
  },
  {
    path: "/friends",
    title: "Friends",
    component: <FriendsPage />,
    logo: <StartIcon />,
  },
  {
    path: "/history",
    title: "History",
    component: <HistoryPage />,
    logo: <HistoryIcon />,
  },
  {
    path: "/games",
    title: "Games",
    component: <GamePage />,
    logo: <GamesIcon />,
  },
  {
    path: "/messages",
    title: "Messages",
    component: <MessagesPage />,
    logo: <MessagesIcon />,
  },
];

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`flex min-h-[100vh] min-w-[100vw] overflow-auto   ${
          window.location.pathname === "/login" ? "background" : ""
        }`}
      >
        {window.location.pathname != "/login" && (
          <div className="sidbar min-w-[4rem] w-[5%] bg-white  h-full  min-h-screen">
            <div className="logo h-[5rem]  p-2 flex ">
              <Logo className="w-[8rem]" />
            </div>
            <div className="menu flex flex-col justify-center gap-1">
              {RouteData.map((item, index) => (
                <motion.button
                  key={index}
                  className={`relative menu-item flex flex-col items-center justify-center h-[6rem] w-[100%] cursor-pointer hover:bg-[#F4F6FF] ${
                    item.path === window.location.pathname ? "active" : ""
                  }`}
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 1.2 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.logo}
                  <span className="text-xs">{item.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}
        <div className="w-full  flex flex-col ">
          {window.location.pathname != "/login" && (
            <div className="h-[5rem] w-ful flex gap-4 items-center ml-auto mr-5">
              <Button variant="text" className="p-2">
                <SearchIcon />
              </Button>
              <Button variant="text" className="p-2">
                <NotificationIcon />
              </Button>
              <Button variant="text" className="p-2">
                <Avatar src="https://cdn.fakercloud.com/avatars/nelshd_128.jpg" />
              </Button>
            </div>
          )}

          <div className="flex-1 p-4">
            <Routes>
              {RouteData.map((item, index) => (
                <Route key={index} path={item.path} element={item.component} />
              ))}
              <Route path={"/login"} element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
