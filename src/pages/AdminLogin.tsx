import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast({
        title: "Login Berhasil",
        description: response.data.message,
      });
      navigate("/admin/dashboard");
    } catch (err: any) {
      toast({
        title: "Login Gagal",
        description: err.response?.data?.message || "Terjadi kesalahan",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-300">Masuk ke Dashboard Admin</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@blognexus.com"
              required
              className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </Button>
        </form>

        <div className="mt-8 p-4 bg-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg">
          <p className="text-yellow-200 text-sm text-center">
            <strong>Demo Credentials:</strong><br />
            Email: admin@blognexus.com<br />
            Password: admin123
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;