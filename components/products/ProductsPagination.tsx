import Link from "next/link";

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};
export default function ProductsPagination({
  page,
  totalPages,
}: ProductsPaginationProps) {
  const numbersInPage = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav className="flex justify-center py-10">
      {page > 1 && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-8"
          href={`/admin/products?page=${page - 1}`}
        >
          &laquo;
        </Link>
      )}
      {numbersInPage.map((currentPage) => (
        <Link
          className={`${
            page === currentPage ? "bg-amber-400" : "bg-white "
          } px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-8`}
          key={currentPage}
          href={`/admin/products?page=${currentPage}`}
        >
          {currentPage}
        </Link>
      ))}
      {page < totalPages && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-8"
          href={`/admin/products?page=${page + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
