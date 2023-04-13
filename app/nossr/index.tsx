import dynamic from "next/dynamic";

export const NossrDummyWrapper = dynamic(() => import("./DummyWrapper"), {
  ssr: false,
});
