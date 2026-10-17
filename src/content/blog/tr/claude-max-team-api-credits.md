---
title: "Claude Max ve Team API kredileri (2026): ayda $100–$500 ve nasıl talep edilir"
metaTitle: "Claude API kredisi: Max ve Team'de nasıl alınır (2026)"
metaDescription: "Claude Max 5x aylık $100, Max 20x aylık $200, Team ise $500'a kadar API kredisi içeriyor. Nasıl talep edileceğini, neleri kapsadığını ve Haiku 5.5 haberlerini öğren."
excerpt: "Ekim 2026'dan beri Claude Max 5x aylık $100, Max 20x aylık $200 Claude Platform API kredisi içeriyor; Team planları ise ortak havuzda $500'a kadar kredi alıyor. Krediyi, claude.ai'ın faturalandırma ayarlarından bir Console organizasyonu bağlayarak talep edersin. Kredi API'yi, Managed Agents'ı ve Agent SDK'yı kapsar; etkileşimli Claude Code'u kapsamaz ve her faturalandırma döneminde sona erer."
imageAlt: "Karanlık bir odada, ekranında renkli kodların açık olduğu bir kod editörüyle duran MacBook Pro"
keyTakeaways:
  - "Ekim 2026'dan beri Claude Max 5x aylık $100, Max 20x aylık $200 Claude Platform API kredisi içeriyor; Team planları koltuklar arasında ortak havuzda $500'a kadar kredi alıyor."
  - "Claude'un aylık API kredileri Claude API'yi, Message Batches'i, Console Playground'u, Claude Managed Agents'ı ve Agent SDK'yı kapsar; etkileşimli Claude Code'u ve Claude uygulamalarındaki ek kullanımı kapsamaz."
  - "API kredileri her faturalandırma döneminde yenilenir, dönem sonunda devretmeden sona erer ve claude.ai'da Settings > Billing altından tek bir Claude Console organizasyonu bağlanarak talep edilir."
  - "Claude Haiku 5.5, 7 Ekim 2026'da 100.000 token'a kadar olan istemlerde 1M girdi token'ı için $0.10 ile çıktı; Sonnet 5.5 önbellek okumaları 1M token başına $0.20'den $0.10'a düştü."
  - "Açık kaynak bakımcıları Claude for Open Source ile 6 ay ücretsiz Claude Max 20x için başvurabilir; yerleşik projeler de Anthropic'in ücretsiz OSS Scanner'ına kaydolabilir."
faq:
  - q: "Claude Pro'ya API kredisi dahil mi?"
    a: "Hayır. Anthropic'in yardım merkezine göre aylık API kredileri yalnızca Max ve Team planlarında, indirimli Team planları dahil, sunuluyor. Free, Pro ve Enterprise planları uygun değil. Her ay API kredisi isteyen Pro kullanıcılarının, $100 kredi içeren aylık $100'lık Max 5x'e geçmesi ya da Claude Console'dan ön ödemeli kredi satın alması gerekir."
  - q: "Claude Max API kredilerini Claude Code için kullanabilir miyim?"
    a: "Terminalde, bir IDE'de, masaüstü uygulamasında ya da web'de etkileşimli Claude Code için kullanamazsın; o, planının limitlerini kullanmaya devam eder. Krediler, bağlı Console organizasyonundan bir API anahtarıyla çalıştırdığında claude -p ve Agent SDK'yı kapsar. Claude Code GitHub Action, IDE eklentileri ya da masaüstü uygulamasından gelen çalıştırmalar Claude Code kullanımı sayılır."
  - q: "Claude API kredileri sonraki aya devrediyor mu?"
    a: "Hayır. Kullanılmayan aylık API kredileri her faturalandırma döneminin sonunda sona erer; yeni krediler plan ödemen geçtikten kısa süre sonra gelir. Yıllık planlarda krediler aylık gelir. Anthropic bu kredileri, satın aldığın kredilerden önce harcar; Console'un faturalandırma sayfası her kredinin tutarını ve son kullanma tarihini gösterir."
  - q: "Claude Team planı ne kadar API kredisi alıyor?"
    a: "Team planları Standard koltuk başına aylık $20, Premium koltuk başına $100 alır; bunlar $500 ile sınırlı tek bir bakiyede toplanır. Üç Standard ve iki Premium koltuğu olan bir ekip ayda $260 alır. Havuz, kredi her yatırıldığında koltuk sayından yeniden hesaplanır ve tek bir Owner ya da Primary Owner bunu tüm ekip adına talep eder."
  - q: "Claude API kredilerim bitince ne olur?"
    a: "Console organizasyonunda satın alınmış kredi ya da otomatik yükleme varsa API kullanımı devam eder ve bunlardan düşülür. Başka kredi yoksa API istekleri, bir sonraki aylık krediler gelene kadar durur. Anthropic, kullanımın hiçbir zaman Claude planına yansıtılmadığını söylüyor; Anthropic'in satış ekibi üzerinden faturalandırılan organizasyonlar ise kredilerin ötesinde her zamanki gibi faturalandırılır."
  - q: "Yeni Claude Max aboneleri API kredisini ne zaman talep edebilir?"
    a: "Uygun bir planda yedi gün geçtikten sonra. Teklif, iOS ya da Android'den kaydolan aboneler dahil, web tarayıcısında claude.ai'daki Settings > Billing sayfasında görünür. Claude Platform'da ödeme yöntemi eklemen gerekmez; Max 5x'ten Max 20x'e geçmek de hemen orantılı kredi verir."
howTo:
  name: "Claude Max ya da Team'de aylık API kredileri nasıl talep edilir?"
  steps:
    - name: "Uygunluğu kontrol et"
      text: "Max abonesi olarak ya da Team Owner veya Primary Owner olarak, Max 5x, Max 20x ya da Team planında en az yedi gündür olmalısın."
    - name: "Faturalandırma ayarlarını aç"
      text: "Web tarayıcısında claude.ai'da, Max için Settings > Billing, Team için Organization settings > Billing sayfasına git."
    - name: "Bir Console organizasyonu bağla"
      text: "API credits bölümünde Link organization'ı seç, ardından geliştirme yaptığın Claude Console organizasyonunu seç ya da yeni bir tane oluştur. Orada Owner, Admin veya Billing rolüne sahip olman gerekir."
    - name: "Koşulları kabul et"
      text: "Supplemental Credit Terms koşullarını gözden geçir ve Link organization ile onayla. Bağlantı, destek ekibiyle iletişime geçmeden sonradan değiştirilemez."
    - name: "Geliştirmeye başla"
      text: "Krediyi Console'un faturalandırma sayfasında Promotional credits altında bul, bir API anahtarı oluştur ve ilk isteğini gönder."
---
Claude Max ve Team planları artık Claude API için aylık kredi içeriyor: Max 5x'te $100, Max 20x'te $200, Team'de ise ortak havuzda $500'a kadar. Krediyi bir kez talep etmen gerekiyor; kredi Claude Code'u değil, kendi uygulamalarını ve ajanlarını kapsıyor ve her faturalandırma döneminde sona eriyor. Aşağıdaki tüm plan ayrıntıları ve fiyatlar 17 Ekim 2026 itibarıyla, Anthropic'in yardım merkezinden, fiyat sayfalarından ve Claude Code değişiklik günlüğünden alındı.

## Claude'un aylık API kredileri nedir?

Claude'un aylık API kredileri, Max ve Team aboneliklerine dahil olan ve Claude API üzerinde kendi uygulamalarını ve ajanlarını geliştirmek ve çalıştırmak için kullanılan Claude Platform kredileridir. Sohbet ve Claude Code limitlerinden ayrı tutulurlar.

Anthropic krediyi 7 Ekim 2026'da Claude Haiku 5.5 ile birlikte duyurdu ve takip eden günlerde abonelere kademeli olarak açtı. [Anthropic'in fiyat sayfası](https://claude.com/pricing) artık Max altında “ayda $100 ila $200 API kredisi”, Team altında ise ortak havuzda aylık $500'a kadar API kredisi yazıyor. Free, Pro ve Enterprise planları bu krediyi almıyor.

Krediler bir takas değil, ek bir haktır. Yardım merkezine göre Claude, Claude Code ve Cowork'teki kullanım limitlerin aynen kalıyor. Bunlar, Anthropic'in Haziran'da duyurduğu Agent SDK kredisi de değil: aynı makaleye göre o teklif şu an sunulmuyor.

## Hangi Claude planı ne kadar API kredisi veriyor?

Max 5x aylık $100, Max 20x aylık $200 veriyor; Team planlarında Standard koltuk başına $20, Premium koltuk başına $100 ortak havuza giriyor ve havuz $500 ile sınırlı.

| Plan | Plan fiyatı | Aylık API kredisi |
|---|---|---|
| Free | $0 | Yok |
| Pro | Aylık $20 ya da yıllık $200 | Yok |
| Max 5x | Aylık $100 | $100 |
| Max 20x | Aylık $200 | $200 |
| Team Standard koltuk | Koltuk başına aylık $25, yıllık faturalandırmada $20 | Koltuk başına $20, ortak havuz; ekip başına en fazla $500 |
| Team Premium koltuk | Koltuk başına aylık $125, yıllık faturalandırmada $100 | Koltuk başına $100, ortak havuz; ekip başına en fazla $500 |
| Enterprise | Yıllık faturalandırmada koltuk başına aylık $20, ayrıca API fiyatlarıyla kullanım | Yok |

[Anthropic'in yardım merkezine](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans) göre Team havuzu şöyle işliyor:

- **Ekip başına tek bakiye.** Üç Standard ve iki Premium koltuk ayda $260 eder. Üçüncü bir Premium koltuk eklemek sonraki dönemi $360'a çıkarır.
- **Üst sınır $500.** Daha büyük ekipler de yine $500 alır; bu, bir Team planının alabileceği en yüksek tutardır.
- **İndirimli Team planları da dahil.** Kâr amacı gütmeyen kuruluşlara yönelik Team ve Scientists Team planları da koltuk başına aynı $20 ve $100'ı alır.

Max 5x'ten Max 20x'e geçersen hemen orantılı kredi alırsın, sonraki her dönem de $200. Katmanlar arasında başka neyin değiştiğini [Claude Pro ve Max karşılaştırmamızda](/blog/claude-pro-vs-max/) anlatıyoruz.

## Claude API kredileri nasıl talep edilir?

Claude'un API kredilerini, claude.ai'ın faturalandırma ayarlarından planına bir Claude Console organizasyonu bağlayarak bir kez talep edersin. Ondan sonra krediler her faturalandırma döneminde o organizasyona gelir.

1. Max ya da Team'de yedi gün dolana kadar bekle. Yeni aboneler daha erken talep edemez.
2. Web tarayıcısında claude.ai'da **Settings > Billing** (Max) ya da **Organization settings > Billing** (Team) sayfasını aç.
3. **API credits** bölümünde **Link organization** seçeneğini seç, ardından krediyi alacak Console organizasyonunu seç ya da oluştur.
4. Supplemental Credit Terms koşullarını gözden geçir ve onayla.
5. Console'un faturalandırma sayfasını aç, krediyi Promotional credits altında bul ve bir API anahtarı oluştur.

Tıklamadan önce bilmen gereken birkaç kural:

- **Roller.** Max'te abone olan kişi olmalısın; Team'de Owner ya da Primary Owner. Console organizasyonunda ise Owner, Admin veya Billing rolü gerekir.
- **Tek bağlantı, değiştirilemez.** Her plan tek bir Console organizasyonuna bağlanır, her organizasyon da kredisini tek bir plandan alır. Bağlantıyı kendin değiştiremezsin; bu yüzden uygulama geliştireceğin organizasyonu seç.
- **Kart gerekmez.** Krediyi talep etmek ya da kullanmak için Claude Platform'da ödeme yöntemi eklemen gerekmiyor.
- **Mobil aboneler.** iOS ya da Android'den alınan planlar da uygun, ama talep tarayıcıdan claude.ai'da yapılıyor.
- **Aynı e-posta işini kolaylaştırır.** Anthropic, Console'a claude.ai'da kullandığın e-postayla giriş yapmanı öneriyor.

## API kredileri neleri kapsıyor, neleri kapsamıyor?

Claude'un aylık API kredileri Claude API'yi, Claude Managed Agents'ı, Agent SDK'yı ve Console Playground'u kapsar. Etkileşimli Claude Code'u, Claude uygulamalarındaki ek kullanımı ve diğer bulutlardaki Claude'u kapsamaz.

Kapsananlar, kullanılabilir tüm Claude modelleriyle:

- Claude API, hem Messages API hem Message Batches API
- Claude Console'daki Playground
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), Anthropic'in barındırılan ajan altyapısı; şu anda beta aşamasında
- Claude Agent SDK ve bağlı organizasyondan bir API anahtarıyla çalıştırdığında `claude -p`

Kapsanmayanlar:

- Terminalde, bir IDE'de, masaüstü uygulamasında ya da web'de etkileşimli Claude Code
- Claude, Claude Code veya Cowork'te ek kullanım (kullanım kredileri)
- Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry veya AWS üzerindeki Claude Platform'da Claude

Bakiye şöyle davranır: krediler her faturalandırma döneminde, yıllık planlarda ise her ay yenilenir; dönem sonunda devretmeden sona erer ve satın aldığın kredilerden önce harcanır. Bağlı organizasyonda API anahtarı olan herkes aynı bakiyeden harcar; bu yüzden Team sahipleri Console'da çalışma alanı (workspace) harcama limitleri belirleyebilir. Krediler bittiğinde ve organizasyonda satın alınmış kredi yoksa API istekleri bir sonraki yüklemeye kadar durur; Claude planına hiçbir ücret yansımaz.

## $100'lık Claude API kredisi kaç token eder?

Anthropic'in liste fiyatlarıyla $100, kısa istemlerde yaklaşık 1 milyar Haiku 5.5 girdi token'ı, 50 milyon Sonnet 5.5 girdi token'ı ya da Opus 5.5 üzerinde yaklaşık 170 adet bir saatlik Managed Agents oturumu satın alır.

| Model | 1M token başına girdi | 1M token başına çıktı | 1M token başına önbellek okuma |
|---|---|---|---|
| Haiku 5.5, 100.000 token'a kadar olan istemler | $0.10 | $0.50 | $0.01 |
| Haiku 5.5, 100.000 token'ı aşan istemler | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5 hızlı modda | $8 | $40 | Önbellek çarpanları bunun üstüne uygulanır |
| Fable 5.1 | $10 | $50 | $0.25 |

Anthropic'in [API fiyat sayfasından](https://platform.claude.com/docs/en/about-claude/pricing) yaptığımız hesap:

- **Haiku 5.5:** 100.000 token'a kadar olan istemlerde $100, 1 milyar girdi token'ını ya da 200 milyon çıktı token'ını karşılar.
- **Sonnet 5.5:** $100, 50 milyon girdi token'ını ya da 10 milyon çıktı token'ını karşılar.
- **Managed Agents:** oturumlar token'ları model fiyatından, ayrıca çalıştığı sürece oturum-saati başına $0.08 faturalar. Anthropic'in kendi örneği olan, 50.000 girdi ve 15.000 çıktı token'lı bir saatlik Opus 5.5 oturumu $0.58 tutuyor; yani $100 bunlardan yaklaşık 172 tanesini öder.

Gerçek faturalar istem uzunluğuna, önbelleğe almaya, efor düzeyine ve araçlara bağlıdır. Bir oturum içindeki web araması 1.000 aramada $10 tutar; hızlı mod da Batch API ile çalışmaz.

## Claude API fiyatlarında Ekim 2026'da ne değişti?

Ekim 2026'da üç fiyat değişikliği geldi: Claude Haiku 5.5 7 Ekim'de çıktı, Sonnet 5.5 önbellek okumaları aynı gün yarı yarıya düştü ve Opus 5.5 için hızlı mod genel kullanıma açıldı.

- **Claude Haiku 5.5.** Anthropic bunu şimdiye kadar çıkardığı en ucuz, en hızlı ve en yetenekli küçük model olarak tanımlıyor. 100.000 token'a kadar olan istemlerde Haiku 4.5'ten %90, bunun üstünde %50 daha ucuz; Anthropic'in hesabına göre bu, ortalamada yaklaşık %75 daha ucuz demek. 1M token'lık bağlam penceresi, 128K'ya kadar çıktı token'ı ve bir Haiku modelinde ilk kez ayarlanabilir bir efor düzeyi (effort) var. Anthropic, [Haiku 5.5 duyurusuna](https://www.anthropic.com/claude-haiku-5-5) göre bunu özetleme, sınıflandırma, sıkıştırma ve alt ajan (subagent) işleri için öneriyor.
- **Sonnet 5.5 önbellek okumaları.** 7 Ekim'de 1M token başına $0.20'den $0.10'a düştü. Önbellek okumaları ajan trafiğinin büyük bölümünü oluşturduğu için Anthropic, Sonnet 5.5'in çoğu ajan işinde artık yaklaşık %20 daha ucuza çalıştığını tahmin ediyor.
- **Opus 5.5 hızlı mod.** Bir isteğe `"speed": "fast"` eklemek, standart fiyatın iki katına (1M token başına $8 girdi, $40 çıktı) saniyede 2.5x'e kadar daha fazla çıktı token'ı sağlıyor. [Hızlı mod dokümanlarına](https://platform.claude.com/docs/en/build-with-claude/fast-mode) göre Opus 5.5 artık beta başlığı ya da erişim talebi gerektirmiyor. Anthropic'in kendi (first-party) API'sinde ve Microsoft Foundry'de çalışıyor.

Claude Code'da `/model haiku` ile Haiku 5.5'e geçebilirsin. Bu, API kredilerini değil, planının limitlerini ne hızla tükettiğini değiştirir.

## Hangi Claude Code güncellemeleri kullanım limitlerinin daha uzun yetmesini sağlıyor?

Ekim 2026'daki dört Claude Code değişikliği kullanımdan tasarruf ettiriyor: boşta sıkıştırma, alt ajan başına efor ve model seçimi, yeni `/usage` uyarıları ve yenilenen bir web arama bütçesi. Hepsi mevcut plan limitlerin içinde çalışıyor.

- **Boşta sıkıştırma (sürüm 2.1.299, 14 Ekim).** 200K token'ı aşan ve yaklaşık 54 dakika boşta kalan bir terminal sohbeti, bir saatlik istem önbelleği dolmadan hemen önce sıkıştırılır. Geri döndüğünde Claude tüm sohbeti değil, özeti yeniden işler. Kapatmak için settings.json'a `"idleCompaction": false` yaz ya da 2.1.302 sürümünden itibaren `/config` içindeki Idle compaction satırını kullan.
- **Alt ajan başına efor ve model (2.1.292, 6 Ekim).** İsteminde, bir kod tabanını aramak için düşük eforlu alt ajanlar, sonuçları değerlendirmek için de yüksek eforlu tek bir alt ajan isteyebilir ya da hızlı aramalar için Haiku isteyebilirsin. Önceden bunun için özel bir alt ajan tanımı gerekiyordu.
- **Kullanım uyarıları (2.1.299).** `/usage` artık maksimum eforu, iş akışlarını (workflows), her zaman açık bağlamı ve büyük araç sonuçlarını işaretliyor; bunlar bir oturumun hızla tükenmesinin olağan nedenleri.
- **Web arama bütçesi (2.1.290, 5 Ekim).** Etkileşimli oturumlar artık saatte yenilenen 100 arama hakkı alıyor; eskiden 200 aramadan sonra duruyordu.

Anthropic mühendisleri bir istem ipucu daha ekliyor: alt ajanlar varsayılan olarak kapsamlılık için optimize eder, bu yüzden isteminde zamanın önemli olduğunu söyleyen tek bir cümle onların daha hızlı ilerlemesini sağlar. Anthropic bunu hız ile kalite arasında makul bir denge olarak tanımlıyor. 5 saatlik oturumların ve haftalık sınırların nasıl işlediği için [Claude kullanım limitleri](/blog/claude-usage-limits/) rehberimize bak; hafta içi uzun sohbet oturumlarından önce de [Claude Watch](/) sayfasını kontrol et.

## Claude Code masaüstü uygulamasında ve bulut oturumlarında neler yeni?

Claude Code masaüstü uygulaması Ekim 2026'da yeni bir oturum ekranı, kayıtlı ortamlar ve iç içe oturumlar kazandı; bulut oturumları da artık yerel işini bıraktığın haliyle devralıyor.

Masaüstü uygulaması, Anthropic'in Claude Code bülteni ve [masaüstü dokümanlarına](https://code.claude.com/docs/en/desktop) göre:

- **Yeni oturum ekranı.** Son klasörler tek tıkla açılıyor; birkaç klasör, bir SSH ana makinesi ya da bulut gibi bir kurulumu ortam olarak kaydedebilirsin.
- **İç içe oturumlar.** Claude'dan görevleri paralel çalıştırmasını istediğinde her biri kendi oturumunu alır ve bitince ana oturumuna rapor verir. Önerilen devam işleri tek tıkla kendi oturumunda başlayabilir.
- **Sekmede yan sorular.** `/btw` artık yan soruyu kendi sekmesinde açıyor.
- **Bir bakışta durum.** Kenar çubuğu hangi oturumların hâlâ çalıştığını ve hangilerinin senden bir şey beklediğini gösteriyor; yan şerit de oturumun nerede çalıştığını, bağlamını ve değişikliklerini gösteriyor.

Bulut oturumları, [Anthropic'in bulut dokümanlarına](https://code.claude.com/docs/en/claude-code-on-the-web) göre:

- **Yerelde başlayan işe devam.** Yerel bir oturumu buluta taşımak artık commit edilmemiş değişikliklerini ve push edilmemiş commit'lerini de götürüyor; önce commit ya da push yapmak zorunda değilsin. macOS, Linux ve WSL'de, .env dosyaları ve özel anahtarlar gibi kimlik bilgisine benzeyen dosyalardaki commit edilmemiş değişiklikler makinende kalır.
- **Team'de ağ sırları.** Team planları artık, Pro ve Max'in zaten yapabildiği gibi, bir bulut ortamına API anahtarı ekleyebilir; Claude listelenen ana makineleri anahtarı görmeden çağırır.

[Claude Code bulut kredisini](/deals/claude-code-cloud-credit-2026/) 7 Ekim'den önce talep ettiysen, 4 Kasım 2026'da sona ermeden bulut oturumlarında harca. [AI kodlama araçları karşılaştırmamız](/blog/best-ai-coding-tools/), Claude Code fiyatlandırmasının Cursor, Codex ve Copilot ile nasıl kıyaslandığını gösteriyor.

## Açık kaynak geliştiriciler için ücretsiz Claude teklifleri var mı?

Evet. Claude for Open Source, onaylanan bakımcılara 6 ay ücretsiz Claude Max 20x veriyor; Anthropic'in OSS Scanner'ı da 8 Ekim 2026'dan beri yerleşik açık kaynak projeler için ücretsiz güvenlik taraması yapıyor.

[Claude for Open Source](/deals/claude-for-open-source-max-2026/) en fazla 10.000 onaylı alıcıyla sınırlı ve GitHub hesabınla başvuruyorsun. [Anthropic'in program sayfasına](https://claude.com/contact-sales/claude-for-oss) ve koşullarına göre başvuranların şu ölçütlerden birini karşılaması gerekiyor:

- 500+ bağımlı depo, 100+ bağımlı paket ya da aylık 200.000+ indirmesi olan projeler
- Tanınmış bir vakıfta ya da dil projesinde listelenmiş committer veya maintainer rolü
- Sahibi olmadığın depolara son 12 ayda 100+ birleştirilmiş pull request
- 20+ benzersiz dış katkıcısı olan bir depo ya da 0.4 veya daha yüksek OpenSSF kritiklik puanı

GitHub hesabı en az iki yıllık olmalı ve son 90 günde herkese açık açık kaynak etkinliği göstermeli. 6 ay sonra, ücretli planı olan üyeler iptal etmedikleri sürece eski fiyatlarıyla o plana geri döner; diğer herkes Free plana geçer.

[OSS Scanner](https://red.anthropic.com/oss-scanner/) isteğe bağlı: çekirdek bakımcılar, Anthropic'in GitHub'daki oss-scanner deposuna bir proje yapılandırması ve çevrimdışı bir Dockerfile içeren pull request açarak kaydoluyor. Projeler sonra Anthropic'in en güçlü modelleriyle düzenli taramalardan ücretsiz yararlanıyor; raporlar bir insan tarafından gözden geçirilmiş olmuyor. Kabul, Google'ın OSS-Fuzz'ına benzer ölçütlere göre yapılıyor; bu yüzden yeni projeler ve çoğu fork uygun değil. OpenAI da altı ay ChatGPT Pro veren benzer bir program yürütüyor: [Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/).

## Sonuç

Max ya da Team'deysen ve API üzerinde herhangi bir şey geliştirme ihtimalin varsa krediyi talep et. Talep etmek ücretsiz, ama organizasyon bağlantısını sonradan yalnızca destek ekibi değiştirebilir.

- **API üzerinde geliştirme yapan Max aboneleri:** bağlantıyı kendin değiştiremeyeceğin için gerçekten kullandığın Console organizasyonunu bağla. Ayda $100 ya da $200, çok sayıda Haiku 5.5 ve Sonnet 5.5 işine yeter.
- **Yalnızca Claude Code kullanan Max aboneleri:** krediler limitlerini uzatmaz. Boşta sıkıştırma, Haiku 5.5 alt ajanları ve yeni `/usage` uyarıları uzatır.
- **Max 5x'i düşünen Pro kullanıcıları:** Max 5x, Pro'dan ayda $80 daha pahalı ve $100 API kredisi içeriyor; bu yüzden API'ye zaten bu kadar harcıyorsan en hızlı karşılığını verir.
- **Team sahipleri:** tek bir sahip tüm ekip için talep eder; bir proje havuzu tüketmesin diye çalışma alanı harcama limitlerini belirle.
- **Açık kaynak bakımcıları:** Claude for Open Source'a, kritik projelerse OSS Scanner'a başvur.

Koşullardaki her değişiklik [API kredisi teklif sayfamızda](/deals/claude-max-team-api-credits-2026/) izleniyor; diğer tüm Claude teklifleri ise [Claude sayfamızda](/tools/claude/) ve [promosyon takvimimizde](/calendar/) yer alıyor.
