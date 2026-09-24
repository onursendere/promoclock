---
summary: "DeepSeek, Çinli AI laboratuvarı DeepSeek'in açık ağırlıklı V4 model ailesi üzerine kurduğu ücretsiz bir AI sohbet asistanı. Abonelik gerektirmeyen asistanı çok düşük token başı API fiyatlarıyla birleştiriyor; DeepSeek-V4.1-Flash Eylül 2026'da geldi. En çok bütçesini düşünen kullanıcılar, geliştiriciler ve modelleri kendi sunucularında çalıştıran araştırmacılar kullanıyor."
metaTitle: "DeepSeek ücretsiz mi? Uygulama, API fiyatları, V4.1 (2026)"
metaDescription: "DeepSeek'in sohbet uygulaması ücretsiz. 2026 API fiyatları (deepseek-flash, V4-Pro), yoğun olmayan saat indirimi, gizlilik, İngiltere'deki DSeek adı, alternatifler."
bestFor:
  - "Bütçe odaklı günlük kullanıcılar"
  - "API maliyetini düşüren geliştiriciler"
  - "Açık ağırlık kullanan araştırmacılar"
keyFeatures:
  - name: "Ücretsiz web ve mobil sohbet"
    description: "chat.deepseek.com'da ya da iOS ve Android uygulamalarında abonelik olmadan sohbet et, dosya yükle ve web'de arama yap."
  - name: "1M token bağlam"
    description: "Nisan 2026'daki V4 sürümünden beri DeepSeek'in tüm resmî hizmetlerinde varsayılan bağlam penceresi 1M token."
  - name: "Expert Mode'da V4-Pro"
    description: "13 Ağustos 2026'dan beri genel kullanımda olan DeepSeek-V4-Pro, uygulamada ve web'de Expert Mode üzerinden sunuluyor."
  - name: "Açık ağırlıklar"
    description: "V4-Pro, V4-Flash ve V4.1-Flash'ın ağırlıkları ve teknik raporları, araştırma ve kendi sunucunda çalıştırma için Hugging Face'te yayımlanıyor."
  - name: "Yoğun olmayan saatlerde API indirimi"
    description: "Bağlam önbelleğiyle token başına faturalandırma; yoğun olmayan saatlerde fiyatlar hafta içi yoğun saatlerin yarısı."
  - name: "Kodlama ajanlarıyla uyumlu"
    description: "API hem OpenAI hem Anthropic istek biçimlerini kabul ediyor; böylece Claude Code ve OpenCode gibi araçlar DeepSeek modelleriyle çalışabiliyor."
useCases:
  - "Bir plana para ödemeden ücretsiz web sohbetinde bir betiğin hatasını ayıkla ya da bir matematik ispatını adım adım incele."
  - "Kodlama ajanlarını daha ucuz token'larla çalıştırmak için Claude Code'u ya da OpenCode'u DeepSeek'in Anthropic uyumlu uç noktasına yönlendir."
  - "API faturasını yarıya indirmek için büyük toplu özetleme işlerini UTC'ye göre yoğun saatlerin dışına planla."
  - "Bir DeepSeek modelini kendi altyapında test etmek için açık ağırlıkları Hugging Face'ten indir."
pricingSummary: "Web sohbeti ile iOS ve Android uygulamaları ücretsiz. API kullandıkça öde modeliyle çalışıyor: deepseek-flash yoğun saatlerde önbellekte olmayan 1M girdi token'ı için $0.30, 1M çıktı token'ı için $1.20; yoğun olmayan saatlerde bunun yarısı."
savingTips:
  - "Esnek API iş yüklerini yoğun saatlerin (pazartesi–cuma, 01:00–04:00 ve 06:00–10:00 UTC) dışında çalıştırarak %50 daha az öde."
  - "Uzun istem başlangıçlarını yeniden kullan: önbellekteki deepseek-flash girdisi yoğun saatlerde 1M token başına $0.006; önbellekte yoksa $0.30."
  - "Rutin işler için deepseek-v4-pro yerine deepseek-flash seç; yoğun saatlerde çıktı fiyatı 1M token başına $3.96 yerine $1.20."
faq:
  - q: "DeepSeek ücretsiz mi?"
    a: "Evet. DeepSeek web sohbeti ile iOS ve Android uygulamaları ücretsiz ve ücretli bir abonelik kademesi yok. Yalnızca geliştirici API'si ücretli; ücret, yüklediğin ya da sana tanımlanan bakiyeden token başına düşülüyor."
  - q: "DeepSeek verilerimi nerede saklıyor?"
    a: "Çin'de. DeepSeek'in en son 10 Şubat 2026'da güncellenen gizlilik politikasına göre kişisel veriler Çin Halk Cumhuriyeti'nde toplanıyor, işleniyor ve saklanıyor. Hassas kişisel ya da şirket bilgilerini paylaşmadan önce bunu hesaba kat."
  - q: "DeepSeek'in adı İngiltere'de neden DSeek?"
    a: "chat.deepseek.com'daki bir bildirime göre, marka yeniden yapılanması nedeniyle DeepSeek'in Birleşik Krallık'taki resmî adı artık DSeek. Bildirim, tüm hizmetlerin normal şekilde sürdüğünü de belirtiyor."
  - q: "DeepSeek-V4.1-Flash nedir?"
    a: "DeepSeek'in 10 Eylül 2026'da çıkan en yeni modeli: yerel görsel anlama yeteneğine sahip, 552B parametreli bir uzmanlar karışımı (mixture-of-experts) modeli. API'de deepseek-flash adıyla ve daha düşük fiyatlarla V4-Flash'ın yerini aldı."
  - q: "DeepSeek-V4-Pro'yu API üzerinden hâlâ kullanabilir miyim?"
    a: "Evet. DeepSeek önce 14 Eylül 2026'dan itibaren V4-Pro isteklerini V4.1-Flash'a yönlendirmeyi planlıyordu; ancak fiyatlandırma sayfasında artık V4-Pro'nun aksi bildirilene kadar aynı ücretlerle kullanılabileceği yazıyor."
---
## DeepSeek nedir?
DeepSeek hem Hangzhou merkezli bir AI laboratuvarının hem de bu laboratuvarın tarayıcıda ve mobil uygulamalarda sunduğu ücretsiz asistanın adı. Geliştiriciler aynı modellere düşük maliyetli bir API üzerinden erişiyor ya da açık ağırlıkları indirip kendileri çalıştırıyor.

## Son değişiklikler
- **24 Nisan 2026:** V4 Preview, V4-Pro'yu (toplam 1,6T, aktif 49B parametre) ve V4-Flash'ı tanıttı; 1M bağlamı standart hâle getirdi.
- **24 Temmuz 2026:** eski deepseek-chat ve deepseek-reasoner API model adları kullanımdan kaldırıldı.
- **Ağustos 2026:** V4-Pro genel kullanıma açıldı; API'de yoğun ve yoğun olmayan saat fiyatları yürürlüğe girdi.
- **10 Eylül 2026:** V4.1-Flash, daha ucuz API fiyatlarıyla V4-Flash'ın yerini aldı.
- **Birleşik Krallık:** hizmet artık DSeek adını taşıyor.

## Sınırlamalar
DeepSeek kişisel verileri Çin'de saklıyor; bu durum onu düzenlemeye tabi ya da gizli işler için uygun olmaktan çıkarabilir. API'de görsel girdi yalnızca deepseek-flash ile çalışıyor ve fiyatlar hafta içi yoğun saatlerde iki katına çıkıyor. Model adları ve yönlendirme 2026'da birkaç kez değişti; API kullanıcıları yayına almadan önce fiyatlandırma sayfasını kontrol etmeli.
