# AI Surfers Design System

PocketPrompt 및 Sigmine 제품에서 사용하는 UI 컴포넌트 디자인 시스템입니다.  
React + styled-components 기반으로 작성되었으며, npm 패키지로 배포되었습니다.
[npm 패키지 바로가기](https://www.npmjs.com/package/ai-surfers-design-system)

---

## 📦 설치 방법

```bash
yarn add ai-surfers-design-system

// ⚠️ react, react-dom, styled-components는 peerDependencies로, 사용자 프로젝트에 이미 설치되어 있어야 합니다.
```

## 🛠️ 사용 예시

```tsx
import { Button } from "ai-surfers-design-system";

function MyComponent() {
  return <Button variant="primary">Click me</Button>;
}
```

---

## 🧑‍💻 라이브러리 개발 및 배포 방법

### 1. 개발 환경 실행

```bash
yarn install
yarn storybook  # Storybook 실행
```

### 2. 빌드

```bash
yarn build      # tsup 기반 라이브러리 번들 빌드
```

### 3. 배포 (버전 업데이트 후)

```bash
npm login
npm publish
```

---

## 📁 프로젝트 구조

```
ai-surfers-design-system/
├── src/                            # 주요 컴포넌트 소스
│   ├── components/                 # Button, Input 등 UI 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   └── Button.stories.tsx  # 컴포넌트별 Storybook
│   └── index.ts                    # 컴포넌트 export 진입점
├── dist/                           # 빌드 결과물
├── tsup.config.ts                  # 라이브러리 빌드 설정
├── vite.config.ts                  # 개발 및 SSR 대응 설정
└── README.md
```

---

## ✅ 기술 스택

- React 18 이상
- styled-components
- Vite
- Storybook
- tsup (라이브러리 번들러)
