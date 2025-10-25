
export default function PageShell({ title, children }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-yellow-200 rounded-full animate-pulse"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Cosmic Header */}
          {title && (
            <div className="text-center mb-12">
              <div className="inline-block relative">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
                  {title}
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 rounded-full blur-lg"></div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 to-purple-400 mx-auto rounded-full"></div>
            </div>
          )}

          {/* Content Card */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-white/90 space-y-6 leading-relaxed">
              {children}
            </div>
          </div>

          {/* Decorative Elements  */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
