export type Category = 'core' | 'compute' | 'storage' | 'security' | 'database'

export const CATEGORY: Record<Category, { label: string; color: string; text: string }> = {
  core: { label: 'Core', color: '#FF9900', text: '#FFB84D' },
  compute: { label: 'Compute', color: '#FF9900', text: '#FFB84D' },
  storage: { label: 'Global Infrastructure', color: '#00A4EF', text: '#5CC8FF' },
  security: { label: 'Security & Deployment', color: '#DD344C', text: '#FF7088' },
  database: { label: 'Benefits', color: '#3B48CC', text: '#8C96FF' },
}

export type IconName =
  | 'cloud' | 'concepts' | 'server' | 'globe' | 'region' | 'az' | 'deploy'
  | 'public' | 'private' | 'hybrid' | 'money' | 'elastic' | 'shield' | 'agility' | 'scale' | 'receipt'
  | 'ec2' | 'lightsail' | 'outposts' | 'lambda' | 'ecs' | 'eks' | 'fargate' | 'beanstalk' | 'batch'
  | 'cloudfront' | 'cloudformation' | 'autoscaling' | 'elb' | 'sqs' | 'sns' | 'messaging' | 'containers'

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
    triggers: ['Foundational-level certification', 'Exam code CLF-C02', 'Cloud concepts, compute, global infrastructure'],
    keywords: ['clf-c02', 'certification', 'exam', 'cloud practitioner'],
  },
  {
    id: 'm1-root', label: 'Module 1: Introduction to the Cloud', badge: 'Module 1', category: 'core', icon: 'cloud',
    summary: 'Module 1 of AWS Cloud Practitioner Essentials: what cloud computing is, the benefits of the AWS Cloud, an intro to the AWS Global Infrastructure and the Shared Responsibility Model.',
    triggers: ['What is cloud computing?', 'Benefits of the AWS Cloud', 'AWS Shared Responsibility Model'],
    keywords: ['module 1', 'introduction', 'overview'],
  },
  {
    id: 'concepts', label: 'What is Cloud Computing?', badge: 'Module 1 · Topic', category: 'compute', icon: 'concepts',
    summary: 'On-demand delivery of IT resources over the internet with pay-as-you-go pricing, reached through the client-server model and deployed as public, private or hybrid cloud.',
    triggers: ['On-demand delivery of IT resources', 'Over the internet', 'Pay-as-you-go pricing'],
    keywords: ['cloud computing', 'overview'],
  },
  {
    id: 'core', label: 'AWS Cloud', badge: 'Core Fundamentals', category: 'compute', icon: 'cloud',
    summary: 'On-demand delivery of IT resources over the internet with pay-as-you-go pricing.',
    triggers: ['On-demand delivery of IT resources', 'Over the internet', 'Pay-as-you-go pricing'],
    keywords: ['cloud computing', 'aws', 'foundation'],
  },
  {
    id: 'clientserver', label: 'Client-Server Model', badge: 'Concept', category: 'compute', icon: 'server', hub: 'concepts',
    summary: 'A client sends a request over the network and a server returns a response. In AWS, Amazon EC2 instances act as the servers.',
    triggers: ['Client sends request, server responds', 'Amazon EC2 is a virtual server', 'Request / response'],
    keywords: ['client', 'server', 'ec2', 'request'],
  },
  {
    id: 'deploy', label: 'Deployment Models', badge: 'Module 1 · Domain', category: 'security', icon: 'deploy',
    summary: 'The three ways to deploy cloud resources: public cloud, private cloud (on-premises) and hybrid.',
    triggers: ['Cloud-based', 'On-premises', 'Hybrid'],
    keywords: ['models', 'deployment'],
  },
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
  {
    id: 'benefits', label: 'Benefits of AWS Cloud', badge: 'Module 1 · Topic', category: 'database', icon: 'scale',
    summary: 'Six advantages of cloud computing: variable expense, economies of scale, no capacity guessing, speed and agility, no data center spending and going global in minutes.',
    triggers: ['Trade fixed expense for variable expense', 'Benefit from massive economies of scale', 'Stop guessing capacity', 'Increase speed and agility', 'Go global in minutes'],
    keywords: ['benefits', 'advantages', 'six advantages'],
  },
  {
    id: 'opex', label: 'CapEx → OpEx', badge: 'Benefit of Cloud', category: 'database', icon: 'receipt', hub: 'benefits',
    summary: 'Replace large upfront capital expenses with variable operating expenses paid as you consume.',
    triggers: ['Trade upfront expense for variable expense', 'No upfront cost', 'Capital expense vs. operating expense'],
    keywords: ['capex', 'opex', 'variable expense'],
  },
  {
    id: 'scale', label: 'Economies of Scale', badge: 'Benefit of Cloud', category: 'database', icon: 'scale', hub: 'benefits',
    summary: 'AWS aggregates usage from hundreds of thousands of customers, which lowers pay-as-you-go prices for everyone.',
    triggers: ['Benefit from massive economies of scale', 'Lower variable costs', 'Aggregated usage'],
    keywords: ['price', 'savings', 'volume'],
  },
  {
    id: 'elasticity', label: 'Elasticity', badge: 'Benefit of Cloud', category: 'database', icon: 'elastic', hub: 'benefits',
    summary: 'Resources scale up and down automatically to match demand, so you never over- or under-provision.',
    triggers: ['On-demand elasticity', 'Stop guessing capacity', 'Scale in and out automatically'],
    keywords: ['scaling', 'capacity', 'auto scaling'],
  },
  {
    id: 'agility', label: 'Agility & Speed', badge: 'Benefit of Cloud', category: 'database', icon: 'agility', hub: 'benefits',
    summary: 'Spin up resources in minutes instead of weeks, so teams can experiment and innovate faster.',
    triggers: ['Increase speed and agility', 'Resources in minutes', 'Experiment quickly'],
    keywords: ['speed', 'innovation', 'fast'],
  },
  {
    id: 'infra', label: 'Intro to AWS Global Infrastructure', badge: 'Module 1 · Topic', category: 'storage', icon: 'globe',
    summary: 'The physical footprint of AWS: Regions, Availability Zones and edge locations worldwide. Module 4 covers them in depth.',
    triggers: ['Global footprint', 'Regions, Availability Zones and edge locations', 'Go global in minutes'],
    keywords: ['infrastructure', 'worldwide', 'data center'],
  },
  {
    id: 'shared', label: 'AWS Shared Responsibility Model', badge: 'Security', category: 'security', icon: 'shield',
    summary: 'AWS is responsible for security OF the cloud; you are responsible for security IN the cloud.',
    triggers: ['Security of the cloud (AWS)', 'Security in the cloud (customer)', 'AWS: hardware, facilities, global network', 'Customer: data, access, OS and network configuration'],
    keywords: ['shared responsibility', 'security', 'compliance', 'customer'],
  },
  {
    id: 'm2-root', label: 'Module 2: Compute in the Cloud', badge: 'Module 2', category: 'compute', icon: 'cloud',
    summary: 'Module 2 of AWS Cloud Practitioner Essentials: Amazon EC2, scaling, load balancing and messaging between application components.',
    triggers: ['Amazon EC2', 'Auto Scaling and load balancing', 'Messaging and queuing'],
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
    id: 'ec2types', label: 'EC2 Instance Types', badge: 'Amazon EC2', category: 'compute', icon: 'ec2', hub: 'ec2',
    summary: 'EC2 instance families are optimized for different workloads.',
    triggers: ['General purpose', 'Compute optimized', 'Memory optimized', 'Accelerated computing', 'Storage optimized'],
    useCases: ['Web servers on general purpose instances', 'In-memory databases on memory optimized instances'],
    keywords: ['instance types', 'general purpose', 'memory', 'compute optimized'],
  },
  {
    id: 'ec2pricing', label: 'EC2 Pricing Models', badge: 'Amazon EC2', category: 'compute', icon: 'money', hub: 'ec2',
    summary: 'Ways to pay for EC2 capacity, trading flexibility for savings.',
    triggers: ['On-Demand Instances', 'Savings Plans', 'Reserved Instances', 'Spot Instances (up to 90% off)', 'Dedicated Hosts'],
    useCases: ['Spot for fault-tolerant batch jobs', 'Savings Plans for steady usage'],
    keywords: ['pricing', 'spot', 'reserved', 'on-demand', 'savings plans'],
  },
  {
    id: 'autoscaling', label: 'Amazon EC2 Auto Scaling', badge: 'Scaling', category: 'compute', icon: 'autoscaling',
    summary: 'Automatically adds or removes EC2 instances to match demand.',
    triggers: ['Dynamic scaling', 'Predictive scaling', 'Minimum, desired and maximum capacity', 'Scale in and out automatically'],
    useCases: ['Handle traffic spikes without manual work', 'Replace unhealthy instances automatically'],
    keywords: ['auto scaling', 'scaling', 'capacity'],
  },
  {
    id: 'elb', label: 'Elastic Load Balancing', badge: 'Load Balancing', category: 'compute', icon: 'elb',
    summary: 'Automatically distributes incoming traffic across multiple targets, such as EC2 instances, in one or more Availability Zones.',
    triggers: ['Distributes incoming application traffic', 'Single point of contact', 'Highly available and automatically scalable', 'Works with Auto Scaling'],
    useCases: ['Spread web traffic across instances', 'Keep an app available across AZs'],
    keywords: ['elb', 'load balancer', 'traffic'],
  },
  {
    id: 'messaging', label: 'Messaging & Queuing', badge: 'Application Integration', category: 'compute', icon: 'messaging',
    summary: 'Decouple application components so they communicate without being tightly coupled. Amazon SQS queues messages, Amazon SNS publishes them.',
    triggers: ['Loosely coupled architecture', 'Tightly coupled vs. loosely coupled', 'Amazon SQS and Amazon SNS'],
    keywords: ['messaging', 'queue', 'decoupling'],
  },
  {
    id: 'sqs', label: 'Amazon SQS', badge: 'Message Queue', category: 'compute', icon: 'sqs', hub: 'messaging',
    summary: 'A fully managed message queue to send, store and receive messages between components without losing them.',
    triggers: ['Message queuing', 'Decouple application components', 'Messages wait in the queue until processed', 'Messages are not lost'],
    useCases: ['Buffer orders between a website and a processor', 'Absorb sudden spikes in requests'],
    keywords: ['sqs', 'queue', 'simple queue service'],
  },
  {
    id: 'sns', label: 'Amazon SNS', badge: 'Pub/Sub Messaging', category: 'compute', icon: 'sns', hub: 'messaging',
    summary: 'A publish/subscribe service that sends messages to many subscribers at once through topics.',
    triggers: ['Publish/subscribe (pub/sub)', 'Topics and subscribers', 'Send notifications by email, SMS or push', 'Fan out messages'],
    useCases: ['Alert admins by email or SMS', 'Fan out one event to several systems'],
    keywords: ['sns', 'notifications', 'topic', 'simple notification service'],
  },
  {
    id: 'm3-root', label: 'Module 3: Exploring Compute Services', badge: 'Module 3', category: 'compute', icon: 'cloud',
    summary: 'Module 3 of AWS Cloud Practitioner Essentials: serverless, containers and additional compute services.',
    triggers: ['Serverless compute', 'Containers', 'Additional compute services'],
    keywords: ['module 3', 'compute', 'overview'],
  },
  {
    id: 'lambda', label: 'AWS Lambda', badge: 'Serverless', category: 'compute', icon: 'lambda',
    summary: 'Run code in response to events without provisioning or managing servers, paying only for the compute time you use.',
    triggers: ['Serverless compute', 'Run code without provisioning servers', 'Event-driven', 'Pay only for compute time consumed'],
    useCases: ['Data processing triggers', 'Backend APIs for mobile', 'Event-driven automation'],
    keywords: ['lambda', 'function', 'event', 'serverless'],
  },
  {
    id: 'containers', label: 'Containers', badge: 'Compute', category: 'compute', icon: 'containers',
    summary: 'Containers package code and dependencies so apps run consistently anywhere. Amazon ECS and Amazon EKS orchestrate them; AWS Fargate removes the servers.',
    triggers: ['Container orchestration', 'Docker and Kubernetes', 'Amazon ECS, Amazon EKS, AWS Fargate'],
    keywords: ['containers', 'docker', 'orchestration'],
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
    id: 'lightsail', label: 'AWS Lightsail', badge: 'Virtual Machines', category: 'compute', icon: 'lightsail',
    summary: 'An easy way to launch simple virtual private servers, with predictable pricing, for small websites and apps.',
    triggers: ['Simple virtual private servers', 'Predictable low monthly price', 'Websites, blogs and small applications', 'Easy to get started'],
    useCases: ['Simple WordPress blogs', 'Small dev and test environments', 'Small business websites'],
    keywords: ['lightsail', 'vps', 'website', 'blog'],
  },
  {
    id: 'm4-root', label: 'Module 4: Going Global', badge: 'Module 4', category: 'storage', icon: 'globe',
    summary: 'Module 4 of AWS Cloud Practitioner Essentials: the AWS Global Infrastructure (Regions, Availability Zones and edge locations), hybrid options and the tools used to provision and automate it.',
    triggers: ['AWS Global Infrastructure', 'Regions, Availability Zones and edge locations', 'Provision resources with code'],
    keywords: ['module 4', 'going global', 'global infrastructure', 'overview'],
  },
  {
    id: 'regions', label: 'AWS Regions', badge: 'Global Infrastructure', category: 'storage', icon: 'region',
    summary: 'Geographic areas that each contain multiple Availability Zones. You choose the Region where your data and resources live.',
    triggers: ['Compliance with data governance and legal requirements', 'Proximity to your customers', 'Feature availability', 'Pricing varies by Region', 'Data is not moved between Regions unless you choose'],
    useCases: ['Keep data in a specific country for compliance', 'Deploy near users to reduce latency'],
    keywords: ['region', 'compliance', 'latency', 'proximity', 'pricing'],
  },
  {
    id: 'azs', label: 'Availability Zones', badge: 'Global Infrastructure', category: 'storage', icon: 'az',
    summary: 'One or more discrete data centers with redundant power, networking and connectivity inside a Region. Running across multiple AZs gives high availability.',
    triggers: ['Fault isolation', 'High availability', 'Run workloads in at least two AZs', 'Connected by low-latency links'],
    useCases: ['Keep an app online if one data center fails', 'Multi-AZ database deployments'],
    keywords: ['az', 'availability zone', 'fault', 'high availability', 'data center'],
  },
  {
    id: 'edge', label: 'Edge Locations & CloudFront', badge: 'Content Delivery', category: 'storage', icon: 'cloudfront',
    summary: 'Amazon CloudFront is a content delivery network (CDN) that caches content in edge locations close to users, reducing latency.',
    triggers: ['Content delivery network (CDN)', 'Caching at edge locations', 'Reduced latency for global users', 'Edge locations are separate from Regions'],
    useCases: ['Serve website images and video worldwide', 'Speed up static and dynamic content delivery'],
    keywords: ['cloudfront', 'cdn', 'edge location', 'cache', 'latency'],
  },
  {
    id: 'outposts', label: 'AWS Outposts', badge: 'Hybrid Cloud', category: 'compute', icon: 'outposts',
    summary: 'Runs AWS infrastructure, services and APIs in your own data center, giving a consistent hybrid experience.',
    triggers: ['Hybrid cloud', 'AWS infrastructure on premises', 'Low-latency local processing', 'Same APIs and tools as AWS'],
    useCases: ['Keep workloads close to on-premises systems', 'Meet local data residency needs'],
    keywords: ['outposts', 'hybrid', 'on-premises', 'local'],
  },
  {
    id: 'automation', label: 'Infrastructure and Automation', badge: 'Provisioning', category: 'compute', icon: 'cloudformation',
    summary: 'Ways to interact with AWS: the AWS Management Console, AWS CLI and AWS SDKs, and AWS CloudFormation to provision infrastructure as code.',
    triggers: ['AWS Management Console (web UI)', 'AWS CLI (command line)', 'AWS SDKs (code)', 'AWS CloudFormation (infrastructure as code)', 'Repeatable, automated deployments'],
    useCases: ['Recreate an environment from a template', 'Script deployments with the CLI'],
    keywords: ['console', 'cli', 'sdk', 'cloudformation', 'iac', 'automation'],
  },
]

export interface Link { source: string; target: string; label?: string; dashed?: boolean; emphasis?: boolean }

// Radial layout (center coordinates): the certification root sits at the origin and the four module roots orbit it,
// one per quadrant. Each module's cards open outward, away from the center, in columns 380px apart and rows 170px
// apart so edge labels sit in free space.
export const POSITIONS: Record<string, { x: number; y: number }> = {
  'root-clf-c02': { x: 0, y: 0 },

  // Module 1 - upper left, opens left and up
  'm1-root': { x: -900, y: -400 },
  concepts: { x: -900, y: -700 },
  core: { x: -900, y: -870 },
  clientserver: { x: -900, y: -1040 },
  deploy: { x: -900, y: -1210 },
  hybrid: { x: -1280, y: -1210 },
  public: { x: -1280, y: -1380 },
  private: { x: -1280, y: -1040 },
  shared: { x: -1280, y: -700 },
  infra: { x: -1660, y: -700 },
  benefits: { x: -2040, y: -700 },
  opex: { x: -2040, y: -870 },
  elasticity: { x: -2040, y: -1040 },
  scale: { x: -2420, y: -870 },
  agility: { x: -2420, y: -1040 },

  // Module 2 - upper right, opens right and up
  'm2-root': { x: 900, y: -400 },
  ec2: { x: 900, y: -700 },
  ec2types: { x: 900, y: -870 },
  ec2pricing: { x: 900, y: -1040 },
  autoscaling: { x: 1280, y: -700 },
  elb: { x: 1660, y: -700 },
  messaging: { x: 2040, y: -700 },
  sqs: { x: 2040, y: -870 },
  sns: { x: 2040, y: -1040 },

  // Module 3 - lower right, opens right and down
  'm3-root': { x: 900, y: 500 },
  lambda: { x: 900, y: 800 },
  containers: { x: 1280, y: 800 },
  ecs: { x: 1280, y: 970 },
  eks: { x: 1280, y: 1140 },
  fargate: { x: 1660, y: 970 },
  beanstalk: { x: 1660, y: 800 },
  batch: { x: 2040, y: 800 },
  lightsail: { x: 2040, y: 970 },

  // Module 4 - lower left, opens left and down
  'm4-root': { x: -900, y: 500 },
  regions: { x: -900, y: 800 },
  azs: { x: -900, y: 970 },
  edge: { x: -1280, y: 800 },
  outposts: { x: -1660, y: 970 },
  automation: { x: -1660, y: 800 },
}

// Only real conceptual relations between concepts are drawn (labeled).
const CROSS_LINKS: Link[] = [
  // Module 1
  { source: 'private', target: 'hybrid', label: 'extends to' },
  { source: 'public', target: 'hybrid', label: 'connects' },
  // Module 2
  { source: 'autoscaling', target: 'ec2', label: 'scales' },
  { source: 'elb', target: 'autoscaling', label: 'balances' },
  { source: 'sns', target: 'sqs', label: 'fans out to' },
  // Module 3
  { source: 'ecs', target: 'fargate', label: 'powered by' },
  { source: 'eks', target: 'fargate', label: 'powered by' },
  // Module 4
  { source: 'regions', target: 'azs', label: 'contains' },
  { source: 'edge', target: 'regions', label: 'caches from' },
  { source: 'outposts', target: 'automation', label: 'managed with' },
  // Inter-module (dashed)
  { source: 'infra', target: 'regions', label: 'detailed in', dashed: true },
  { source: 'clientserver', target: 'ec2', label: 'runs on', dashed: true },
  { source: 'elasticity', target: 'autoscaling', label: 'delivered by', dashed: true },
  { source: 'outposts', target: 'hybrid', label: 'enables', dashed: true },
  { source: 'regions', target: 'ec2', label: 'hosts', dashed: true },
  { source: 'azs', target: 'ec2', label: 'launch into', dashed: true },
  { source: 'azs', target: 'lambda', label: 'runs across', dashed: true },
  { source: 'regions', target: 'ecs', label: 'hosts', dashed: true },
  { source: 'batch', target: 'ec2', label: 'runs on', dashed: true },
  { source: 'beanstalk', target: 'autoscaling', label: 'configures', dashed: true },
]

// Parent -> child edges that keep every card connected to its module root (unlabeled, no orphans).
const PARENT_LINKS: Link[] = [
  { source: 'concepts', target: 'core' }, { source: 'concepts', target: 'clientserver' }, { source: 'concepts', target: 'deploy' },
  { source: 'deploy', target: 'hybrid' }, { source: 'deploy', target: 'public' }, { source: 'deploy', target: 'private' },
  { source: 'benefits', target: 'opex' }, { source: 'benefits', target: 'elasticity' },
  { source: 'opex', target: 'scale' }, { source: 'elasticity', target: 'agility' },
  { source: 'ec2', target: 'ec2types' }, { source: 'ec2', target: 'ec2pricing' },
  { source: 'messaging', target: 'sqs' }, { source: 'messaging', target: 'sns' },
  { source: 'containers', target: 'ecs' }, { source: 'containers', target: 'eks' }, { source: 'containers', target: 'fargate' },
]

// The certification root feeds the four module roots; each module root points at the lead cards of its topics.
const ROOT_LINKS: Link[] = [
  { source: 'root-clf-c02', target: 'm1-root', emphasis: true }, { source: 'root-clf-c02', target: 'm2-root', emphasis: true },
  { source: 'root-clf-c02', target: 'm3-root', emphasis: true }, { source: 'root-clf-c02', target: 'm4-root', emphasis: true },
  { source: 'm1-root', target: 'concepts' }, { source: 'm1-root', target: 'benefits' },
  { source: 'm1-root', target: 'infra' }, { source: 'm1-root', target: 'shared' },
  { source: 'm2-root', target: 'ec2' }, { source: 'm2-root', target: 'autoscaling' },
  { source: 'm2-root', target: 'elb' }, { source: 'm2-root', target: 'messaging' },
  { source: 'm3-root', target: 'lambda' }, { source: 'm3-root', target: 'containers' },
  { source: 'm3-root', target: 'beanstalk' }, { source: 'm3-root', target: 'batch' }, { source: 'm3-root', target: 'lightsail' },
  { source: 'm4-root', target: 'regions' }, { source: 'm4-root', target: 'edge' },
  { source: 'm4-root', target: 'automation' }, { source: 'm4-root', target: 'outposts' },
]

export const LINKS: Link[] = [...ROOT_LINKS, ...PARENT_LINKS, ...CROSS_LINKS]

// Concept-to-concept relations shown in the sidebar (includes the undrawn hub -> child grouping).
const relationKey = (l: Link) => `${l.source}>${l.target}`
export const RELATIONS: Link[] = [
  ...NODES.filter((n) => n.hub).map((n) => ({ source: n.hub!, target: n.id })),
  ...PARENT_LINKS,
  ...CROSS_LINKS,
].filter((l, i, all) => all.findIndex((o) => relationKey(o) === relationKey(l)) === i) // drop duplicates
