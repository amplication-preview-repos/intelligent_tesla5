import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BRIEF_TITLE_FIELD } from "./BriefTitle";
import { MUSIC_TITLE_FIELD } from "../music/MusicTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BriefShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Recommendation"
          target="briefId"
          label="Recommendations"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
