import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
	--color-background: #fafafa;
	--color-text: #1e2024;
}

@media (prefers-color-scheme: dark) {
	:root {
		--color-background: #1e2024;
		--color-text: #fafafa;
	}
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--color-background);
    color: var(--color-text)
  }

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 48px 24px;
  height: 100vh;
}
`