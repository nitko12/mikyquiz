"use client";

import React from "react";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CaretSortIcon } from "@radix-ui/react-icons";

const items = Array.from({ length: 20 });

export function DataTable() {
  const [items, setItems] = React.useState(Array.from({ length: 20 }));

  const fetchData = () => {
    setItems((prev) => [...prev, ...Array.from({ length: 20 })]);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      height={"85vh"}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Table className="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              backdropFilter: "blur(6px)",
              // borderBottom: "1px solid",
            }}
            className="border-b"
          >
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right w-[200px]">Method</TableHead>
            <TableHead className="text-right w-[200px]">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((i, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex flex-col items-start">
                Invoice
              </TableCell>
              <TableCell>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center">
                    <p>List Quiz runs</p> <CaretSortIcon />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ScrollArea>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Quiz</TableHead>
                            <TableHead>Runs</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Quiz 1</TableCell>
                            <TableCell>5</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Quiz 2</TableCell>
                            <TableCell>3</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Quiz 3</TableCell>
                            <TableCell>2</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </ScrollArea>
                  </CollapsibleContent>
                </Collapsible>
              </TableCell>
              <TableCell className="text-right w-[200px]">
                Credit Card
              </TableCell>
              <TableCell className="text-right w-[200px]">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </InfiniteScroll>
  );
}
