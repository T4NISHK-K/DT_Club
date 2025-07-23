import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Lightbulb, Users, BookOpen, Calendar, GraduationCap, Mail } from "lucide-react";
import { cn } from "../lib/utils";
import dtLogo from "../assets/l1.jpg";

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: Lightbulb },
  { name: "Team", url: "/team", icon: Users },
  { name: "Hackathon", url: "/hackathon", icon: BookOpen },
  { name: "Events", url: "/events", icon: Calendar },
  { name: "Startup", url: "/startups", icon: GraduationCap },
  { name: "Contact", url: "/contact", icon: Mail },
];

export function TubelightNavbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set active tab based on current route
    const currentPath = location.pathname;
    const currentItem = navItems.find(
      (item) => item.url === currentPath || 
      (currentPath.startsWith(item.url) && item.url !== "/")
    );
    
    if (currentItem) {
      setActiveTab(currentItem.name);
    } else if (currentPath === "/") {
      setActiveTab("Home");
    } else {
      setActiveTab("");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center py-2 relative">
        {/* Logo in top left corner aligned with navbar */}
        <div className="absolute top-0 left-4 sm:left-6 lg:left-8 z-50 flex items-center h-full">
          <img src={dtLogo} alt="Design Thinking Club Logo" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm p-2 border border-gray-200 shadow-lg" />
        </div>

        {/* Navigation */}
        <div
          className={cn(
            "fixed sm:relative sm:top-auto sm:left-auto sm:transform-none sm:z-auto",
            isMobile
              ? "bottom-6 left-1/2 -translate-x-1/2 z-50"
              : "relative z-10"
          )}
        >
          <div className="flex items-center gap-1 bg-white/80 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                    "text-gray-600 hover:text-red-600",
                    isActive && "bg-gray-100 text-red-600"
                  )}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-red-50 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-600 rounded-t-full">
                        <div className="absolute w-12 h-6 bg-red-200 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-red-200 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-red-200 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}