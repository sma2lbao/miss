import * as React from "react";
import { Paper, Stepper, Step, StepLabel, Button } from "@material-ui/core";

const steps = ["Important Email Phone Number", "Basic Info", "Follow "];

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
    </Paper>
  );
};

export default Completion;
