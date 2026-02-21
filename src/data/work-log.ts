export interface Accomplishment {
  id: string;
  title: string;
  description: string;
  impact?: string;
  tags?: string[];
}

export interface Quarter {
  label: string;
  accomplishments: Accomplishment[];
}

export interface YearLog {
  year: number;
  quarters: Quarter[];
}

export const workLog: YearLog[] = [
  {
    year: 2025,
    quarters: [
      {
        label: "Q1 2025",
        accomplishments: [
          {
            id: "2025-q1-1",
            title: "Launched v2.0 of the analytics dashboard",
            description:
              "Led a team of 3 to redesign and rebuild the analytics dashboard with real-time data streaming, customizable widgets, and export functionality.",
            impact: "Increased daily active users by 35%",
            tags: ["Leadership", "React", "WebSocket"],
          },
          {
            id: "2025-q1-2",
            title: "Implemented edge caching strategy",
            description:
              "Deployed edge caching across 12 regions using CloudFront, reducing global p95 latency from 800ms to 200ms.",
            impact: "75% latency reduction",
            tags: ["AWS", "Performance"],
          },
        ],
      },
    ],
  },
  {
    year: 2024,
    quarters: [
      {
        label: "Q4 2024",
        accomplishments: [
          {
            id: "2024-q4-1",
            title: "Microservices migration – Phase 3",
            description:
              "Migrated the billing and invoicing modules to independent microservices with event-driven communication via Kafka.",
            impact: "Reduced billing-related incidents by 60%",
            tags: ["Architecture", "Kafka", "Node.js"],
          },
          {
            id: "2024-q4-2",
            title: "Mentored 2 new junior engineers",
            description:
              "Onboarded and mentored two new hires. Established pair programming sessions and created a 30-60-90 day learning roadmap.",
            impact: "Both contributors within first month",
            tags: ["Mentorship", "Team"],
          },
        ],
      },
      {
        label: "Q3 2024",
        accomplishments: [
          {
            id: "2024-q3-1",
            title: "Built automated regression testing suite",
            description:
              "Created an end-to-end testing framework using Playwright covering 120+ critical user flows. Integrated into CI pipeline.",
            impact: "Caught 15 regressions before production in first quarter",
            tags: ["Testing", "Playwright", "CI/CD"],
          },
          {
            id: "2024-q3-2",
            title: "Database performance overhaul",
            description:
              "Profiled and optimized the top 20 slowest database queries. Added strategic indexes and implemented connection pooling.",
            impact: "40% reduction in average API response time",
            tags: ["PostgreSQL", "Performance"],
          },
        ],
      },
      {
        label: "Q2 2024",
        accomplishments: [
          {
            id: "2024-q2-1",
            title: "Microservices migration – Phase 2",
            description:
              "Extracted the user authentication and authorization module into a standalone service with OAuth2 and RBAC support.",
            impact: "Enabled independent scaling and 99.99% auth uptime",
            tags: ["Architecture", "Security", "OAuth2"],
          },
          {
            id: "2024-q2-2",
            title: "Tech talk: Event-Driven Architecture",
            description:
              "Presented a company-wide tech talk on event-driven architecture patterns, covering CQRS, event sourcing, and saga patterns.",
            tags: ["Knowledge Sharing", "Architecture"],
          },
        ],
      },
      {
        label: "Q1 2024",
        accomplishments: [
          {
            id: "2024-q1-1",
            title: "Microservices migration – Phase 1",
            description:
              "Kicked off the monolith-to-microservices initiative. Established service boundaries, chose communication patterns, and migrated the first two services.",
            impact: "Reduced deploy time from 45min to 12min for migrated services",
            tags: ["Architecture", "Docker", "Kubernetes"],
          },
          {
            id: "2024-q1-2",
            title: "Promoted to Senior Software Engineer",
            description:
              "Recognized for technical leadership, mentorship contributions, and consistent delivery of high-impact projects.",
            tags: ["Career"],
          },
        ],
      },
    ],
  },
  {
    year: 2023,
    quarters: [
      {
        label: "Q4 2023",
        accomplishments: [
          {
            id: "2023-q4-1",
            title: "Launched customer-facing API v2",
            description:
              "Designed and shipped a new versioned REST API with rate limiting, pagination, and comprehensive OpenAPI documentation.",
            impact: "Adopted by 80+ new integration partners in first quarter",
            tags: ["API Design", "Node.js", "OpenAPI"],
          },
        ],
      },
      {
        label: "Q3 2023",
        accomplishments: [
          {
            id: "2023-q3-1",
            title: "Infrastructure as Code adoption",
            description:
              "Led the migration from manual infrastructure provisioning to Terraform. Created reusable modules for common AWS patterns.",
            impact: "Environment provisioning reduced from days to minutes",
            tags: ["Terraform", "AWS", "DevOps"],
          },
        ],
      },
      {
        label: "Q2 2023",
        accomplishments: [
          {
            id: "2023-q2-1",
            title: "Real-time notification system",
            description:
              "Built a WebSocket-based notification system supporting push notifications, in-app alerts, and email digests.",
            impact: "User engagement increased by 20%",
            tags: ["WebSocket", "React", "Node.js"],
          },
        ],
      },
      {
        label: "Q1 2023",
        accomplishments: [
          {
            id: "2023-q1-1",
            title: "Joined TechCorp Inc.",
            description:
              "Started as Software Engineer on the platform team. Completed onboarding and shipped first feature within two weeks.",
            tags: ["Career", "Onboarding"],
          },
        ],
      },
    ],
  },
];
