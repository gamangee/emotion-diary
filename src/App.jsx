import { css } from '@emotion/react';
import EmotionGraphHeader from './pages/EmotionGraph/components/EmotionGraphHeader';
import EmotionGraph from './pages/EmotionGraph/EmotionGraph';

const container = css`
  padding: 0 50px;
`;

const graphArea = css`
  margin: 0 auto;
`;

export default function App() {
  return (
    <div css={container}>
      <EmotionGraphHeader />
      <div css={graphArea}>
        <EmotionGraph />
      </div>
    </div>
  );
}
