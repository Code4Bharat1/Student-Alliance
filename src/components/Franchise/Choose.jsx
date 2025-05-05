'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'End to End Edtech Support',
    description: 'Edtech support from educator studios to science centers with quality by Student Alliance.',
    image: '/images/choose1.jpg',
  },
  {
    title: 'Research & Consultation',
    description: 'Research & Consultation with Agile Framework to empower your education business.',
    image: '/images/choose2.png',
  },
  {
    title: 'PAN India & Global Outreach',
    description: 'PAN India & Global Outreach with logistics and support beyond Mumbai.',
    image: '/images/choose3.jpg',
  },
  {
    title: 'Training Centered Products',
    description: 'Training-Centered Products with multilingual online & offline delivery since 2011.',
    image: '/images/choose4.png',
  },
];

export default function WhyChoose() {
  return (
    <div className="bg-white text-black text-center py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose <span className="text-blue-600">Student Alliance</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-gray-900"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={400}
              height={250}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
            <div className="p-4 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-full transition">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
