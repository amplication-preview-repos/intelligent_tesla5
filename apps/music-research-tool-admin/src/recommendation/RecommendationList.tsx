import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BRIEF_TITLE_FIELD } from "../brief/BriefTitle";
import { MUSIC_TITLE_FIELD } from "../music/MusicTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RecommendationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recommendations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Brief" source="brief.id" reference="Brief">
          <TextField source={BRIEF_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Music" source="music.id" reference="Music">
          <TextField source={MUSIC_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="recommendedAt" source="recommendedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
