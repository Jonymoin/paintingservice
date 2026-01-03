import { motion } from "framer-motion";
import {
  ShieldCheck,
  PaintBucket,
  PackageCheck,
  Ruler,
  Layers3,
  Sparkles,
  Smile,
  Users2,
  BadgeDollarSign,
  ThumbsUp,
  PhoneCall,
  CalendarDays,
  Hammer,
  PaintRoller,
  Eye,
  Headphones,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const colorSchemes = {
  policies: [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-orange-500 to-yellow-400",
    "from-green-500 to-emerald-400",
    "from-red-500 to-rose-400",
    "from-indigo-500 to-blue-400",
  ],
  values: [
    "from-teal-500 to-green-400",
    "from-violet-500 to-purple-400",
    "from-amber-500 to-orange-400",
    "from-sky-500 to-blue-400",
  ],
  steps: [
    "bg-gradient-to-br from-blue-500 to-cyan-400",
    "bg-gradient-to-br from-purple-500 to-pink-400",
    "bg-gradient-to-br from-orange-500 to-yellow-400",
    "bg-gradient-to-br from-green-500 to-emerald-400",
    "bg-gradient-to-br from-red-500 to-rose-400",
    "bg-gradient-to-br from-indigo-500 to-violet-400",
  ]
};

const SectionWrapper = ({ title, children, gradient }) => (
  <motion.section
    variants={fadeInUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="py-16 px-4 max-w-6xl mx-auto"
  >
    <h2 className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {title}
    </h2>
    {children}
  </motion.section>
);

const policies = [
  { icon: <ShieldCheck />, title: "Free Site Inspection", desc: "We offer complimentary on-site visits to assess your space, answer questions, and give tailored quotes." },
  { icon: <PaintBucket />, title: "Anti-Mould Paint Upgrade", desc: "Upgrade to mould-resistant ceiling paint in toilets for better long-term hygiene and freshness." },
  { icon: <PackageCheck />, title: "Full Protection Provided", desc: "We carefully cover floors, furniture, and fittings to keep your home clean and safe during work." },
  { icon: <Ruler />, title: "Plastering", desc: "Uneven walls or cracks? We smooth surfaces with expert plastering before painting begins." },
  { icon: <Layers3 />, title: "2 Coats of Paint", desc: "Every project gets a full two-coat application for long-lasting coverage and finish." },
  { icon: <Sparkles />, title: "Fresh & Quality Products", desc: "We use only premium, freshly opened paints from trusted suppliers to ensure vibrant, lasting color." },
];

const values = [
  { icon: <Smile />, title: "Friendly Service", desc: "We treat every customer like family. No pushy sales—just helpful advice and a smile." },
  { icon: <Users2 />, title: "Experienced Team", desc: "Our crew knows what they're doing—years of hands-on painting experience and a passion for perfection." },
  { icon: <BadgeDollarSign />, title: "Affordable Rates", desc: "Transparent pricing, no hidden fees. Quality service at prices that make sense." },
  { icon: <ThumbsUp />, title: "Customer Satisfaction", desc: "We don't leave until you're happy. 5-star reviews are not our goal—they're our standard." },
];

const steps = [
  { icon: <PhoneCall />, title: "Friendly Consultation", desc: "We start with a no-pressure chat to understand your needs. Includes a site visit to assess the space." },
  { icon: <CalendarDays />, title: "Clear Project Timeline", desc: "Once confirmed, we set your project dates and keep you updated—simple and smooth." },
  { icon: <Hammer />, title: "Detailed Prep Work", desc: "We fix cracks, protect furniture, and prep surfaces so the paint looks flawless." },
  { icon: <PaintRoller />, title: "Professional Painting", desc: "2 full coats of quality paint applied with precision by our skilled painters." },
  { icon: <Eye />, title: "Final Walkthrough", desc: "We inspect everything with you and handle any final touch-ups—no shortcuts." },
  { icon: <Headphones />, title: "After-Service Support", desc: "Need help after we leave? We're always just a call or message away." },
];

const GridSection = ({ data, colorScheme }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((item, idx) => (
      <motion.div
        key={idx}
        className={`bg-gradient-to-br ${colorScheme[idx % colorScheme.length]} p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
        variants={fadeInUp}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className="text-white mb-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          {item.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
        <p className="text-white/90 text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
);

const VerticalTimeline = ({ steps }) => (
  <div className="relative pl-6 space-y-12 max-w-3xl mx-auto">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 via-green-500 via-red-500 to-indigo-500"></div>
    {steps.map((step, idx) => (
      <motion.div
        key={idx}
        className="relative"
        variants={fadeInUp}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true }}
      >
        <div className={`absolute -left-9 ${colorSchemes.steps[idx]} rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-white`}>
          {step.icon}
        </div>
        <div className="ml-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default function EverFreshLanding() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50/30 to-purple-50/30">
      <SectionWrapper 
        title="Our Commitments" 
        gradient="from-blue-600 via-purple-600 to-pink-600"
      >
        <GridSection data={policies} colorScheme={colorSchemes.policies} />
      </SectionWrapper>

      <SectionWrapper 
        title="What Makes Us Different" 
        gradient="from-teal-600 via-green-600 to-emerald-600"
      >
        <GridSection data={values} colorScheme={colorSchemes.values} />
      </SectionWrapper>

      <SectionWrapper 
        title="Our Painting Process" 
        gradient="from-orange-600 via-red-600 to-pink-600"
      >
        <VerticalTimeline steps={steps} />
      </SectionWrapper>
    </div>
  );
}