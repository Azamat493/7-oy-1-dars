export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white sticky top-0 z-999 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-1 overflow-x-auto">
          {[
            "Dashboard",
            "Orders",
            "Address",
            "Notes",
            "Tasks",
            "Contacts",
            "Credit History",
          ].map((tab) => (
            <button
              key={tab}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-t-lg ${
                tab === "Dashboard"
                  ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}
