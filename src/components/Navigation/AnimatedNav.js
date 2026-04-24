import { Camera, Heart, Home, Share2, Video } from "lucide-react";
import "./AnimatedNav.css";

export default function AnimatedNav() {
  const navItems = [
    { icon: Home, title: "Home" },
    { icon: Video, title: "Video" },
    { icon: Camera, title: "Photo" },
    { icon: Share2, title: "Share" },
    { icon: Heart, title: "Like" },
  ];

  return (
    <ul className="animated-nav-list">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="animated-nav-item">
            <span className="animated-nav-icon">
              <Icon size={28} />
            </span>
            <span className="animated-nav-title">{item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
