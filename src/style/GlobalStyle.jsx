import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

export default function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${reset}

        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          font-family: 'noto sans';
        }
      `}
    />
  );
}
