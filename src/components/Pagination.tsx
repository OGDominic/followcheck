import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      {/* Previous Link */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="inline-flex h-10 px-4 items-center justify-center rounded-lg border border-navy/10 bg-white text-xs font-semibold text-navy/70 hover:border-electric hover:text-electric hover:bg-soft-white transition-all"
        >
          Previous
        </Link>
      ) : (
        <span className="inline-flex h-10 px-4 items-center justify-center rounded-lg border border-navy/5 bg-gray-50 text-xs font-semibold text-navy/30 cursor-not-allowed">
          Previous
        </span>
      )}

      {/* Page Numbers */}
      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border text-xs font-semibold transition-all ${
            page === currentPage
              ? "border-electric bg-electric text-white"
              : "border-navy/10 bg-white text-navy/70 hover:border-electric hover:text-electric hover:bg-soft-white"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}

      {/* Next Link */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="inline-flex h-10 px-4 items-center justify-center rounded-lg border border-navy/10 bg-white text-xs font-semibold text-navy/70 hover:border-electric hover:text-electric hover:bg-soft-white transition-all"
        >
          Next
        </Link>
      ) : (
        <span className="inline-flex h-10 px-4 items-center justify-center rounded-lg border border-navy/5 bg-gray-50 text-xs font-semibold text-navy/30 cursor-not-allowed">
          Next
        </span>
      )}
    </nav>
  );
}
