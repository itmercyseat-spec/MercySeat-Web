import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export const StickyGiveButton = () => {
  return (
    <Link
      to="/give"
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-5 py-3 rounded-full shadow-glow flex items-center gap-2 transition-all hover:scale-105"
      aria-label="Give or Tithe"
    >
      <Heart className="w-5 h-5" />
      <span className="hidden sm:inline">Give</span>
    </Link>
  );
};
