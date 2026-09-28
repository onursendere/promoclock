---
summary: "Hugging Face는 같은 이름의 회사가 운영하는 오픈 AI 모델, 데이터셋, Spaces 데모 앱의 허브입니다. 개발자와 연구자가 오픈 가중치 모델을 내려받고, 공유 ZeroGPU 하드웨어에서 Gradio 데모를 호스팅하며, Inference Providers로 호스팅된 모델을 호출합니다. NVIDIA는 2026년 9월 3일 Hugging Face 인수 계약을 발표했습니다."
metaTitle: "Hugging Face 요금: PRO 플랜, 무료 플랜, 기능"
metaDescription: "Hugging Face는 무료로 가입할 수 있습니다. 월 $9 PRO, Team·Enterprise 좌석, ZeroGPU 할당량, 추론 크레딧과 NVIDIA 인수를 비교합니다."
bestFor:
  - "ML 엔지니어와 연구자"
  - "오픈소스 모델 게시자"
  - "AI 앱을 시연하는 개발자"
  - "비공개 모델을 호스팅하는 팀"
keyFeatures:
  - name: "모델·데이터셋 Hub"
    description: "Git 기반 저장소에서 오픈 가중치 모델과 데이터셋을 탐색, 다운로드, 버전 관리하며 공개 또는 비공개로 설정할 수 있습니다."
  - name: "Spaces"
    description: "Gradio, Docker, 정적 데모 앱을 호스팅하며 CPU Basic 하드웨어는 무료이고 Nvidia T4 small은 시간당 $0.40입니다."
  - name: "ZeroGPU"
    description: "Gradio Spaces가 함수 호출마다 NVIDIA RTX Pro 6000 Blackwell GPU를 빌려 쓰며, 계정 유형에 따른 일일 할당량 안에서 이용합니다."
  - name: "Inference Providers"
    description: "Hugging Face 토큰 하나로 파트너 제공업체의 모델을 호출하며, Hugging Face의 추가 마진 없이 제공업체 요금으로 청구됩니다."
  - name: "Inference Endpoints"
    description: "Hub의 모든 모델을 전용 오토스케일링 인프라에 배포하며 CPU 인스턴스는 시간당 $0.033부터 시작합니다."
  - name: "HuggingChat"
    description: "브라우저에서 오픈 모델과 대화하며, Omni 라우터가 요청마다 적합한 모델을 선택합니다."
  - name: "hf CLI와 클라이언트 라이브러리"
    description: "hf 명령과 huggingface_hub Python 라이브러리로 터미널에서 로그인하고 저장소를 내려받고 업로드합니다."
useCases:
  - "오픈 가중치 모델과 토크나이저를 내려받아 내 데이터로 로컬에서 파인튜닝합니다."
  - "연구 모델의 Gradio 데모를 ZeroGPU에 게시해 검토자가 브라우저에서 바로 써 보게 합니다."
  - "하나의 API 업체에 정하기 전에 Inference Providers로 여러 호스팅 LLM을 테스트합니다."
  - "Team 플랜에서 회사 팀에 비공개 모델용 SSO, 감사 로그, 스토리지 리전을 제공합니다."
pricingSummary: "Hub는 무료입니다. PRO는 월 $9로 월 $2의 컴퓨팅 크레딧과 8배 ZeroGPU 할당량을 제공하고, Team은 사용자당 월 $20, Enterprise는 $50입니다. Spaces GPU, Inference Endpoints, 추가 스토리지는 사용량에 따라 청구됩니다."
savingTips:
  - "무료 계정은 매월 Inference Providers 크레딧 $0.10을 받고, PRO는 Hugging Face 컴퓨팅 전반에 쓸 수 있는 $2.00으로 늘어납니다."
  - "ZeroGPU Spaces 이용은 무료입니다. 무료 계정은 하루 GPU 5분, PRO는 40분입니다."
  - "가입 후 30일이 지나고 이메일을 인증한 무료 계정은 비용 없이 ZeroGPU Spaces를 최대 2개 호스팅할 수 있습니다."
faq:
  - q: "Hugging Face는 무료로 쓸 수 있나요?"
    a: "네. 계정, 공개 모델·데이터셋 다운로드, CPU Basic Spaces, ZeroGPU Spaces는 비용이 없습니다. PRO, Team, Enterprise 플랜, 업그레이드된 Spaces 하드웨어, Inference Endpoints, 포함된 월 크레딧을 넘는 추론에 대해서만 비용을 냅니다."
  - q: "Hugging Face PRO에는 무엇이 포함되나요?"
    a: "PRO는 월 $9이며 월 $2.00의 컴퓨팅 크레딧, 최우선 대기열의 하루 40분 ZeroGPU 시간, 최대 10개의 ZeroGPU Spaces 호스팅, Spaces Dev Mode, 비공개 데이터셋 뷰어를 추가합니다."
  - q: "NVIDIA가 Hugging Face를 인수하나요?"
    a: "네. NVIDIA는 2026년 9월 3일 Hugging Face를 $12.93 billion에 인수하기로 합의했다고 발표했습니다. NVIDIA는 이 플랫폼이 생태계 전반의 모델, 클라우드, 하드웨어에 계속 열려 있으며 NVIDIA 컴퓨팅이 필수는 아니라고 밝혔습니다."
  - q: "ZeroGPU 일일 할당량은 어떻게 작동하나요?"
    a: "할당량은 계정에 따라 다릅니다. 비인증은 2분, 무료는 5분, PRO와 Team 구성원은 40분, Enterprise는 60분입니다. 유료 사용자는 10분당 $1의 선불 크레딧으로 한도를 넘어 계속 쓸 수 있습니다."
  - q: "내 제공업체 API 키를 가져와 쓸 수 있나요?"
    a: "네. Hugging Face 설정에서 커스텀 제공업체 키를 추가할 수 있으며, 그러면 제공업체가 직접 청구합니다. Hugging Face 월 크레딧은 Hugging Face를 통해 라우팅되고 청구되는 요청에만 적용됩니다."
---
## Hugging Face란?
Hugging Face는 오픈 AI 모델, 데이터셋, Spaces 앱의 공유 공간인 Hub를 운영합니다. 대부분의 활동은 공개이며 무료이고, 유료 플랜은 스토리지, 컴퓨팅 크레딧, 조직 제어를 추가합니다.

## 플랜 한눈에 보기
- **Free:** 공개 저장소, CPU Basic Spaces, 하루 5분의 ZeroGPU, 월 $0.10의 추론 크레딧.
- **PRO(월 $9):** 비공개 스토리지 10배, 추론 크레딧 20배, ZeroGPU 할당량 8배, Dev Mode.
- **Team(사용자당 월 $20):** SSO, 스토리지 리전, 감사 로그, 리소스 그룹.
- **Enterprise(사용자당 월 $50):** SCIM 프로비저닝, 가장 높은 한도, 전담 지원.

포함 한도를 넘는 스토리지는 TB당 가격이 책정되며, 비공개 저장소는 TB당 월 $12에서 $18입니다.

## 소유권 소식
2026년 9월 3일 NVIDIA는 Hugging Face 인수 계약을 발표했습니다. NVIDIA는 이 플랫폼이 생태계 전반의 오픈소스 및 오픈 가중치 모델을 계속 지원할 것이라고 밝혔습니다.

## 한계
ZeroGPU는 Gradio SDK에서만 작동하고 torch.compile을 지원하지 않으며, 무료 계정은 유료 계정보다 대기열 우선순위가 낮습니다. 무료로 제공되는 월 $0.10의 추론 허용량은 금세 소진됩니다. 모델 라이선스는 저장소마다 다르므로 상업적으로 사용하기 전에 각각 확인하세요.
