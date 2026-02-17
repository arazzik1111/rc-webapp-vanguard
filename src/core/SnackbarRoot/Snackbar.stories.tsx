import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import {snackbarService, SnackBarServiceProps} from "@vanguard/SnackbarRoot/SnackBarService";
import {Button} from "@vanguard/Button/Button";
import {LineAlert} from "@vanguard/LineAlert/LineAlert";

export default SbDecorator({
  title: "Vanguard/Snackbar",
  component: LineAlert,
  extra: {
    argTypes: {
      ...disableControls([
        "children",
        "title",
      ]),
      type: {
        defaultValue: 'info',
      },
      message: {
        type: {name: 'string', required: true},
        defaultValue: 'Snackbar example',
      }
    },
  },
});

export const SnackbarServiceStory = (props: SnackBarServiceProps) => {
  const addSnackbar = (props: SnackBarServiceProps) => {
    snackbarService.open(props);
  }

  return (
    <div>
      <Button onClick={() => {addSnackbar(props)}}>Add Snackbar</Button>
    </div>
  );
};

