---
summary: "Warp, istemcisi Nisan 2026'da AGPL altında açık kaynak olan New York merkezli Warp şirketinin yerleşik bir kodlama ajanı olan modern bir terminali. Geliştiriciler onu komut çalıştırmak ve çok adımlı kodlama işlerini Warp Agent'a devretmek için kullanır; ekipler ise otomatik hatlar için bulut ajanları ve Warp Factories ekler."
metaTitle: "Warp fiyatları, ücretsiz plan ve AI ajanı (2026)"
metaDescription: "Warp fiyatları 2026: terminal ücretsiz, Build 1.500 AI kredisiyle aylık $20, Max aylık $200. Özellikler, BYOK seçenekleri ve limitler için buraya bak."
bestFor:
  - "Terminal yoğun geliştiriciler"
  - "DevOps ve platform mühendisleri"
  - "Kod incelemesini otomatikleştirenler"
keyFeatures:
  - name: "Ajan tabanlı terminal"
    description: "Komut yazmaktan Warp Agent'tan kod planlamasını ve düzenlemesini istemeye geçebileceğin hızlı, modern bir terminal."
  - name: "Warp Agent CLI"
    description: "Warp'ın kodlama ajanını yalnızca Warp uygulamasında değil, herhangi bir terminalde çalıştır; erişim her plana dahildir."
  - name: "Model seçimi"
    description: "Görev başına Claude Opus 5, GPT-5.6, Gemini 3.1 Pro ya da Kimi K3 gibi modelleri seç ya da görevleri farklı modellerde paralel çalıştır."
  - name: "Bulut ajanları ve entegrasyonlar"
    description: "Hataları araştırmak ya da pull request açmak için Slack, Linear ya da GitHub'da @Warp'tan bahset; paylaşılabilir canlı oturum bağlantılarıyla."
  - name: "Warp Drive"
    description: "İş akışlarını, not defterlerini ve diğer nesneleri ekip arkadaşlarınla kaydet ve paylaş; ücretli planlar nesne limitlerini kaldırır."
  - name: "Warp Factories"
    description: "GitHub, Slack, webhook'lar ya da zamanlamalardan kodlama ajanı filoları çalıştıran, kod olarak yapılandırılan erken erişimli bir kontrol düzlemi."
useCases:
  - "Ajandan terminal çıktısından başarısız bir derlemeyi teşhis etmesini iste ve kabuktan çıkmadan düzeltmeyi uygula."
  - "Bir ekip arkadaşı bakmadan önce her pull request'te ilk geçiş incelemesini bir bulut ajanına yaptır."
  - "Gelen Slack uyarılarını, sorunu yeniden üreten ve sonraki adımları özetleyen bir ajana yönlendir."
  - "Bir abonelik yerine kendi Anthropic ya da OpenAI API anahtarınla terminali ücretsiz kullan."
pricingSummary: "Free, terminali ve Agent CLI'yi kapsar ama paketlenmiş AI kullanımı içermez. Build 1.500 kredi ile aylık $20, Max 18.000 kredi ile aylık $200 ve Business en fazla 25 koltuk için kullanıcı başına aylık $50."
savingTips:
  - "Yıllık faturalandırma %10 indirim sunar, bu da Build'i aylık $18'e ve Max'i aylık $180'e getirir."
  - "Free planda Warp Agent'ı, kredi ödemek yerine kendi API anahtarınla ya da özel bir çıkarım uç noktasıyla kullanabilirsin."
  - "SuperGrok ve X Premium aboneleri, bu aboneliği Warp Agent'ın çıkarım kaynağı olarak bağlayabilir."
faq:
  - q: "Warp ücretsiz mi?"
    a: "Evet. Free plan tam terminali, Warp Agent CLI erişimini ve sınırlı bulut ajanlarını içerir, ama paketlenmiş AI kullanımı içermez. Ajanı kullanmak için kendi API anahtarını ya da çıkarım uç noktanı getirir, ek kredi satın alır ya da yükseltirsin."
  - q: "Warp açık kaynak mı?"
    a: "Evet. 28 Nisan 2026'dan bu yana Warp istemci kaynak kodu, AGPL-3.0 lisansı altında github.com/warpdotdev/warp adresinde herkese açık. OpenAI, açık kaynak deposunun kurucu sponsorudur ve Warp'ın ücretli AI hizmetleri ticari olmayı sürdürür."
  - q: "Bir Warp kredisi neyi kapsar?"
    a: "Krediler ajan kullanımını API ücretlerinden öder. Build'in 1.500 kredisi $20'lik dahil kullanıma eşittir ve Max'in 18.000 kredisi bunun 12 katıdır. Ücretli planlar kredileri hacim indirimleri, otomatik yeniden yükleme ve bir harcama üst sınırıyla yenileyebilir."
  - q: "Warp hangi işletim sistemlerini destekler?"
    a: "Warp; macOS 10.14 ve üzerinde, Windows 10 ve 11'de x64 ve ARM64 sürümleriyle ve Linux'ta .deb, .rpm, Arch ve AppImage paketleri üzerinden çalışır. Agent CLI diğer terminallerin içinde de çalışır."
  - q: "Warp kodunun üzerinde eğitim yapar mı?"
    a: "Warp, sözleşmeli tüm LLM sağlayıcılarıyla Sıfır Veri Saklama anlaşmaları olduğunu, bu yüzden müşteri verisinin saklanmadığını ya da eğitim için kullanılmadığını söyler. SOC 2 uyumludur ve telemetri bireysel olarak yapılandırılabilir ya da ekipler için zorunlu kılınabilir."
---
## Warp nedir?
Warp daha hızlı bir terminal olarak başladı ve şimdi kendini ajan tabanlı bir geliştirme ortamı olarak konumluyor. Aynı uygulama, günlük kabuk işlerini ve kod yazan, çalıştıran ve düzelten ajan oturumlarını yönetir.

Nisan 2026'da Warp istemcisini açık kaynak yaptı ve Ağustos 2026'da yazılım yaşam döngüsü boyunca çok sayıda kodlama ajanı çalıştıran şirketler için Warp Factories'i başlattı. Terminal hâlâ kendi ürünü olarak sürdürülüyor.

## Pratikte planlar
Free, yalnızca terminali isteyenlere ya da model erişimi için zaten başka yerde ödeyenlere uyar. Build ve Max; ajan kullanımını, sınırsız Warp Drive nesnelerini ve bulut sohbet depolamasını paketler. Business; SAML SSO, ekip kullanım metrikleri ve yönetici veri kontrolleri ekler.

## Sınırlamalar
- Free plana hiçbir AI kullanımı paketlenmez.
- Krediler API ücretlerinden tüketilir, bu yüzden yoğun ajan kullanımı Build'in $20'lik hakkını hızla aşabilir.
- Business, self servis ekipleri 25 koltukla sınırlar; daha büyük gruplar Enterprise gerektirir.
- Warp Factories erken erişimdedir ve genel kullanıma açık değildir.
