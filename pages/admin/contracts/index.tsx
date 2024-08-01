import { DialogDemo } from '@/components/CreateContract';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AdminContract() {
  return (
    <div className="flex flex-col">
      <DialogDemo />
      <br />
      <SearchBar />
      <div className="w-full">
        <Table className="mt-4">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>판매사</TableHead>
              <TableHead>구매사</TableHead>
              <TableHead>상품명</TableHead>
              <TableHead>공급단가</TableHead>
              <TableHead>계약일시</TableHead>
              <TableHead>수정일자</TableHead>
              <TableHead>계약서</TableHead>
              <TableHead>수정</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">
                <Button variant="outline">edit</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
