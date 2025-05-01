'use client';

import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';
import { SiXiaohongshu } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FaWeixin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MdEmail className="text-xl" />
                <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWeixin className="text-xl" />
                <span>WeChat: your_wechat_id</span>
              </div>
            </div>
          </div>

          {/* 政策链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">法律条款</h3>
            <div className="space-y-2">
              <div>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  隐私政策
                </Link>
              </div>
              <div>
                <Link href="/terms" className="hover:text-white transition-colors">
                  服务条款
                </Link>
              </div>
            </div>
          </div>

          {/* 社交媒体 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">关注我</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/your_handle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaXTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/your_id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <SiXiaohongshu className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/your_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} 超级个体. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 