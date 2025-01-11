import { FC } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { IClient } from "../features/clients/clientsSlice.ts";

export type Order = "asc" | "desc";
export interface ISortTable {
  orderBy: keyof IClient;
  order: Order;
}

export interface HeadCell {
  id: keyof IClient;
  label: string;
}

export interface ITableProps {
  headCells: HeadCell[];
  rows: IClient[];
  sort: ISortTable;
  onSort: (property: keyof IClient) => void;
  onItemClick: (id: number) => void;
}
export const CustomTable: FC<ITableProps> = ({
  headCells,
  rows,
  sort,
  onSort,
  onItemClick,
}) => {
  const handleSort = (property: keyof IClient) => {
    onSort(property);
  };

  const handleItem = (id: number) => {
    onItemClick(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell, index) => (
              <TableCell
                key={headCell.id}
                align={index !== 0 ? "right" : "left"}
                sortDirection={
                  sort.orderBy === headCell.id ? sort.order : false
                }
              >
                <TableSortLabel
                  active={sort.orderBy === headCell.id}
                  direction={sort.orderBy === headCell.id ? sort.order : "asc"}
                  onClick={() => handleSort(headCell.id)}
                >
                  {headCell.label}
                  {sort.orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {sort.order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => handleItem(row.id)}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.contacts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
