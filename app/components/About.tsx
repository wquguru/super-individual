'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaQuoteLeft } from 'react-icons/fa6';
import { SiXiaohongshu } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: <FaXTwitter className="w-6 h-6" />,
      url: 'https://twitter.com/your-handle',
    },
    {
      name: '小红书',
      icon: <SiXiaohongshu className="w-6 h-6" />,
      url: 'https://xiaohongshu.com/your-profile',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-6 h-6" />,
      url: 'https://linkedin.com/in/your-profile',
    },
  ];

  const highlights = [
    { label: '技术经验', value: '10+年' },
    { label: '技术栈', value: '3+个' },
    { label: '行业领域', value: '5+个' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧：个人照片 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* 装饰背景 */}
              <div className="absolute inset-0 bg-indigo-100 rounded-3xl transform rotate-6 transition-transform group-hover:rotate-8"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              
              {/* 照片容器 */}
              <div className="relative overflow-hidden rounded-3xl group">
                <Image
                  src="/images/profile.jpg"
                  alt="Jeff的个人照片"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* 数据亮点 */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="font-bold text-2xl text-indigo-600">{item.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右侧：文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
              <FaQuoteLeft className="text-indigo-600 w-8 h-8" />
              <span>关于我</span>
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600">
              <p className="leading-relaxed">
                作为一名程序员出身的企业家，我深知技术与商业结合的重要性。在过去10年中，
                我从一名普通开发者成长为多个成功项目的负责人，积累了丰富的实战经验。
              </p>
              <p className="leading-relaxed">
                我精通React.js、Python、Golang等技术栈，并在套利交易和职业发展咨询方面
                有着独特的见解。我希望通过提供个性化的时间预约服务，帮助更多人实现职业突破
                和个人成长。
              </p>
              <p className="leading-relaxed">
                无论您是想提升技术能力，还是寻求职业规划建议，我都能为您提供专业的指导和建议。
                让我们一起探讨您的需求，制定最适合您的发展计划。
              </p>
            </div>

            {/* 社交链接 */}
            <div className="pt-6">
              <p className="text-gray-900 font-semibold mb-4">在这里找到我</p>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-300"
                      aria-label={`访问${link.name}主页`}
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 