import { css } from '@emotion/react';

const title = css`
  text-align: center;
  padding-top: 10px;
  > h1 {
    font-size: 30px;
    margin: 10px 0;
  }
`;

export default function EmotionGraphHeader() {
  return (
    <div css={title}>
      <h1>Emotion Graph</h1>
      {/* <p>나의 감정을 점수로 매긴 후, 비슷한 표정을 기록해보세요.</p> */}
      {/* <p>한 달 동안 감정이 어떻게 변화했는지 한눈에 볼 수 있어요!</p> */}
    </div>
  );
}
