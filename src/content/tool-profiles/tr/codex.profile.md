---
summary: "OpenAI Codex, OpenAI'ın Free'den Enterprise'a kadar her ChatGPT planına dahil olan kodlama ajanı. Terminalde, VS Code benzeri editörlerde, ChatGPT masaüstü ve web uygulamalarında, iOS'ta ve yalıtılmış bulut ortamlarında çalışır. Geliştiriciler onu kod yazmak, yeniden düzenlemek ve incelemek için kullanır; kullanım hakkı ChatGPT Work ile ortaktır."
metaTitle: "OpenAI Codex fiyatları, limitler ve ücretsiz erişim (2026)"
metaDescription: "OpenAI Codex fiyatları 2026: ChatGPT Free, Go ($8), Plus ($20) ve Pro (en az $100) planlarına dahil. Plan başına limitler, platformlar, modeller ve alternatifler."
bestFor:
  - "ChatGPT aboneliği olan geliştiriciler"
  - "Terminal odaklı mühendisler"
  - "Kod incelemeyi otomatikleştiren ekipler"
keyFeatures:
  - name: "Codex CLI"
    description: "Kodu yerel olarak okuyan, düzenleyen ve çalıştıran bir terminal ajanı; sandbox, onay kuralları ve betiklenebilir komut satırı seçenekleri sunar."
  - name: "IDE eklentisi"
    description: "VS Code, Cursor ve Windsurf'te çalışır; JetBrains IDE'leri ve Xcode ise kendi Codex entegrasyonlarını sunar."
  - name: "Codex cloud"
    description: "Görevleri, bağımlılıkları yapılandırılabilen ve internet erişimi kontrol edilen yalıtılmış bulut ortamlarına devreder."
  - name: "Kod inceleme ve Slack"
    description: "ChatGPT planlarında GitHub değişikliklerini otomatik olarak inceler, Slack kanallarından ve mesaj dizilerinden istek alır."
  - name: "GPT-6 model ailesi"
    description: "GPT-6 Astra en zor işleri üstlenir, GPT-6.1 Sol daha düşük maliyetle ona yaklaşır, GPT-6 Luna ise hafif görevler için en yüksek limitleri verir."
  - name: "Özelleştirme"
    description: "AGENTS.md ile proje yönergeleri, ayrıca skills, eklentiler, MCP sunucuları ve özel alt ajanlar."
useCases:
  - "CLI'dan başarısız bir test paketini düzeltmesini iste ve sandbox dışında çalışacak her komutu önceden onayla."
  - "Uzun bir yeniden düzenleme işini Codex cloud'a devret, ortaya çıkan diff'i daha sonra iOS uygulamasından incele."
  - "Otomatik kod incelemeyi aç; her GitHub pull request'i ekip arkadaşların bakmadan önce bir ilk incelemeden geçsin."
pricingSummary: "Codex, ChatGPT Free ($0), Go (aylık $8), Plus (aylık $20) ve Pro (aylık $100, $200 ya da $500; yeni $500 seviyesi Astra Ultrafast'ı ekliyor) planlarına dahil. Business kullanıcı başına aylık $25 ya da yıllık faturalama ile $20; API anahtarı kullanımı API ücretleriyle faturalandırılır."
savingTips:
  - "Limite takılan Plus ve Pro kullanıcıları, tüm planı yükseltmek yerine ChatGPT kredisi satın alabilir."
  - "GPT-6 Luna'ya geçmek beş saatte Sol'dan çok daha fazla yerel mesaj verir; bu da her planı daha uzun idare ettirir."
  - "Açık kaynak projelerin bakımcıları, API kredisi ve altı ay Codex'li ChatGPT Pro için Codex for Open Source programına başvurabilir."
faq:
  - q: "OpenAI Codex ücretsiz mi?"
    a: "Evet, limitlerle. ChatGPT Free hızlı kodlama görevleri için Codex içerir, aylık $8 olan Go ise hafif işleri karşılar. Aylık $20 olan Plus, otomatik kod inceleme ve Slack gibi bulut entegrasyonlarını listeler."
  - q: "ChatGPT Plus'ta kaç Codex mesajı var?"
    a: "OpenAI, Plus'ta beş saatlik pencere başına 15 ile 160 arası yerel GPT-6.1 Sol mesajı ya da 350 ile 3.000 arası GPT-6 Luna mesajı, GPT-6 Astra ile ise 5 ile 45 arası mesaj öngörüyor. Haftalık limitler de uygulanabilir ve bulut sohbetleri daha fazla harcar."
  - q: "Codex, ChatGPT yerine API anahtarıyla çalışır mı?"
    a: "Evet. API anahtarıyla Codex; CLI'da, SDK'da ve IDE eklentisinde çalışır ve API fiyatlarıyla faturalandırılır, ancak GitHub kod incelemesi ve Slack gibi bulut özellikleri kullanılamaz."
  - q: "Codex 2026'da hangi modelleri kullanıyor?"
    a: "OpenAI; GPT-6 Astra, GPT-6.1 Sol ve GPT-6 Luna modellerini öneriyor. GPT-6.1 Sol kademeli olarak Plus, Pro, Business, Enterprise ve Edu'ya açılıyor; Free ve Go ise GPT-6 Luna kullanıyor. GPT-5.3-Codex-Spark 14 Eylül 2026'da kullanımdan kaldırıldı, GPT-5.5 ise 14 Ekim 2026'da Codex'ten kaldırılıyor."
---
## OpenAI Codex nedir?
Codex, OpenAI'ın yazılım işleri için geliştirdiği ajan; tek başına satılmıyor, bir ChatGPT hesabına bağlı. OpenAI'ın Codex belgeleri artık ChatGPT belgelerinin içinde ve Codex kullanımı ChatGPT Work ile ortak; ikisi de aynı limitlerden ve kredilerden harcar.

## Kimler için?
Zaten ChatGPT'ye ödeme yapan ve sohbeti de kodlamayı da tek abonelikle karşılamak isteyen geliştiricilere uygun. Ekipler, Codex'i kendi araçlarına ve CI süreçlerine yerleştirmek için Codex SDK'sını, bir GitHub Action'ı ve bir app-server protokolünü kullanabilir.

## Sınırlamalar
- Limitler sabit sayılar değil, tahminler; uzun oturumlar, büyük kod tabanları, hızlı mod ve görsel üretimi kullanım hakkını daha hızlı tüketir.
- Bulut sohbetleri, limitinin yerel mesajlardan daha fazlasını harcayabilir.
- Yeni modeller kademeli olarak açılır; bu yüzden Free ve Go kullanıcıları en yeni Sol modelini daha geç alır.
- API anahtarı kullananlar, kod inceleme ve Slack dahil bulut özelliklerini kaybeder.
