
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', orders: 45, revenue: 23000, artisans: 12 },
    { month: 'Feb', orders: 52, revenue: 28000, artisans: 15 },
    { month: 'Mar', orders: 48, revenue: 25000, artisans: 14 },
    { month: 'Apr', orders: 61, revenue: 32000, artisans: 18 },
    { month: 'May', orders: 55, revenue: 29000, artisans: 16 },
    { month: 'Jun', orders: 67, revenue: 35000, artisans: 22 },
  ];

  const categoryData = [
    { name: 'Textiles', value: 35, color: '#3B82F6' },
    { name: 'Pottery', value: 25, color: '#EF4444' },
    { name: 'Jewelry', value: 20, color: '#10B981' },
    { name: 'Woodcraft', value: 15, color: '#F59E0B' },
    { name: 'Others', value: 5, color: '#8B5CF6' },
  ];

  const funnelData = [
    { stage: 'Signups', count: 1000, percentage: 100 },
    { stage: 'KYC Complete', count: 850, percentage: 85 },
    { stage: 'First Product', count: 720, percentage: 72 },
    { stage: 'First Order', count: 450, percentage: 45 },
    { stage: 'Repeat Orders', count: 280, percentage: 28 },
  ];

  const kpiCards = [
    { title: 'Total Revenue', value: '₹2,45,000', change: '+12%', icon: '💰', color: 'text-green-600' },
    { title: 'Active Artisans', value: '156', change: '+8%', icon: '🎨', color: 'text-blue-600' },
    { title: 'Orders This Month', value: '67', change: '+15%', icon: '📦', color: 'text-purple-600' },
    { title: 'Avg Order Value', value: '₹3,650', change: '+5%', icon: '📊', color: 'text-orange-600' },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-slate-600">
            Here's what's happening with your artisan platform today.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                    <p className={`text-sm ${kpi.color}`}>{kpi.change} from last month</p>
                  </div>
                  <div className="text-3xl">{kpi.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trend */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>📈</span>
                <span>Revenue Trend</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
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
                    dataKey="revenue" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🎯</span>
                <span>Product Categories</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-sm text-slate-600">{category.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Onboarding Funnel */}
        <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>🎯</span>
              <span>Artisan Onboarding Funnel</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelData.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{stage.stage}</span>
                    <span className="text-sm text-slate-600">{stage.count} users ({stage.percentage}%)</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500" 
                      style={{ width: `${stage.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Orders */}
        <Card className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>📦</span>
              <span>Monthly Orders & Active Artisans</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
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
                <Bar dataKey="orders" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="artisans" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
