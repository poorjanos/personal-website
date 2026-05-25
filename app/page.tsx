import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "János Poór — Head of Data Management",
};

type Role = {
  title: string;
  department?: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

type Company = {
  company: string;
  size: string;
  roles: Role[];
};

const workExperience: Company[] = [
  {
    company: "Alfa VIG Insurance Hungary",
    size: "1,500–2,000 employees",
    roles: [
      {
        title: "Head of Data Management",
        period: "Dec 2024 — Present",
        current: true,
        bullets: [
          "Design and execution of the company's Data and BI Strategy",
          "Led organizational redesign and staffing of the Data Management department from scratch",
          "Drive development of single-source-of-truth datasets in a unified DWH",
          "Design and operation of the data governance function, business glossary, and data catalogue",
          "Own the company's BI portfolio; responsible for consolidation and prioritization",
          "Drive modernization of the data stack (on-prem Oracle → dbt, Airflow, DeltaLake)",
        ],
      },
      {
        title: "Data Analytics and Governance Team Lead",
        department: "Data Management",
        period: "Jul 2024 — Dec 2024",
        bullets: [
          "Built the governance framework for single-source-of-truth datasets with a shared semantic layer",
          "Led data catalogue and data quality initiatives",
        ],
      },
      {
        title: "Data Governance & Data Utilization Team Lead",
        department: "CDO Office",
        period: "Sep 2021 — Jun 2024",
        bullets: [
          "Product owner of a non-financial data lake serving operational and business development use cases (3 engineers + 1 data steward)",
          "Led consolidation of critical non-financial data elements and star-schema modelling",
          "Introduced dbt into transformation pipelines; conducted data quality and governance projects",
        ],
      },
      {
        title: "Data Analyst",
        department: "Advanced Analytics Team",
        period: "Nov 2018 — Aug 2021",
        bullets: [
          "Scaled process analytics to optimize business processes, saving 10–20% on operational costs in claims management, underwriting, and CRM",
          "Built interactive data applications in R for operational and strategic management",
        ],
      },
      {
        title: "Process Data Analyst",
        department: "IT and Operations",
        period: "May 2010 — Oct 2018",
        bullets: [
          "Achieved 13% productivity increase by building a process performance tracking system for the policy administration department (70 people)",
          "Built machine learning models for resource allocation, reducing cognitive overload in daily operations",
          "Kicked off process analytics in IT from proof-of-concept to scale-up",
        ],
      },
    ],
  },
  {
    company: "Merkantil Bank Zrt.",
    size: "Under 500 employees",
    roles: [
      {
        title: "Data Analyst",
        period: "Nov 2006 — Apr 2010",
        bullets: [
          "Built machine learning models to predict probability of default within the Basel II framework",
          "Supported risk analysis for pricing and product development",
          "Built and maintained an incentive system for the sales network",
        ],
      },
    ],
  },
  {
    company: "National Council for Information and Communication Technology",
    size: "Under 50 employees",
    roles: [
      {
        title: "Data Analyst",
        period: "Jul 2004 — Oct 2006",
        bullets: [
          "Conducted secondary market research on the ICT market",
          "Analysed the impact of government programs in ICT capability building",
        ],
      },
    ],
  },
];

const themes = [
  "Data governance and strategy in large enterprises",
  "Managing data teams and analytics products",
  "Stakeholder management in data",
  "AI-driven workflow automation",
  "Context management as the unlock for enterprise AI",
];

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="max-w-2xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="font-semibold">János Poór</span>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <a
              href="mailto:poorjanos@gmail.com"
              className="text-sm text-zinc-500 hover:text-blue-600 transition-colors"
            >
              poorjanos@gmail.com
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6">
        {/* Hero */}
        <section className="py-20 border-b border-zinc-200">
          <h1 className="text-5xl font-bold tracking-tight mb-6">János Poór</h1>
          <p className="text-lg text-zinc-600 leading-relaxed max-w-xl">
            Data management and analytics leader with 20+ years in banking and
            insurance. I build the governance frameworks, data pipelines, and
            teams that make enterprise data reliable — and I&apos;m increasingly
            focused on how that foundation can unlock AI at scale.
          </p>
        </section>

        {/* About */}
        <section id="about" className="py-16 border-b border-zinc-200">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-8">
            About
          </h2>
          <div className="space-y-5 text-zinc-600 leading-relaxed">
            <p>
              I&apos;m a data analytics and data management professional. I
              spent 20+ years as a data analyst and data scientist at banks and
              insurance companies, then shifted focus to data management and
              governance. I currently lead the Data Management department at an
              insurance company in Hungary. My expertise covers managing data
              teams and analytics products, data strategy and governance, and
              the design and execution of BI and analytics workflows.
            </p>
            <p>
              I&apos;m genuinely excited about agentic workflows and context
              management for AI. The models are capable — what determines
              whether AI delivers real value in an enterprise is the context it
              operates with. This is what I think about most: how data
              management work in large organizations can go beyond traditional
              BI and reporting to actively provide the context that makes
              agentic AI automation possible.
            </p>
          </div>
        </section>

        {/* Themes */}
        <section className="py-16 border-b border-zinc-200">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-8">
            What I Think About
          </h2>
          <ul className="space-y-3">
            {themes.map((theme) => (
              <li key={theme} className="flex items-start gap-3 text-zinc-700">
                <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {theme}
              </li>
            ))}
          </ul>
        </section>

        {/* CV — Experience */}
        <section id="cv" className="py-16 border-b border-zinc-200">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-10">
            Experience
          </h2>
          <div className="space-y-14">
            {workExperience.map((co) => (
              <div key={co.company}>
                <div className="mb-6">
                  <h3 className="font-semibold text-zinc-900">{co.company}</h3>
                  <p className="text-sm text-zinc-400 mt-0.5">{co.size}</p>
                </div>
                <div className="space-y-8 pl-4 border-l border-zinc-200">
                  {co.roles.map((role) => (
                    <div key={role.title + role.period}>
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                        <span className="font-medium text-zinc-900">
                          {role.title}
                        </span>
                        {role.department && (
                          <span className="text-sm text-zinc-400">
                            · {role.department}
                          </span>
                        )}
                        {role.current && (
                          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400 mb-3">{role.period}</p>
                      <ul className="space-y-1.5">
                        {role.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="text-sm text-zinc-600 leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[0.6rem] before:h-px before:w-2 before:bg-zinc-300"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-14 pt-10 border-t border-zinc-100">
            <h3 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
              Education
            </h3>
            <div>
              <p className="font-medium text-zinc-900">
                MSc in Sociology, Survey Statistics Specialization
              </p>
              <p className="text-sm text-zinc-600 mt-0.5">
                ELTE University, Budapest, Hungary
              </p>
              <p className="text-sm text-zinc-400 mt-0.5">1998 — 2004</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-8">
            Contact
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            <a
              href="mailto:poorjanos@gmail.com"
              className="text-zinc-700 hover:text-blue-600 transition-colors"
            >
              poorjanos@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/janospoor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-blue-600 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-sm text-zinc-400">© 2026 János Poór</p>
          <Link
            href="/privacy"
            className="text-sm text-zinc-400 hover:text-blue-600 transition-colors"
          >
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
