import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import ArticleForm from "@/components/ArticleForm";
import ArticleList from "@/components/ArticleList";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

interface Article {
  _id?: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  status: "published" | "draft";
  date?: string;
  views?: number;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalViews, setTotalViews] = useState(0);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles");
        setArticles(response.data);
      } catch (err: any) {
        console.error("Error fetching articles:", err);
        toast({
          title: "Error",
          description: "Gagal mengambil artikel: " + (err.response?.data?.message || err.message),
          variant: "destructive",
        });
      }
    };

    const fetchTotalViews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles/stats/total-views");
        setTotalViews(response.data.totalViews);
      } catch (err: any) {
        console.error("Error fetching total views:", err);
        toast({
          title: "Error",
          description: "Gagal mengambil total views: " + (err.response?.data?.message || err.message),
          variant: "destructive",
        });
      }
    };

    fetchArticles();
    fetchTotalViews();
  }, []);

  const stats = [
    {
      title: "Total Artikel",
      value: articles.length,
      icon: BookOpen,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Artikel Published",
      value: articles.filter((a) => a.status === "published").length,
      icon: BookOpen,
      color: "from-green-600 to-green-800",
    },
    {
      title: "Total Views",
      value: totalViews.toLocaleString(),
      icon: Users,
      color: "from-purple-600 to-purple-800",
    },
  ];

  const handleAddArticle = async (article: Article) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          title: "Error",
          description: "Token autentikasi tidak ditemukan. Silakan login kembali.",
          variant: "destructive",
        });
        return;
      }
      // Filter out _id if it's empty or undefined for new articles
      const payload = { ...article };
      if (!payload._id || payload._id === "") {
        delete payload._id;
      }
      const response = await axios.post(
        "http://localhost:5000/api/articles",
        {
          ...payload,
          date: new Date().toISOString().split("T")[0],
          views: 0,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setArticles([...articles, response.data]);
      setActiveTab("articles");
      toast({
        title: "Berhasil",
        description: "Artikel berhasil ditambahkan",
      });
    } catch (err: any) {
      console.error("Error adding article:", err);
      toast({
        title: "Error",
        description: "Gagal menambahkan artikel: " + (err.response?.data?.message || err.message),
        variant: "destructive",
      });
    }
  };

  const handleEditArticle = async (updatedArticle: Article) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          title: "Error",
          description: "Token autentikasi tidak ditemukan. Silakan login kembali.",
          variant: "destructive",
        });
        return;
      }
      const response = await axios.put(
        `http://localhost:5000/api/articles/${updatedArticle._id}`,
        updatedArticle,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setArticles(
        articles.map((article) =>
          article._id === updatedArticle._id ? response.data : article
        )
      );
      setEditingArticle(null);
      setActiveTab("articles");
      toast({
        title: "Berhasil",
        description: "Artikel berhasil diperbarui",
      });
    } catch (err: any) {
      console.error("Error updating article:", err);
      toast({
        title: "Error",
        description: "Gagal memperbarui artikel: " + (err.response?.data?.message || err.message),
        variant: "destructive",
      });
    }
  };

  const handleDeleteArticle = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          title: "Error",
          description: "Token autentikasi tidak ditemukan. Silakan login kembali.",
          variant: "destructive",
        });
        return;
      }
      await axios.delete(`http://localhost:5000/api/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setArticles(articles.filter((article) => article._id !== id));
      const response = await axios.get("http://localhost:5000/api/articles/stats/total-views");
      setTotalViews(response.data.totalViews);
      toast({
        title: "Berhasil",
        description: "Artikel berhasil dihapus",
      });
    } catch (err: any) {
      console.error("Error deleting article:", err);
      toast({
        title: "Error",
        description: "Gagal menghapus artikel: " + (err.response?.data?.message || err.message),
        variant: "destructive",
      });
    }
  };

  const handleEditClick = (article: Article) => {
    setEditingArticle(article);
    setActiveTab("add-article");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Dashboard Admin</h1>
            <p className="text-gray-300">Kelola konten blog dan pantau statistik</p>
          </div>

          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-300 text-sm">{stat.title}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                      </div>
                      <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-white">Artikel Terbaru</h2>
                  <Button 
                    onClick={() => setActiveTab("articles")}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                  >
                    Lihat Semua
                  </Button>
                </div>
                <div className="space-y-4">
                  {articles.slice(0, 3).map((article: Article) => (
                    <div key={article._id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-medium">{article.title}</h3>
                          <p className="text-gray-400 text-sm">{article.author} • {new Date(article.date).toLocaleDateString('id-ID')}</p>
                        </div>
                        <span className="bg-green-600/50 text-green-200 px-3 py-1 rounded-full text-sm">
                          {article.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === "articles" && (
            <ArticleList 
              articles={articles}
              onEdit={handleEditClick}
              onDelete={handleDeleteArticle}
              onAdd={() => {
                setEditingArticle(null);
                setActiveTab("add-article");
              }}
            />
          )}

          {activeTab === "add-article" && (
            <ArticleForm 
              onSubmit={editingArticle ? handleEditArticle : handleAddArticle}
              onCancel={() => {
                setEditingArticle(null);
                setActiveTab("articles");
              }}
              initialData={editingArticle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;