
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Edit } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Baca Artikel Menarik",
      description: "Temukan artikel-artikel berkualitas dari berbagai topik menarik"
    },
    {
      icon: Users,
      title: "Komunitas Aktif",
      description: "Bergabung dengan komunitas pembaca dan penulis yang aktif"
    },
    {
      icon: Edit,
      title: "Tulis & Bagikan",
      description: "Ekspresikan ide dan pemikiran Anda melalui tulisan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Blog <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nexus</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Platform blog modern untuk berbagi ide, pemikiran, dan pengalaman dengan dunia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-lg px-8 py-4">
              <Link to="/blog">Mulai Membaca</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4">
              <Link to="/admin">Login Admin</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Kenapa Memilih Blog Nexus?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <feature.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-md border-white/20 p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap Memulai Perjalanan Menulis?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Bergabunglah dengan ribuan penulis lainnya dan mulai berbagi cerita Anda
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-lg px-8 py-4">
              <Link to="/blog">Jelajahi Blog</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
