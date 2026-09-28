---
summary: "Windsurf는 Devin 에이전트를 만든 Cognition이 2025년 7월 인수한 AI 코드 에디터로, 2026년 6월 2일 Devin Desktop으로 이름이 바뀌었습니다. 같은 IDE가 이제 로컬·클라우드 에이전트를 관리하는 Agent Command Center로 시작되며, 플랜과 가격은 그대로 유지됩니다. 개발자는 이를 VS Code 대신 쓰는 에이전트 중심 대안으로 사용합니다."
metaTitle: "Windsurf, Devin Desktop으로 개명: 요금제와 무료 플랜"
metaDescription: "Windsurf는 2026년 6월 Devin Desktop으로 이름이 바뀌었습니다. 달라진 점, Free·Pro(월 $20)·Max 플랜, 쿼터 기반 사용량, 기능과 대안을 확인하세요."
bestFor:
  - "VS Code에서 넘어오는 개발자"
  - "여러 에이전트를 동시에 다루는 엔지니어"
  - "기존 Windsurf 구독자"
keyFeatures:
  - name: "Agent Command Center"
    description: "실행 중인 모든 로컬·클라우드 에이전트를 보여주는 칸반 보드로, 세션·풀 리퀘스트·파일·공유 컨텍스트를 묶는 Spaces를 제공합니다."
  - name: "Devin Local 에이전트"
    description: "Cascade를 대체한 Rust 재작성 버전으로, 토큰을 최대 30% 적게 쓰며 서브에이전트와 OS 수준 샌드박싱을 지원합니다."
  - name: "ACP 기반 서드파티 에이전트"
    description: "Agent Client Protocol을 통해 Codex, Claude Agent, OpenCode와 자체 제작 에이전트를 같은 칸반 화면에서 실행합니다."
  - name: "완전한 IDE 기반"
    description: "에디터, 확장 프로그램, 키바인딩, LSP가 Windsurf와 VS Code와 호환되며, Cursor 설정도 가져올 수 있습니다."
  - name: "탭 및 인라인 편집"
    description: "Free를 포함한 모든 플랜에서 무제한 Tab 완성과 인라인 Command 편집을 제공합니다."
  - name: "Fast Context"
    description: "SWE-grep 모델 기반의 검색 서브에이전트로, 관련 코드를 최대 20배 빠르게 찾아냅니다."
useCases:
  - "로컬 에이전트로 리팩터링을 진행하는 동안 클라우드 Devin 세션이 버그를 고치게 하고, 하나의 보드에서 둘 다 검토합니다."
  - "다른 도구로 갈아타지 않고 같은 에디터 안에서 Claude Agent나 Codex를 계속 사용합니다."
  - "규칙과 메모리를 포함한 기존 Windsurf 설정을 내장 마법사로 Devin Local로 옮깁니다."
pricingSummary: "Free는 무제한 Tab 완성과 함께 가벼운 쿼터를 제공합니다. Pro는 월 $20, Max는 훨씬 높은 쿼터와 함께 월 $200이며, Teams는 월 $80부터 시작해 정규 좌석은 좌석당 $40입니다. Enterprise는 맞춤 견적입니다."
savingTips:
  - "무료 모델은 쿼터를 소모하지 않으며, SWE-1.7 같은 저비용 SWE 모델을 쓰면 유료 한도를 더 오래 늘려 쓸 수 있습니다."
  - "2026년 3월 쿼터 전환 이전부터 Windsurf Pro를 쓰던 구독자는 월 $15의 그랜드파더 가격을 무기한 유지합니다."
faq:
  - q: "Windsurf는 서비스가 종료됐나요?"
    a: "아니요, 이름만 바뀌었습니다. 2026년 6월 2일 무선 업데이트로 Windsurf가 Devin Desktop이 되었고, 에디터·확장 프로그램·설정·플랜은 그대로 유지됩니다. windsurf.com은 이제 devin.ai로 리디렉션됩니다."
  - q: "Windsurf는 지금 누구 소유인가요?"
    a: "Devin 코딩 에이전트를 만든 Cognition입니다. 2025년 7월 14일 Windsurf의 IP, 제품, 상표, 브랜드, 팀을 인수한다고 발표했으며, 이후 이 에디터를 Devin 제품군에 편입했습니다."
  - q: "변경 이후 사용 한도는 어떻게 작동하나요?"
    a: "2026년 3월부터 각 플랜에는 프롬프트 크레딧 대신 일일·주간 토큰 기반 쿼터가 적용됩니다. Free 사용자는 초기화를 기다려야 하고, Pro·Max·Teams 사용자는 API 정가로 추가 사용량을 구매할 수 있습니다."
  - q: "Cascade는 어떻게 됐나요?"
    a: "Devin Local이 주요 로컬 에이전트로서 Cascade를 대체했습니다. Cognition은 점진적 이전을 위해 2026년 7월까지 Cascade를 유지했으며, 커맨드 팔레트 마법사가 워크플로와 메모리를 옮겨줍니다."
---
## Windsurf에 무슨 일이 있었나?
Windsurf는 Codeium의 에디터로 시작해 2025년 Cognition으로 넘어갔습니다. 2026년 6월 Cognition은 자사 제품을 하나의 브랜드로 통합했습니다. IDE는 Devin Desktop, 자율 클라우드 에이전트는 Devin Cloud, 터미널은 Devin CLI, 코드 리뷰는 Devin Review입니다. `.windsurfrules`를 포함한 기존 Windsurf 규칙은 계속 작동합니다.

## 누구에게 적합한가
Devin Desktop은 여러 에이전트를 동시에 감독하는 데 최적화된 에디터를 원하는 개발자에게 적합합니다. Devin Cloud가 없어도 사용할 수 있으며, 로컬 전용 에이전트만으로도 잘 작동합니다.

## 한계
- 쿼터가 토큰 단위로 측정되므로 프런티어 모델과 긴 세션은 일일·주간 예산을 훨씬 빠르게 소진합니다.
- Windsurf JetBrains 플러그인은 유지보수 모드로 전환되었으며, Cognition은 대신 ACP를 통해 JetBrains에서 Devin을 실행할 것을 권장합니다.
- 유료 플랜의 무료 체험은 일부 대상 고객에게만 제공됩니다.
- Teams에서는 정규 좌석만 Devin Desktop을 포함하며, 신규 Teams 플랜에는 더 이상 SSO가 포함되지 않습니다.
