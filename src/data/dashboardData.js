import Frame from "../assets/images/Frame.png";
import Frame2 from "../assets/images/Frame2.png";
import Frame3 from "../assets/images/Frame3.png";
import Frame4 from "../assets/images/Frame4.png";
import Frame5 from "../assets/images/Frame5.png";
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
    icon: Frame2,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Total Revenue",
    value: "123",
    change: "+28%",
    icon: Frame3,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Pending Orders",
    value: "$1,234.99",
    change: "-28%",
    icon: Frame4,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 5,
    title: "Pending Returns",
    value: "$1,234.99",
    change: "-28%",
    icon: Frame5,
    color: "bg-red-100 text-red-600",
  },
];

export const orderStatusData = {
  All: 50,
  New: 50,
  Pending: 50,
  Dispatched: 123,
  Delivered: 50,
  Cancelled: 50,
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







