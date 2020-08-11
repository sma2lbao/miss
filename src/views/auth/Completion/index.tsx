import * as React from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@material-ui/core";
import Necessary from "./modules/Necessary";
import Basic from "./modules/Basic";
import Recommend from "./modules/Recommend";
import { useMeQuery, MeQuery } from "@/schema";

export const MeContext = React.createContext<MeQuery | undefined>(undefined);

const steps = ["Important Email Number", "Basic Info", "Recommend"];

const Completion: React.FC = () => {
  const [curStep, setCurStep] = React.useState(0);

  const { data, loading, error } = useMeQuery();

  const handleNext = () => {
    setCurStep(curStep + 1);
  };

  return (
    <Box>
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
      <div>
        <MeContext.Provider value={data}>
          <div>{curStep === 0 && <Necessary />}</div>
          <div>{curStep === 1 && <Basic />}</div>
          <div>{curStep === 2 && <Recommend />}</div>
        </MeContext.Provider>
      </div>
      {loading && <div>loading</div>}
      {error && <div>error</div>}
    </Box>
  );
};

export default Completion;
