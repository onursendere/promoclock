---
summary: "OpenAI Codex는 OpenAI의 코딩 에이전트로, Free부터 Enterprise까지 모든 ChatGPT 플랜에 포함됩니다. 터미널, VS Code 스타일 에디터, ChatGPT 데스크톱·웹 앱, iOS, 격리된 클라우드 환경에서 실행됩니다. 개발자는 코드를 작성, 리팩터링, 리뷰하는 데 사용하며 ChatGPT Work와 사용 한도를 공유합니다."
metaTitle: "OpenAI Codex 요금과 한도, 무료 이용 방법(2026)"
metaDescription: "OpenAI Codex 2026년 요금: ChatGPT Free, Go($8), Plus($20), Pro(월 $100부터)에 포함됩니다. 플랜별 사용 한도, 지원 환경, 모델, 대안 도구를 확인하세요."
bestFor:
  - "이미 ChatGPT를 쓰는 개발자"
  - "터미널 중심 엔지니어"
  - "코드 리뷰를 자동화하려는 팀"
keyFeatures:
  - name: "Codex CLI"
    description: "로컬에서 코드를 읽고 수정하고 실행하는 터미널 에이전트로, 샌드박싱, 승인 규칙, 스크립트 가능한 명령줄 옵션을 갖췄습니다."
  - name: "IDE 확장 프로그램"
    description: "VS Code, Cursor, Windsurf에서 작동하며, JetBrains IDE와 Xcode는 자체 Codex 연동을 제공합니다."
  - name: "Codex 클라우드"
    description: "구성 가능한 종속성과 제한된 인터넷 접근이 설정된 격리된 클라우드 환경에 작업을 위임합니다."
  - name: "코드 리뷰와 Slack"
    description: "GitHub 변경 사항을 자동으로 리뷰하고, ChatGPT 플랜에서 Slack 채널과 스레드의 요청을 처리합니다."
  - name: "GPT-5.6 모델 패밀리"
    description: "Sol은 가장 어려운 추론을 담당하고, Terra는 일상적인 실전 작업을 처리하며, Luna는 가벼운 작업에 가장 높은 한도를 제공합니다."
  - name: "커스터마이징"
    description: "AGENTS.md를 통한 프로젝트 안내와 더불어 skills, 플러그인, MCP 서버, 커스텀 서브에이전트를 지원합니다."
useCases:
  - "CLI에게 실패한 테스트 스위트를 고치도록 요청하고, 샌드박스 밖에서 실행되는 각 명령을 승인합니다."
  - "긴 리팩터링을 Codex 클라우드에 맡기고 나중에 iOS 앱에서 결과 diff를 리뷰합니다."
  - "자동 코드 리뷰를 켜서 모든 GitHub 풀 리퀘스트가 팀원이 보기 전에 먼저 검토받게 합니다."
pricingSummary: "Codex는 ChatGPT Free($0), Go(월 $8), Plus(월 $20), Pro(월 $100, $200 또는 $500, 새로운 $500 등급은 Astra Ultrafast 추가)에 포함됩니다. Business는 사용자당 월 $25 또는 연간 결제 시 월 $20이며, API 키 사용은 API 요금으로 청구됩니다."
savingTips:
  - "한도에 도달한 Plus와 Pro 사용자는 플랜 전체를 업그레이드하는 대신 ChatGPT 크레딧을 구매할 수 있습니다."
  - "GPT-5.6 Luna로 전환하면 Sol보다 5시간당 훨씬 많은 로컬 메시지를 받아 어떤 플랜이든 더 오래 씁니다."
  - "오픈소스 메인테이너는 Codex for Open Source 프로그램에 신청해 API 크레딧과 Codex가 포함된 ChatGPT Pro 6개월을 받을 수 있습니다."
faq:
  - q: "OpenAI Codex는 무료인가요?"
    a: "한도 내에서는 네. ChatGPT Free에는 간단한 코딩 작업용 Codex가 포함되고, 월 $8인 Go는 가벼운 작업을 다룹니다. 월 $20인 Plus는 자동 코드 리뷰나 Slack 같은 클라우드 연동을 제공합니다."
  - q: "ChatGPT Plus에는 Codex 메시지가 몇 개 포함되나요?"
    a: "OpenAI는 Plus에서 5시간 창당 로컬 GPT-5.6 Sol 메시지 10~100개 또는 GPT-5.6 Luna 메시지 250~2,000개로 추정합니다. 주간 한도가 추가로 적용될 수 있으며 클라우드 채팅은 더 많이 소모합니다."
  - q: "Codex를 ChatGPT 대신 API 키로 쓸 수 있나요?"
    a: "네. API 키를 쓰면 Codex는 CLI, SDK, IDE 확장 프로그램에서 작동하고 API 요금으로 청구되지만, GitHub 코드 리뷰나 Slack 같은 클라우드 기능은 이용할 수 없습니다."
  - q: "2026년 Codex는 어떤 모델을 쓰나요?"
    a: "ChatGPT 플랜은 GPT-5.6 패밀리(Sol, Terra, Luna)와 GPT-6 Astra를 받습니다. Pro는 리서치 프리뷰 상태의 GPT-5.3-Codex-Spark를 추가로 제공하며, GPT-5.5는 2026년 10월 14일 Codex에서 지원이 종료됩니다."
---
## OpenAI Codex란?
Codex는 별도로 판매되는 것이 아니라 ChatGPT 계정에 연결된 OpenAI의 소프트웨어 작업용 에이전트입니다. OpenAI의 Codex 문서는 이제 ChatGPT 문서 안에 있으며, Codex 사용량은 ChatGPT Work와 공유되므로 둘 다 같은 한도와 크레딧을 씁니다.

## 누구에게 맞나요
이미 ChatGPT를 결제 중이고 채팅과 코딩을 하나의 구독으로 다루고 싶은 개발자에게 맞습니다. 팀은 Codex SDK, GitHub Action, 앱 서버 프로토콜을 추가해 Codex를 자체 도구와 CI에 내장할 수 있습니다.

## 한계
- 한도는 고정된 수치가 아니라 추정치이며, 긴 세션, 큰 코드베이스, 빠른 모드, 이미지 생성은 사용량을 더 빨리 소모합니다.
- 클라우드 채팅은 GPT-5.6 Sol에서 실행되며 로컬 메시지보다 더 많이 소모할 수 있습니다.
- GPT-5.3-Codex-Spark는 Pro 전용이며 별도의 한도를 가집니다.
- API 키 사용자는 코드 리뷰와 Slack을 포함한 클라우드 기능을 이용할 수 없습니다.
