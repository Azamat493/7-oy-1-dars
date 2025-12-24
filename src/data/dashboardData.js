// src/data/dashboardData.js
import Frame from "../assets/images/Frame.png";
export const statsData = [
  {
    id: 1,
    title: "Total Orders",
    value: "123",
    change: "+28%",
    icon: Frame,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Total Taken",
    value: "123",
    change: "-15%",
    icon: "💰",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Total Revenue",
    value: "123",
    change: "+28%",
    icon: "📈",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Pending Orders",
    value: "$1,234.99",
    change: "+28%",
    icon: "⏳",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 5,
    title: "Pending Returns",
    value: "$1,234.99",
    change: "+28%",
    icon: "🔄",
    color: "bg-red-100 text-red-600",
  },
];

export const orderStatusData = {
  new: 50,
  pending: 50,
  dispatched: 50,
  delivered: 123,
  cancelled: 50,
};

export const recentActivities = [
  {
    id: 1,
    user: "Christian Wood",
    action: "Sent Message to Nikita Houston",
    time: "1 min ago",
    type: "message",
  },
  {
    id: 2,
    user: "Nikita Houston",
    action: 'Replied to your message "Hello"',
    time: "1 min ago",
    type: "reply",
  },
  {
    id: 3,
    user: "Christian Wood",
    action: "Accepted Order from Ebay",
    time: "1 min ago",
    type: "order",
  },
];

export const recentOrders = [
  {
    id: "275936",
    product: "iPhone 15 Pro Max",
    channel: "eBay",
    customer: "Gabriella...",
    total: "$400.00",
  },
  {
    id: "415368",
    product: "White Denim T-Shirt M...",
    channel: "Walmart",
    customer: "Harris Sa...",
    total: "$151.00",
  },
];

export const topSelling = [
  {
    name: "iPhone 15 Pro Max",
    sells: 156,
    category: "Mobile",
    revenue: "$6,240.00",
  },
  {
    name: "White Denim T-Shirt",
    sells: 139,
    category: "Clothing",
    revenue: "$2,085.00",
  },
];

export const persons = [
  { name: "Luisa Winters", email: "Joneshighman@gmail.com", role: "Manager" },
  { name: "Syed Dean", email: "Fisherman12@gmail.com", role: "Worker" },
];

export const revenueData = [
  { month: "Jan", value: 589 },
  { month: "Feb", value: 840 },
  { month: "Mar", value: 898 },
  { month: "Apr", value: 203 },
  { month: "May", value: 400 },
  { month: "Jun", value: 920 },
];
