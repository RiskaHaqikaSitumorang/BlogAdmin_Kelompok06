
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">Blog Nexus</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Beranda
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/admin">Admin</Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button asChild variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/admin">Admin</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
