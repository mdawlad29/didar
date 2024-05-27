import dynamic from "next/dynamic";
const OnlineCv = dynamic(() => import("@/components/OnlineCv/OnlineCv"), {
  ssr: false,
});

export const metadata = {
  title: "Online CV",
  description:"This is my online cv."
};

const OnlineCvPage = () => {
  return (
    <>
      <OnlineCv />
    </>
  );
};

export default OnlineCvPage;
