/** biome-ignore-all lint/a11y/useButtonType: buttons are used for navigation, not form submission */
import { CalendarDays, Users, WalletCards } from "lucide-react";
import "./AnimatedButton.css";

export default function SearchForm() {
  return (
    <div className="bg-[#102F77] rounded-full w-full max-w-fit h-[60px] px-2 mt-[80px]">
      <div className="flex h-full flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 lg:gap-4">
        {/* Période */}
        <div className="flex items-center gap-2 sm:gap-3 border-b sm:border-b-0 sm:border-r border-white/80 pb-2 sm:pb-0 pr-0 sm:pr-3 lg:pr-4 pl-2 sm:pl-3 lg:pl-4">
          <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px] text-white flex-shrink-0" />
          <select className="bg-transparent text-white placeholder-white/50 focus:outline-none transition-colors py-2 text-sm sm:text-base w-full sm:min-w-[100px] lg:min-w-[120px]">
            <option value="" className="bg-black">
              Période
            </option>
            <option value="janvier" className="bg-black">
              Janvier
            </option>
            <option value="fevrier" className="bg-black">
              Février
            </option>
          </select>
        </div>

        {/* Budget */}
        <div className="flex items-center gap-2 sm:gap-3 border-b sm:border-b-0 sm:border-r border-white/80 pb-2 sm:pb-0 pr-0 sm:pr-3 lg:pr-4 pl-2">
          <WalletCards className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px] text-white flex-shrink-0" />
          <select className="bg-transparent text-white placeholder-white/50 focus:outline-none transition-colors py-2 text-sm sm:text-base w-full sm:min-w-[100px] lg:min-w-[120px]">
            <option value="" className="bg-black">
              Budget
            </option>
            <option value="1000" className="bg-black">
              1000€ - 2000€
            </option>
            <option value="2000" className="bg-black">
              2000€ - 5000€
            </option>
          </select>
        </div>

        {/* Groupe */}
        <div className="flex items-center gap-2 sm:gap-3 border-b sm:border-b-0 sm:border-r border-white/80 pb-2 sm:pb-0 pr-0 sm:pr-3 lg:pr-4 pl-2">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-[20px] lg:h-[20px] text-white flex-shrink-0" />
          <select className="bg-transparent text-white placeholder-white/50 focus:outline-none transition-colors py-2 text-sm sm:text-base w-full sm:min-w-[100px] lg:min-w-[120px]">
            <option value="" className="bg-black">
              Groupe
            </option>
            <option value="1-5" className="bg-black">
              1-5 personnes
            </option>
            <option value="6-10" className="bg-black">
              6-10 personnes
            </option>
          </select>
        </div>

        {/* Voyager Button */}
        <button className="animated-button self-center sm:self-auto mt-2 sm:mt-0">
          <span className="animated-button-text">Go</span>
          <span className="animated-button-title">
            Kite / wing au paradis ?
          </span>
        </button>
      </div>
    </div>
  );
}
