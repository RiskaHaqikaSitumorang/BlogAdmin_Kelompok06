import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/articles/${id}`);
        setArticle(response.data);
      } catch (err) {
        console.error("Error fetching article:", err);
      }
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 mb-8">
          <Link to="/blog">← Kembali ke Blog</Link>
        </Button>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="bg-purple-600/50 backdrop-blur-sm text-purple-200 px-4 py-2 rounded-full">
                {article.category}
              </span>
              <span className="text-gray-400">{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center mb-8 text-gray-300">
              <span className="mr-4">By {article.author}</span>
              <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
            </div>
            
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: '#e5e7eb'
              }}
            />
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;