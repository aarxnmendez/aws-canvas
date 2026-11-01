export type Category = 'core' | 'compute' | 'storage' | 'security' | 'database'

export const CATEGORY: Record<Category, { label: string; color: string; text: string }> = {
  core: { label: 'Core', color: '#FF9900', text: '#FFB84D' },
  compute: { label: 'Compute', color: '#FF9900', text: '#FFB84D' },
  storage: { label: 'Storage', color: '#00A4EF', text: '#5CC8FF' },
  security: { label: 'Security & Compliance', color: '#DD344C', text: '#FF7088' },
  database: { label: 'Database', color: '#3B48CC', text: '#8C96FF' },
}

export type IconName =
  | 'cloud' | 'concepts' | 'server' | 'globe' | 'region' | 'az' | 'edge' | 'deploy'
  | 'public' | 'private' | 'hybrid' | 'money' | 'elastic' | 'shield' | 'agility' | 'scale' | 'receipt'
  | 's3' | 'ebs' | 'efs' | 'sgw' | 'rds' | 'dynamodb' | 'elasticache' | 'redshift' | 'storage'
  | 'ec2' | 'lightsail' | 'outposts' | 'lambda' | 'ecs' | 'eks' | 'fargate' | 'beanstalk' | 'batch'

export interface ConceptNode {
  id: string
  label: string
  badge: string
  category: Category
  icon: IconName
  hub?: string // semantic parent (sidebar relations only; not drawn)
  summary: string
  triggers: string[]
  useCases?: string[] // practical AWS services only; omitted for abstract concepts
  keywords: string[]
}

export const NODES: ConceptNode[] = [
  {
    id: 'root-clf-c02', label: 'AWS Certified Cloud Practitioner (CLF-C02)', badge: 'Certification', category: 'core', icon: 'cloud',
    summary: 'The foundational AWS certification that validates overall knowledge of the AWS Cloud, independent of a specific job role.',
    triggers: ['Foundational-level certification', 'Exam code CLF-C02', 'Cloud concepts, security, technology and billing'],
    keywords: ['clf-c02', 'certification', 'exam', 'cloud practitioner'],
  },
  {
    id: 'm1-root', label: 'Module 1: Cloud Concepts', badge: 'Module 1', category: 'core', icon: 'cloud',
    summary: 'Module 1 of AWS Cloud Practitioner Essentials: cloud computing basics, the AWS global infrastructure and how deployment and pricing models work.',
    triggers: ['Cloud computing', 'AWS Global Infrastructure', 'Cloud deployment models', 'Pay-as-you-go pricing'],
    keywords: ['module 1', 'clf-c02', 'essentials', 'overview'],
  },
  {
    id: 'core', label: 'AWS Cloud', badge: 'Core Fundamentals', category: 'core', icon: 'cloud',
    summary: 'On-demand delivery of IT resources over the internet with pay-as-you-go pricing.',
    triggers: ['On-demand delivery of IT resources', 'Over the internet', 'Pay-as-you-go pricing'],
    keywords: ['cloud computing', 'aws', 'foundation'],
  },
  {
    id: 'concepts', label: 'Cloud Concepts', badge: 'Module 1 · Domain', category: 'compute', icon: 'concepts',
    summary: 'The core ideas behind cloud computing: how clients reach servers and why the cloud is valuable.',
    triggers: ['Cloud computing', 'Benefits of the cloud', 'Trade upfront expense for variable expense'],
    keywords: ['benefits', 'overview'],
  },
  {
    id: 'infra', label: 'Global Infrastructure', badge: 'Module 1 · Domain', category: 'storage', icon: 'globe',
    summary: 'The physical footprint of AWS: Regions, Availability Zones and edge locations worldwide.',
    triggers: ['Global footprint', 'Infrastructure overview', 'Go global in minutes'],
    keywords: ['infrastructure', 'worldwide', 'data center'],
  },
  {
    id: 'deploy', label: 'Deployment Models', badge: 'Module 1 · Domain', category: 'security', icon: 'deploy',
    summary: 'The three ways to deploy cloud resources: public cloud, private cloud (on-premises) and hybrid.',
    triggers: ['Cloud-based', 'On-premises', 'Hybrid'],
    keywords: ['models', 'deployment'],
  },
  {
    id: 'payg', label: 'Pay-as-you-go', badge: 'Module 1 · Pricing', category: 'database', icon: 'money',
    summary: 'Pay only for the individual services you need, for as long as you use them, with no long-term contracts.',
    triggers: ['No upfront cost', 'Pay only for what you use', 'No long-term contracts'],
    keywords: ['pricing', 'billing', 'cost'],
  },
  // Cloud Concepts
  {
    id: 'clientserver', label: 'Client-Server Model', badge: 'Concept', category: 'compute', icon: 'server', hub: 'concepts',
    summary: 'A client sends a request over the network and a server returns a response. In AWS, Amazon EC2 instances act as the servers.',
    triggers: ['Client sends request, server responds', 'Amazon EC2 is a virtual server', 'Request / response'],
    keywords: ['client', 'server', 'ec2', 'request'],
  },
  {
    id: 'elasticity', label: 'Elasticity', badge: 'Benefit of Cloud', category: 'compute', icon: 'elastic', hub: 'concepts',
    summary: 'Resources scale up and down automatically to match demand, so you never over- or under-provision.',
    triggers: ['On-demand elasticity', 'Stop guessing capacity', 'Scale in and out automatically'],
    keywords: ['scaling', 'capacity', 'auto scaling'],
  },
  {
    id: 'security', label: 'Security', badge: 'Benefit of Cloud', category: 'security', icon: 'shield', hub: 'concepts',
    summary: 'AWS secures the cloud infrastructure while you secure what you put in it, under the shared responsibility model.',
    triggers: ['Shared responsibility model', 'Security of the cloud vs. security in the cloud', 'Compliance programs'],
    keywords: ['shared responsibility', 'compliance', 'protect'],
  },
  {
    id: 'agility', label: 'Agility & Speed', badge: 'Benefit of Cloud', category: 'compute', icon: 'agility', hub: 'concepts',
    summary: 'Spin up resources in minutes instead of weeks, so teams can experiment and innovate faster.',
    triggers: ['Increase speed and agility', 'Resources in minutes', 'Experiment quickly'],
    keywords: ['speed', 'innovation', 'fast'],
  },
  // Infrastructure
  {
    id: 'regions', label: 'AWS Regions', badge: 'Infrastructure', category: 'storage', icon: 'region', hub: 'infra',
    summary: 'Separate geographic areas that each contain multiple Availability Zones. Pick one based on compliance, latency, price and service availability.',
    triggers: ['Data residency and compliance', 'Latency to end users', 'Pricing varies by Region', 'Service availability'],
    keywords: ['region', 'geography', 'latency'],
  },
  {
    id: 'azs', label: 'Availability Zones', badge: 'Infrastructure', category: 'storage', icon: 'az', hub: 'infra',
    summary: 'One or more discrete data centers with redundant power and networking inside a Region.',
    triggers: ['Fault isolation', 'High availability', 'Multiple AZs per Region', 'Redundant power and networking'],
    keywords: ['az', 'data center', 'availability', 'redundancy'],
  },
  {
    id: 'edge', label: 'Edge Locations', badge: 'Infrastructure', category: 'storage', icon: 'edge', hub: 'infra',
    summary: 'Sites used by Amazon CloudFront to cache content closer to users for lower latency.',
    triggers: ['Amazon CloudFront', 'Content delivery / caching', 'Low latency delivery'],
    keywords: ['cdn', 'cloudfront', 'cache'],
  },
  // Deployment
  {
    id: 'public', label: 'Public Cloud', badge: 'Cloud-based', category: 'security', icon: 'public', hub: 'deploy',
    summary: 'Run all parts of your application in the cloud, migrating existing apps or building new ones natively.',
    triggers: ['Cloud-based deployment', 'No on-premises infrastructure', 'Pay-as-you-go'],
    keywords: ['cloud-based', 'all-in'],
  },
  {
    id: 'private', label: 'Private Cloud', badge: 'On-premises', category: 'security', icon: 'private', hub: 'deploy',
    summary: 'Infrastructure run entirely in your own data center, using virtualization and resource management tools.',
    triggers: ['On-premises deployment', 'Legacy applications', 'Full control of hardware'],
    keywords: ['on-premises', 'on-prem', 'datacenter'],
  },
  {
    id: 'hybrid', label: 'Hybrid Cloud', badge: 'Hybrid', category: 'security', icon: 'hybrid', hub: 'deploy',
    summary: 'Connect cloud-based resources to existing on-premises infrastructure and applications.',
    triggers: ['Hybrid deployment', 'Cloud + on-premises together', 'Connect existing infrastructure'],
    keywords: ['hybrid', 'connect', 'migration'],
  },
  // Pay-as-you-go
  {
    id: 'opex', label: 'CapEx → OpEx', badge: 'Benefit of Cloud', category: 'database', icon: 'receipt', hub: 'payg',
    summary: 'Replace large upfront capital expenses with variable operating expenses paid as you consume.',
    triggers: ['Trade upfront expense for variable expense', 'No upfront cost', 'Capital expense vs. operating expense'],
    keywords: ['capex', 'opex', 'variable expense'],
  },
  {
    id: 'scale', label: 'Economies of Scale', badge: 'Benefit of Cloud', category: 'database', icon: 'scale', hub: 'payg',
    summary: 'AWS aggregates usage from hundreds of thousands of customers, which lowers pay-as-you-go prices for everyone.',
    triggers: ['Benefit from massive economies of scale', 'Lower variable costs', 'Aggregated usage'],
    keywords: ['price', 'savings', 'volume'],
  },
  {
    id: 'm2-root', label: 'Module 2: Compute Services', badge: 'Module 2', category: 'compute', icon: 'cloud',
    summary: 'Module 2 of AWS Cloud Practitioner Essentials: the AWS compute services, from virtual machines to containers, serverless and batch.',
    triggers: ['Compute services', 'Virtual machines, containers and serverless', 'Choose the right compute option'],
    keywords: ['module 2', 'compute', 'overview'],
  },
  {
    id: 'ec2', label: 'Amazon EC2', badge: 'Virtual Machines', category: 'compute', icon: 'ec2',
    summary: 'Resizable virtual servers in the cloud. You choose the operating system, CPU, memory and networking, and pay only for what you use.',
    triggers: ['Virtual servers in the cloud', 'Resizable compute capacity', 'Full control of the operating system', 'Pay only for what you use'],
    useCases: ['Web applications', 'Batch processing', 'Enterprise applications'],
    keywords: ['ec2', 'instance', 'virtual machine', 'server'],
  },
  {
    id: 'lightsail', label: 'AWS Lightsail', badge: 'Virtual Machines', category: 'compute', icon: 'lightsail',
    summary: 'An easy way to launch simple virtual private servers, with predictable pricing, for small websites and apps.',
    triggers: ['Simple virtual private servers', 'Predictable low monthly price', 'Websites, blogs and small applications', 'Easy to get started'],
    useCases: ['Simple WordPress blogs', 'Small dev and test environments', 'Small business websites'],
    keywords: ['lightsail', 'vps', 'website', 'blog'],
  },
  {
    id: 'outposts', label: 'AWS Outposts', badge: 'Virtual Machines', category: 'compute', icon: 'outposts',
    summary: 'AWS-managed infrastructure and services installed in your own data center, so you can run AWS services on premises.',
    triggers: ['AWS infrastructure on premises', 'Hybrid cloud', 'Low-latency local processing', 'Fully managed by AWS'],
    useCases: ['Low-latency local data processing', 'Data residency requirements', 'Hybrid workloads on premises'],
    keywords: ['outposts', 'on-premises', 'hybrid', 'data center'],
  },
  {
    id: 'lambda', label: 'AWS Lambda', badge: 'Serverless', category: 'compute', icon: 'lambda',
    summary: 'Run code in response to events without provisioning or managing servers, paying only for the compute time you use.',
    triggers: ['Serverless compute', 'Run code without provisioning servers', 'Event-driven', 'Pay only for compute time consumed'],
    useCases: ['Data processing triggers', 'Backend APIs for mobile', 'Event-driven automation'],
    keywords: ['lambda', 'function', 'event', 'serverless'],
  },
  {
    id: 'ecs', label: 'Amazon ECS', badge: 'Containers', category: 'compute', icon: 'ecs',
    summary: 'A highly scalable container orchestration service that runs and manages Docker containers on AWS.',
    triggers: ['Container orchestration', 'Run Docker containers', 'AWS-native container service'],
    useCases: ['Microservices on Docker', 'Containerized web applications', 'Batch jobs in containers'],
    keywords: ['ecs', 'container', 'docker', 'orchestration'],
  },
  {
    id: 'eks', label: 'Amazon EKS', badge: 'Containers', category: 'compute', icon: 'eks',
    summary: 'A managed service to run Kubernetes on AWS without operating your own control plane.',
    triggers: ['Managed Kubernetes', 'Open-source container orchestration', 'Run Kubernetes on AWS or on premises'],
    useCases: ['Kubernetes-based microservices', 'Portable container platforms', 'Standardized Kubernetes workloads'],
    keywords: ['eks', 'kubernetes', 'k8s', 'container'],
  },
  {
    id: 'fargate', label: 'AWS Fargate', badge: 'Containers · Serverless', category: 'compute', icon: 'fargate',
    summary: 'A serverless compute engine for containers, so you run them without managing servers or clusters.',
    triggers: ['Serverless compute for containers', 'No servers to manage', 'Works with Amazon ECS and Amazon EKS'],
    useCases: ['Containers without managing servers', 'Spiky or unpredictable container workloads', 'Small teams without infrastructure staff'],
    keywords: ['fargate', 'container', 'serverless'],
  },
  {
    id: 'beanstalk', label: 'AWS Elastic Beanstalk', badge: 'Deployment', category: 'compute', icon: 'beanstalk',
    summary: 'Upload your application code and AWS handles deployment, capacity provisioning, load balancing, scaling and health monitoring.',
    triggers: ['Upload code, AWS handles the deployment', 'Automatic provisioning, load balancing and scaling', 'You keep control of the underlying resources'],
    useCases: ['Quickly deploying web applications', 'Developers who do not want to manage infrastructure', 'Standard web application stacks'],
    keywords: ['beanstalk', 'deploy', 'paas', 'web app'],
  },
  {
    id: 'batch', label: 'AWS Batch', badge: 'Batch Computing', category: 'compute', icon: 'batch',
    summary: 'Run batch computing jobs at any scale, with AWS dynamically provisioning the right compute resources.',
    triggers: ['Batch computing at any scale', 'Dynamically provisions compute (EC2 or Fargate)', 'No batch software to install'],
    useCases: ['Large-scale data processing jobs', 'Media transcoding', 'Scientific simulations'],
    keywords: ['batch', 'jobs', 'hpc'],
  },
  {
    id: 'm3-root', label: 'Module 3: Storage & Databases', badge: 'Module 3', category: 'storage', icon: 'storage',
    summary: 'Module 3 of AWS Cloud Practitioner Essentials: storage and database services, from object, block and file storage to relational, NoSQL, in-memory and warehouse databases.',
    triggers: ['Storage services', 'Database services', 'Choose the right storage or database'],
    keywords: ['module 3', 'storage', 'database', 'overview'],
  },
  {
    id: 's3', label: 'Amazon S3', badge: 'Object Storage', category: 'storage', icon: 's3',
    summary: 'Object storage for any amount of data. You store objects in buckets and pick a storage class to match how often you access them.',
    triggers: ['Object storage', 'Buckets and objects', 'Storage classes (S3 Standard, S3 Glacier)', '99.999999999% (11 nines) durability'],
    useCases: ['Static website hosting', 'Backups and archives', 'Data lakes'],
    keywords: ['s3', 'bucket', 'object', 'glacier', 'simple storage service'],
  },
  {
    id: 'ebs', label: 'Amazon EBS', badge: 'Block Storage', category: 'storage', icon: 'ebs',
    summary: 'Persistent block storage volumes for Amazon EC2 instances, like a virtual hard drive attached to your server.',
    triggers: ['Block storage for Amazon EC2', 'Persistent volumes', 'Tied to a single Availability Zone', 'Snapshots for backup'],
    useCases: ['Boot volumes for EC2', 'Databases running on EC2'],
    keywords: ['ebs', 'volume', 'block', 'elastic block store', 'disk'],
  },
  {
    id: 'efs', label: 'Amazon EFS', badge: 'File Storage', category: 'storage', icon: 'efs',
    summary: 'A managed, scalable network file system (NFS) that many Amazon EC2 instances can mount and share at the same time.',
    triggers: ['Managed network file system (NFS)', 'Shared across many EC2 instances', 'Scales automatically', 'Spans multiple Availability Zones'],
    useCases: ['Shared content across web servers', 'Home directories'],
    keywords: ['efs', 'file system', 'nfs', 'shared storage'],
  },
  {
    id: 'sgw', label: 'AWS Storage Gateway', badge: 'Hybrid Storage', category: 'storage', icon: 'sgw',
    summary: 'Connects your on-premises applications to AWS cloud storage so you can use the cloud for backup and archive.',
    triggers: ['Hybrid cloud storage', 'Connects on-premises applications to AWS storage', 'File, volume and tape gateways'],
    useCases: ['Backing up on-premises data to AWS', 'Replacing physical tape libraries'],
    keywords: ['storage gateway', 'hybrid', 'on-premises', 'tape'],
  },
  {
    id: 'rds', label: 'Amazon RDS', badge: 'Relational Database', category: 'database', icon: 'rds',
    summary: 'A managed relational (SQL) database service that handles provisioning, patching, backups and failover for you.',
    triggers: ['Managed relational database (SQL)', 'Engines include MySQL, PostgreSQL, MariaDB, Oracle, SQL Server and Amazon Aurora', 'Automated backups and patching', 'Multi-AZ deployments'],
    useCases: ['Web and mobile app backends', 'Moving existing SQL databases to AWS'],
    keywords: ['rds', 'sql', 'relational', 'aurora', 'mysql', 'postgresql'],
  },
  {
    id: 'dynamodb', label: 'Amazon DynamoDB', badge: 'NoSQL Database', category: 'database', icon: 'dynamodb',
    summary: 'A serverless NoSQL key-value and document database with single-digit millisecond performance at any scale.',
    triggers: ['Serverless NoSQL key-value database', 'Single-digit millisecond latency', 'Scales automatically', 'No servers to manage'],
    useCases: ['Gaming leaderboards and session data', 'Shopping carts at scale', 'IoT data'],
    keywords: ['dynamodb', 'nosql', 'key-value', 'serverless'],
  },
  {
    id: 'elasticache', label: 'Amazon ElastiCache', badge: 'In-Memory Cache', category: 'database', icon: 'elasticache',
    summary: 'A managed in-memory data store and cache that speeds up applications by serving frequently used data from memory.',
    triggers: ['In-memory data store and cache', 'Improves application performance', 'Supports Redis and Memcached'],
    useCases: ['Caching frequent database queries', 'Session stores', 'Real-time leaderboards'],
    keywords: ['elasticache', 'cache', 'redis', 'memcached', 'in-memory'],
  },
  {
    id: 'redshift', label: 'Amazon Redshift', badge: 'Data Warehouse', category: 'database', icon: 'redshift',
    summary: 'A fully managed data warehouse for running fast SQL analytics across petabytes of structured data.',
    triggers: ['Data warehouse', 'Petabyte-scale analytics', 'SQL queries across structured data', 'Columnar storage'],
    useCases: ['Business intelligence reporting', 'Analyzing large historical datasets'],
    keywords: ['redshift', 'warehouse', 'analytics', 'bi'],
  },
]

export interface Link { source: string; target: string; label?: string; dashed?: boolean; emphasis?: boolean }


// Radial layout (center coordinates): the certification root sits at the origin and the module roots orbit it,
// one per quadrant. Each module's cards open outward, away from the center, in columns 380px apart and rows 170px
// apart so edge labels sit in free space.
export const POSITIONS: Record<string, { x: number; y: number }> = {
  'root-clf-c02': { x: 0, y: 0 },

  // Module 1 - upper left, opens left and up
  'm1-root': { x: -900, y: -400 },
  infra: { x: -900, y: -1040 },
  edge: { x: -900, y: -1210 },
  regions: { x: -900, y: -700 },
  azs: { x: -900, y: -870 },
  deploy: { x: -1280, y: -870 },
  public: { x: -1660, y: -870 },
  hybrid: { x: -1280, y: -1040 },
  private: { x: -1280, y: -1210 },
  security: { x: -1280, y: -700 },
  concepts: { x: -2040, y: -700 },
  core: { x: -2420, y: -870 },
  scale: { x: -2040, y: -1210 },
  opex: { x: -2420, y: -1210 },
  clientserver: { x: -2040, y: -870 },
  agility: { x: -2420, y: -700 },
  elasticity: { x: -2420, y: -1040 },
  payg: { x: -2040, y: -1040 },

  // Module 2 - upper right, opens right and up
  'm2-root': { x: 900, y: -400 },
  ec2: { x: 900, y: -700 },
  outposts: { x: 900, y: -870 },
  lightsail: { x: 900, y: -1040 },
  lambda: { x: 1280, y: -870 },
  eks: { x: 1660, y: -1210 },
  ecs: { x: 1660, y: -870 },
  fargate: { x: 1660, y: -1040 },
  beanstalk: { x: 2040, y: -870 },
  batch: { x: 2040, y: -700 },

  // Module 3 - lower right, opens right and down
  'm3-root': { x: 900, y: 500 },
  s3: { x: 1280, y: 800 },
  sgw: { x: 1280, y: 970 },
  ebs: { x: 900, y: 970 },
  efs: { x: 900, y: 800 },
  rds: { x: 1660, y: 970 },
  elasticache: { x: 2040, y: 970 },
  dynamodb: { x: 1660, y: 1140 },
  redshift: { x: 1660, y: 800 },
}

// Only real conceptual relations between concepts are drawn (labeled).
const CROSS_LINKS: Link[] = [
  // Module 1
  { source: 'public', target: 'payg', label: 'billed as' },
  { source: 'elasticity', target: 'payg', label: 'pay for use' },
  { source: 'clientserver', target: 'public', label: 'runs on' },
  { source: 'private', target: 'hybrid', label: 'extends to' },
  { source: 'public', target: 'hybrid', label: 'connects' },
  { source: 'regions', target: 'azs', label: 'contains' },
  { source: 'edge', target: 'regions', label: 'serves' },
  { source: 'regions', target: 'security', label: 'compliance' },
  // Module 2
  { source: 'outposts', target: 'ec2', label: 'on premises' },
  { source: 'ecs', target: 'fargate', label: 'serverless option' },
  { source: 'eks', target: 'fargate', label: 'serverless option' },
  { source: 'batch', target: 'ec2', label: 'runs on' },
  // Inter-module: instances are deployed in the global infrastructure
  { source: 'ec2', target: 'regions', label: 'deployed in', dashed: true },
  // Module 3
  { source: 'sgw', target: 's3', label: 'syncs to' },
  { source: 'elasticache', target: 'rds', label: 'caches' },
  { source: 'redshift', target: 's3', label: 'loads from' },
  // Inter-module: storage and data live in the global infrastructure and attach to compute
  { source: 'ebs', target: 'ec2', label: 'attached to', dashed: true },
  { source: 'efs', target: 'ec2', label: 'mounted on', dashed: true },
  { source: 's3', target: 'regions', label: 'stored in', dashed: true },
]

// Parent -> child edges that keep every card connected to its module root (unlabeled, no orphans).
const PARENT_LINKS: Link[] = [
  { source: 'concepts', target: 'core' }, { source: 'concepts', target: 'agility' },
  { source: 'concepts', target: 'clientserver' }, { source: 'concepts', target: 'elasticity' },
  { source: 'payg', target: 'opex' }, { source: 'payg', target: 'scale' },
  { source: 'deploy', target: 'public' }, { source: 'infra', target: 'regions' },
  { source: 'ec2', target: 'lightsail' }, { source: 'm2-root', target: 'ecs' },
  { source: 'm3-root', target: 's3' }, { source: 'm3-root', target: 'ebs' }, { source: 'm3-root', target: 'efs' },
  { source: 'm3-root', target: 'rds' }, { source: 'm3-root', target: 'dynamodb' }, { source: 'm3-root', target: 'redshift' },
]

// The certification root feeds both module roots; each module root points at the lead card of its three zones.
const ROOT_LINKS: Link[] = [
  { source: 'root-clf-c02', target: 'm1-root', emphasis: true }, { source: 'root-clf-c02', target: 'm2-root', emphasis: true },
  { source: 'root-clf-c02', target: 'm3-root', emphasis: true },
  { source: 'm1-root', target: 'concepts' }, { source: 'm1-root', target: 'infra' }, { source: 'm1-root', target: 'deploy' },
  { source: 'm2-root', target: 'ec2' }, { source: 'm2-root', target: 'lambda' }, { source: 'm2-root', target: 'beanstalk' },
]

export const LINKS: Link[] = [...ROOT_LINKS, ...PARENT_LINKS, ...CROSS_LINKS]

// Concept-to-concept relations shown in the sidebar (includes the undrawn hub -> child grouping).
const relationKey = (l: Link) => `${l.source}>${l.target}`
export const RELATIONS: Link[] = [
  ...NODES.filter((n) => n.hub).map((n) => ({ source: n.hub!, target: n.id })),
  ...PARENT_LINKS,
  ...CROSS_LINKS,
].filter((l, i, all) => all.findIndex((o) => relationKey(o) === relationKey(l)) === i) // drop duplicates
