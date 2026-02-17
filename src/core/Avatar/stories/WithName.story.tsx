import React from "react";
import { Avatar } from "../Avatar";
import { Story, testName, testFullName } from "./_Avatar.default";

export const WithName: Story = {
  render: () => (
    <>
      <div>
        <Avatar icon={null} size={"small"} image={""} name={testName} />
        <Avatar icon={null} size={"medium"} image={""} name={testName} />
        <Avatar icon={null} size={"medium-large"} image={""} name={testName} />
        <Avatar icon={null} size={"large"} image={""} name={testName} />
      </div>
      <div>
        <Avatar icon={null} size={"small"} image={""} name={`${testName} Longer`} />
        <Avatar icon={null} size={"medium"} image={""} name={`${testName} Longer`} />
        <Avatar icon={null} size={"medium-large"} image={""} name={`${testName} Longer`} />
        <Avatar icon={null} size={"large"} image={""} name={`${testName} Longer`} />
      </div>
      <div>
        <Avatar icon={null} size={"small"} image={""} fullName={testFullName} />
        <Avatar icon={null} size={"small"} image={""} fullName={"+2"} />
        <Avatar icon={null} size={"medium"} image={""} fullName={testFullName} />
        <Avatar icon={null} size={"medium-large"} image={""} fullName={testFullName} />
        <Avatar icon={null} size={"large"} image={""} fullName={testFullName} />
      </div>
      <div>
        <Avatar icon={null} size={"small"} image={""} fullName={testFullName} noHover={true} />
        <Avatar icon={null} size={"small"} image={""} fullName={"+2"} noHover={true} />
        <Avatar icon={null} size={"medium"} image={""} fullName={testFullName} noHover={true} />
        <Avatar icon={null} size={"medium-large"} image={""} fullName={testFullName} noHover={true} />
        <Avatar icon={null} size={"large"} image={""} fullName={testFullName} noHover={true} />
      </div>
    </>
  ),
};