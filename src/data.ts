import { mindMapLayout } from './lib/layout'

export type Category = 'core' | 'compute' | 'global' | 'storage' | 'security' | 'database' | 'databases' | 'networking' | 'ai'

export const CATEGORY: Record<Category, { label: string; color: string; text: string }> = {
  core: { label: 'Core', color: '#FF9900', text: '#FFB84D' },
  compute: { label: 'Compute', color: '#FF9900', text: '#FFB84D' },
  global: { label: 'Global Infrastructure', color: '#00A4EF', text: '#5CC8FF' },
  storage: { label: 'Storage', color: '#7AA116', text: '#A6D14A' },
  security: { label: 'Security & Deployment', color: '#DD344C', text: '#FF7088' },
  database: { label: 'Benefits', color: '#3B48CC', text: '#8C96FF' },
  databases: { label: 'Databases', color: '#C925D1', text: '#E07BE6' },
  ai: { label: 'AI/ML & Analytics', color: '#01A88D', text: '#4FD1B8' },
  networking: { label: 'Networking & Content Delivery', color: '#8C4FFF', text: '#B58CFF' },
}

export type IconName =
  | 'cloud' | 'concepts' | 'server' | 'globe' | 'region' | 'az' | 'deploy'
  | 'public' | 'private' | 'hybrid' | 'money' | 'elastic' | 'shield' | 'agility' | 'scale' | 'receipt'
  | 'ec2' | 'lightsail' | 'outposts' | 'lambda' | 'ecs' | 'eks' | 'fargate' | 'beanstalk' | 'batch'
  | 'cloudfront' | 'cloudformation' | 'autoscaling' | 'elb' | 'sqs' | 'sns' | 'messaging' | 'containers'
  | 'security' | 'iam' | 'waf' | 'awsshield' | 'kms' | 'secrets' | 'guardduty' | 'inspector' | 'artifact'
  | 'sagemaker' | 'ai' | 'rekognition' | 'comprehend' | 'polly' | 'transcribe' | 'lex' | 'bedrock'
  | 'analytics' | 'athena' | 'emr' | 'kinesis' | 'quicksight' | 'glue'
  | 'rds' | 'aurora' | 'dynamodb' | 'elasticache' | 'redshift' | 'neptune' | 'documentdb'
  | 's3' | 'ebs' | 'efs' | 'fsx' | 'sgw' | 'drs'
  | 'vpc' | 'igw' | 'nacl' | 'route53' | 'directconnect' | 'globalaccelerator'

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
    id: 'infra', label: 'Intro to AWS Global Infrastructure', badge: 'Module 1 · Topic', category: 'global', icon: 'globe',
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
    id: 'm4-root', label: 'Module 4: Going Global', badge: 'Module 4', category: 'global', icon: 'globe',
    summary: 'Module 4 of AWS Cloud Practitioner Essentials: the AWS Global Infrastructure (Regions, Availability Zones and edge locations), hybrid options and the tools used to provision and automate it.',
    triggers: ['AWS Global Infrastructure', 'Regions, Availability Zones and edge locations', 'Provision resources with code'],
    keywords: ['module 4', 'going global', 'global infrastructure', 'overview'],
  },
  {
    id: 'regions', label: 'AWS Regions', badge: 'Global Infrastructure', category: 'global', icon: 'region',
    summary: 'Geographic areas that each contain multiple Availability Zones. You choose the Region where your data and resources live.',
    triggers: ['Compliance with data governance and legal requirements', 'Proximity to your customers', 'Feature availability', 'Pricing varies by Region', 'Data is not moved between Regions unless you choose'],
    useCases: ['Keep data in a specific country for compliance', 'Deploy near users to reduce latency'],
    keywords: ['region', 'compliance', 'latency', 'proximity', 'pricing'],
  },
  {
    id: 'azs', label: 'Availability Zones', badge: 'Global Infrastructure', category: 'global', icon: 'az',
    summary: 'One or more discrete data centers with redundant power, networking and connectivity inside a Region. Running across multiple AZs gives high availability.',
    triggers: ['Fault isolation', 'High availability', 'Run workloads in at least two AZs', 'Connected by low-latency links'],
    useCases: ['Keep an app online if one data center fails', 'Multi-AZ database deployments'],
    keywords: ['az', 'availability zone', 'fault', 'high availability', 'data center'],
  },
  {
    id: 'edge', label: 'Edge Locations & CloudFront', badge: 'Content Delivery', category: 'global', icon: 'cloudfront',
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
  {
    id: 'm5-root', label: 'Module 5: Networking', badge: 'Module 5', category: 'networking', icon: 'globe',
    summary: 'Module 5 of AWS Cloud Practitioner Essentials: networking on AWS, from isolated virtual networks and connectivity to DNS, hybrid links and content acceleration.',
    triggers: ['Amazon VPC', 'Network security', 'Connectivity to AWS', 'DNS and content delivery'],
    keywords: ['module 5', 'networking', 'overview'],
  },
  {
    id: 'vpc', label: 'Amazon VPC', badge: 'Virtual Network', category: 'networking', icon: 'vpc',
    summary: 'Provision a logically isolated section of the AWS Cloud where you launch resources in a virtual network you define. Split it into public and private subnets.',
    triggers: ['Virtual Private Cloud (VPC)', 'Network isolation', 'Public subnets (internet-facing)', 'Private subnets (no direct internet access)', 'You control IP ranges, route tables and gateways'],
    useCases: ['Host a public web tier and a private database tier', 'Isolate production from development networks'],
    keywords: ['vpc', 'subnet', 'virtual private cloud', 'isolation'],
  },
  {
    id: 'gateways', label: 'Internet Gateway & NAT Gateway', badge: 'Internet Connectivity', category: 'networking', icon: 'igw',
    summary: 'An internet gateway connects a VPC to the internet. A NAT gateway lets instances in private subnets reach the internet without being reachable from it.',
    triggers: ['Internet gateway: public internet access for public subnets', 'NAT gateway: outbound-only internet for private subnets', 'Private subnets cannot be reached from the internet'],
    useCases: ['Let public web servers serve internet users', 'Let private servers download patches'],
    keywords: ['internet gateway', 'igw', 'nat gateway', 'nat'],
  },
  {
    id: 'sgnacl', label: 'Security Groups & Network ACLs', badge: 'Network Security', category: 'networking', icon: 'nacl',
    summary: 'Two layers of VPC firewall. Security groups protect instances and are stateful; network ACLs protect subnets and are stateless.',
    triggers: ['Security groups: instance level, stateful, allow rules only', 'Network ACLs: subnet level, stateless, allow and deny rules', 'Default security group denies inbound traffic', 'Return traffic is automatically allowed by stateful rules'],
    useCases: ['Allow only HTTPS to a web server', 'Block a malicious IP range at the subnet'],
    keywords: ['security group', 'nacl', 'network acl', 'stateful', 'stateless', 'firewall'],
  },
  {
    id: 'route53', label: 'Amazon Route 53', badge: 'DNS', category: 'networking', icon: 'route53',
    summary: 'A highly available and scalable managed DNS web service that also handles domain registration and routes users to applications.',
    triggers: ['Managed Domain Name System (DNS)', 'Domain registration', 'Routing policies (latency, geolocation, failover)', 'Health checks'],
    useCases: ['Register a domain and point it to a website', 'Route users to the closest Region'],
    keywords: ['route 53', 'dns', 'domain', 'routing'],
  },
  {
    id: 'connectivity', label: 'AWS Direct Connect & AWS VPN', badge: 'Hybrid Connectivity', category: 'networking', icon: 'directconnect',
    summary: 'Connect on-premises networks to AWS. Direct Connect is a dedicated private connection; AWS VPN creates encrypted tunnels over the internet.',
    triggers: ['Direct Connect: dedicated private network connection', 'Site-to-Site VPN: encrypted tunnel between a data center and a VPC', 'Client VPN: remote users connect to AWS', 'Hybrid cloud connectivity'],
    useCases: ['Consistent bandwidth between a data center and AWS', 'Secure remote access for employees'],
    keywords: ['direct connect', 'vpn', 'site-to-site', 'client vpn', 'hybrid'],
  },
  {
    id: 'accel', label: 'AWS Global Accelerator & Amazon CloudFront', badge: 'Network Acceleration', category: 'networking', icon: 'globalaccelerator',
    summary: 'Global Accelerator routes traffic over the AWS global network to optimal endpoints using static IPs; CloudFront caches content at edge locations.',
    triggers: ['Global Accelerator: static anycast IPs, AWS global network', 'CloudFront: CDN that caches content at edge locations', 'Improve performance and availability for global users'],
    useCases: ['Speed up a global TCP or UDP application', 'Cache a website closer to users'],
    keywords: ['global accelerator', 'cloudfront', 'acceleration', 'anycast'],
  },
  {
    id: 'm6-root', label: 'Module 6: Storage', badge: 'Module 6', category: 'storage', icon: 's3',
    summary: 'Module 6 of AWS Cloud Practitioner Essentials: object, block and file storage on AWS, hybrid storage and disaster recovery.',
    triggers: ['Object, block and file storage', 'Choose the right storage service', 'Hybrid storage and disaster recovery'],
    keywords: ['module 6', 'storage', 'overview'],
  },
  {
    id: 's3', label: 'Amazon S3', badge: 'Object Storage', category: 'storage', icon: 's3',
    summary: 'Amazon Simple Storage Service stores any amount of data as objects in buckets. Storage classes and lifecycle policies balance cost against access frequency.',
    triggers: ['Object storage in buckets', '11 nines (99.999999999%) durability', 'Storage classes: S3 Standard, S3 Standard-IA, S3 Intelligent-Tiering, S3 Glacier', 'Lifecycle policies move objects between classes', 'Static website hosting'],
    useCases: ['Backups and archives', 'Static website hosting', 'Data lakes for analytics'],
    keywords: ['s3', 'bucket', 'object', 'glacier', 'lifecycle', 'storage class'],
  },
  {
    id: 'ebs', label: 'Amazon EBS', badge: 'Block Storage', category: 'storage', icon: 'ebs',
    summary: 'Amazon Elastic Block Store provides persistent block-level volumes for EC2 instances, with snapshots for backup.',
    triggers: ['Block storage for Amazon EC2', 'Persistent volumes (data survives instance stop)', 'Volumes live in a single Availability Zone', 'IOPS and throughput options (SSD and HDD)', 'Incremental snapshots'],
    useCases: ['Boot and data volumes for EC2', 'Databases on a single instance'],
    keywords: ['ebs', 'block', 'volume', 'iops', 'snapshot'],
  },
  {
    id: 'efs', label: 'Amazon EFS', badge: 'File Storage', category: 'storage', icon: 'efs',
    summary: 'Amazon Elastic File System is a managed, elastic NFS file system that many EC2 instances can share at the same time.',
    triggers: ['Managed file storage (NFS)', 'Shared by multiple EC2 instances', 'Regional: data stored across multiple AZs', 'Grows and shrinks automatically'],
    useCases: ['Shared content for a fleet of web servers', 'Home directories for Linux users'],
    keywords: ['efs', 'file system', 'nfs', 'shared'],
  },
  {
    id: 'fsx', label: 'Amazon FSx', badge: 'File Storage', category: 'storage', icon: 'fsx',
    summary: 'Fully managed, high-performance third-party file systems such as FSx for Windows File Server and FSx for Lustre.',
    triggers: ['Fully managed third-party file systems', 'FSx for Windows File Server (SMB)', 'FSx for Lustre (high-performance computing)', 'Also NetApp ONTAP and OpenZFS'],
    useCases: ['Windows file shares for enterprise apps', 'Fast storage for machine learning and HPC'],
    keywords: ['fsx', 'windows file server', 'lustre', 'smb', 'hpc'],
  },
  {
    id: 'sgw', label: 'AWS Storage Gateway', badge: 'Hybrid Storage', category: 'storage', icon: 'sgw',
    summary: 'A hybrid cloud storage service that gives on-premises applications access to virtually unlimited AWS storage.',
    triggers: ['Hybrid cloud storage', 'File Gateway, Volume Gateway, Tape Gateway', 'On-premises access to AWS storage', 'Local caching for low latency'],
    useCases: ['Replace on-premises tape backups', 'Extend file shares to the cloud'],
    keywords: ['storage gateway', 'hybrid', 'tape', 'file gateway', 'volume gateway'],
  },
  {
    id: 'drs', label: 'AWS Elastic Disaster Recovery', badge: 'Disaster Recovery', category: 'storage', icon: 'drs',
    summary: 'Continuously replicates physical, virtual and cloud-based servers to AWS so you can recover quickly after an outage, at low cost.',
    triggers: ['Disaster recovery (DRS)', 'Continuous block-level replication', 'Minimize downtime and data loss', 'Recover on-premises or cloud servers in AWS', 'Pay only for what you use until a recovery'],
    useCases: ['Recover an on-premises application in AWS after a data center outage', 'Cost-effective disaster recovery without a duplicate site'],
    keywords: ['elastic disaster recovery', 'drs', 'disaster recovery', 'replication', 'recovery'],
  },
  {
    id: 'm7-root', label: 'Module 7: Databases', badge: 'Module 7', category: 'databases', icon: 'rds',
    summary: 'Module 7 of AWS Cloud Practitioner Essentials: managed relational, NoSQL, in-memory and purpose-built databases on AWS.',
    triggers: ['Relational vs. NoSQL databases', 'Managed database services', 'Choose the right database for the workload'],
    keywords: ['module 7', 'databases', 'overview'],
  },
  {
    id: 'rds', label: 'Amazon RDS', badge: 'Relational Database', category: 'databases', icon: 'rds',
    summary: 'A managed relational database service. AWS handles patching, backups and failover for engines such as MySQL, PostgreSQL, MariaDB, Oracle and SQL Server.',
    triggers: ['Managed relational database (SQL)', 'MySQL, PostgreSQL, MariaDB, Oracle, SQL Server', 'Multi-AZ for high availability and failover', 'Read replicas to scale reads', 'No operating system access'],
    useCases: ['Lift and shift an existing Oracle or SQL Server database', 'Transactional business applications'],
    keywords: ['rds', 'relational', 'sql', 'multi-az', 'read replica'],
  },
  {
    id: 'aurora', label: 'Amazon Aurora', badge: 'Relational Database', category: 'databases', icon: 'aurora',
    summary: 'A MySQL- and PostgreSQL-compatible relational database built for the cloud, with higher performance and availability than standard engines at a fraction of commercial database cost.',
    triggers: ['Up to 5x faster than MySQL, 3x faster than PostgreSQL', 'Six copies of data across three Availability Zones', 'Up to 15 read replicas', 'About 1/10 the cost of commercial databases', 'Aurora Serverless adjusts capacity automatically'],
    useCases: ['High-traffic relational applications', 'Replace a costly commercial database'],
    keywords: ['aurora', 'mysql compatible', 'postgresql compatible', 'high performance'],
  },
  {
    id: 'dynamodb', label: 'Amazon DynamoDB', badge: 'NoSQL Database', category: 'databases', icon: 'dynamodb',
    summary: 'A fully managed, serverless key-value and document database that delivers single-digit millisecond performance at any scale.',
    triggers: ['NoSQL, key-value and document', 'Single-digit millisecond latency', 'Serverless: no servers to manage', 'Global tables (multi-Region)', 'Flexible schema'],
    useCases: ['Shopping carts and user sessions', 'Gaming leaderboards and IoT data'],
    keywords: ['dynamodb', 'nosql', 'key-value', 'serverless'],
  },
  {
    id: 'elasticache', label: 'Amazon ElastiCache', badge: 'In-Memory Cache', category: 'databases', icon: 'elasticache',
    summary: 'A managed in-memory cache using Redis or Memcached that speeds up reads and takes load off the database.',
    triggers: ['In-memory data store', 'Redis or Memcached', 'Microsecond latency', 'Reduce load on databases'],
    useCases: ['Cache frequent database queries', 'Session stores and leaderboards'],
    keywords: ['elasticache', 'cache', 'redis', 'memcached', 'in-memory'],
  },
  {
    id: 'redshift', label: 'Amazon Redshift', badge: 'Data Warehouse', category: 'databases', icon: 'redshift',
    summary: 'A fully managed, petabyte-scale data warehouse for running analytics on large volumes of structured data.',
    triggers: ['Data warehouse', 'Columnar storage', 'Petabyte-scale analytics', 'Business intelligence (BI) queries'],
    useCases: ['Business reporting on years of sales data', 'Analytics across large data sets'],
    keywords: ['redshift', 'data warehouse', 'analytics', 'columnar', 'olap'],
  },
  {
    id: 'neptune', label: 'Amazon Neptune', badge: 'Graph Database', category: 'databases', icon: 'neptune',
    summary: 'A managed graph database for highly connected data, such as relationships between people or items.',
    triggers: ['Graph database', 'Highly connected data', 'Social networks', 'Fraud detection and recommendations'],
    useCases: ['Social networking features', 'Fraud detection'],
    keywords: ['neptune', 'graph', 'relationships', 'social network'],
  },
  {
    id: 'documentdb', label: 'Amazon DocumentDB', badge: 'Document Database', category: 'databases', icon: 'documentdb',
    summary: 'A managed document database compatible with MongoDB, storing data as JSON documents.',
    triggers: ['Document database (JSON)', 'MongoDB compatibility', 'Managed and scalable', 'Content management and catalogs'],
    useCases: ['Migrate a MongoDB application to AWS', 'Product catalogs and user profiles'],
    keywords: ['documentdb', 'mongodb', 'document', 'json'],
  },
  {
    id: 'm8-root', label: 'Module 8: AI ML and Data Analytics', badge: 'Module 8', category: 'ai', icon: 'ai',
    summary: 'Module 8 of AWS Cloud Practitioner Essentials: machine learning with Amazon SageMaker, managed AI services and the AWS data analytics services.',
    triggers: ['Machine learning (ML)', 'Managed AI services', 'Generative AI', 'Data analytics'],
    keywords: ['module 8', 'ai', 'ml', 'analytics', 'overview'],
  },
  {
    id: 'sagemaker', label: 'Amazon SageMaker', badge: 'Machine Learning', category: 'ai', icon: 'sagemaker',
    summary: 'A fully managed service to build, train and deploy machine learning models at scale, without managing the underlying infrastructure.',
    triggers: ['Build, train and deploy ML models', 'Fully managed ML platform', 'Custom models from your own data', 'No ML infrastructure to manage'],
    useCases: ['Train a custom fraud-detection model', 'Deploy a model as a real-time endpoint'],
    keywords: ['sagemaker', 'machine learning', 'ml', 'train', 'model'],
  },
  {
    id: 'aiservices', label: 'AWS Managed AI Services', badge: 'Artificial Intelligence', category: 'ai', icon: 'ai',
    summary: 'Pre-trained AI services you call through an API, with no machine learning expertise required.',
    triggers: ['Pre-trained models through APIs', 'No ML expertise needed', 'Pay per use'],
    keywords: ['ai services', 'pre-trained', 'api'],
  },
  {
    id: 'rekognition', label: 'Amazon Rekognition', badge: 'Computer Vision', category: 'ai', icon: 'rekognition',
    summary: 'Analyzes images and videos to detect objects, people, text, scenes and inappropriate content, and to recognize faces.',
    triggers: ['Image and video analysis', 'Facial recognition', 'Object and text detection', 'Content moderation'],
    useCases: ['Verify identity with facial comparison', 'Moderate user-uploaded images'],
    keywords: ['rekognition', 'image', 'video', 'face', 'computer vision'],
  },
  {
    id: 'comprehend', label: 'Amazon Comprehend', badge: 'NLP', category: 'ai', icon: 'comprehend',
    summary: 'A natural language processing (NLP) service that finds insights and relationships in text, such as sentiment, key phrases and entities.',
    triggers: ['Natural language processing (NLP)', 'Sentiment analysis', 'Key phrases and entities in text'],
    useCases: ['Analyze customer review sentiment', 'Extract entities from documents'],
    keywords: ['comprehend', 'nlp', 'sentiment', 'text'],
  },
  {
    id: 'polly', label: 'Amazon Polly', badge: 'Text to Speech', category: 'ai', icon: 'polly',
    summary: 'Turns text into lifelike speech in many languages and voices.',
    triggers: ['Text to speech (TTS)', 'Lifelike voices', 'Many languages'],
    useCases: ['Read articles aloud', 'Voice prompts for apps and devices'],
    keywords: ['polly', 'text to speech', 'voice', 'tts'],
  },
  {
    id: 'transcribe', label: 'Amazon Transcribe', badge: 'Speech to Text', category: 'ai', icon: 'transcribe',
    summary: 'Automatic speech recognition that converts audio into text.',
    triggers: ['Speech to text', 'Automatic speech recognition (ASR)', 'Transcribe calls and media'],
    useCases: ['Subtitles for videos', 'Transcribe customer service calls'],
    keywords: ['transcribe', 'speech to text', 'asr', 'audio'],
  },
  {
    id: 'lex', label: 'Amazon Lex', badge: 'Chatbots', category: 'ai', icon: 'lex',
    summary: 'Builds conversational interfaces (chatbots) with voice and text, using the same technology as Alexa.',
    triggers: ['Conversational chatbots', 'Voice and text interfaces', 'Same technology as Alexa'],
    useCases: ['Customer support chatbot', 'Voice-driven booking assistant'],
    keywords: ['lex', 'chatbot', 'conversational', 'bot'],
  },
  {
    id: 'bedrock', label: 'Amazon Bedrock', badge: 'Generative AI', category: 'ai', icon: 'bedrock',
    summary: 'A fully managed service to build generative AI applications with foundation models from Amazon and leading AI companies through one API.',
    triggers: ['Generative AI', 'Foundation models (FMs)', 'Single API to many model providers', 'Customize models with your data'],
    useCases: ['Build a generative AI assistant', 'Summarize documents with a foundation model'],
    keywords: ['bedrock', 'generative ai', 'genai', 'foundation model', 'llm'],
  },
  {
    id: 'analyticshub', label: 'Data Analytics on AWS', badge: 'Analytics', category: 'ai', icon: 'analytics',
    summary: 'Services to collect, process, query and visualize data, from real-time streams to big data and dashboards.',
    triggers: ['Collect, process, analyze and visualize data', 'Batch and real-time analytics', 'Serverless and managed options'],
    keywords: ['analytics', 'data', 'big data'],
  },
  {
    id: 'athena', label: 'Amazon Athena', badge: 'Serverless SQL', category: 'ai', icon: 'athena',
    summary: 'An interactive, serverless query service to analyze data directly in Amazon S3 with standard SQL.',
    triggers: ['SQL queries directly on S3', 'Serverless', 'Pay per query (data scanned)', 'No data loading required'],
    useCases: ['Query log files stored in S3', 'Ad hoc analysis of a data lake'],
    keywords: ['athena', 'sql', 's3', 'query', 'serverless'],
  },
  {
    id: 'emr', label: 'Amazon EMR', badge: 'Big Data', category: 'ai', icon: 'emr',
    summary: 'A managed big data platform for processing large data sets with open-source frameworks such as Apache Hadoop and Apache Spark.',
    triggers: ['Big data processing', 'Apache Hadoop and Apache Spark', 'Managed clusters'],
    useCases: ['Process petabytes of clickstream data', 'Large-scale data transformations'],
    keywords: ['emr', 'elastic mapreduce', 'hadoop', 'spark', 'big data'],
  },
  {
    id: 'kinesis', label: 'Amazon Kinesis', badge: 'Streaming', category: 'ai', icon: 'kinesis',
    summary: 'Collects, processes and analyzes real-time streaming data, such as video, logs and IoT telemetry.',
    triggers: ['Real-time streaming data', 'Ingest and process data as it arrives', 'Video, logs and IoT telemetry'],
    useCases: ['Live dashboards from clickstream data', 'Real-time IoT sensor processing'],
    keywords: ['kinesis', 'streaming', 'real-time', 'data streams'],
  },
  {
    id: 'quicksight', label: 'Amazon QuickSight', badge: 'Business Intelligence', category: 'ai', icon: 'quicksight',
    summary: 'A serverless business intelligence (BI) service for interactive dashboards and visualizations.',
    triggers: ['Business intelligence (BI)', 'Interactive dashboards and visualizations', 'Serverless, pay per session'],
    useCases: ['Executive sales dashboards', 'Share interactive reports'],
    keywords: ['quicksight', 'bi', 'dashboard', 'visualization'],
  },
  {
    id: 'glue', label: 'AWS Glue', badge: 'ETL', category: 'ai', icon: 'glue',
    summary: 'A serverless data integration service to discover, prepare and combine data (extract, transform, load) for analytics.',
    triggers: ['ETL: extract, transform, load', 'Serverless data integration', 'Data Catalog'],
    useCases: ['Prepare raw S3 data for Athena', 'Move data into Redshift'],
    keywords: ['glue', 'etl', 'data catalog', 'integration'],
  },
  {
    id: 'm9-root', label: 'Module 9: Security', badge: 'Module 9', category: 'security', icon: 'security',
    summary: 'Module 9 of AWS Cloud Practitioner Essentials: the shared responsibility model, access control, network and application protection, data protection, threat detection and compliance.',
    triggers: ['Shared responsibility model', 'Preventing unauthorized access', 'Protecting networks, applications and data', 'Detecting and responding to threats'],
    keywords: ['module 9', 'security', 'overview'],
  },
  {
    id: 'sec-access', label: 'Preventing Unauthorized Access', badge: 'Security Topic', category: 'security', icon: 'security',
    summary: 'Who is responsible for what, and how you control who can do what in your AWS account.',
    triggers: ['Shared responsibility model', 'Identity and access management', 'Least privilege'],
    keywords: ['access', 'identity', 'authorization'],
  },
  {
    id: 'srm', label: 'Shared Responsibility Model', badge: 'Security Concept', category: 'security', icon: 'shield',
    summary: 'AWS is responsible for security OF the cloud (hardware, software, facilities, network). The customer is responsible for security IN the cloud (data, IAM, OS, network and firewall configuration, encryption).',
    triggers: ['Security OF the cloud = AWS', 'Security IN the cloud = customer', 'Customer owns data, IAM and encryption', 'Responsibility shifts with the service type (IaaS vs. managed)'],
    keywords: ['shared responsibility', 'of the cloud', 'in the cloud', 'customer', 'aws'],
  },
  {
    id: 'iam', label: 'AWS IAM', badge: 'Identity & Access', category: 'security', icon: 'iam',
    summary: 'AWS Identity and Access Management controls who can sign in and what they can do, using users, groups, roles and JSON policies.',
    triggers: ['Users, groups, roles and policies', 'Root user: protect it, do not use it daily', 'Multi-factor authentication (MFA)', 'Principle of least privilege', 'Roles grant temporary credentials'],
    useCases: ['Give developers only the permissions they need', 'Let an EC2 instance access S3 through a role'],
    keywords: ['iam', 'user', 'group', 'role', 'policy', 'mfa', 'least privilege'],
  },
  {
    id: 'sec-network', label: 'Protecting Networks and Applications', badge: 'Security Topic', category: 'security', icon: 'security',
    summary: 'Shield web applications from malicious requests and distributed denial-of-service (DDoS) attacks.',
    triggers: ['Web application firewall', 'DDoS protection'],
    keywords: ['network', 'application', 'ddos', 'firewall'],
  },
  {
    id: 'waf', label: 'AWS WAF', badge: 'Web Application Firewall', category: 'security', icon: 'waf',
    summary: 'A web application firewall that filters HTTP and HTTPS requests with rules (web ACLs), protecting against attacks such as SQL injection and cross-site scripting.',
    triggers: ['Web application firewall (Layer 7)', 'Filters HTTP/HTTPS requests', 'Protects against SQL injection and XSS', 'Web ACLs, rate limits, IP block lists', 'Works with CloudFront, ALB and API Gateway'],
    useCases: ['Block SQL injection attempts on a web app', 'Rate-limit abusive IP addresses'],
    keywords: ['waf', 'firewall', 'sql injection', 'xss', 'layer 7', 'web acl'],
  },
  {
    id: 'awsshield', label: 'AWS Shield', badge: 'DDoS Protection', category: 'security', icon: 'awsshield',
    summary: 'Managed protection against DDoS attacks. Shield Standard is automatic and free for every customer; Shield Advanced adds detection, mitigation, a response team and cost protection.',
    triggers: ['DDoS protection', 'Shield Standard: automatic and free', 'Shield Advanced: paid, 24/7 DDoS Response Team', 'Cost protection against DDoS scaling charges'],
    useCases: ['Keep a public website online during a DDoS attack', 'Advanced protection for critical internet-facing apps'],
    keywords: ['shield', 'ddos', 'standard', 'advanced'],
  },
  {
    id: 'sec-data', label: 'Protecting Data', badge: 'Security Topic', category: 'security', icon: 'security',
    summary: 'Encrypt data and keep credentials out of your code.',
    triggers: ['Encryption at rest and in transit', 'Key management', 'Secrets rotation'],
    keywords: ['data', 'encryption', 'keys', 'secrets'],
  },
  {
    id: 'kms', label: 'AWS KMS', badge: 'Encryption Keys', category: 'security', icon: 'kms',
    summary: 'AWS Key Management Service creates and controls the cryptographic keys used to encrypt your data across AWS services.',
    triggers: ['Create and manage encryption keys', 'Encryption at rest', 'Integrated with S3, EBS, RDS and more', 'Control and audit key usage'],
    useCases: ['Encrypt S3 objects and EBS volumes', 'Control who can use an encryption key'],
    keywords: ['kms', 'key management', 'encryption', 'keys'],
  },
  {
    id: 'secrets', label: 'AWS Secrets Manager', badge: 'Credentials', category: 'security', icon: 'secrets',
    summary: 'Stores, manages and automatically rotates secrets such as database credentials and API keys, so they never live in your code.',
    triggers: ['Store and retrieve secrets', 'Automatic rotation of credentials', 'Database passwords and API keys', 'No hardcoded credentials'],
    useCases: ['Rotate RDS database passwords automatically', 'Keep API keys out of source code'],
    keywords: ['secrets manager', 'secrets', 'rotation', 'credentials', 'api key'],
  },
  {
    id: 'sec-detect', label: 'Detecting and Responding', badge: 'Security Topic', category: 'security', icon: 'security',
    summary: 'Find threats and vulnerabilities in your environment and respond quickly.',
    triggers: ['Threat detection', 'Vulnerability scanning', 'Continuous monitoring'],
    keywords: ['detection', 'threats', 'vulnerabilities'],
  },
  {
    id: 'guardduty', label: 'Amazon GuardDuty', badge: 'Threat Detection', category: 'security', icon: 'guardduty',
    summary: 'An intelligent threat detection service that continuously monitors accounts and workloads, using machine learning to analyze logs and network activity.',
    triggers: ['Intelligent threat detection', 'Machine learning and anomaly detection', 'Analyzes VPC Flow Logs, DNS logs and CloudTrail events', 'Continuous monitoring, no agents'],
    useCases: ['Detect compromised instances or credentials', 'Alert on unusual API activity'],
    keywords: ['guardduty', 'threat detection', 'machine learning', 'anomaly'],
  },
  {
    id: 'inspector', label: 'Amazon Inspector', badge: 'Vulnerability Scanning', category: 'security', icon: 'inspector',
    summary: 'Automatically scans EC2 instances, container images and Lambda functions for software vulnerabilities and unintended network exposure.',
    triggers: ['Automated vulnerability scanning', 'EC2 instances, container images and Lambda', 'Software vulnerabilities (CVEs)', 'Prioritized security findings'],
    useCases: ['Find unpatched software on EC2 instances', 'Scan container images before deployment'],
    keywords: ['inspector', 'vulnerability', 'scan', 'cve'],
  },
  {
    id: 'artifact', label: 'AWS Artifact', badge: 'Compliance', category: 'security', icon: 'artifact',
    summary: 'A self-service portal for on-demand access to AWS security and compliance reports and select online agreements.',
    triggers: ['Compliance reports', 'AWS audit reports (SOC, PCI, ISO)', 'Agreements (for example BAA)', 'On-demand and self-service'],
    useCases: ['Download a SOC report for an auditor', 'Review AWS compliance documentation'],
    keywords: ['artifact', 'compliance', 'audit', 'reports', 'soc', 'pci'],
  },
]

export interface Link { source: string; target: string; label?: string; dashed?: boolean; emphasis?: boolean }

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
  // Module 6
  { source: 'sgw', target: 's3', label: 'syncs to' },
  { source: 'drs', target: 'ebs', label: 'replicates to' },
  { source: 'fsx', target: 'efs', label: 'alternative to' },
  // Module 7
  { source: 'aurora', target: 'rds', label: 'faster than' },
  { source: 'elasticache', target: 'rds', label: 'caches' },
  { source: 'documentdb', target: 'dynamodb', label: 'similar to' },
  // Module 8
  { source: 'transcribe', target: 'polly', label: 'reverse of' },
  { source: 'glue', target: 'athena', label: 'catalogs for' },
  { source: 'quicksight', target: 'athena', label: 'visualizes' },
  // Inter-module (dashed)
  { source: 'shared', target: 'srm', label: 'detailed in', dashed: true },
  { source: 'waf', target: 'edge', label: 'protects', dashed: true },
  { source: 'kms', target: 's3', label: 'encrypts', dashed: true },
  { source: 'inspector', target: 'ec2', label: 'scans', dashed: true },
  { source: 'athena', target: 's3', label: 'queries', dashed: true },
  { source: 'quicksight', target: 'redshift', label: 'visualizes', dashed: true },
  { source: 'emr', target: 'ec2', label: 'runs on', dashed: true },
  { source: 'redshift', target: 's3', label: 'loads from', dashed: true },
  { source: 'ebs', target: 'ec2', label: 'attached to', dashed: true },
  { source: 'efs', target: 'ec2', label: 'mounted on', dashed: true },
  { source: 'sgw', target: 'outposts', label: 'hybrid storage', dashed: true },
  { source: 'vpc', target: 'ec2', label: 'launches into', dashed: true },
  { source: 'route53', target: 'edge', label: 'routes to', dashed: true },
  { source: 'accel', target: 'edge', label: 'extends', dashed: true },
  { source: 'infra', target: 'm4-root', label: 'detailed in', dashed: true },
  { source: 'clientserver', target: 'ec2', label: 'runs on', dashed: true },
  { source: 'elasticity', target: 'autoscaling', label: 'delivered by', dashed: true },
  { source: 'connectivity', target: 'deploy', label: 'enables', dashed: true },
  { source: 'regions', target: 'ec2', label: 'hosts', dashed: true },
    { source: 'azs', target: 'ecs', label: 'runs across', dashed: true },
    { source: 'batch', target: 'ec2', label: 'runs on', dashed: true },
  { source: 'beanstalk', target: 'autoscaling', label: 'configures', dashed: true },
]

// Parent -> child edges that keep every card connected to its module root (unlabeled, no orphans).
const PARENT_LINKS: Link[] = [
  { source: 'concepts', target: 'core' }, { source: 'concepts', target: 'clientserver' }, { source: 'concepts', target: 'deploy' },
  { source: 'deploy', target: 'hybrid' }, { source: 'deploy', target: 'public' }, { source: 'deploy', target: 'private' },
  { source: 'benefits', target: 'opex' }, { source: 'benefits', target: 'elasticity' },
  { source: 'opex', target: 'scale' }, { source: 'elasticity', target: 'agility' },
  { source: 'vpc', target: 'gateways' }, { source: 'vpc', target: 'sgnacl' }, { source: 'route53', target: 'accel' },
  { source: 'aurora', target: 'neptune' },
  { source: 'aiservices', target: 'rekognition' }, { source: 'aiservices', target: 'comprehend' }, { source: 'aiservices', target: 'transcribe' },
  { source: 'aiservices', target: 'polly' }, { source: 'aiservices', target: 'lex' }, { source: 'aiservices', target: 'bedrock' },
  { source: 'analyticshub', target: 'athena' }, { source: 'analyticshub', target: 'glue' }, { source: 'analyticshub', target: 'quicksight' },
  { source: 'analyticshub', target: 'emr' }, { source: 'analyticshub', target: 'kinesis' },
  { source: 'sec-access', target: 'srm' }, { source: 'sec-access', target: 'iam' },
  { source: 'sec-network', target: 'waf' }, { source: 'sec-network', target: 'awsshield' },
  { source: 'sec-data', target: 'kms' }, { source: 'sec-data', target: 'secrets' },
  { source: 'sec-detect', target: 'guardduty' }, { source: 'sec-detect', target: 'inspector' },
  { source: 'ec2', target: 'ec2types' }, { source: 'ec2', target: 'ec2pricing' },
  { source: 'messaging', target: 'sqs' }, { source: 'messaging', target: 'sns' },
  { source: 'containers', target: 'ecs' }, { source: 'containers', target: 'eks' }, { source: 'containers', target: 'fargate' },
]

// The certification root feeds the module roots; each module root points at the lead cards of its topics.
const ROOT_LINKS: Link[] = [
  { source: 'root-clf-c02', target: 'm1-root', emphasis: true }, { source: 'root-clf-c02', target: 'm2-root', emphasis: true },
  { source: 'root-clf-c02', target: 'm3-root', emphasis: true }, { source: 'root-clf-c02', target: 'm4-root', emphasis: true },
  { source: 'm1-root', target: 'concepts' }, { source: 'm1-root', target: 'benefits' },
  { source: 'm1-root', target: 'infra' }, { source: 'm1-root', target: 'shared' },
  { source: 'm2-root', target: 'ec2' }, { source: 'm2-root', target: 'autoscaling' },
  { source: 'm2-root', target: 'elb' }, { source: 'm2-root', target: 'messaging' },
  { source: 'm3-root', target: 'lambda' }, { source: 'm3-root', target: 'containers' },
  { source: 'm3-root', target: 'beanstalk' }, { source: 'm3-root', target: 'batch' }, { source: 'm3-root', target: 'lightsail' },
  { source: 'root-clf-c02', target: 'm5-root', emphasis: true },
  { source: 'm5-root', target: 'vpc' }, { source: 'm5-root', target: 'route53' }, { source: 'm5-root', target: 'connectivity' },
  { source: 'root-clf-c02', target: 'm6-root', emphasis: true },
  { source: 'm6-root', target: 'ebs' }, { source: 'm6-root', target: 's3' }, { source: 'm6-root', target: 'efs' },
  { source: 'm6-root', target: 'sgw' }, { source: 'm6-root', target: 'drs' }, { source: 'm6-root', target: 'fsx' },
  { source: 'root-clf-c02', target: 'm7-root', emphasis: true },
  { source: 'm7-root', target: 'dynamodb' }, { source: 'm7-root', target: 'rds' }, { source: 'm7-root', target: 'elasticache' },
  { source: 'm7-root', target: 'redshift' },
  { source: 'root-clf-c02', target: 'm8-root', emphasis: true },
  { source: 'm8-root', target: 'sagemaker' }, { source: 'm8-root', target: 'aiservices' }, { source: 'm8-root', target: 'analyticshub' },
  { source: 'root-clf-c02', target: 'm9-root', emphasis: true },
  { source: 'm9-root', target: 'sec-access' }, { source: 'm9-root', target: 'sec-network' }, { source: 'm9-root', target: 'sec-data' },
  { source: 'm9-root', target: 'sec-detect' }, { source: 'm9-root', target: 'artifact' },
  { source: 'm4-root', target: 'regions' }, { source: 'm4-root', target: 'edge' },
  { source: 'm4-root', target: 'automation' }, { source: 'm4-root', target: 'outposts' },
]

export const LINKS: Link[] = [...ROOT_LINKS, ...PARENT_LINKS, ...CROSS_LINKS]

// Card centers, computed as a balanced mind map (see src/lib/layout.ts) so new modules never need hand-placed coordinates.
export const POSITIONS = mindMapLayout('root-clf-c02', LINKS)

// Concept-to-concept relations shown in the sidebar (includes the undrawn hub -> child grouping).
const relationKey = (l: Link) => `${l.source}>${l.target}`
export const RELATIONS: Link[] = [
  ...NODES.filter((n) => n.hub).map((n) => ({ source: n.hub!, target: n.id })),
  ...PARENT_LINKS,
  ...CROSS_LINKS,
].filter((l, i, all) => all.findIndex((o) => relationKey(o) === relationKey(l)) === i) // drop duplicates
