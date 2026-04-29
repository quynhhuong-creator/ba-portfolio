import type { ReactNode } from "react";
import {
  ArrowRight,
  Mail,
  Linkedin,
  CheckCircle2,
  Briefcase,
  Layers,
  Workflow,
  Database,
  BarChart3,
  Users,
  FileText,
  MonitorSmartphone,
  Globe2,
  TrendingUp,
  Search,
  ClipboardCheck,
} from "lucide-react";

import altImage from "./assets/alt.jpg";
import trackTraceImage from "./assets/track-trace.jpg";

type Project = {
  title: string;
  domain: string;
  role: string;
  timeline: string;
  image?: string;
  overview: string;
  problem: string;
  baWork: string[];
  impact: string;
};

type Experience = {
  company: string;
  role: string;
  time: string;
  points: string[];
};

const projects: Project[] = [
  {
    title: "Active Lifestyle Tracker",
    domain: "HealthTech / Fitness / Loyalty & Engagement",
    role: "Business Analyst / Project Assistant",
    timeline: "Release: Feb 2024",
    image: altImage,
    overview:
      "A Web/App product for the Asia Pacific market that supports activity tracking, challenges, rewards, and user engagement features.",
    problem:
      "Users needed an engaging way to track activities, join challenges, and stay motivated through rewards across multiple APAC markets.",
    baWork: [
      "Gathered and analyzed business requirements and created BRD, SRS, user stories, and data flows.",
      "Designed wireframes and prototypes using Figma for activity tracking, challenges, and rewards.",
      "Modeled user flows and supported feature development with development teams.",
      "Collaborated with stakeholders, supported UAT, and ensured delivery aligned with requirements.",
    ],
    impact:
      "Achieved 20,000+ app downloads within 2 months, rated 4★ on App Store, and deployed across 8 countries.",
  },
  {
    title: "SmartTrack Hub – Track & Trace",
    domain: "Logistics / Supply Chain / Order Tracking System",
    role: "Business Analyst / Project Assistant",
    timeline: "Release: Apr 2024",
    image: trackTraceImage,
    overview:
      "A Web/App Track & Trace solution for Indonesia, designed to improve order tracking visibility from warehouse to distributor.",
    problem:
      "Users lacked clear shipment visibility after order placement, creating tracking-related enquiries, complaint calls, and operational workload.",
    baWork: [
      "Defined end-to-end business processes for order tracking from warehouse to distributor.",
      "Designed data flows and tracking logic for shipment status, order lifecycle, and real-time updates.",
      "Supported both mobile app and admin web portal development through requirement clarification.",
      "Collaborated with stakeholders, developers, and QA teams to validate data accuracy, UAT, system reliability, and traceability.",
    ],
    impact:
      "Improved order-to-delivery visibility, reduced manual tracking dependency, and supported a more reliable post-shipping experience.",
  },
  {
    title: "Digital Content Management",
    domain: "CMS / MarTech / Digital Experience Platform (AEM)",
    role: "Business Analyst",
    timeline: "Release: Sep 2023",
    overview:
      "A global website content management platform built on Adobe Experience Manager, supporting scalable content operations across markets.",
    problem:
      "Global teams needed a consistent and reusable way to manage digital content and build pages across multiple countries.",
    baWork: [
      "Defined and structured functional requirements for a component-based CMS on AEM.",
      "Designed page structures and content assembly flows for modular website creation.",
      "Supported reusable component logic and content management workflows.",
      "Coordinated with cross-functional teams to validate system behavior, track issues, and ensure stable deployment.",
    ],
    impact: "Successfully deployed across 95 countries globally.",
  },
  {
    title: "Run – Asia Pacific",
    domain: "Event Management / E-commerce Integration / Fitness",
    role: "Business Analyst",
    timeline: "Release: Nov 2023",
    overview:
      "A Web/App platform supporting event registration, package management, progress tracking, rewards, and e-commerce integration across APAC.",
    problem:
      "Users needed a seamless end-to-end experience for event registration, package usage, progress tracking, and rewards across web and mobile.",
    baWork: [
      "Analyzed business processes for event registration and package management.",
      "Defined system workflows and integration logic between web and mobile app.",
      "Validated business rules for registration, package usage, progress tracking, and rewards.",
      "Collaborated with QA and development teams to support UAT and ensure a smooth user experience.",
    ],
    impact: "Successfully deployed across 13 countries.",
  },
];

const skills = [
  {
    title: "Requirement Analysis",
    desc: "BRD, SRS, user stories, requirement clarification",
    icon: FileText,
  },
  {
    title: "Process Modeling",
    desc: "UML, BPMN, user journeys, system workflows",
    icon: Workflow,
  },
  {
    title: "Wireframing",
    desc: "Figma, Draw.io, prototypes, user flow visualization",
    icon: MonitorSmartphone,
  },
  {
    title: "Stakeholder Communication",
    desc: "Client communication, requirement alignment, cross-functional collaboration",
    icon: Users,
  },
  {
    title: "Data & Problem Solving",
    desc: "Data analysis, RCA, reporting, dashboard insights",
    icon: BarChart3,
  },
  {
    title: "Delivery Tools",
    desc: "Jira, Trello, Azure DevOps, Workfront, Notion, Google Workspace",
    icon: Database,
  },
];

const experiences: Experience[] = [
  {
  company: "Teleperformance - Onsite: Malaysia",
  role: "Business Analyst (Ads & Tracking Systems)",
  time: "Global Social Media Platform | Jan 2025 – Present",
  points: [
    "Gather and analyze client requirements on campaign performance, tracking systems, and KPIs",
    "Perform data analysis (trend, correlation, root cause) to generate actionable insights",
    "Develop reporting frameworks (WBR/MBR/QBR) to support business decision-making",
    "Build dashboards (Data Studio) and ensure data accuracy across multiple systems",
    "Translate business needs into data-driven solutions and process improvements",
    "Act as liaison between clients and cross-functional teams to ensure alignment",
  ],
},
{
  company: "Teleperformance - Onsite: Malaysia",
  role: "Technical Support Analyst (Ads & Tracking Systems)",
  time: "Global Social Media Platform | Jul 2024 – Jan 2025",
  points: [
    "Top 1 performer for 6 consecutive months (KPI & service quality)",
    "Analyzed client issues related to campaign performance, tracking systems, and data discrepancies",
    "Investigated tracking data (Pixel, CAPI, Product Catalog) to identify root causes and improve data accuracy",
    "Translated business problems into actionable solutions to optimize campaign ROI",
    "Collaborated with cross-functional teams (Engineering, Security, Billing) to resolve complex issues",
    "Utilized data analysis and AI tools to detect anomalies and generate insights",
  ],
},
  {
    company: "Estuary Solutions Viet Nam",
    role: "Business Analyst / Project Assistant",
    time: "May 2023 - June 2024",
    points: [
      "Led and facilitated requirement gathering sessions with stakeholders, translating business needs into BRD, SRS, and user stories.",
      "Analyzed business requirements and collaborated with technical teams to define system solutions and functional designs.",
      "Managed change requests, assessing impact on scope, timeline, and system functionality.",
      "Supported end-to-end project delivery across multiple Web/App projects.",
      "Designed process flows, user journeys, and system workflows to support feature development.",
      "Coordinated with development and QA teams during UAT phases.",
      "Provided client training and post-deployment support.",
    ],
  },
  {
    company: "BOSCH GLOBAL SOFTWARE Viet Nam",
    role: "Assistant Department Head",
    time: "Sep 2022 - Nov 2022",
    points: [
      "Maintained employee and system access data, ensuring accuracy and alignment with internal processes.",
      "Supported onboarding and access management workflows across teams.",
      "Managed documentation, assets, and vendor-related processes.",
      "Improved operational tracking and reporting.",
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-slate-900">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tight">PHAM QUYNH HUONG</span>

          <div className="hidden md:flex gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#skills" className="hover:text-emerald-700">Skills</a>
            <a href="#projects" className="hover:text-emerald-700">Projects</a>
            <a href="#experience" className="hover:text-emerald-700">Experience</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>

          <a
            href="#projects"
            className="bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800"
          >
            View Projects
          </a>
        </div>
      </nav>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs">
              Business Analyst Portfolio
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-5 mb-6">
              <span className="block text-emerald-700">Pham Quynh Huong</span>
              <span className="block mt-3">
                Turning business needs into clear digital solutions.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              Business Analyst with experience in requirement gathering,
              stakeholder communication, and supporting software delivery for
              global Web/App projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-emerald-700 text-white px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:shadow-xl"
              >
                Explore Case Studies <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="bg-white border border-slate-200 px-7 py-4 rounded-2xl font-semibold hover:bg-slate-50"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8">
            <p className="text-sm uppercase tracking-widest text-emerald-700 font-bold mb-4">
              BA Focus
            </p>
            <h3 className="text-3xl font-bold mb-6">
              Requirements → Flow → Solution → Delivery
            </h3>

            <div className="grid gap-4">
              {[
                "BRD / SRS / User Stories",
                "Process & System Flow",
                "Stakeholder Alignment",
                "UAT & Delivery Support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 items-center bg-slate-50 p-4 rounded-xl"
                >
                  <CheckCircle2 className="text-emerald-700" size={20} />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-5">About Me</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              I translate business needs into structured documentation,
              workflows, user stories, and system specifications. I enjoy
              working at the intersection of business, technology, and user
              experience.
            </p>
            <p className="text-slate-600 leading-relaxed">
              My experience spans HealthTech, logistics, CMS, event management,
              e-commerce integration, tracking systems, dashboarding, and
              global digital product delivery.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Requirement Gathering & Analysis",
              "Stakeholder Communication & Requirement Clarification",
              "UAT Support & Validation",
              "Risk & Issue Management",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex gap-4"
              >
                <CheckCircle2 className="text-emerald-700 flex-shrink-0" size={22} />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Core Skills</h2>
          <p className="text-slate-600 mb-10">
            A practical mix of business analysis, stakeholder management,
            software delivery support, and problem solving.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-1 transition"
              >
                <skill.icon className="text-emerald-700 mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <span className="text-emerald-700 font-bold tracking-widest uppercase text-xs">
            Case Studies
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Project Experience</h2>
          <p className="text-slate-600 max-w-2xl mb-10">
            Each project is presented as a mini case study to show problem
            analysis, requirements, system thinking, delivery support, and
            business impact.
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <details
                key={project.title}
                className="group bg-[#F8FAF9] rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
                        {project.domain}
                      </span>
                      <span className="text-sm text-slate-400">{project.timeline}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                    <p className="text-slate-500 mt-2">{project.role}</p>
                  </div>

                  <div className="text-emerald-700 font-semibold flex items-center gap-2">
                    View Case Study <ArrowRight size={16} />
                  </div>
                </summary>

                <div className="px-7 pb-8 grid lg:grid-cols-2 gap-8">
                  {project.image && (
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 overflow-hidden p-3">
                      <img
                        src={project.image}
                        alt={`${project.title} visual`}
                        className="w-full max-h-[560px] object-contain rounded-xl"
                      />
                    </div>
                  )}

                  <div className="space-y-6">
                    <InfoBlock
                      icon={<MonitorSmartphone size={18} />}
                      title="Project Overview"
                      text={project.overview}
                    />
                    <InfoBlock
                      icon={<Search size={18} />}
                      title="Business Problem"
                      text={project.problem}
                    />
                    <InfoBlock
                      icon={<TrendingUp size={18} />}
                      title="Impact"
                      text={project.impact}
                    />
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <ClipboardCheck size={18} className="text-emerald-700" />
                      What I Did as a BA
                    </h4>

                    <ul className="space-y-3">
                      {project.baWork.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-slate-600 text-sm leading-relaxed"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-emerald-700 flex-shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-slate-600 mb-10">
            Experience across business analysis, technical support, client
            communication, data analysis, and project coordination.
          </p>

          <div className="space-y-5">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-emerald-700 font-semibold mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{exp.time}</span>
                </div>

                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-slate-600 text-sm leading-relaxed"
                    >
                      <Briefcase
                        size={16}
                        className="text-emerald-700 flex-shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Globe2 className="mx-auto mb-6 text-emerald-400" size={36} />
          <h2 className="text-4xl font-bold mb-4">Let’s connect.</h2>
          <p className="text-slate-400 mb-10">
            I’m open to Business Analyst opportunities where I can apply
            requirement analysis, stakeholder communication, and product mindset
            to real digital products.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:pquynhhuong.work@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/huongpham209"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-slate-700 rounded-2xl font-semibold hover:bg-slate-800"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>

          <p className="text-slate-500 mt-8 text-sm">
            Phone/Zalo: (+84) 852 735 953 / (+60) 1116812239
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-xs font-mono uppercase tracking-widest">
        Portfolio created by Pham Quynh Huong © 2026
      </footer>
    </div>
  );
}

function InfoBlock({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div>
      <h4 className="font-bold mb-2 flex items-center gap-2 text-slate-900">
        <span className="text-emerald-700">{icon}</span>
        {title}
      </h4>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}