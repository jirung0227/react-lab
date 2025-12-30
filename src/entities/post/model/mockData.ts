export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export const mockPosts: Post[] = [
  {
    id: "1",
    title: "React 성능 최적화의 기초",
    excerpt:
      "React 애플리케이션의 성능을 향상시키는 기본적인 방법들에 대해 알아보겠습니다.",
    content:
      "# React 성능 최적화의 기초\n\n성능 최적화는 모든 React 개발자가 마스터해야 할 중요한 주제입니다...",
    author: "React Lab",
    publishedAt: "2024-01-15",
    category: "React",
    tags: ["performance", "optimization", "react"],
    readTime: 5,
    featured: true,
  },
  {
    id: "2",
    title: "JavaScript 비동기 프로그래밍 완벽 가이드",
    excerpt:
      "Promise, async/await부터 최신 비동기 패턴까지 깊이 있게 다룹니다.",
    content:
      "# JavaScript 비동기 프로그래밍\n\n현대 JavaScript 개발에서 비동기 프로그래밍은 필수적인 요소입니다...",
    author: "React Lab",
    publishedAt: "2024-01-10",
    category: "JavaScript",
    tags: ["javascript", "async", "promise"],
    readTime: 8,
    featured: false,
  },
];
