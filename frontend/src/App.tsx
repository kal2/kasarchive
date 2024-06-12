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
          <TableCaption>A list of open/pending recomendations.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Sample ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Date Complete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Kyle</TableCell>
              <TableCell>Kinsey Family Vineyard</TableCell>
              <TableCell>0401202</TableCell>
              <TableCell>03/22/2023</TableCell>
              <TableCell className="text-right">01/04/2024</TableCell>
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
