import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BriefTitle } from "../brief/BriefTitle";
import { MusicTitle } from "../music/MusicTitle";
import { UserTitle } from "../user/UserTitle";

export const RecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="brief.id" reference="Brief" label="Brief">
          <SelectInput optionText={BriefTitle} />
        </ReferenceInput>
        <ReferenceInput source="music.id" reference="Music" label="Music">
          <SelectInput optionText={MusicTitle} />
        </ReferenceInput>
        <DateTimeInput label="recommendedAt" source="recommendedAt" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
