---
summary: "Kiro, Amazon Web Services'in spesifikasyon odaklı geliştirme (spec-driven development) üzerine kurulu, ajan tabanlı kodlama ortamı: ajanlar kod yazmadan önce istemler gereksinimlere, bir tasarıma ve görev listelerine dönüşür. Masaüstü IDE, CLI ve tarayıcı sürümü olarak sunulur; geliştiriciler onu AI'ın ürettiği kodu belgelenmiş amaca bağlı tutmak için kullanır."
metaTitle: "Kiro fiyatları 2026: ücretsiz plan ve öğrenci teklifi"
metaDescription: "Kiro fiyatları 2026: 50 kredilik ücretsiz plan, aylık $20 ile başlayan Pro, Pro Max ve Power planları, tanesi $0.04 olan ek krediler ve ücretsiz öğrenci kredileri."
bestFor:
  - "Koddan önce plan yapan geliştiriciler"
  - "AWS odaklı mühendislik ekipleri"
  - "Çok depolu yeniden düzenleme işleri"
keyFeatures:
  - name: "Spec modu"
    description: "Bir istemi kabul kriterleri içeren gereksinimlere, teknik bir tasarıma ve sıralı görevlere dönüştürür; ajanlar da bu görevleri uygular."
  - name: "Özellik tabanlı test"
    description: "Gereksinimlerdeki çelişkileri ve boşlukları denetler, ardından davranışı birkaç örnekle değil, tüm girdiler için geçerli olması gereken kurallarla test eder."
  - name: "Agent hooks ve steering"
    description: "Steering dosyaları kendi kurallarını her oturuma yükler; hook'lar ise belirli olaylar gerçekleştiğinde ajan eylemlerini otomatik olarak tetikler."
  - name: "Kiro Web"
    description: "Ücretli planlarda ajanlar yalıtılmış bulut sanal alanlarında (sandbox) çalışır, GitHub ve GitLab depoları üzerinde iş görür ve pull request teslim eder."
  - name: "Kiro CLI"
    description: "Aynı ajanı terminalde çalıştır, işi bulut oturumlarına devret ya da inceleme ve düzeltmeler için CI/CD'de arayüzsüz (headless) kullan."
  - name: "Auto ile model seçimi"
    description: "Auto kaliteyi, hızı ve maliyeti dengelemek için modelleri karıştırır; istersen kredi çarpanlarıyla Claude, GPT-5.6 ya da açık ağırlıklı modelleri kendin seçersin."
useCases:
  - "Yeni bir ödeme özelliği için spec yaz, üretilen tasarımı incele ve ajanların görev listesini adım adım tamamlamasına izin ver."
  - "Ortak bir kütüphanedeki değişikliği ve ona bağlı servisleri, birkaç depoyu kapsayan tek bir Kiro Web oturumunda koordine et."
  - "Bağımlılıkları güncelleyen ve her hafta incelemen için pull request açan, düzenli çalışan bir otomasyon zamanla."
  - "Pull request'leri bir insan bakmadan önce incelemesi için arayüzsüz Kiro CLI'ı bir CI hattında çalıştır."
pricingSummary: "Kiro Free ayda 50 kredi içerir. Pro aylık $20 karşılığında 1.000 kredi verir; Pro+ $40 ile 2.000, Pro Max $100 ile 5.000, Power ise $200 ile 10.000 kredi sunar. Ücretli planlarda ek kredilerin tanesi $0.04."
savingTips:
  - "Uygun üniversitelerdeki öğrenciler bir yıl boyunca her ay 1.000 krediyi ücretsiz alır."
  - "Rutin istemlerde Auto'da kal: Sonnet 4.6'yı doğrudan seçtiğinde aynı görev yaklaşık 1,3 kat daha fazla kredi harcar."
  - "Ek kredi paketleri 125 kredi karşılığı $5 ile başlar ve aylık plan kredilerinin aksine 12 ay geçerli kalır."
faq:
  - q: "Kiro ücretsiz mi?"
    a: "Evet. Kiro Free; ayda 50 kredi ve Claude Sonnet 4.5 ile Qwen3 Coder Next gibi açık ağırlıklı modellere hız limitli erişim sunan kalıcı bir ücretsiz plan. Enterprise hesaplarında ve AWS GovCloud (US) bölgelerinde sunulmuyor."
  - q: "Kiro kredisi nedir?"
    a: "Kredi, iki ondalık basamağa kadar ölçülen bir ajan iş birimi. Basit istemler 1 krediden az harcayabilirken spec görevleri genellikle daha fazlasını kullanır. Güçlü modellerin çarpanları daha yüksek ve kullanılmayan aylık krediler sonraki aya devretmez."
  - q: "Kiro'da öğrenci planı var mı?"
    a: "Evet. Katılımcı üniversitelerdeki doğrulanmış öğrenciler bir yıl boyunca her ay 1.000 krediyi ücretsiz alır; bu, Pro ile aynı kullanım hakkı. Program Eylül 2026'da 132 uygun üniversiteyi listeliyordu, bu yüzden kaydolmadan önce listeye bak."
  - q: "Kiro aboneliği Kiro uygulamaları dışında kullanılabilir mi?"
    a: "Kısmen. Krediler Kiro IDE, Kiro CLI, Kiro Web, Kiro Crew, ACP uyumlu IDE'ler ve CI otomasyonunda geçerli. İstekleri OpenClaw gibi üçüncü taraf ajan araçları (harness) üzerinden yönlendirmeye izin verilmiyor."
  - q: "Kiro Web, Pro planına dahil mi?"
    a: "Evet. Kiro Web; Pro, Pro+, Pro Max ve Power planlarında var ve bulut işlem gücü için ayrı ücret alınmadan IDE ve CLI ile aynı kredilerden harcar. Ücretsiz plandaki kullanıcılar Kiro Web'i kullanamaz."
---
## Kiro nedir?
Kiro, AWS'nin AI ajanlarıyla yapılandırılmış bir şekilde çalışmak için geliştirdiği ortam. Doğrudan istemden koda atlamak yerine Spec modu, senin onayladığın gereksinimleri, tasarımı ve görevleri üretir; ajanlar da bunları paralel olarak uygular.

IDE, Code OSS üzerine kurulu ve macOS, Windows ile Linux'ta çalışır; Eylül 2026'daki IDE 1.1'den bu yana yerel ARM64 derlemeleri de var. Kiro CLI, Kiro Web ve açık kaynak, kalıcı bir ajan çalışma alanı olan Kiro Crew aynı kredileri paylaşır.

## Planlar ve krediler
Her katman istek sayısıyla değil, aylık kredilerle fiyatlandırılır. Ücretli planlar her takvim ayının 1'inde yenilenir ve fiyatlara KDV ile satış vergisi dahil değildir. AWS GovCloud (US) bölgelerinde fiyatlar yaklaşık %20 daha yüksek.

## Sınırlamalar
- Ücretsiz planın 50 kredisi yalnızca hafif kullanıma yeter; Claude Opus 5 gibi premium modeller ücretli plan gerektirir.
- Premium modellerin hepsi her ülkede veya bölgede kullanılamıyor.
- 0.11.133'ten eski Kiro IDE sürümleri ve 1.28.2'den eski CLI sürümleri 9 Kasım 2026'da bağlanamaz hâle gelecek.
- Ücretli self-servis planlar yalnızca listelenen ülkelerdeki fatura adreslerine satılıyor.
