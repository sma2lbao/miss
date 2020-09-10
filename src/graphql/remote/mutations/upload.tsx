import { gql } from "@apollo/client";

export const UPLOAD_FILE_OSS = gql`
  mutation upload_file_oss($file: Upload!) {
    upload_file_oss(file: $file)
  }
`;
