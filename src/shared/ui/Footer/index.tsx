// src/shared/ui/Footer/index.tsx
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 블로그 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RL</span>
              </div>
              <span className="text-xl font-bold text-white">React Lab</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              React 렌더링과 성능 최적화에 대한 실험과 연구 결과를 공유하는 개인
              연구 블로그입니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-white font-semibold mb-4">카테고리</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/categories/react"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  React
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/javascript"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  JavaScript
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/performance"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  성능 최적화
                </Link>
              </li>
            </ul>
          </div>

          {/* 블로그 정보 */}
          <div>
            <h3 className="text-white font-semibold mb-4">블로그</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  연락처
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} React Lab. 개인 연구 및 학습 목적으로 만들어진
            블로그입니다.
          </p>
        </div>
      </div>
    </footer>
  );
};
