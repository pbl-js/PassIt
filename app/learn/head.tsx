import { headTagKeys } from "../../consts/headTagKeys";

export default async function LearnHead() {
  return (
    <>
      <title key={headTagKeys.title}>PassIt</title>
    </>
  );
}
