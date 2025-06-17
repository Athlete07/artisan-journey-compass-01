
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="backdrop-blur-sm bg-white/70 rounded-3xl p-12 shadow-2xl border border-white/20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            ArtisanFlow
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Empowering Indian artisans through technology. Track the complete journey from onboarding to payment with real-time analytics and insights.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                📊
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Real-time Analytics</h3>
              <p className="text-sm text-slate-600">Track every step of the artisan journey with comprehensive dashboards</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                🎨
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Artisan Empowerment</h3>
              <p className="text-sm text-slate-600">Support traditional crafts with modern tools and fair payments</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                💰
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Secure Payments</h3>
              <p className="text-sm text-slate-600">Escrow system ensuring fair and timely payments for all parties</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/login')} 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-3 text-lg rounded-xl"
            >
              Login to Dashboard
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={() => navigate('/artisan-onboarding')} 
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-xl"
              >
                Join as Artisan
              </Button>
              <Button 
                onClick={() => navigate('/buyer-onboarding')} 
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl"
              >
                Join as Buyer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
