import { InvoiceAddress, InvoiceAddressProps } from "./InvoiceAddress";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/InvoiceAddress",
  component: InvoiceAddress,
});

export const InvoiceAddressStory = (props: InvoiceAddressProps) => {
  const { invoiceCompanyName = "Daniel Wette", formattedAddress = "Hohe Str. 73-75, 50667 Köln, Germany" } = props;

  return (
    <div>
      <InvoiceAddress {...props} invoiceCompanyName={invoiceCompanyName} formattedAddress={formattedAddress} />
    </div>
  );
};
