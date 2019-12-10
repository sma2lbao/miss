import * as React from "react";
import ProjectItem from "../ProjectItem";
import { Divider } from "@material-ui/core";
import data from "../../data";

export default function Work() {
  const works = data.works;
  return (
    <div>
      {works.map((item, index) => {
        return (
          <ProjectItem
            key={index}
            logo={item.company_logo}
            title={item.title}
            remain={item.stage}
            name={item.company_name}
            content={item.content}
          />
        );
      })}
    </div>
  );
}
