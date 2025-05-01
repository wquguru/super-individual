import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "快速咨询",
    hours: 1,
    description: "一对一在线咨询，快速解答您的技术难题或职业发展问题",
    price: 299,
    features: [
      "一对一视频会议",
      "针对性解答疑问",
      "基础问题诊断",
      "简单建议指导",
      "会后总结文档"
    ],
    isPopular: false
  },
  {
    title: "深度指导",
    hours: 8,
    description: "系统性的技术指导或职业规划，帮助您突破发展瓶颈",
    price: 1999,
    features: [
      "定制化解决方案",
      "深入技术指导",
      "详细职业规划",
      "实践任务布置",
      "一周跟进服务",
      "完整规划文档"
    ],
    isPopular: true
  },
  {
    title: "定制服务",
    hours: "定制",
    description: "根据您的具体需求，提供完全定制化的咨询服务方案",
    price: 3999,
    features: [
      "需求深度评估",
      "个性化服务方案",
      "长期发展规划",
      "定期进度跟进",
      "全程一对一指导",
      "不限时答疑解惑"
    ],
    isPopular: false
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">选择您的服务方案</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            根据您的需求和目标，选择最适合的服务包。无论是快速咨询还是深度指导，我都将为您提供专业的解决方案。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 