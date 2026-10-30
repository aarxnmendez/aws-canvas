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

export interface ConceptNode {
  id: string
  label: string
  badge: string
  category: Category
  icon: IconName
  hub?: string // parent hub id (radial layout)
  summary: string
  triggers: string[]
  keywords: string[]
}

export const HUBS = ['concepts', 'infra', 'deploy', 'payg'] as const

export const NODES: ConceptNode[] = [
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
]

export interface Link { source: string; target: string; label?: string }

export const LINKS: Link[] = [
  ...HUBS.map((h) => ({ source: 'core', target: h })),
  ...NODES.filter((n) => n.hub).map((n) => ({ source: n.hub!, target: n.id })),
  { source: 'public', target: 'payg', label: 'billed as' },
  { source: 'elasticity', target: 'payg', label: 'pay for use' },
  { source: 'clientserver', target: 'public', label: 'runs on' },
  { source: 'private', target: 'hybrid', label: 'extends to' },
  { source: 'public', target: 'hybrid', label: 'connects' },
  { source: 'regions', target: 'azs', label: 'contains' },
  { source: 'edge', target: 'regions', label: 'serves' },
  { source: 'regions', target: 'security', label: 'compliance' },
]
