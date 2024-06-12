import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
//import React from "react"

function App() {

  return (
    <div id="app">
      <div id="data-table">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div id="action-row">
        <img src="./src/assets/logo.png" className="logo" />
        <div className="button-group">
          <Button variant="outline">Import CSV</Button>
          <Button variant="outline">View Lab Data</Button>
          <Button variant="outline">Recs</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
    </div>
  )
}

export default App
