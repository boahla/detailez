export type productStatus = "all" | "ing" | "start" | "end";
const productStatusList = ["all", "ing", "start", "end"];

export type reportStatus = "all" | "ing" | "end" | "complete" | "invite";
const reportStatusList = ["all", "ing", "end", "complete", "invite"];

export const TC_STATUS_TYPES = [
  { label: "통과", value: "pass" },
  { label: "오류", value: "error" },
  { label: "보류", value: "hold" },
  { label: "취소", value: "cancel" },
];

export { productStatusList, reportStatusList };
