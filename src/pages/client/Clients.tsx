import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store.ts";
import { IClient } from "../../features/clients/clientsSlice.ts";
import { CustomTable, HeadCell, Order } from "../../shared/CustomTable.tsx";
import { CLIENTS_URL } from "../../app/routing.ts";
import { useNavigate } from "react-router";

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "company",
    label: "Company",
  },
  {
    id: "contacts",
    label: "Contacts",
  },
];

export const Clients: FC = () => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof IClient>("id");
  const navigate = useNavigate();
  const clients: IClient[] = useSelector(
    (state: RootState) => state.clients.items,
  );

  const getSort = (a: IClient, b: IClient) => {
    if (order === "asc") {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  };

  const handleSort = (property: keyof IClient) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleItem = (id: number) => {
    navigate(`/${CLIENTS_URL}/${id}`);
  };

  const visibleClients = [...clients].sort(getSort);

  return (
    <>
      <CustomTable
        headCells={headCells}
        rows={visibleClients}
        sort={{ orderBy, order }}
        onSort={handleSort}
        onItemClick={handleItem}
      />
    </>
  );
};
