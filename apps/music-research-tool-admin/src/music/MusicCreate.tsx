import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { RecommendationTitle } from "../recommendation/RecommendationTitle";

export const MusicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="artist" source="artist" />
        <NumberInput step={1} label="duration" source="duration" />
        <SelectInput
          source="genre"
          label="genre"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="recommendations"
          reference="Recommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendationTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="releaseDate" source="releaseDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
