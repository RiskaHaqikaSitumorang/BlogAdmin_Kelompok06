
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold text-white">Blog Nexus</span>
          </div>
          
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2024 Blog Nexus. All rights reserved.</p>
            <p className="text-sm mt-1">Platform blog modern untuk semua</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
