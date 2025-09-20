import { motion } from "framer-motion";
import { ClipboardCheck, Cpu, TrendingUp, DollarSign, ShieldCheck, Leaf } from "lucide-react";
import StepImg1 from "../assets/step1.webp";
import StepImg2 from "../assets/step2.webp";
import StepImg3 from "../assets/step3.jpeg";



export function HowItWorks() {
  const steps = [
    {
      title: "Step 1: Provide Your Info",
      description: "Tell us about your farm — land size, soil type, and the crop you want to grow.",
      image: StepImg1,
    },
    {
      title: "Step 2: Get AI Analysis",
      description: "Our AI analyzes the data, weather history, and market trends instantly.",
      image: StepImg2,
    },
    {
      title: "Step 3: Take Action",
      description: "Follow easy recommendations for seeds, fertilizer, and irrigation to boost your yield.",
      image: StepImg3,
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-12 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 text-green-900"
      >
        How It Works
      </motion.h2>

      {/* TIMELINE CONTAINER */}
      <div className="relative">
        {/* Vertical line for timeline */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-green-400 transform -translate-x-1/2 hidden md:block" />

        <div className="flex flex-col space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center md:items-start gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="md:w-1/2 w-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* TEXT */}
              <div className="md:w-1/2 w-full text-center md:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="hidden md:block w-8 h-8 rounded-full bg-green-500 shadow-md mx-auto md:mx-0 md:ml-[-2px]"
                />
                <h3 className="text-xl sm:text-3xl font-bold text-green-900 mt-4 md:mt-0">
                  {step.title}
                </h3>
                <p className="text-green-800 mt-2 text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const benefits = [
    {
      title: "AI-Powered Insights",
      description: "Get precise recommendations tailored to your farm conditions.",
      icon: <Cpu className="w-10 h-10 text-green-800" />,
    },
    {
      title: "Higher Yields",
      description: "Increase productivity and make every acre count with data-driven planning.",
      icon: <TrendingUp className="w-10 h-10 text-green-800" />,
    },
    {
      title: "Cost-Effective",
      description: "Save money by using the right amount of fertilizer, water, and seeds.",
      icon: <DollarSign className="w-10 h-10 text-green-800" />,
    },
    {
      title: "Reliable Forecasts",
      description: "Stay ahead of weather surprises with real-time predictions.",
      icon: <ShieldCheck className="w-10 h-10 text-green-800" />,
    },
    {
      title: "Eco-Friendly Farming",
      description: "Minimize waste and protect the environment with optimized solutions.",
      icon: <Leaf className="w-10 h-10 text-green-800" />,
    },
  ];

  return (
    <section className=" py-16 sm:py-20 px-6 sm:px-12 md:px-20 lg:px-32">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-green-900"
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center bg-white/60 backdrop-blur-md border border-green-300 rounded-xl p-6 shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 transition-transform"
          >
            {benefit.icon}
            <h3 className="text-lg sm:text-xl font-bold text-green-900 mt-3">
              {benefit.title}
            </h3>
            <p className="text-green-700 text-sm sm:text-base mt-2">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
