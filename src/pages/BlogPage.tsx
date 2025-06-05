import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/articles");
        setArticles(response.data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Blog <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Articles</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Temukan artikel-artikel menarik tentang teknologi dan programming
          </p>
          
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Cari artikel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article: any) => (
            <Card key={article._id} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-600/50 backdrop-blur-sm text-purple-200 px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <p>{article.author}</p>
                    <p>{new Date(article.date).toLocaleDateString('id-ID')}</p>
                  </div>
                  
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link to={`/blog/${article._id}`}>Baca</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-xl">Tidak ada artikel yang ditemukan</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;