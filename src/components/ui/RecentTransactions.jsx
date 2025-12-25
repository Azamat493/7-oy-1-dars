import { useState } from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import Ellipse3 from "../../assets/images/Ellipse3.png";
import Ellipse4 from "../../assets/images/Ellipse4.png";
import Ellipse5 from "../../assets/images/Ellipse5.png";

export default function RecentTransactions() {
  const [orders] = useState([
    {
      id: "#123-456-7890",
      quantity: 1,
      product: "iPhone 15 pro max",
      image: img1,
      channel: "eBay",
      channelLogo: image1,
      customer: "Gabriella...",
      customerAvatar: Ellipse1,
      total: "$400.00",
    },
    {
      id: "#123-456-7890",
      quantity: 4,
      product: "White Denim Tshit M...",
      image: img2,
      channel: "Walmart",
      channelLogo: image2,
      customer: "Harris Sa...",
      customerAvatar: Ellipse2,
      total: "$151.00",
    },
    {
      id: "#123-456-7890",
      quantity: 2,
      product: "David Beckham class...",
      image: img3,
      channel: "Facebook",
      channelLogo: image3,
      customer: "Lilia Ponce",
      customerAvatar: Ellipse3,
      total: "$167.00",
    },
    {
      id: "#123-456-7890",
      quantity: 3,
      product: "Samsung i-20 series sm...",
      image: img4,
      channel: "Amazon",
      channelLogo: image4,
      customer: "Rehan Ch...",
      customerAvatar: Ellipse4,
      total: "$262.00",
    },
    {
      id: "#123-456-7890",
      quantity: 5,
      product: "Nykaa Red lipstick",
      image: img5,
      channel: "Etsy",
      channelLogo: image5,
      customer: "Maxim Br...",
      customerAvatar: Ellipse5,
      total: "$319.00",
    },
  ]);

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 overflow-x-auto scrollbar-custom">
      <h3 className="font-semibold text-lg leading-[133%] text-[color:var(--light-text-text-primary)] font-family mb-3">
        Recent Orders
      </h3>

      <div className="grid grid-cols-[100px_200px_100px_120px_80px] gap-4 font-medium text-xs leading-[150%] text-[color:var(--light-text-text-secondary)] font-family mb-2 px-2 min-w-max">
        <div className="">TRANSACTION ID</div>
        <div>PRODUCTS</div>
        <div className="">CHANNEL</div>
        <div>CUSTOMER</div>
        <div className="">TOTAL</div>
      </div>

      <div className="space-y-3  min-w-max">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className={`grid grid-cols-[100px_200px_100px_120px_80px] gap-4 items-center py-2 px-2 ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            } rounded-md`}
          >
            <div className="font-normal truncate text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family">
              {order.id}
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <span className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family shrink-0">
                x{order.quantity}
              </span>
              <img
                src={order.image}
                alt={order.product}
                className="w-8 h-8 rounded object-cover shrink-0"
              />
              <span className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family truncate">
                {order.product}
              </span>
            </div>

            <div className="flex items-center justify-start">
              <img
                src={order.channelLogo}
                alt={order.channel}
                className="h-6 w-auto rounded"
              />
            </div>

            <div className="flex items-center gap-2 min-w-0">
              <img
                src={order.customerAvatar}
                alt={order.customer}
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <span className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family truncate">
                {order.customer}
              </span>
            </div>

            <div className="font-normal text-sm leading-[157%]  text-[color:var(--light-text-text-primary)] font-family truncate">
              {order.total}
            </div>
          </div>
        ))}
      </div>

      <button className="text-indigo-600 cursor-pointer m-auto text-xs mt-4 flex items-center gap-1 hover:underline">
        View 256 more orders
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 13.3333C10.3487 13.3333 13.3333 10.3487 13.3333 6.66667C13.3333 2.98467 10.3487 0 6.66667 0C2.98467 0 0 2.98467 0 6.66667C0 10.3487 2.98467 13.3333 6.66667 13.3333ZM6.67 3.83867C6.54502 3.96368 6.47481 4.13322 6.47481 4.31C6.47481 4.48678 6.54502 4.65631 6.67 4.78133L7.88867 6H3.838C3.66119 6 3.49162 6.07024 3.3666 6.19526C3.24157 6.32029 3.17133 6.48986 3.17133 6.66667C3.17133 6.84348 3.24157 7.01305 3.3666 7.13807C3.49162 7.26309 3.66119 7.33333 3.838 7.33333H7.88867L6.67 8.55267C6.54856 8.6784 6.48136 8.8468 6.48288 9.0216C6.4844 9.1964 6.55452 9.36361 6.67812 9.48721C6.80173 9.61082 6.96893 9.68093 7.14373 9.68245C7.31853 9.68397 7.48693 9.61677 7.61267 9.49533L9.96933 7.138C10.0943 7.01298 10.1645 6.84344 10.1645 6.66667C10.1645 6.48989 10.0943 6.32035 9.96933 6.19533L7.61333 3.83867C7.48831 3.71369 7.31878 3.64348 7.142 3.64348C6.96522 3.64348 6.79502 3.71369 6.67 3.83867Z"
            fill="#513CCE"
          />
        </svg>
      </button>
    </div>
  );
}
