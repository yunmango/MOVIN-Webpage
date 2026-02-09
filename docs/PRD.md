# PRD: MOVIN3D 웹사이트 클론 코딩

## 1. 프로젝트 개요

**원본 사이트**: https://movin3d.com
**원본 기술**: Webflow 기반 (jQuery, GSAP ScrollTrigger, Webfont)
**목표**: Next.js + shadcn/ui 기반으로 프론트엔드를 클론 코딩

MOVIN3D는 LiDAR 기반 실시간 모션 캡처 하드웨어/소프트웨어를 제공하는 회사의 프로덕트 랜딩 사이트로, 세련된 다크/라이트 테마, 풍부한 비디오 배경, 스크롤 기반 애니메이션이 특징이다.

---

## 2. 사이트 구조 (페이지 맵)

```
/ (Home)
├── /tracin          - TRACIN 제품 상세 페이지
├── /studio          - MOVIN Studio 소프트웨어 페이지
├── /about           - 회사 소개 페이지
├── /downloads       - 다운로드 리소스 페이지
├── /online-demo     - 온라인 데모 (유튜브 임베드 + 예약 폼)
├── [외부] Discover  - https://discover.movin3d.com/ (블로그/리서치)
├── [외부] Purchase  - https://shop.movin3d.com/ (Shopify 쇼핑몰)
```

---

## 3. 페이지별 상세 분석

### 3.1 Home (`/`)

| 섹션 | 설명 | 주요 요소 |
|------|------|----------|
| **Hero** | 전체화면 배경 비디오 + 중앙 텍스트 오버레이 | 자동재생 루프 비디오, "Real-time motion capture, made interactive." 헤드라인 |
| **Trusted By** | 로고 마키 (무한 스크롤) | 14개 파트너 로고 자동 슬라이드 |
| **Showcase** | 비디오 카드 가로 캐러셀 | 4개 비디오 카드, 자동재생, 무한 캐러셀 ticker |
| **AI Tech** | Before/After 비교 슬라이더 | Input→Output 비디오 비교, before-after-slider 라이브러리 |
| **Ecosystem** | 탭 UI (Hardware / Software) | Hardware: TRACIN, TRACIN Lite, TRACIN Multi 카드 / Software: Studio |
| **Use Cases** | 산업별 적용 사례 카드 그리드 | Film/VFX, Games, VTubers, Live Shows, Robotics, Medical/Sports (6개) |
| **3D Simulator** | 인터랙티브 3D 설정 시뮬레이터 | Three.js/WebGL 기반 mocap zone 시뮬레이터, 슬라이더 컨트롤 |
| **Partners** | 공식 파트너 로고 그리드 | Unreal Engine, Notch, TouchDesigner, Disguise, Warudo, Rokoko, Manus |
| **Mission** | 회사 미션 + 그라데이션 배경 | 텍스트 섹션 + "About Us" CTA 버튼 |
| **Footer** | 4컬럼 링크 + 뉴스레터 구독 + 소셜 | Product, Company, Resources, About 카테고리별 링크 |

### 3.2 TRACIN (`/tracin`)

| 섹션 | 설명 |
|------|------|
| **Hero** | 제품 이미지 + "MOVIN TRACIN / FREEDOM IN MOTION" 대형 타이포그래피 |
| **Statement** | "Delivering Movements Shouldn't Be Difficult" 텍스트 |
| **Tech Video** | 전체폭 자동재생 비디오 |
| **Description** | 제품 설명 텍스트 (하이라이트 강조) |
| **Free Your Body** | 제품 특징 + 다중 이미지 레이아웃 |
| **Right Motion** | YouTube 비교 영상 임베드 + 스펙 카드 (93% 정확도, 60fps, 0.1sec) |
| **Built-In Clean-Up** | AI 클린업 기능 설명 |
| **Easy Setup** | 2단 카드: 설치(3분) + 캘리브레이션(3초) 비디오 |
| **Tech Spec** | 기술 사양 테이블 (재질, 크기, MoCap 범위, 시스템 요구사항) |
| **CTA** | "Ready to Get MOVIN?" + Order/Demo/Contact 버튼 |
| **Disclaimer** | 법적 고지, 배송, 개인정보 관련 텍스트 |

### 3.3 Studio (`/studio`)

| 섹션 | 설명 |
|------|------|
| **Hero** | "MOVIN STUDIO" 타이틀 + 노트북/디바이스 이미지 |
| **Description** | 소프트웨어 설명 텍스트 (bold 강조) |
| **Download CTA** | "Currently available for Windows" + 다운로드 버튼 |

### 3.4 About (`/about`)

| 섹션 | 설명 |
|------|------|
| **Hero** | 대형 타이포그래피 미션 텍스트 (serif 스타일, 큰 행간) |
| **Content** | 회사 비전/미션 상세 (스크롤 시 fade-in) |

### 3.5 Downloads (`/downloads`)

| 섹션 | 설명 |
|------|------|
| **Hero** | "DOWNLOADS" 타이틀 + 서브텍스트 |
| **MOVIN Studio** | 소프트웨어 다운로드 카드 + 이미지 |
| **Plugins/Resources** | 플러그인 & 샘플 데이터 다운로드 목록 |

### 3.6 Online Demo (`/online-demo`)

| 섹션 | 설명 |
|------|------|
| **Hero** | 다크 배경 + 대형 텍스트 "Effortless setup, no markers required." |
| **YouTube Embed** | 데모 영상 임베드 |
| **Demo Booking** | Calendly 등 예약 폼 임베드 |

---

## 4. 디자인 시스템

### 4.1 컬러

| 용도 | 값 |
|------|-----|
| Primary Background | `#FFFFFF` (라이트) |
| Secondary Background | `#000000` (다크 섹션) |
| Text Primary | `#000000` |
| Text on Dark | `#FFFFFF` |
| Accent / Gradient | 미션 섹션 하단 레인보우 그라데이션 (연한 파스텔) |
| CTA Button (Primary) | `#000000` bg / `#FFFFFF` text |
| CTA Button (Outline) | `#000000` border / `#000000` text |

### 4.2 타이포그래피

| 폰트 | 용도 | 웨이트 |
|------|------|--------|
| **Darker Grotesque** | 헤드라인, 제목 | 300~700 |
| **Instrument Sans** | 본문 텍스트 | 300~700 |
| **Sora** | UI 요소, 버튼 | 300~700 |
| **Lato** | 보조 텍스트 | 100~900 |

### 4.3 레이아웃 특성

- **전체 폭**: 대부분의 섹션이 전체 폭 사용
- **컨텐츠 최대 폭**: ~1200px 중앙 정렬
- **반응형**: 데스크탑/태블릿/모바일 (collapse: medium에서 햄버거 메뉴)
- **섹션 간격**: 넉넉한 상하 패딩 (80~120px)

---

## 5. 인터랙션 & 애니메이션

| 유형 | 상세 | 구현 방법 |
|------|------|----------|
| **스크롤 기반 Fade-in** | 섹션 진입 시 요소 fade-in + translate-up | GSAP ScrollTrigger → Framer Motion |
| **비디오 배경** | Hero 및 다수 섹션에 자동재생/루프 비디오 | `<video>` autoPlay muted loop |
| **로고 마키** | Trusted By 로고 무한 수평 스크롤 | CSS animation / carousel-ticker |
| **비디오 캐러셀** | Showcase 섹션 비디오 카드 수평 스크롤 | Embla Carousel (shadcn carousel) |
| **Before/After 슬라이더** | AI Tech 섹션 Input↔Output 비교 | react-compare-slider |
| **탭 전환** | Ecosystem 섹션 Hardware/Software 탭 | shadcn Tabs |
| **3D 시뮬레이터** | 인터랙티브 3D mocap zone 설정 | Three.js + React Three Fiber |
| **네비게이션 드롭다운** | TRACIN, Studio 메뉴 드롭다운 | shadcn NavigationMenu |
| **모바일 메뉴** | 햄버거 메뉴 → 슬라이드 | shadcn Sheet |

---

## 6. 기술 스택

### Core Framework
| 기술 | 버전 | 용도 |
|------|------|------|
| **Next.js** | 15 (App Router) | 프레임워크 |
| **React** | 19 | UI 라이브러리 |
| **TypeScript** | 5.x | 타입 안전성 |

### UI & 스타일링
| 기술 | 용도 |
|------|------|
| **shadcn/ui** | UI 컴포넌트 (Button, Tabs, NavigationMenu, Sheet, Card, Carousel 등) |
| **Tailwind CSS** | 유틸리티 기반 스타일링 |
| **Google Fonts** | Darker Grotesque, Instrument Sans, Sora, Lato |

### 애니메이션
| 기술 | 용도 |
|------|------|
| **Framer Motion** | 스크롤 기반 애니메이션, 페이지 전환, fade-in 효과 |
| **Tailwind CSS Animate** | 간단한 CSS 애니메이션 (마키 등) |

### 3D / 인터랙티브
| 기술 | 용도 |
|------|------|
| **React Three Fiber** | 3D Simulator 섹션 (Three.js React 래퍼) |
| **@react-three/drei** | 3D 헬퍼 (OrbitControls, 환경, 조명 등) |

### 추가 라이브러리
| 기술 | 용도 |
|------|------|
| **react-compare-slider** | Before/After 비디오 비교 슬라이더 |
| **embla-carousel-react** | shadcn Carousel 내부 엔진 |
| **react-youtube** / **lite-youtube-embed** | YouTube 임베드 (Online Demo) |
| **lucide-react** | 아이콘 (shadcn 기본 아이콘) |

### 개발 도구
| 기술 | 용도 |
|------|------|
| **ESLint** | 코드 린팅 |
| **Prettier** | 코드 포매팅 |

---

## 7. 프로젝트 구조 (예상)

```
movin-webpage/
├── public/
│   ├── videos/          # 배경 비디오 파일
│   ├── images/          # 제품 이미지, 파트너 로고
│   └── fonts/           # 로컬 폰트 (선택)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 루트 레이아웃 (Nav + Footer)
│   │   ├── page.tsx             # Home
│   │   ├── tracin/page.tsx      # TRACIN
│   │   ├── studio/page.tsx      # Studio
│   │   ├── about/page.tsx       # About
│   │   ├── downloads/page.tsx   # Downloads
│   │   └── online-demo/page.tsx # Online Demo
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx       # 네비게이션 바
│   │   │   └── footer.tsx       # 푸터
│   │   ├── home/
│   │   │   ├── hero-section.tsx
│   │   │   ├── trusted-by.tsx          # 로고 마키
│   │   │   ├── showcase-carousel.tsx   # 비디오 캐러셀
│   │   │   ├── ai-tech-section.tsx     # Before/After
│   │   │   ├── ecosystem-section.tsx   # 탭 UI
│   │   │   ├── use-cases-section.tsx   # 산업별 카드
│   │   │   ├── simulator-section.tsx   # 3D 시뮬레이터
│   │   │   ├── partners-section.tsx    # 파트너 로고
│   │   │   └── mission-section.tsx     # 미션 CTA
│   │   ├── tracin/
│   │   │   ├── hero-section.tsx
│   │   │   ├── spec-table.tsx
│   │   │   └── cta-section.tsx
│   │   ├── ui/                  # shadcn/ui 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── card.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── carousel.tsx
│   │   │   └── ...
│   │   └── shared/
│   │       ├── video-background.tsx
│   │       ├── scroll-animation.tsx    # Framer Motion 래퍼
│   │       └── section-wrapper.tsx
│   ├── lib/
│   │   └── utils.ts             # cn() 등 유틸리티
│   └── styles/
│       └── globals.css          # Tailwind + 커스텀 CSS
├── docs/
│   └── PRD.md                   # 이 문서
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── components.json              # shadcn/ui 설정
```

---

## 8. 컴포넌트-페이지 매핑

### 공통 컴포넌트
- `Navbar`: 모든 페이지 상단 고정, 드롭다운 메뉴, 모바일 햄버거
- `Footer`: 4컬럼 링크, 뉴스레터 이메일 입력, 소셜 아이콘

### 재사용 가능 컴포넌트
- `VideoBackground`: 자동재생 루프 비디오 래퍼
- `ScrollAnimation`: Framer Motion whileInView 래퍼 (fade-in, slide-up)
- `SectionWrapper`: 섹션 패딩/최대폭 표준화

---

## 9. 반응형 디자인 브레이크포인트

| 이름 | 폭 | 변화 |
|------|-----|------|
| Mobile | < 768px | 단일 컬럼, 햄버거 메뉴, 축소된 타이포그래피 |
| Tablet | 768px~1024px | 2컬럼 그리드, 네비 축소 |
| Desktop | > 1024px | 풀 레이아웃, 호버 효과 활성 |

---

## 10. 성능 고려사항

- **비디오 최적화**: 포스터 이미지 사용, lazy loading, WebM + MP4 이중 소스
- **이미지 최적화**: Next.js `<Image>` 컴포넌트 활용 (WebP, 자동 리사이징)
- **코드 스플리팅**: 3D 시뮬레이터는 `dynamic()` import로 lazy load
- **폰트 최적화**: `next/font/google`로 Google Fonts 자체 호스팅
- **애니메이션**: `will-change`, `transform` 활용으로 GPU 가속

---

## 11. 구현 우선순위

### Phase 1: 기반 구축
1. Next.js 프로젝트 초기화 + shadcn/ui 설정
2. Tailwind 테마 설정 (컬러, 폰트, 브레이크포인트)
3. 공통 레이아웃 (Navbar + Footer)

### Phase 2: 핵심 페이지
4. Home 페이지 (Hero → Trusted By → Showcase 순서로)
5. TRACIN 제품 페이지
6. About 페이지

### Phase 3: 보조 페이지
7. Studio 페이지
8. Downloads 페이지
9. Online Demo 페이지

### Phase 4: 고급 기능
10. 스크롤 애니메이션 전체 적용
11. 3D Simulator 섹션
12. Before/After 슬라이더
13. 반응형 최종 조정 및 성능 최적화

---

## 12. 필수 패키지 요약 (pnpm)

```bash
# Core
pnpm create next-app@latest movin-webpage --typescript --tailwind --app --src-dir --use-pnpm
pnpx shadcn@latest init

# shadcn 컴포넌트
pnpx shadcn@latest add button tabs card navigation-menu sheet carousel input

# 애니메이션
pnpm add framer-motion

# 3D
pnpm add @react-three/fiber @react-three/drei three
pnpm add -D @types/three

# 추가 라이브러리
pnpm add react-compare-slider
pnpm add lucide-react
pnpm add lite-youtube-embed   # 또는 react-youtube
```
