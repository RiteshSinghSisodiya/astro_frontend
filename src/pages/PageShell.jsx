
export default function PageShell({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Page Title */}
        {title && (
          <h1 className="text-2xl font-bold text-center mb-6">
            {title}
          </h1>
        )}

        {/* Page Content */}
        <div className="text-gray-700 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
