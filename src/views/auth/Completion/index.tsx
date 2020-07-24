import * as React from "react";
import { Paper, Stepper, Step, StepLabel, Button } from "@material-ui/core";
import Necessary from "./modules/Necessary";
import Basic from "./modules/Basic";
import Recommend from "./modules/Recommend";

const steps = ["Important Email Number", "Basic Info", "Recommend"];

const Completion: React.FC = () => {
  const [curStep, setCurStep] = React.useState(0);

  const handleNext = () => {
    setCurStep(curStep + 1);
  };

  return (
    <Paper>
      <div>
        <Stepper activeStep={curStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div>
        <Button onClick={handleNext}>next</Button>
      </div>
      <div>{curStep === 0 && <Necessary />}</div>
      <div>{curStep === 1 && <Basic />}</div>
      <div>{curStep === 2 && <Recommend />}</div>
    </Paper>
  );
};

export default Completion;
