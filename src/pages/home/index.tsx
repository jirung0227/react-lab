// src/pages/home/index.tsx
import { mockPosts } from "../../entities/post/model/mockData";
import { Layout } from "../../shared/ui/Layout";
import { PostCard } from "../../shared/ui/PostCard";

export const HomePage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* 헤더 섹션 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">React Lab</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            React 렌더링과 성능 최적화에 대한 실험과 연구 결과를 공유하는 개인
            연구 블로그입니다.
          </p>
        </div>

        {/* 추천 포스트 (선택사항) */}
        {mockPosts.filter((post) => post.featured).length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              추천 포스트
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mockPosts
                .filter((post) => post.featured)
                .map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          </section>
        )}

        {/* 전체 포스트 목록 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 포스트</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
