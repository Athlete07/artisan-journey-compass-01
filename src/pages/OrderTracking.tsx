
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const OrderTracking = () => {
  const mockOrders = [
    {
      id: '#ORD-001',
      artisan: 'Rajesh Kumar',
      artisanAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      product: 'Handwoven Cotton Saree',
      buyer: 'Priya Sharma',
      amount: '₹4,500',
      status: 'In Production',
      progress: 60,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-06-10' },
        { step: 'Escrow Funded', completed: true, date: '2024-06-10' },
        { step: 'In Production', completed: true, date: '2024-06-11' },
        { step: 'Quality Check', completed: false, date: 'Pending' },
        { step: 'Shipped', completed: false, date: 'Pending' },
        { step: 'Delivered', completed: false, date: 'Pending' },
        { step: 'Payment Released', completed: false, date: 'Pending' },
      ]
    },
    {
      id: '#ORD-002',
      artisan: 'Maya Devi',
      artisanAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=150&h=150&fit=crop&crop=face',
      product: 'Ceramic Tea Set',
      buyer: 'Amit Patel',
      amount: '₹2,800',
      status: 'Shipped',
      progress: 85,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-06-08' },
        { step: 'Escrow Funded', completed: true, date: '2024-06-08' },
        { step: 'In Production', completed: true, date: '2024-06-09' },
        { step: 'Quality Check', completed: true, date: '2024-06-12' },
        { step: 'Shipped', completed: true, date: '2024-06-13' },
        { step: 'Delivered', completed: false, date: 'Expected: 2024-06-18' },
        { step: 'Payment Released', completed: false, date: 'Pending' },
      ]
    },
    {
      id: '#ORD-003',
      artisan: 'Vikram Singh',
      artisanAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      product: 'Wooden Jewelry Box',
      buyer: 'Sneha Reddy',
      amount: '₹1,800',
      status: 'Delivered',
      progress: 100,
      timeline: [
        { step: 'Order Placed', completed: true, date: '2024-06-05' },
        { step: 'Escrow Funded', completed: true, date: '2024-06-05' },
        { step: 'In Production', completed: true, date: '2024-06-06' },
        { step: 'Quality Check', completed: true, date: '2024-06-09' },
        { step: 'Shipped', completed: true, date: '2024-06-10' },
        { step: 'Delivered', completed: true, date: '2024-06-15' },
        { step: 'Payment Released', completed: true, date: '2024-06-15' },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Production': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Production': return '🔨';
      case 'Shipped': return '🚚';
      case 'Delivered': return '✅';
      default: return '📦';
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-6 border border-white/20 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Order Lifecycle Tracking 📦
          </h2>
          <p className="text-slate-600">
            Monitor real-time order progress from creation to payment release
          </p>
        </div>

        {/* Order Status Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Orders', value: '24', icon: '📦', color: 'text-blue-600' },
            { label: 'In Production', value: '8', icon: '🔨', color: 'text-yellow-600' },
            { label: 'Shipped', value: '6', icon: '🚚', color: 'text-purple-600' },
            { label: 'Delivered', value: '10', icon: '✅', color: 'text-green-600' },
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

        {/* Orders List */}
        <div className="space-y-6">
          {mockOrders.map((order) => (
            <Card key={order.id} className="backdrop-blur-sm bg-white/70 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={order.artisanAvatar} />
                      <AvatarFallback>{order.artisan.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{order.id}</CardTitle>
                      <p className="text-sm text-slate-600">by {order.artisan}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(order.status)}>
                      {getStatusIcon(order.status)} {order.status}
                    </Badge>
                    <span className="font-bold text-lg text-slate-800">{order.amount}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Order Details */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800">Order Details</h4>
                    <p className="text-sm text-slate-600"><strong>Product:</strong> {order.product}</p>
                    <p className="text-sm text-slate-600"><strong>Buyer:</strong> {order.buyer}</p>
                    <div className="mt-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{order.progress}%</span>
                      </div>
                      <Progress value={order.progress} className="h-2" />
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-slate-800 mb-4">Order Timeline</h4>
                    <div className="space-y-3">
                      {order.timeline.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                            step.completed ? 'bg-green-500' : 'bg-slate-300'
                          }`}></div>
                          <div className="flex-1">
                            <p className={`text-sm font-medium ${
                              step.completed ? 'text-slate-800' : 'text-slate-500'
                            }`}>
                              {step.step}
                            </p>
                            <p className="text-xs text-slate-500">{step.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OrderTracking;
