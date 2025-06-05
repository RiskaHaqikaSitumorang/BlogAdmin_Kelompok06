
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Layout, Plus, Edit, Users } from "lucide-react";

interface AdminSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({ activeTab, setActiveTab }: AdminSidebarProps) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Layout
    },
    {
      id: "articles",
      label: "Kelola Artikel",
      icon: BookOpen
    },
    {
      id: "add-article",
      label: "Tambah Artikel",
      icon: Plus
    }
  ];

  return (
    <div className="w-64 bg-black/20 backdrop-blur-md border-r border-white/10 p-6">
      <div className="flex items-center space-x-2 mb-8">
        <BookOpen className="w-8 h-8 text-purple-400" />
        <span className="text-xl font-bold text-white">Blog Admin</span>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id
                ? "bg-purple-600/50 text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
          <Link to="/">Kembali ke Website</Link>
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
