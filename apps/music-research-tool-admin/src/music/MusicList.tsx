import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MusicList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MusicItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="artist" source="artist" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="releaseDate" source="releaseDate" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
