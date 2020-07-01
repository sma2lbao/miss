import * as React from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation($file: Upload!) {
    upload_file_oss(file: $file)
  }
`;

const Test: React.FC = () => {
  const [upload_file_oss] = useMutation(UPLOAD_FILE, {
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    }
  });

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.dir(e.currentTarget);
    const {
      validity,
      files: [file]
    } = e.currentTarget;
    if (validity) {
      upload_file_oss({ variables: { file } });
      console.log(file);
    }
  };

  return (
    <div>
      <div>
        <input type="file" onChange={fileChange} />
      </div>
    </div>
  );
};

export default Test;
