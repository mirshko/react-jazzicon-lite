import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Jazzicon, { jsNumberForAddress } from "../src";

const stories = storiesOf("Jazzicon", module);

stories.addDecorator(withKnobs);

stories.add("default", () => (
  <Jazzicon
    diameter={100}
    seed={number(
      "seed",
      jsNumberForAddress("0x1111111111111111111111111111111111111111")
    )}
  />
));
