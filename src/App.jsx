import { css } from '@emotion/react';
import Calendar from './components/Calendar';
import ScoreGraph from './components/ScoreGraph';

const container = css`
  min-width: 1680px;
  height: 100vh;
`;

const title = css`
  text-align: center;
  > h1 {
    font-size: 30px;
    margin: 10px 0 20px;
  }
`;

const graphArea = css`
  width: 90%;
  margin: 0 auto;
`;

export default function App() {
  return (
    <div css={container}>
      <div css={title}>
        <h1>마음 그래프</h1>
        <p>나의 감정을 점수로 매긴 후, 비슷한 표정을 기록해보세요.</p>
        <p>한 달 동안 감정이 어떻게 변화했는지 한눈에 볼 수 있어요!</p>
      </div>
      <div css={graphArea}>
        <Calendar />
        {scoreColors.map((scoreColor) => (
          <ScoreGraph key={scoreColor} color={scoreColor} />
        ))}
      </div>
    </div>
  );
}

const scoreColors = [
  '#e55261',
  '#f26a4f',
  '#f6c752',
  '#9bcd64',
  '#45c7a8',
  '#4bbae0',
  '#2d77d8',
  '#a78de5',
  '#7153bc',
  '#e582b9',
  '#d2398d',
];
