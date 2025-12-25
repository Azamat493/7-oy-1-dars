import { useState } from "react";

export default function PersonsTable() {
  const [selectedMonth, setSelectedMonth] = useState("Jun 2023");

  const persons = [
    {
      name: "Luisa Winters",
      email: "Joneshighman@gmail.com",
      phone: "+1(671) 555-0110",
      role: "Manager",
    },
    {
      name: "Syed Dean",
      email: "Fisherman12@gmail.com",
      phone: "+1(671) 555-0110",
      role: "Worker",
    },
    {
      name: "Hector Sheppard",
      email: "Janecooper@gmail.com",
      phone: "+1(671) 555-0110",
      role: "Manager",
    },
    {
      name: "Freya Perry",
      email: "Savannahbae@yahoo.com",
      phone: "+1(671) 555-0110",
      role: "Worker",
    },
    {
      name: "Ted Garza",
      email: "Janecooper@gmail.com",
      phone: "+1(671) 555-0110",
      role: "Manager",
    },
    {
      name: "Preston Woods",
      email: "Fisherman12@gmail.com",
      phone: "+1(671) 555-0110",
      role: "Worker",
    },
    {
      name: "Nikita Houston",
      email: "Ester123@gmail.com",
      phone: "+1(671) 555-0110",
      role: "Worker",
    },
  ];

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 ">
      <div className="overflow-x-auto scrollbar-custom">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-[color:var(--light-text-text-primary)] font-family">
            Persons
          </h3>
          <button className="font-semibold text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-second-family border bg-[var(--light-sub-bg)] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] border-[color:var(--border-light)] px-4 py-2 rounded-xl border-solid flex items-center gap-1">
            {selectedMonth}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.333 3C13.4214 3 13.5068 3.03514 13.5693 3.09766C13.6317 3.16008 13.6669 3.2448 13.667 3.33301V4.66699H15.833C16.1424 4.66699 16.4394 4.79 16.6582 5.00879C16.8768 5.22749 16.9999 5.52378 17 5.83301V15.833C17 16.1424 16.877 16.4394 16.6582 16.6582C16.4394 16.877 16.1424 17 15.833 17H4.16699C3.85757 17 3.56059 16.877 3.3418 16.6582C3.123 16.4394 3 16.1424 3 15.833V5.83301C3.00009 5.52378 3.12318 5.22749 3.3418 5.00879C3.56059 4.79 3.85757 4.66699 4.16699 4.66699H6.33301V3.33301C6.33309 3.2448 6.36833 3.16008 6.43066 3.09766C6.49318 3.03514 6.57859 3 6.66699 3C6.75528 3.00009 6.83991 3.03522 6.90234 3.09766C6.96478 3.16009 6.99991 3.24472 7 3.33301V4.66699H13V3.33301C13.0001 3.24472 13.0352 3.16009 13.0977 3.09766C13.1601 3.03522 13.2447 3.00009 13.333 3ZM6.66602 12.833C6.32621 12.8334 5.99904 12.964 5.75195 13.1973C5.50498 13.4305 5.35682 13.7497 5.33691 14.0889C5.31709 14.428 5.42746 14.7619 5.64551 15.0225C5.86353 15.2829 6.17254 15.45 6.50977 15.4902L6.52539 15.4922L6.54199 15.4932L6.64746 15.499L6.66113 15.5H6.6748C7.02843 15.5 7.36811 15.3594 7.61816 15.1094C7.86799 14.8594 8.0087 14.5204 8.00879 14.167C8.00879 13.8134 7.86817 13.4737 7.61816 13.2236C7.36811 12.9736 7.02843 12.833 6.6748 12.833H6.66602ZM9.99902 12.833C9.65938 12.8335 9.33294 12.9641 9.08594 13.1973C8.83882 13.4306 8.68984 13.7496 8.66992 14.0889C8.6501 14.428 8.76047 14.7619 8.97852 15.0225C9.19663 15.283 9.5063 15.4501 9.84375 15.4902L9.85938 15.4922L9.875 15.4932L9.98047 15.499L9.99414 15.5H10.0088C10.3622 15.4999 10.7012 15.3593 10.9512 15.1094C11.2011 14.8594 11.3417 14.5205 11.3418 14.167C11.3418 13.8134 11.2012 13.4737 10.9512 13.2236C10.7012 12.9738 10.3622 12.8331 10.0088 12.833H9.99902ZM13.333 12.833C12.9932 12.8334 12.6661 12.964 12.4189 13.1973C12.1719 13.4306 12.0228 13.7496 12.0029 14.0889C11.9831 14.4279 12.0935 14.762 12.3115 15.0225C12.5296 15.283 12.8393 15.4501 13.1768 15.4902L13.1924 15.4922L13.208 15.4932L13.3145 15.499L13.3281 15.5H13.3418C13.6953 15.5 14.0342 15.3593 14.2842 15.1094C14.5342 14.8594 14.6747 14.5205 14.6748 14.167C14.6748 13.8134 14.5342 13.4737 14.2842 13.2236C14.0342 12.9738 13.6952 12.833 13.3418 12.833H13.333ZM6.66602 9.5C6.32621 9.5004 5.99904 9.63099 5.75195 9.86426C5.50516 10.0974 5.3569 10.4159 5.33691 10.7549C5.317 11.0941 5.42739 11.4288 5.64551 11.6895C5.86353 11.9497 6.17261 12.117 6.50977 12.1572L6.52539 12.1592L6.54199 12.1602L6.64746 12.166L6.66113 12.167H6.6748C7.02843 12.167 7.36812 12.0264 7.61816 11.7764C7.86817 11.5263 8.00879 11.1866 8.00879 10.833C8.0087 10.4796 7.86799 10.1406 7.61816 9.89062C7.36812 9.64058 7.02843 9.5 6.6748 9.5H6.66602ZM9.99902 9.5C9.65934 9.50048 9.33295 9.63106 9.08594 9.86426C8.83894 10.0975 8.68991 10.4158 8.66992 10.7549C8.65001 11.0941 8.7604 11.4288 8.97852 11.6895C9.19663 11.9499 9.50639 12.1171 9.84375 12.1572L9.85938 12.1592L9.875 12.1602L9.98047 12.166L9.99414 12.167H10.0088C10.3622 12.1669 10.7012 12.0262 10.9512 11.7764C11.2012 11.5263 11.3418 11.1866 11.3418 10.833C11.3417 10.4795 11.2011 10.1406 10.9512 9.89062C10.7012 9.64068 10.3622 9.50012 10.0088 9.5H9.99902ZM13.333 9.5C12.9932 9.50038 12.6661 9.63097 12.4189 9.86426C12.172 10.0975 12.0229 10.4158 12.0029 10.7549C11.983 11.0941 12.0934 11.4288 12.3115 11.6895C12.5296 11.95 12.8393 12.1171 13.1768 12.1572L13.1924 12.1592L13.208 12.1602L13.3145 12.166L13.3281 12.167H13.3418C13.6953 12.167 14.0342 12.0262 14.2842 11.7764C14.5342 11.5263 14.6748 11.1866 14.6748 10.833C14.6747 10.4795 14.5342 10.1406 14.2842 9.89062C14.0342 9.64067 13.6953 9.50003 13.3418 9.5H13.333ZM3.66699 8H16.333V5.33301H3.66699V8Z"
                fill="#0E253C"
                stroke="#0E253C"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-[2fr_2fr_1fr_1fr] gap-4 font-medium text-xs leading-[150%] text-[color:var(--light-text-text-primary)] font-family mb-2 px-2 min-w-max">
          <div>NAME</div>
          <div>EMAIL</div>
          <div>CONTACT NUMBER</div>
          <div>ROLE</div>
        </div>

        <div className="space-y-2 min-w-max">
          {persons.map((person, index) => (
            <div
              key={index}
              className={`grid grid-cols-[2fr_2fr_1fr_1fr] gap-4 items-center py-2 px-2 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } rounded-md`}
            >
              <div className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family truncate">
                {person.name}
              </div>

              <div className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family truncate">
                {person.email}
              </div>

              <div className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family">
                {person.phone}
              </div>

              <div className="font-normal text-sm leading-[157%] text-[color:var(--light-text-text-primary)] font-family">
                {person.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
