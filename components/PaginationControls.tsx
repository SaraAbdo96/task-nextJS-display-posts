"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPosts: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPosts,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "8";

  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        className={` text-white px-5 py-2 rounded-lg font-semibold transition-all  duration-200 ${
          hasPrevPage
            ? "bg-blue-600 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        prev page
      </button>

      <div className="text-white">
        {page} / {Math.ceil(totalPosts / Number(per_page))}
      </div>

      <button
        className={` text-white px-5 py-2 rounded-lg font-semibold transition-all  duration-200 ${
          hasNextPage
            ? "bg-blue-600 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default PaginationControls;
