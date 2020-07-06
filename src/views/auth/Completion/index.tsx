import * as React from "react";
import { Paper, Stepper, Step, StepLabel } from "@material-ui/core";

const steps = ["Important Email Phone Number", "Basic Info", "Follow "];

const Completion: React.FC = () => {
  const [curStep, setCurStep] = React.useState(0);
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
    </Paper>
  );
};

export default Completion;
