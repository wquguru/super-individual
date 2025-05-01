'use client';

import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "如何预订服务？",
    answer: "您可以通过网站上的'立即预订'按钮选择合适的时间包，之后我们会通过邮件确认具体咨询时间和方式。预订确认后，您将收到详细的会议链接和准备事项。"
  },
  {
    question: "服务是否可以退款？",
    answer: "是的，我们提供灵活的退款政策。如果在服务开始前48小时取消，可获得全额退款。服务开始前24小时内取消，可获得50%退款。服务开始后将不予退款。"
  },
  {
    question: "咨询是线上还是线下进行？",
    answer: "我们主要提供线上咨询服务，通过Zoom或腾讯会议等平台进行。特殊情况下，如果您在上海地区，也可以安排线下面对面交流，具体细节可以在预订时详细沟通。"
  },
  {
    question: "一次咨询能解决多少问题？",
    answer: "这取决于您选择的时间包和问题的复杂程度。1小时的快速咨询适合解决具体的技术问题或简单的职业建议；8小时的深度咨询则可以帮助您制定完整的职业规划或技术学习路线；定制时间包则可以根据您的具体需求来安排。"
  },
  {
    question: "如何为咨询做准备？",
    answer: "预订确认后，我们会发送一份简单的问卷，帮助您梳理核心问题和期望。建议您提前准备好具体的问题清单，以及相关的背景资料，这样可以让咨询更有效率。"
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? <IoIosArrowUp className="h-6 w-6" /> : <IoIosArrowDown className="h-6 w-6" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          常见问题
        </h2>
        <div className="mt-6">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 