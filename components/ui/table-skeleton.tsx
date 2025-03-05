import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableSkeleton() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Skeleton className="h-8 w-[150px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-8 w-[150px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-8 w-[150px]" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-[250px]" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        <Skeleton className="h-10 w-[400px]" />
      </div>
    </>
  );
}
