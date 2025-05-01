import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3.5 group">
      <div className="relative w-9 h-9">
        <svg viewBox="0 0 40 40" className="w-full h-full filter drop-shadow-sm">
          <defs>
            {/* 主渐变 */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            {/* 光效渐变 */}
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* 外环光效 */}
          <circle
            cx="20" cy="20" r="16"
            stroke="url(#glowGradient)"
            strokeWidth="0.5"
            fill="none"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          />
          
          {/* 主要图形 */}
          <g className="transform origin-center transition-transform duration-700 ease-out group-hover:rotate-180">
            {/* 外环 */}
            <path
              d="M20 4C11.163 4 4 11.163 4 20C4 28.837 11.163 36 20 36C28.837 36 36 28.837 36 20C36 11.163 28.837 4 20 4ZM20 10C25.523 10 30 14.477 30 20C30 25.523 25.523 30 20 30C14.477 30 10 25.523 10 20C10 14.477 14.477 10 20 10Z"
              fill="url(#logoGradient)"
            />
            {/* 内圆 */}
            <circle
              cx="20" cy="20" r="6"
              fill="url(#logoGradient)"
              className="transform origin-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* 装饰点 */}
            <circle cx="20" cy="8" r="1.5" fill="#60a5fa" className="transform origin-center transition-all duration-700 group-hover:scale-75" />
          </g>
        </svg>
      </div>

      {/* 优化的排版 */}
      <div className="flex flex-col -space-y-1">
        <span className="text-lg font-bold tracking-wide">
          <span className="text-gray-800">超级</span>
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            个体
          </span>
        </span>
        <span className="text-[0.65rem] text-gray-400 tracking-widest opacity-0 transform translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          SUPER INDIVIDUAL
        </span>
      </div>
    </Link>
  );
};

export default Logo; 