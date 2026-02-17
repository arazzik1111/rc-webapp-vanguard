import { GaAdDescriptionSchema } from '@models/swagger/GaAdDescriptionSchema';
import { GaAdHeadlineSchema } from '@models/swagger/GaAdHeadlineSchema';
// import { AdDescription, AdHeadline } from "../components/ga/GAOverview/GASetup/GASetup.slice";

export type SchemaType = GaAdHeadlineSchema | GaAdDescriptionSchema;

//TODO THIS IS NOT CORRECT WE SHOULDN OT IMPRT FROM COMPONENTS
export type AdItem = any; //AdHeadline | AdDescription;

export const mapSchemaToAdItem = <T extends SchemaType>(schema: T): AdItem => {
  return {
    id: schema.id,
    internalId: String(schema.id ?? ''),
    isFocused: false,
    isPreviewed: false,
    text: schema.text ?? '',
  };
};
