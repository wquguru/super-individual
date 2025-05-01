'use client';

import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { HiAcademicCap, HiClock, HiUserGroup } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/testimonials.css';

// 定义评价数据类型
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  emoji: string;
}

// 定义数据亮点类型
interface Metric {
  id: number;
  icon: JSX.Element;
  value: string;
  label: string;
}

// 示例评价数据
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    company: "ByteFlow Labs",
    content: "通过1小时咨询，我找到了创业方向。Jeff的建议既有战略高度，又务实可行。",
    rating: 5,
    emoji: "👨‍💻",
  },
  {
    id: 2,
    name: "Sarah Zhang",
    role: "Senior PM",
    company: "TechGlobal",
    content: "8小时的深度咨询让我对职业发展有了全新认识。现在我不仅有了清晰的规划，还掌握了实现目标的具体步骤。",
    rating: 5,
    emoji: "👩‍💼",
  },
  {
    id: 3,
    name: "David Wang",
    role: "Full-stack Engineer",
    company: "InnovateTech",
    content: "Jeff在React和系统架构方面的指导让我茅塞顿开。他不仅教会了我技术，还教会了我如何思考问题。",
    rating: 5,
    emoji: "👨‍🔧",
  },
  {
    id: 4,
    name: "Emily Liu",
    role: "Startup Founder",
    company: "AInnova",
    content: "Jeff的建议帮助我的创业项目在三个月内完成了天使轮融资。他对技术和商业的理解令人印象深刻。",
    rating: 5,
    emoji: "👩‍🚀",
  },
  {
    id: 5,
    name: "Alex Wu",
    role: "Tech Lead",
    company: "CloudMatrix",
    content: "作为技术团队负责人，我从Jeff那里学到了很多关于团队管理和技术架构的宝贵经验。",
    rating: 5,
    emoji: "👨‍🏫",
  },
];

// 数据亮点
const metrics: Metric[] = [
  {
    id: 1,
    icon: <HiUserGroup className="w-8 h-8 text-blue-600" />,
    value: "100+",
    label: "服务客户",
  },
  {
    id: 2,
    icon: <HiClock className="w-8 h-8 text-blue-600" />,
    value: "500+",
    label: "咨询小时",
  },
  {
    id: 3,
    icon: <HiAcademicCap className="w-8 h-8 text-blue-600" />,
    value: "98%",
    label: "客户满意度",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            客户反馈
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            来自各行各业的客户分享他们的成功故事和体验
          </p>
        </div>

        {/* 评价卡片轮播区域 */}
        <div className="mb-20">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-testimonial'
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 50,
              modifier: 2,
              slideShadows: false,
            }}
            grabCursor={true}
            speed={800}
            watchSlidesProgress={true}
            preventInteractionOnTransition={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            className="testimonials-swiper py-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full backdrop-blur-md bg-white/90 border border-gray-100">
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 transform hover:scale-110 transition-transform duration-200">
                      {testimonial.emoji}
                    </div>
                    <div>
                      <p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-blue-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-blue-600/20 text-4xl mb-4 transform -rotate-6" />
                  <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400 w-5 h-5 animate-pulse" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 资质展示区域 */}
        <div className="bg-white p-10 rounded-2xl shadow-xl mb-20 backdrop-blur-sm bg-white/90">
          <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            专业背景
          </h3>
          <div className="prose max-w-3xl mx-auto">
            <ul className="list-none space-y-4 text-gray-700">
              {[
                "10年互联网行业经验，精通React.js、Python、Golang等技术栈",
                "曾任职于多家知名科技公司，担任技术负责人职位",
                "个人创业经验丰富，熟悉创业全流程",
                "专业的职业规划顾问，帮助数百人实现职业转型"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 数据亮点区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {metric.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 text-lg">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 