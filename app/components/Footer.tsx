'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { SiXiaohongshu } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaWeixin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white mb-4">加入超级个体社区</h2>
            <p className="text-gray-400 mb-6 max-w-2xl">
              订阅我们的 newsletter，获取最新的个人成长、技术创新和职业发展资讯。
            </p>
            <form onSubmit={handleSubscribe} className="w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="输入您的邮箱"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  订阅
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于我们 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">关于我们</h3>
            <p className="text-gray-400 mb-4">
              超级个体致力于帮助个人实现职业理想和生活目标，提供专业的技术咨询和职业发展指导。
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/your_handle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/your_id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SiXiaohongshu className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/your_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* 服务 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">服务</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/1h" className="text-gray-400 hover:text-white transition-colors">
                  1小时咨询
                </Link>
              </li>
              <li>
                <Link href="/services/8h" className="text-gray-400 hover:text-white transition-colors">
                  8小时深度合作
                </Link>
              </li>
              <li>
                <Link href="/services/custom" className="text-gray-400 hover:text-white transition-colors">
                  定制服务
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  技术博客
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">联系方式</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MdEmail className="text-xl" />
                <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FaWeixin className="text-xl" />
                <span>WeChat: your_wechat_id</span>
              </div>
            </div>
          </div>

          {/* 法律条款 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">法律条款</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
                  退款政策
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {currentYear} 超级个体. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 