import type { ContentCardProps } from '../components/ui/Card';


interface DummyProps extends ContentCardProps {
    id: number
}

export const StoriesData: DummyProps[] = [
  {
    id: 1,
    imageUrl: "/images/cardimg1.png", // Use seeded random images
    title: "The Future of AI in Web Development Trends 2025",
    category: "Technology",
    date: "18 Apr 2025",
    status: "Published",
    views: 1850,
  },
  {
    id: 2,
    imageUrl: "/images/cardimg2.png",
    title: "From Zero to Hero: Scaling Your Startup Effectively",
    category: "Business",
    date: "15 Apr 2025",
    status: "Pending",
    views: 2430,
  },
  {
    id: 3,
    imageUrl: "/images/cardimg3.png",
    title: "Building a Scalable Design System for Modern Apps",
    category: "Design",
    date: "10 Apr 2025",
    status: "Draft", // Example Draft status
    views: 320,
  },
  {
    id: 4,
    imageUrl: "/images/cardimg4.png",
    title: "Mastering Remote Collaboration: Tools and Techniques",
    category: "Productivity",
    date: "05 Apr 2025",
    status: "Published",
    views: 985,
  },
  {
    id: 5,
    imageUrl: "/images/cardimg5.png",
    title: "Exploring the Hidden Gems of Kyoto: A Travel Guide",
    category: "Travel",
    date: "28 Mar 2025",
    status: "Published",
    views: 4100,
    // Example different icon
  },
  {
    id: 6,
    imageUrl: "/images/cardimg6.png",
    title: "Effective Content Strategy for B2B Marketing Success",
    category: "Marketing",
    date: "20 Mar 2025",
    status: "Archived", // Example Archived status
    views: 75,
  },
  {
    id: 7,
    imageUrl: "/images/cardimg1.png",
    title: "What's New in Next.js 15: Features and Updates",
    category: "Technology",
    date: "19 Apr 2025", // Very recent date
    status: "Published",
    views: 3150,
  },
];
