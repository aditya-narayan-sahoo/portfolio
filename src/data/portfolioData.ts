import { 
  PersonalInfo, 
  PipelineNode, 
  IncidentScenario, 
  Experience, 
  SkillCategory, 
  Credential, 
  Education 
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Aditya Narayan Sahoo",
  title: "Data Engineer | Applied AI Specialist",
  tagline: "I keep cloud data pipelines running and fix them when they break.",
  company: "IBM India Pvt. Ltd.",
  assignment: "Philip Morris International",
  email: "adityasahoo@ibm.com",
  phone: "+91 7873529958",
  location: "India",
  github: "https://github.com/aditya-narayan-sahoo",
  linkedin: "https://www.linkedin.com/in/aditya-narayan-sahoo/",
  summary: `I'm a Data Engineer and Applied AI Specialist at IBM. I support cloud data platforms for global clients — mostly Matillion, Snowflake, Databricks, and AWS. Day to day that's pipeline support, L2 incident triage, RCA, and small automation to reduce repeat work. I started in software (React, Node, Java) and moved into data and AI workflows.`,
  metrics: [
    { label: "What I do", value: "Data pipelines", description: "Matillion, Snowflake, Databricks, AWS" },
    { label: "On-call scope", value: "L2 support", description: "Triage, RCA, runbooks" },
    { label: "Experience", value: "3+ years", description: "Support, software, AI workflows" },
    { label: "Certifications", value: "10+ earned", description: "IBM, Azure, Matillion, Red Hat" }
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Odia", level: "Fluent" }
  ],
  industries: [
    { name: "Consumer Products", level: "Experienced" },
    { name: "Financial Markets", level: "Foundational" }
  ]
};

export const pipelineNodes: PipelineNode[] = [
  {
    id: "ingestion",
    name: "Source Ingestion",
    tech: "Kafka / REST APIs / SFTP",
    role: "Incoming data feeds",
    status: "healthy",
    latency: "Sample: ~18ms",
    throughput: "Sample: ~2.4M rec/hr",
    description: "Where raw events and batch files enter — transactions, CRM snapshots, market feeds.",
    icon: "DatabaseZap"
  },
  {
    id: "matillion",
    name: "Matillion ETL",
    tech: "Matillion ETL & Maia",
    role: "Transforms and scheduling",
    status: "healthy",
    latency: "Sample: ~140ms",
    throughput: "Sample: ~1.8M rec/hr",
    description: "Main ETL jobs: transforms, validation, schedules, and error logging.",
    icon: "Workflow"
  },
  {
    id: "aws",
    name: "AWS",
    tech: "AWS S3 / IAM / Lambda / EC2",
    role: "Storage and compute",
    status: "healthy",
    latency: "Sample: ~32ms",
    throughput: "Sample: ~4.2 GB/min",
    description: "S3 landing zones for raw and staged data, with IAM and lifecycle rules.",
    icon: "Cloud"
  },
  {
    id: "snowflake",
    name: "Snowflake",
    tech: "Snowflake & SQL",
    role: "Warehouse for analytics",
    status: "healthy",
    latency: "Sample: ~45ms",
    throughput: "Sample: ~12.5M rows/q",
    description: "Warehouse for cleaned, modeled tables used by reporting.",
    icon: "Layers"
  },
  {
    id: "databricks",
    name: "Databricks",
    tech: "Apache Spark / Delta Lake",
    role: "Heavy processing",
    status: "healthy",
    latency: "Sample: ~210ms",
    throughput: "Sample: ~350 GB/batch",
    description: "Spark jobs for larger transforms and data science inputs.",
    icon: "Cpu"
  },
  {
    id: "consumers",
    name: "Downstream use",
    tech: "BI / Reports / AI",
    role: "Reports and dashboards",
    status: "healthy",
    latency: "Sample: ~95ms",
    throughput: "Sample: 100+ users",
    description: "Dashboards and reports used by business teams.",
    icon: "Activity"
  }
];

export const incidentScenarios: IncidentScenario[] = [
  {
    id: "pipeline-backpressure",
    title: "ETL lock contention (Matillion → Snowflake)",
    component: "Matillion ETL → Snowflake",
    severity: "Example: elevated latency",
    symptom: "Queue built up because two jobs tried to write to the same table at once.",
    logs: [
      "[14:22:01] Queue depth above threshold: many messages pending.",
      "[14:22:04] Matillion job PMI_TRANSFORM_MARKET_04 waiting for resource.",
      "[14:22:08] Snowflake reports lock on table STG_GLOBAL_SALES.",
      "[14:22:15] Started triage per runbook."
    ],
    rca: "A micro-batch upsert overlapped with the daily consolidation job on the same table.",
    resolution: [
      "Scaled the Snowflake warehouse up temporarily and let the queue drain.",
      "Moved the daily job off-peak and added retry logic in Matillion.",
      "Confirmed no data loss and documented the schedule change."
    ],
    affectedNode: "matillion"
  },
  {
    id: "spark-memory-skew",
    title: "Spark OOM from skewed key (Databricks)",
    component: "Databricks",
    severity: "Example: cluster degradation",
    symptom: "Workers dropped with out-of-memory errors during a shuffle stage.",
    logs: [
      "[09:15:32] Cluster db-prod-analytics-eu node-04 unresponsive.",
      "[09:15:36] SparkOutOfMemoryError: Java heap space during shuffle.",
      "[09:15:40] Most rows landed on one partition key (null market code).",
      "[09:15:44] Isolated the skewed input."
    ],
    rca: "A bulk load of unassigned IDs put ~12M rows on a single partition.",
    resolution: [
      "Quarantined the bad batch and re-ran the rest.",
      "Added salting to spread null keys across partitions.",
      "Restarted with adjusted allocation and watched the next run."
    ],
    affectedNode: "databricks"
  },
  {
    id: "s3-schema-drift",
    title: "Timestamp format change (S3 → Matillion)",
    component: "AWS S3 → Matillion ETL",
    severity: "Example: schema warning",
    symptom: "About 14k records were rejected after a timestamp format changed.",
    logs: [
      "[18:02:11] New files arrived in s3://pmi-data-lake-prod/incoming/.",
      "[18:02:14] JSON parser failed on timestamp at record #401.",
      "[18:02:19] Rejected records routed to dead-letter location.",
      "[18:02:24] Reviewed schema policy and runbook."
    ],
    rca: "The source API changed timestamp serialization without notice.",
    resolution: [
      "Made the timestamp parser accept both formats.",
      "Replayed the quarantined records after validation.",
      "Added a note to the runbook for other regional feeds."
    ],
    affectedNode: "aws"
  }
];

export const experiences: Experience[] = [
  {
    role: "Applied AI Specialist",
    company: "IBM India Pvt. Ltd.",
    location: "India",
    period: "Jul 2026 - Present",
    type: "Full-Time",
    badge: "Current",
    summary: "I work on AI-assisted engineering and keep data platforms stable.",
    bullets: [
      "Handle L2 support for data platforms: triage, RCA, and restoring service.",
      "Support Matillion, Snowflake, Databricks, and AWS workloads.",
      "Write and update runbooks so repeat incidents are faster to fix.",
      "Use my software background (React, Node, Java) for small tools and automation."
    ],
    skills: ["Applied AI", "Matillion ETL", "Snowflake", "Databricks", "AWS", "L2 Support", "RCA", "React", "Node.js"]
  },
  {
    role: "Data & Cloud Engineer",
    company: "Philip Morris International (via IBM)",
    location: "India",
    period: "May 2025 - Present",
    type: "Client work",
    badge: "Featured",
    summary: "I support PMI's data platform across global markets.",
    bullets: [
      "Keep ingestion, transforms, and reporting jobs running.",
      "Debug ETL failures, scheduling issues, and slow queries.",
      "Coordinate with infra and client teams during incidents.",
      "Wrote runbooks and troubleshooting docs for the team."
    ],
    skills: ["Matillion", "Snowflake", "Databricks Spark", "AWS S3", "ServiceNow", "Runbooks"]
  },
  {
    role: "Associate Systems Engineer",
    company: "IBM India Pvt. Ltd.",
    location: "India",
    period: "Feb 2024 - Jun 2026",
    type: "Full-Time",
    badge: "Previous role",
    summary: "L2 support and log analysis for cloud data platforms.",
    bullets: [
      "Supported Matillion, Snowflake, Databricks, and AWS in production.",
      "Read logs to find repeat failures and fix root causes.",
      "Added scheduling and retry automation to cut manual triage."
    ],
    skills: ["L2 Support", "Log Analysis", "Linux", "SQL", "Git", "CI/CD"]
  },
  {
    role: "Software Engineer Intern",
    company: "KPIT Technologies",
    location: "India",
    period: "Dec 2023 - May 2024",
    type: "Internship",
    badge: "Internship",
    summary: "Built automotive UIs and small automation tools.",
    bullets: [
      "Built React UIs for infotainment and telematics prototypes.",
      "Wrote C++ automation to reduce manual testing.",
      "Worked in Agile: integration, testing, debugging."
    ],
    skills: ["React", "C++", "Embedded", "Agile"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-data",
    name: "Cloud & Data",
    description: "What I use most days.",
    skills: [
      { name: "Matillion ETL", level: "Specialist", highlight: true },
      { name: "Snowflake", level: "Advanced", highlight: true },
      { name: "Databricks & Spark", level: "Advanced", highlight: true },
      { name: "AWS Cloud Services", level: "Advanced", highlight: true },
      { name: "SQL & Advanced Querying", level: "Expert", highlight: true },
      { name: "ETL Pipeline Architecture", level: "Specialist", highlight: true },
      { name: "Data Warehousing (DWH)", level: "Advanced", highlight: false },
      { name: "Data Integration & Ingestion", level: "Specialist", highlight: false },
      { name: "Cloud Integration", level: "Advanced", highlight: false },
      { name: "NoSQL & Document Stores", level: "Proficient", highlight: false }
    ]
  },
  {
    id: "ai-intelligent",
    name: "Applied AI",
    description: "AI tools I actually use in work.",
    skills: [
      { name: "Generative AI Foundations", level: "Certified", highlight: true },
      { name: "IBM watsonx", level: "Certified", highlight: true },
      { name: "Agentic AI Concepts", level: "Practitioner", highlight: true },
      { name: "AI-First Development", level: "Practitioner", highlight: true },
      { name: "Intelligent Workflows", level: "Advanced", highlight: false },
      { name: "AI Solution Architecture", level: "Practitioner", highlight: false }
    ]
  },
  {
    id: "devops-ops",
    name: "Support & Ops",
    description: "Keeping things running.",
    skills: [
      { name: "Incident Management (L2)", level: "Specialist", highlight: true },
      { name: "Root Cause Analysis (RCA)", level: "Specialist", highlight: true },
      { name: "Application Monitoring & Logs", level: "Advanced", highlight: true },
      { name: "Operational Automation", level: "Advanced", highlight: true },
      { name: "Linux & Shell Scripting", level: "Advanced", highlight: false },
      { name: "Git & GitHub CI/CD", level: "Advanced", highlight: false },
      { name: "Performance Optimization", level: "Specialist", highlight: false },
      { name: "Runbook Engineering", level: "Specialist", highlight: false }
    ]
  },
  {
    id: "software-eng",
    name: "Software",
    description: "My dev background.",
    skills: [
      { name: "ReactJS", level: "Advanced", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "Node.js & Express.js", level: "Advanced", highlight: true },
      { name: "REST APIs & Microservices", level: "Advanced", highlight: true },
      { name: "Java & Multithreading", level: "Proficient", highlight: false },
      { name: "C++ Systems Programming", level: "Proficient", highlight: false },
      { name: "HTML5 & CSS3 Design Systems", level: "Advanced", highlight: false },
      { name: "MongoDB & Mongoose", level: "Proficient", highlight: false }
    ]
  },
  {
    id: "ways-of-working",
    name: "Ways of working",
    description: "How I work with teams.",
    skills: [
      { name: "Agile & Scrum (IBM Certified)", level: "Certified", highlight: true },
      { name: "Enterprise Design Thinking", level: "Practitioner", highlight: true },
      { name: "IBM Garage Methodology", level: "Certified", highlight: false },
      { name: "Cross-Functional Collaboration", level: "Expert", highlight: false },
      { name: "Technical Documentation", level: "Specialist", highlight: false },
      { name: "Continuous Service Improvement", level: "Specialist", highlight: false }
    ]
  }
];

export const credentials: Credential[] = [
  {
    title: "IBM watsonx Essentials",
    issuer: "IBM",
    year: "2025",
    category: "AI",
    featured: true,
    code: "IBM-WX-2025"
  },
  {
    title: "IBM Generative AI Foundations",
    issuer: "IBM",
    year: "2025",
    category: "AI",
    featured: true,
    code: "IBM-GAI-2025"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2025",
    category: "Cloud",
    featured: true,
    code: "MSFT-AZ-900"
  },
  {
    title: "Matillion Maia Best Practices",
    issuer: "Matillion",
    year: "2026",
    category: "Data",
    featured: true,
    code: "MAT-MAIA-BP"
  },
  {
    title: "Matillion Academy | Maia Foundation Essentials",
    issuer: "Matillion",
    year: "2026",
    category: "Data",
    featured: true,
    code: "MAT-MAIA-FE"
  },
  {
    title: "Red Hat Partner Program — Premier Tier",
    issuer: "Red Hat",
    year: "2026",
    category: "Enterprise",
    featured: true,
    code: "RH-PREMIER-26"
  },
  {
    title: "IBM Cloud Essentials",
    issuer: "IBM",
    year: "2025",
    category: "Cloud",
    featured: false,
    code: "IBM-CLD-ESS"
  },
  {
    title: "IBM Delivery Central Platform Foundations",
    issuer: "IBM",
    year: "2025",
    category: "Operations",
    featured: false,
    code: "IBM-DCP-FND"
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    year: "2025",
    category: "Methodology",
    featured: false,
    code: "IBM-EDT-PRAC"
  },
  {
    title: "IBM Agile Explorer",
    issuer: "IBM",
    year: "2025",
    category: "Methodology",
    featured: false,
    code: "IBM-AGL-EXP"
  },
  {
    title: "IBM Garage Essentials",
    issuer: "IBM",
    year: "2025",
    category: "Methodology",
    featured: false,
    code: "IBM-GAR-ESS"
  },
  {
    title: "IBM Consulting Way Habits - Foundational",
    issuer: "IBM",
    year: "2025",
    category: "Enterprise",
    featured: false,
    code: "IBM-CW-FND"
  },
  {
    title: "The DevOps Essentials - The Handbook",
    issuer: "Udemy",
    year: "2026",
    category: "DevOps",
    featured: false,
    code: "UDE-DEVOPS-26"
  },
  {
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Udemy",
    year: "2025",
    category: "Software",
    featured: false,
    code: "UDE-REACT-25"
  }
];

export const education: Education[] = [
  {
    degree: "Bachelors of Technology in Computer Science and Engineering",
    institution: "Institute of Technical Education and Research (ITER), Siksha 'O' Anusandhan University",
    location: "Bhubaneswar, Odisha, India",
    year: "2024",
    details: "Focus on Distributed Systems, Cloud Computing, Database Management Systems, Data Structures & Algorithms, and Software Engineering."
  },
  {
    degree: "Senior Secondary in Science (Physics, Chemistry, Mathematics)",
    institution: "ODM Public School",
    location: "Bhubaneswar, Odisha, India",
    year: "2020",
    details: "Core focus on Analytical Problem Solving, Mathematics, and Computer Science fundamentals."
  }
];
