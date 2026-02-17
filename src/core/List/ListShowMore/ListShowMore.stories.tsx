import {ListShowMore, ListShowMoreProps} from "./ListShowMore";
import React from "react";
import {disableControls, SbDecorator} from "@test-utils/get-storybook-decorator";
import {mapStorybookActionToProps} from "@test-utils/map-storybook-action-to-props";
import {Text, TextTypes} from "@vanguard/Text/Text";

export default SbDecorator({
    title: "@vanguard/List/ListShowMore",
    component: ListShowMore,
    extra: {
        ...disableControls([""]),
    },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ListShowMoreProps = {
    listElements: [
        {
            content: <Text type={TextTypes.textCaption} color={'var(--n500)'}>This is the life</Text>,
            selected: true
        },
        {
            content: <Text type={TextTypes.heading2} color={'var(--n700)'}>This is the life</Text>,
            selected: false
        },
        {
            content: <Text type={TextTypes.textHelp}>This is the life</Text>,
            selected: true
        }
    ],
    type: "alphabetical",
};


export const ListShowMoreStory = (props: ListShowMoreProps) => {

    /**
     * Here we can add story specific props
     * */
    const propsMock = mapStorybookActionToProps(props, {
        ...defaultProps,
    });

    return (
        <ListShowMore {...propsMock} />
    );
};

