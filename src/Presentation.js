import React from "react";

/* eslint-disable jsx-a11y/iframe-has-title, jsx-a11y/alt-text,  */
/* eslint-disable no-unused-vars */

import {
  AnimateSVG,
  Morph,
  m,
  M,
  Show,
  Notes,
  Portal,
  timeline,
  range,
  themes,
  MObject,
} from "immersion-presentation";

import { useState } from "react";

import "immersion-presentation/dist/index.css";
import step from "immersion-presentation/dist/step.macro.js";
import "immersion-presentation/dist/show.macro.js";


const {
  Slide,
  Presentation,
  BibliographySlide,
  OverviewSlide,
  QuestionSlide,
  Figure,
  List,
  Item,
  Cite,
  Qed,
} = themes.principiae;

function App() {
  return (
    <Presentation>
      <Slide header="Title of the slide" steps={[1, 2, 3]}>
        The step is {step}!
      </Slide>
    </Presentation>
  );
}

export default App;
