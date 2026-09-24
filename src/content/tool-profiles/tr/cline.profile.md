---
summary: "Cline, Cline Bot Inc. tarafından geliştirilen ve VS Code'da, JetBrains IDE'lerinde, terminalde ve bir masaüstü uygulamasında çalışan açık kaynak bir AI kodlama ajanı. Bireysel geliştiriciler için ücretsiz: kendi model API anahtarlarını bağlarsın ya da çıkarımı (inference) Cline'dan maliyet fiyatına alırsın. Dosyaları düzenlemeden veya komut çalıştırmadan önce onayını ister."
metaTitle: "Cline fiyatları: açık kaynak kodlama ajanı ücretsiz mi?"
metaDescription: "Cline ücretsiz ve açık kaynak; yalnızca AI çıkarımı için ödersin ya da kendi API anahtarını kullanırsın. Aylık $9.99 ClinePass, desteklenen editörler ve sınırlar."
bestFor:
  - "Model seçimi isteyen geliştiriciler"
  - "Maliyet bilinçli VS Code kullanıcıları"
  - "Açık kaynak araç isteyen ekipler"
keyFeatures:
  - name: "Plan ve Act modları"
    description: "Önce Plan modunda bir yaklaşım çiz, sonra Act moduna geç ve ajan çalışırken her araç çağrısını onayla."
  - name: "Kontrol noktaları"
    description: "Her araç çağrısı, editörde görsel diff'lerle bir kontrol noktası oluşturur; böylece herhangi bir değişikliği /undo ile geri alabilirsin."
  - name: "Her model sağlayıcı"
    description: "Kendi API anahtarınla Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek ya da yerel bir uç noktaya bağlan."
  - name: "MCP Marketplace"
    description: "Marketplace'ten ya da kendi MCP sunucularını ekle; Cline hata takip sistemlerine, dağıtım platformlarına ve veri ambarlarına ulaşabilsin."
  - name: "CLI'da Kanban panosu"
    description: "Claude Code ve Codex oturumları dahil, ayrı git worktree'lerinde paralel ajanları yönetmek için cline --kanban komutunu çalıştır."
  - name: "Skills ve hooks"
    description: "Skills, test paketini çalıştırmak gibi tekrar kullanılabilir bilgileri paketler; hooks ise betiklerin her araç çağrısını durdurmasına ya da şekillendirmesine izin verir."
useCases:
  - "Ajanın önerdiği her dosya düzenlemesini ve terminal komutunu onaylayarak VS Code'da bir modülü yeniden düzenle."
  - "Bir iş listesini Kanban kartlarına böl ve birkaç ajanın bunlar üzerinde yalıtılmış git worktree'lerinde çalışmasına izin ver."
  - "Kodu kendi makinende tutmak için Cline'ı OpenAI uyumlu bir sunucu üzerinden yerel bir modele yönlendir."
  - "Ajanın Linear'daki kayıtları okuyup bağlantılı görevlere dönüştürmesi için bir Linear MCP sunucusu bağla."
pricingSummary: "Cline ajanı bireyler için ücretsiz ve koltuk ücreti yok; model sağlayıcılarına kendi anahtarlarınla ödersin ya da çıkarımı Cline'dan maliyet fiyatına alırsın. İsteğe bağlı açık ağırlıklı model aboneliği ClinePass aylık $9.99, Enterprise fiyatı ise özel."
savingTips:
  - "Kendi API anahtarlarını kullanarak sağlayıcı ücretlerini doğrudan öde; Cline'dan abonelik ya da ek ücret yok."
  - "ClinePass; GLM 5.3, Kimi K3 ve DeepSeek V4 gibi açık ağırlıklı modelleri ayrı sağlayıcı hesapları yerine aylık $9.99'a bir araya getirir."
  - "OpenAI uyumlu bir uç nokta üzerinden bağlanan yerel modeller, token başına API ücretlerini tamamen ortadan kaldırır."
faq:
  - q: "Cline ücretsiz mi?"
    a: "Evet. Açık kaynak Cline eklentisi, CLI'ı ve masaüstü uygulaması bireysel geliştiriciler için ücretsiz. Yalnızca kullandığın AI modelleri için ödersin; bunu kendi sağlayıcı API anahtarlarınla ya da çıkarımı Cline'dan maliyet fiyatına alarak yaparsın."
  - q: "ClinePass nedir?"
    a: "ClinePass; Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo ve Qwen'in açık ağırlıklı modellerini Cline'ın IDE eklentisi ve CLI'ı içinde sunan, aylık $9.99 tutarında bir abonelik. Cline, kotalarının standart API hız limitlerinin 2–5 katı kullanım sağladığını söylüyor."
  - q: "Cline JetBrains IDE'lerinde ve Cursor'da çalışır mı?"
    a: "Evet. JetBrains eklentisi IntelliJ IDEA, PyCharm, WebStorm, GoLand ve diğer JetBrains IDE'leri için erken erişimde. Cursor ve Windsurf'te ise aynı eklentiyi VS Code Marketplace'ten kurarsın."
  - q: "Cline açık kaynak mı?"
    a: "Evet. Cline'ın kaynak kodu Apache 2.0 lisansıyla GitHub'da, github.com/cline/cline adresinde. Ajan istemci tarafında çalıştığı için Cline'ın kendi servislerine bağlı kalmadan sağlayıcı değiştirebilir ya da modelleri kendin barındırabilirsin."
  - q: "Cline Enterprise neler ekliyor?"
    a: "Enterprise; SSO, SCIM ile kullanıcı sağlama, merkezi faturalandırma, rol tabanlı erişim kontrolü, ekiplerin kullanabileceği çıkarım sağlayıcılarına sınırlar, denetim kayıtları, VPC dağıtımları, SLA ve özel destek ekler. Fiyat için satış ekibiyle iletişime geçmek gerekir."
---
## Cline nedir?
Cline, ayrı bir barındırılan servis olarak değil, editörünün ya da terminalinin içinde çalışan otonom bir kodlama ajanı. Gösterdiğin dosyaları okur, kodu düzenler, komut çalıştırır ve bir tarayıcıyı yönetir; daha fazla özerklik tanımadıkça her adımda onayını bekler.

## Nerede çalışır?
- **VS Code eklentisi**; Cursor ve Windsurf'e de kurulabilir.
- Erken erişimdeki **JetBrains eklentisi**.
- Kanban panosu, eklentiler, zamanlamalar ve arayüzsüz CI kullanımı sunan **CLI**.
- macOS ve Windows için beta aşamasındaki bağımsız uygulama **Cline for Desktop**.
- Ajanı başka araçlara gömmek için **SDK**.

## Sınırlamalar
Maliyet tamamen kullandığın modellere ve tokenlara bağlı; öncü modellerle uzun ajan oturumları pahalıya gelebilir, ClinePass ise yalnızca açık ağırlıklı modelleri kapsar. Masaüstü uygulaması hâlâ beta aşamasında ve Cline pürüzler olabileceği konusunda uyarıyor. Bireyler için pakete dahil ücretsiz bir model kullanım hakkı yok.
