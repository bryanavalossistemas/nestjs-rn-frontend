import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchCategories } from "@/api/categories";
import { PAGINATION_ITEMS } from "@/constants/pagination";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

export default async function CategoryTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const [categories, total] = await fetchCategories(
    query,
    PAGINATION_ITEMS,
    (currentPage - 1) * PAGINATION_ITEMS
  );

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Categorias</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        {total !== 0 && (
          <PaginationWithLinks
            totalCount={total}
            page={currentPage}
            pageSize={PAGINATION_ITEMS}
          />
        )}
      </div>
    </>
  );
}
