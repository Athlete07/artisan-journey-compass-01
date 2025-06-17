
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const ArtisanInsights = () => {
  const mockArtisans = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      location: 'Varanasi, UP',
      craft: 'Textiles',
      joinDate: '2024-01-15',
      totalEarnings: 45000,
      ordersCompleted: 23,
      rating: 4.8,
      status: 'Active',
      lastActive: '2 hours ago',
      monthlyEarnings: [
        { month: 'Jan', earnings: 5000 },
        { month: 'Feb', earnings: 7500 },
        { month: 'Mar', earnings: 6800 },
        { month: 'Apr', earnings: 8200 },
        { month: 'May', earnings: 9500 },
        { month: 'Jun', earnings: 8000 },
      ]
    },
    {
      id: 2,
      name: 'Maya Devi',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face',
      location: 'Khurja, UP',
      craft: 'Pottery',
      joinDate: '2024-02-20',
      totalEarnings: 32000,
      ordersCompleted: 18,
      rating: 4.9,
      status: 'Active',
      lastActive: '1 day ago',
      monthlyEarnings: [
        { month: 'Feb', earnings: 3000 },
        { month: 'Mar', earnings: 5500 },
        { month: 'Apr', earnings: 7200 },
        { month: 'May', earnings: 8800 },
        { month: 'Jun', earnings: 7500 },
      ]
    },
    {
      id: 3,
      name: 'Vikram Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      location: 'Jodhpur, RJ',
      craft: 'Woodwork',
      joinDate: '2023-11-10',
      totalEarnings: 67000,
      ordersCompleted: 34,
      rating: 4.7,
      status: 'Active',
      lastActive: '30 minutes ago',
      monthlyEarnings: [
        { month: 'Jan', earnings: 8000 },
        { month: 'Feb', earnings: 9200 },
        { month: 'Mar', earnings: 11500 },
        { month: 'Apr', earnings: 12800 },
        { month: 'May', earnings: 13000 },
        { month: 'Jun', earnings: 12500 },
      ]
    },
    {
      id: 4,
      name: 'Lakshmi Nair',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      location: 'Kochi, KL',
      craft: 'Jewelry',
      joinDate: '2024-03-05',
      totalEarnings: 28500,
      ordersCompleted: 15,
      rating: 4.6,
      status: 'Inactive',
      lastActive: '5 days ago',
      monthlyEarnings: [
        { month: 'Mar', earnings: 4500 },
        { month: 'Apr', earnings: 6200 },
        { month: 'May', earnings: 8800 },
        { month: 'Jun', earnings: 9000 },
      ]
    }
  ];

  const performanceData = [
    { month: 'Jan', totalEarnings: 45000, activeArtisans: 12, avgRating: 4.5 },
    { month: 'Feb', totalEarnings: 58000, activeArtisans: 15, avgRating: 4.6 },
    { month: 'Mar', totalEarnings: 72000, activeArtisans: 18, avgRating: 4.7 },
    { month: 'Apr', totalEarnings: 89000, activeArtisans: 22, avgRating: 4.8 },
    { month: 'May', totalEarnings: 95000, activeArtisans: 25, avgRating: 4.7 },
    { month: 'Jun', totalEarnings: 87000, activeArtisans: 24, avgRating: 4.8 },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const craftIcons: { [key: string]: string } = {
    'Textiles': '🧵',
    'Pottery': '🏺',
    'Woodwork': '🪵',
    'Jewelry': '💍'
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Artisan Performance Insights 🎨
          </h2>
          <p className="text-slate-600">
            Monitor artisan engagement, earnings, and platform impact
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Artisans', value: '156', icon: '👥', color: 'text-blue-600' },
            { label: 'Active This Month', value: '124', icon: '✨', color: 'text-green-600' },
            { label: 'Avg Rating', value: '4.7', icon: '⭐', color: 'text-yellow-600' },
            { label: 'Total Earnings', value: '₹8.7L', icon: '💰', color: 'text-purple-600' },
          ].map((stat, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>📈</span>
                <span>Monthly Earnings Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="totalEarnings" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>👥</span>
                <span>Active Artisans</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="month" stroke="#64748B" />
                  <YAxis stroke="#64748B" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px'
                    }} 
                  />
                  <Bar dataKey="activeArtisans" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Artisan Profiles */}
        <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>🎨</span>
              <span>Artisan Profiles</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockArtisans.map((artisan) => (
                <Card key={artisan.id} className="border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={artisan.avatar} />
                        <AvatarFallback>{artisan.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-slate-800 truncate">{artisan.name}</h4>
                          <Badge className={getStatusColor(artisan.status)}>
                            {artisan.status}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-slate-600">
                          <p className="flex items-center space-x-1">
                            <span>{craftIcons[artisan.craft]}</span>
                            <span>{artisan.craft} • {artisan.location}</span>
                          </p>
                          <p>⭐ {artisan.rating} rating • {artisan.ordersCompleted} orders</p>
                          <p>💰 ₹{artisan.totalEarnings.toLocaleString()} total earnings</p>
                          <p className="text-xs">Last active: {artisan.lastActive}</p>
                        </div>
                        
                        {/* Mini Earnings Chart */}
                        <div className="mt-4">
                          <p className="text-xs font-medium text-slate-700 mb-2">Monthly Earnings</p>
                          <ResponsiveContainer width="100%" height={60}>
                            <LineChart data={artisan.monthlyEarnings}>
                              <Line 
                                type="monotone" 
                                dataKey="earnings" 
                                stroke="#10B981" 
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ArtisanInsights;
