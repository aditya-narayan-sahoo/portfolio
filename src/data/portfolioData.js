export const personalInfo = {
  name: "Aditya Narayan Sahoo",
  title: "Cloud & Data Engineering Specialist | Applied AI Specialist",
  tagline: "Architecting mission-critical cloud data pipelines, resilient enterprise platforms, and AI-enabled workflows at scale.",
  company: "IBM India Pvt. Ltd.",
  assignment: "Philip Morris International",
  email: "adityasahoo@ibm.com",
  phone: "+91 7873529958",
  location: "India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: `I am an Applied AI Specialist and Cloud & Data Engineer at IBM supporting business-critical cloud data engineering platforms and enterprise applications across global markets. My core expertise spans Matillion ETL, Snowflake, Databricks, and AWS, focusing on high-availability data pipelines, L2 production incident management, root cause analysis (RCA), and automated operational excellence. With a software engineering foundation across ReactJS, Node.js, and Java, I bridge cloud-native reliability with AI-first workflows to engineer scalable, high-throughput solutions.`,
  metrics: [
    { label: "Global Platform Availability", value: "99.98%", description: "L2 enterprise SLA adherence across global markets" },
    { label: "Data Pipeline Workloads", value: "Multi-Cloud", description: "Matillion ETL, Snowflake, Databricks & AWS" },
    { label: "Enterprise Experience", value: "3+ Years", description: "Production support, software dev & AI workflows" },
    { label: "Verified Credentials", value: "10+ Badges", description: "IBM, Microsoft Azure, Matillion & Red Hat" }
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

export const pipelineNodes = [
  {
    id: "ingestion",
    name: "Source Ingestion",
    tech: "Kafka / REST APIs / SFTP",
    role: "Raw Enterprise Event Stream",
    status: "healthy",
    latency: "18ms",
    throughput: "2.4M rec/hr",
    description: "Captures transactional events, CRM snapshots, and multi-market enterprise data feeds in real-time and micro-batches.",
    icon: "DatabaseZap"
  },
  {
    id: "matillion",
    name: "Matillion ETL",
    tech: "Matillion ETL & Maia",
    role: "Pipeline Orchestration & Transformation",
    status: "healthy",
    latency: "140ms",
    throughput: "1.8M rec/hr",
    description: "Core ETL orchestration engine executing data preparation, validation, scheduling, dependency workflows, and error logging.",
    icon: "Workflow"
  },
  {
    id: "aws",
    name: "AWS Cloud Services",
    tech: "AWS S3 / IAM / Lambda / EC2",
    role: "Secure Cloud Data Lake & Compute",
    status: "healthy",
    latency: "32ms",
    throughput: "4.2 GB/min",
    description: "Cloud-native storage tier with partitioned landing zones, automated lifecycle policies, and secure multi-region IAM federation.",
    icon: "Cloud"
  },
  {
    id: "snowflake",
    name: "Snowflake DWH",
    tech: "Snowflake Cloud DW & SQL",
    role: "Analytical Data Warehousing",
    status: "healthy",
    latency: "45ms",
    throughput: "12.5M rows/q",
    description: "Scalable enterprise analytical warehouse with virtual multi-cluster compute, zero-copy cloning, and optimized dimensional models.",
    icon: "Layers"
  },
  {
    id: "databricks",
    name: "Databricks Lakehouse",
    tech: "Apache Spark / Delta Lake",
    role: "Distributed Processing & ML Compute",
    status: "healthy",
    latency: "210ms",
    throughput: "350 GB/batch",
    description: "High-performance Spark clusters processing complex transformations, automated feature pipelines, and enterprise data science jobs.",
    icon: "Cpu"
  },
  {
    id: "consumers",
    name: "Enterprise Workloads",
    tech: "BI / Global Analytics / AI Services",
    role: "Global Downstream Business Impact",
    status: "healthy",
    latency: "95ms",
    throughput: "100+ Consumers",
    description: "Feeds Philip Morris International & global market reporting, executive dashboards, and AI-enabled decision services.",
    icon: "Activity"
  }
];

export const incidentScenarios = [
  {
    id: "pipeline-backpressure",
    title: "Scenario 1: High-Volume ETL Ingestion Lock Contention",
    component: "Matillion ETL ➔ Snowflake",
    severity: "P2 - Elevated Latency",
    symptom: "Ingestion queue depth surged 340%. Upstream batch load throttled due to concurrent target table lock.",
    logs: [
      "[14:22:01.104] [ALERT] Ingestion queue threshold exceeded: 420,000 pending messages.",
      "[14:22:04.821] [WARN] Matillion job `PMI_TRANSFORM_MARKET_04` status: WAITING_FOR_RESOURCE.",
      "[14:22:08.512] [ERROR] Snowflake Lock Contention: Query 01bd8821 locked on table `STG_GLOBAL_SALES`.",
      "[14:22:15.220] [L2_TRIAGE] Initiated incident RCA protocol by Aditya Narayan Sahoo."
    ],
    rca: "Root cause isolated to concurrent micro-batch upsert colliding with scheduled daily consolidation task without optimistic warehouse concurrency isolation.",
    resolution: [
      "Dynamically scaled Snowflake virtual warehouse to Multi-Cluster auto-scaling mode (Max: 4).",
      "Applied Matillion retry partition strategy and rescheduled daily consolidation off-peak.",
      "Restored ingestion velocity to 1.8M records/hr with 0% data loss within 14 minutes."
    ],
    affectedNode: "matillion"
  },
  {
    id: "spark-memory-skew",
    title: "Scenario 2: Databricks Spark Worker OOM & Data Skew",
    component: "Databricks Lakehouse",
    severity: "P1 - Critical Cluster Degradation",
    symptom: "Databricks worker nodes dropping out of cluster with ExecutorLostFailure (Memory limit exceeded >98%).",
    logs: [
      "[09:15:32.410] [ALERT] Cluster `db-prod-analytics-eu` node-04 status: UNRESPONSIVE.",
      "[09:15:36.190] [ERROR] org.apache.spark.memory.SparkOutOfMemoryError: Java heap space during ShuffleMapStage.",
      "[09:15:40.890] [DIAGNOSTIC] Detected 84% skew on partition key `market_dim_code = NULL`.",
      "[09:15:44.200] [L2_TRIAGE] Aditya Narayan Sahoo isolated skewed broadcast hash join."
    ],
    rca: "Upstream source ingested bulk unassigned retail customer IDs causing 12M rows to concentrate into a single Spark partition executor.",
    resolution: [
      "Isolated problematic dataset and rerouted staging stream to temporary spill-over storage.",
      "Implemented salted key partitioning strategy in PySpark job definition to evenly disperse null values.",
      "Restarted Databricks cluster with optimized dynamic allocation; pipeline stabilized in 11 minutes."
    ],
    affectedNode: "databricks"
  },
  {
    id: "s3-schema-drift",
    title: "Scenario 3: AWS S3 Staging Format Drift & Dead-Letter Isolation",
    component: "AWS S3 ➔ Matillion ETL",
    severity: "P3 - Schema Mismatch Warning",
    symptom: "Ingestion pipeline rejected 14,200 records due to unexpected ISO-8601 millisecond timestamp variance.",
    logs: [
      "[18:02:11.332] [WARN] AWS S3 event trigger fired for `s3://pmi-data-lake-prod/incoming/2026/09/`.",
      "[18:02:14.504] [FAIL] Matillion JSON Parser: Timestamp `2026-09-02T18:02:11.332Z` parsing exception at record #401.",
      "[18:02:19.112] [INFO] Automatic dead-letter quarantine activated: 14,200 records routed to DLQ bucket.",
      "[18:02:24.008] [L2_TRIAGE] Aditya Narayan Sahoo reviewed schema evolution policy and runbook."
    ],
    rca: "Upstream source system API release altered epoch timestamp serialization without prior deprecation notice.",
    resolution: [
      "Updated Matillion transformation component with resilient flexible regex timestamp parser.",
      "Replayed quarantined records from S3 Dead-Letter Queue with full integrity verification.",
      "Authored operational runbook KB-882 to prevent recurrence across other regional market ingestion feeds."
    ],
    affectedNode: "aws"
  }
];

export const experiences = [
  {
    role: "Applied AI Specialist",
    company: "IBM India Pvt. Ltd.",
    location: "India",
    period: "Jul 2026 - Present",
    type: "Full-Time",
    badge: "Current Role",
    summary: "Driving AI-first engineering principles, cloud platform resilience, and intelligent automation across enterprise data workloads.",
    bullets: [
      "Design, develop, and evolve software and cloud-based solutions with an AI-First engineering mindset, focusing on scalability, security, reliability, and user experience.",
      "Provide L2 production support for enterprise cloud data engineering platforms and business-critical applications, ensuring availability, stability, and timely restoration of critical services.",
      "Monitor, troubleshoot, and optimize ETL workflows developed using Matillion ETL and support enterprise data integration workloads involving Snowflake, Databricks, and AWS.",
      "Investigate complex production incidents across application, data, and cloud environments, performing log analysis, root cause analysis (RCA), problem management, and cross-functional technical coordination.",
      "Support Databricks environments by investigating workspace operations, job execution, cluster availability, connectivity, and platform-related performance issues.",
      "Support AWS-hosted enterprise environments by analysing application and infrastructure logs, monitoring system health, and coordinating resolution with cloud infrastructure teams.",
      "Contribute to automation, operational process improvements, scheduling enhancements, and intelligent development workflows to improve engineering and support efficiency.",
      "Build on a software development background spanning ReactJS, JavaScript, Java, Node.js, REST APIs, automation, and system integration to contribute to modern cloud and AI-enabled application development."
    ],
    skills: ["Applied AI", "Matillion ETL", "Snowflake", "Databricks", "AWS", "Incident Management", "RCA", "Agentic Workflows", "ReactJS", "Node.js"]
  },
  {
    role: "Data & Cloud Engineer (Enterprise Assignment)",
    company: "PHILIP MORRIS INTERNATIONAL (via IBM)",
    location: "India",
    period: "May 2025 - Present",
    type: "Client Assignment",
    badge: "Featured Enterprise Engagement",
    summary: "Providing end-to-end application and production support for Philip Morris International's enterprise cloud data engineering platform across multiple global markets.",
    bullets: [
      "Maintain platform reliability, high availability, and performance across Matillion ETL, Snowflake, Databricks, and AWS-hosted services supporting multi-market workflows.",
      "Manage critical data ingestion, transformation, integration, and reporting workflows powering global business analytics.",
      "Rapidly troubleshoot ETL pipeline failures, scheduling anomalies, metadata inconsistencies, connectivity problems, and performance bottlenecks.",
      "Lead cross-functional coordination during major incidents across development, cloud infrastructure, and global client stakeholder teams.",
      "Authored and standardized knowledge base runbooks, incident management playbooks, and troubleshooting documentation to enhance operational maturity.",
      "Support enterprise application operations, including Adobe Creative Cloud licensing, access provisioning, and platform-related enterprise requests."
    ],
    skills: ["Enterprise Operations", "Matillion Maia", "Snowflake Warehousing", "Databricks Spark", "AWS S3/EC2", "24/7 Production SLA", "ServiceNow", "Runbook Engineering"]
  },
  {
    role: "Associate Systems Engineer",
    company: "IBM India Pvt. Ltd.",
    location: "India",
    period: "Feb 2024 - Jun 2026",
    type: "Full-Time",
    badge: "Promotion to Specialist",
    summary: "Delivered L2 production support, root cause analysis, and operational automation for global cloud data infrastructure.",
    bullets: [
      "Provided L2 production support for cloud data engineering platforms supporting multiple global markets and business-critical data workflows.",
      "Monitored and resolved production incidents involving Matillion ETL, Snowflake, Databricks, and AWS cloud environments.",
      "Analysed application and platform logs to identify recurring failure patterns, isolate technical bugs, and drive continuous service improvements.",
      "Implemented automated scheduling and job retry mechanisms reducing manual triage intervention by ~30%."
    ],
    skills: ["L2 Production Support", "Cloud Data Platforms", "Log Analysis", "Incident Response", "Linux", "SQL", "Git", "CI/CD"]
  },
  {
    role: "Software Engineer Intern",
    company: "KPIT Technologies",
    location: "India",
    period: "Dec 2023 - May 2024",
    type: "Internship",
    badge: "Automotive & Embedded",
    summary: "Developed high-performance automotive user interfaces and automation tools for next-generation vehicle platforms.",
    bullets: [
      "Designed and developed ReactJS-based user interfaces for automotive infotainment, navigation telematics, and ADAS systems with emphasis on usability and driver safety.",
      "Developed automation solutions using C++ and multithreading to improve operational efficiency and reduce manual testing intervention.",
      "Integrated frontend applications with embedded backend components to deliver seamless real-time functionality.",
      "Participated in system integration, unit testing, debugging, and performance optimization throughout the SDLC in an Agile environment."
    ],
    skills: ["ReactJS", "C++", "Multithreading", "Embedded Systems", "Automotive ADAS", "Agile", "System Integration"]
  }
];

export const skillCategories = [
  {
    id: "cloud-data",
    name: "Cloud & Data Engineering",
    description: "Core expertise in scalable cloud storage, data warehousing, and ETL orchestration.",
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
    name: "Applied AI & Intelligent Engineering",
    description: "AI-first development mindset, generative models, and intelligent workflows.",
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
    name: "DevOps & Production Operations",
    description: "Ensuring 99.9%+ availability through proactive telemetry, RCA, and automation.",
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
    name: "Software & Web Engineering",
    description: "Full-stack application development foundation powering custom tooling and UIs.",
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
    name: "Ways of Working & Methodologies",
    description: "Enterprise delivery habits, agile collaboration, and continuous improvement.",
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

export const credentials = [
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

export const education = [
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
