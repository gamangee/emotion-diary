import {
  MinusFive,
  MinusFour,
  MinusOne,
  MinusThree,
  MinusTwo,
  PlusFive,
  PlusFour,
  PlusOne,
  PlusThree,
  PlusTwo,
  Zero,
} from '../../../assets/emotions';
import { css } from '@emotion/react';

export default function EmotionIcons() {
  const emotionIcons = css`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  `;
  return (
    <div css={emotionIcons}>
      <PlusFive />
      <PlusFour />
      <PlusThree />
      <PlusTwo />
      <PlusOne />
      <Zero />
      <MinusOne />
      <MinusTwo />
      <MinusThree />
      <MinusFour />
      <MinusFive />
    </div>
  );
}
