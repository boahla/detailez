import {
  BackHand,
  CheckCircleRounded,
  NewReleases,
  RemoveCircleRounded,
} from "@mui/icons-material";

export type productStatus = "all" | "ing" | "start" | "end";
const productStatusList = [
  { label: "전체보기", value: "all" },
  { label: "QA 생성중", value: "ing" },
  { label: "테스트 중", value: "start" },
  { label: "프로젝트 완료", value: "end" },
];

export type reportStatus = "all" | "ing" | "end" | "complete" | "invite";
const reportStatusList = [
  { label: "전체보기", value: "all" },
  { label: "테스트중", value: "ing" },
  { label: "테스트 완료", value: "end" },
  { label: "프로젝트 완료", value: "complete" },
  { label: "새 초대", value: "invite" },
];

export type tcIssueStatus = "pass" | "error" | "hold" | "cancel";
export const tcIssueStatusLabel = {
  pass: { label: "통과", icon: <CheckCircleRounded /> },
  error: { label: "오류", icon: <NewReleases /> },
  hold: { label: "보류", icon: <BackHand /> },
  cancel: { label: "취소", icon: <RemoveCircleRounded /> },
};
export const TC_STATUS_TYPES = [
  { label: "통과", value: "pass", icon: <CheckCircleRounded /> },
  { label: "오류", value: "error", icon: <NewReleases /> },
  { label: "보류", value: "hold", icon: <BackHand /> },
  { label: "취소", value: "cancel", icon: <RemoveCircleRounded /> },
];

export { productStatusList, reportStatusList };
