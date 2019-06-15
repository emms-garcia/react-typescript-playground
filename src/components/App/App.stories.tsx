import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import StoryRouter from "storybook-react-router";
import App from "./App";
import Home from "../Home";

storiesOf("App", module)
    .addDecorator(StoryRouter({ "/home": linkTo("App", "home") }))
    .add(
        "home",
        (): React.ReactElement => (
            <App>
                <Home counter={10} increment={action("incremented")} />
            </App>
        )
    );
