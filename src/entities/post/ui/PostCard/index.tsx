// src/shared/ui/PostCard/index.tsx
import { Link } from "react-router-dom";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    category: string;
    tags: string[];
    readTime: number;
  };
}

export const PostCard = ({ post }: PostCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* 카테고리 */}
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {post.category}
          </span>
        </div>

        {/* 제목 */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link
            to={`/post/${post.id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* 요약 */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* 태그들 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 메타 정보 */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span>{post.author}</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <span>{post.readTime}분 읽기</span>
        </div>
      </div>
    </article>
  );
};
