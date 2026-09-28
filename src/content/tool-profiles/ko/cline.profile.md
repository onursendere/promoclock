---
summary: "Cline은 Cline Bot Inc.가 만든 오픈소스 AI 코딩 에이전트로, VS Code, JetBrains IDE, 터미널, 데스크톱 앱에서 실행됩니다. 개인 개발자는 무료로 쓰며 자신의 모델 API 키를 연결하거나 원가로 추론 비용을 지불하고, 파일 수정이나 명령 실행 전에 항상 승인을 요청합니다."
metaTitle: "Cline 요금 정리: 오픈소스 코딩 에이전트는 무료일까?"
metaDescription: "Cline은 무료 오픈소스이며 AI 추론 비용만 지불하거나 자신의 키를 사용합니다. ClinePass 월 $9.99, 지원 에디터, 한도를 확인하세요."
bestFor:
  - "모델 선택권을 원하는 개발자"
  - "비용에 민감한 VS Code 사용자"
  - "오픈소스 도구가 필요한 팀"
keyFeatures:
  - name: "Plan 모드와 Act 모드"
    description: "Plan 모드에서 먼저 접근 방식을 구상한 뒤 Act 모드로 전환해 에이전트가 작업할 때마다 각 도구 호출을 승인합니다."
  - name: "체크포인트"
    description: "모든 도구 호출이 에디터 내 시각적 diff와 함께 체크포인트를 만들어 /undo로 언제든 되돌릴 수 있습니다."
  - name: "모든 모델 제공사"
    description: "Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek 또는 로컬 엔드포인트를 자신의 API 키로 연결합니다."
  - name: "MCP 마켓플레이스"
    description: "마켓플레이스나 직접 만든 MCP 서버를 추가해 Cline이 버그 트래커, 배포 플랫폼, 데이터 웨어하우스에 접근하게 합니다."
  - name: "CLI의 칸반 보드"
    description: "cline --kanban을 실행하면 Claude Code와 Codex 세션을 포함해 분리된 git worktree에서 여러 에이전트를 병렬로 관리할 수 있습니다."
  - name: "Skills와 훅"
    description: "Skills는 테스트 스위트 실행 같은 재사용 가능한 노하우를 패키징하고, 훅은 스크립트가 모든 도구 호출을 제어하거나 형태를 바꾸게 합니다."
useCases:
  - "VS Code에서 모듈을 리팩터링하며 에이전트가 제안하는 각 파일 수정과 터미널 명령을 승인합니다."
  - "백로그를 칸반 카드로 나누고 여러 에이전트가 격리된 git worktree에서 작업하게 합니다."
  - "OpenAI 호환 서버를 통해 Cline을 로컬 모델에 연결해 코드를 자신의 머신에만 둡니다."
  - "Linear MCP 서버를 연결해 에이전트가 티켓을 읽고 연결된 작업으로 바꾸게 합니다."
pricingSummary: "Cline 에이전트는 개인에게 좌석 요금 없이 무료이며, 자신의 키로 모델 제공사에 직접 지불하거나 Cline에서 원가로 추론을 구매합니다. 오픈웨이트 모델 구독인 ClinePass는 월 $9.99이며, Enterprise 요금은 별도 문의가 필요합니다."
savingTips:
  - "자신의 API 키를 사용하면 Cline의 추가 마진이나 구독 없이 제공사 요금을 그대로 지불합니다."
  - "ClinePass는 GLM 5.3, Kimi K3, DeepSeek V4 같은 오픈웨이트 모델을 월 $9.99에 묶어 제공사별 계정을 따로 만들 필요가 없습니다."
  - "OpenAI 호환 엔드포인트로 연결한 로컬 모델은 토큰당 API 비용을 아예 피할 수 있습니다."
faq:
  - q: "Cline은 무료인가요?"
    a: "네. 오픈소스인 Cline 확장 프로그램, CLI, 데스크톱 앱은 개인 개발자에게 무료입니다. 사용하는 AI 모델 비용만 지불하며, 자신의 제공사 API 키를 쓰거나 Cline에서 원가로 추론을 구매할 수 있습니다."
  - q: "ClinePass는 무엇인가요?"
    a: "ClinePass는 Cline의 IDE 확장 프로그램과 CLI 안에서 Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo, Qwen의 오픈웨이트 모델을 쓸 수 있는 월 $9.99 구독입니다. Cline은 자사 한도가 표준 API 속도 제한 대비 2~5배의 사용량을 준다고 밝혔습니다."
  - q: "Cline은 JetBrains IDE와 Cursor에서 작동하나요?"
    a: "네. JetBrains 플러그인은 IntelliJ IDEA, PyCharm, WebStorm, GoLand 등에서 얼리 액세스 상태입니다. Cursor와 Windsurf에서는 VS Code 마켓플레이스의 동일한 확장 프로그램을 설치하면 됩니다."
  - q: "Cline은 오픈소스인가요?"
    a: "네. Cline의 소스 코드는 github.com/cline/cline에 Apache 2.0 라이선스로 공개되어 있습니다. 에이전트가 클라이언트 측에서 실행되므로 Cline 자체 서비스에 묶이지 않고 제공사를 바꾸거나 모델을 셀프 호스팅할 수 있습니다."
  - q: "Cline Enterprise는 무엇을 추가로 제공하나요?"
    a: "Enterprise는 SSO, SCIM 프로비저닝, 중앙 결제, 역할 기반 접근 제어, 팀이 쓸 수 있는 추론 제공사 제한, 감사 로그, VPC 배포, SLA, 전담 지원을 추가합니다. 요금은 영업팀 문의가 필요합니다."
---
## Cline이란?
Cline은 별도의 호스팅 서비스가 아니라 에디터나 터미널 안에서 직접 작동하는 자율 코딩 에이전트입니다. 지정한 파일을 읽고, 코드를 수정하고, 명령을 실행하고, 브라우저를 조작하며, 더 많은 자율성을 허용하지 않는 한 매 단계마다 승인을 기다립니다.

## 실행 환경
- **VS Code 확장 프로그램**으로, Cursor와 Windsurf에도 설치할 수 있습니다.
- **JetBrains 플러그인**은 얼리 액세스 상태입니다.
- **CLI**는 칸반 보드, 플러그인, 스케줄, 헤드리스 CI 사용을 지원합니다.
- **Cline for Desktop**은 macOS와 Windows용 베타 독립 앱입니다.
- **SDK**로 에이전트를 다른 도구에 내장할 수 있습니다.

## 한계
비용은 전적으로 사용하는 모델과 토큰에 달려 있어 프런티어 모델로 긴 에이전트 세션을 돌리면 비용이 커질 수 있고, ClinePass는 오픈웨이트 모델만 다룹니다. 데스크톱 앱은 아직 베타 단계이며 Cline도 다소 거친 부분이 있을 수 있다고 안내합니다. 개인용 무료 모델 사용량은 별도로 제공되지 않습니다.
