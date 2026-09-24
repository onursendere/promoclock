---
summary: "Hugging Face; aynı adlı şirketin işlettiği, açık AI modelleri, veri kümeleri ve Spaces demo uygulamaları için merkezi platform. Geliştiriciler ve araştırmacılar onu açık ağırlıklı modelleri indirmek, Gradio demolarını paylaşımlı ZeroGPU donanımında barındırmak ve barındırılan modelleri Inference Providers üzerinden çağırmak için kullanıyor. NVIDIA, 3 Eylül 2026'da Hugging Face'i satın alma anlaşmasını duyurdu."
metaTitle: "Hugging Face fiyatları: PRO, ücretsiz plan ve özellikler"
metaDescription: "Hugging Face'e üyelik ücretsiz. $9'lık PRO planını, Team ve Enterprise kullanıcı fiyatlarını, ZeroGPU kotalarını, çıkarım kredilerini ve NVIDIA anlaşmasını incele."
bestFor:
  - "ML mühendisleri ve araştırmacılar"
  - "Açık kaynak model yayımlayanlar"
  - "AI uygulama demosu yapan geliştiriciler"
  - "Özel model barındıran ekipler"
keyFeatures:
  - name: "Model ve veri kümesi Hub'ı"
    description: "Açık ağırlıklı modellere ve veri kümelerine göz at, bunları indir ve herkese açık ya da özel görünürlüklü, Git tabanlı depolarda sürümle."
  - name: "Spaces"
    description: "Gradio, Docker ya da statik demo uygulamaları barındır; CPU Basic donanımı ücretsiz, Nvidia T4 small ise saatte $0.40."
  - name: "ZeroGPU"
    description: "Gradio Spaces, hesap türüne göre belirlenen günlük kota dahilinde her fonksiyon çağrısı için NVIDIA RTX Pro 6000 Blackwell GPU'larını ödünç alıyor."
  - name: "Inference Providers"
    description: "Tek bir Hugging Face token'ıyla iş ortağı sağlayıcıların modellerini çağır; ücret, Hugging Face kâr payı eklenmeden sağlayıcının tarifesiyle alınıyor."
  - name: "Inference Endpoints"
    description: "Herhangi bir Hub modelini otomatik ölçeklenen özel altyapıda yayına al; CPU örnekleri saatte $0.033'ten başlıyor."
  - name: "HuggingChat"
    description: "Tarayıcıda açık modellerle sohbet et; Omni yönlendiricisi her istek için uygun bir model seçiyor."
  - name: "hf CLI ve istemci kitaplıkları"
    description: "hf komutu ve huggingface_hub Python kitaplığıyla terminalden oturum aç, depo indir ve yükle."
useCases:
  - "Kendi verilerinle yerelde ince ayar yapmak için açık ağırlıklı bir modeli ve tokenizer'ını indir."
  - "Hakemlerin tarayıcıda deneyebilmesi için bir araştırma modelinin Gradio demosunu ZeroGPU'da yayımla."
  - "Tek bir API sağlayıcısına bağlanmadan önce Inference Providers üzerinden birkaç barındırılan LLM'i test et."
  - "Team planıyla şirket ekibine özel modeller için SSO, denetim kayıtları ve depolama bölgeleri sağla."
pricingSummary: "Hub ücretsiz. PRO aylık $9; her ay $2 değerinde işlem kredisi ve 8 kat ZeroGPU kotası içeriyor. Team kullanıcı başına aylık $20, Enterprise $50. Spaces GPU'ları, Inference Endpoints ve ek depolama kullanıma göre faturalanıyor."
savingTips:
  - "Ücretsiz hesaplar her ay $0.10 değerinde Inference Providers kredisi alıyor; PRO'da bu tutar $2.00 oluyor ve Hugging Face'in tüm işlem hizmetlerinde kullanılabiliyor."
  - "ZeroGPU Spaces'i kullanmak ücretsiz: ücretsiz hesapta günde 5 dakika, PRO'da 40 dakika GPU süresi var."
  - "E-postası doğrulanmış, 30 günden eski ücretsiz hesaplar en fazla 2 ZeroGPU Space'i ücretsiz barındırabiliyor."
faq:
  - q: "Hugging Face ücretsiz mi?"
    a: "Evet. Hesap açmak, herkese açık model ve veri kümesi indirmek, CPU Basic Spaces ve ZeroGPU Spaces ücretsiz. PRO, Team ya da Enterprise planları, yükseltilmiş Spaces donanımı, Inference Endpoints ve dahil olan aylık kredilerin ötesindeki çıkarım için ödeme yapıyorsun."
  - q: "Hugging Face PRO'da neler var?"
    a: "PRO aylık $9 ve her ay $2.00 işlem kredisi, en yüksek kuyruk önceliğiyle günde 40 dakika ZeroGPU süresi, en fazla 10 ZeroGPU Space barındırma, Spaces Dev Mode ve özel veri kümeleri için veri kümesi görüntüleyici ekliyor."
  - q: "NVIDIA Hugging Face'i satın alıyor mu?"
    a: "Evet. NVIDIA, 3 Eylül 2026'da Hugging Face'i $12.93 milyara satın almak için anlaştığını duyurdu. NVIDIA'ya göre platform ekosistemin dört bir yanından modellere, bulutlara ve donanımlara açık kalacak ve NVIDIA işlem gücü zorunlu olmayacak."
  - q: "ZeroGPU günlük kotası nasıl çalışıyor?"
    a: "Kota hesaba göre değişiyor: oturum açmamış kullanıcılar için 2 dakika, ücretsiz hesaplar için 5 dakika, PRO ve Team üyeleri için 40 dakika, Enterprise için 60 dakika. Ücretli kullanıcılar kotayı aşınca 10 dakikası $1 olan ön ödemeli kredilerle devam edebiliyor."
  - q: "Hugging Face'te kendi sağlayıcı API anahtarımı kullanabilir miyim?"
    a: "Evet. Hugging Face ayarlarına özel bir sağlayıcı anahtarı ekleyebilirsin; bu durumda sağlayıcı seni doğrudan faturalandırıyor. Aylık Hugging Face kredilerin yalnızca Hugging Face üzerinden yönlendirilen ve faturalanan isteklerde geçerli."
---
## Hugging Face nedir?
Hugging Face; açık AI modelleri, veri kümeleri ve Spaces uygulamaları için ortak bir yuva olan Hub'ı işletiyor. Etkinliğin çoğu herkese açık ve ücretsiz; ücretli planlar depolama, işlem kredisi ve kuruluş kontrolleri ekliyor.

## Planlara kısa bakış
- **Free:** herkese açık depolar, CPU Basic Spaces, günde 5 dakika ZeroGPU ve aylık $0.10 çıkarım kredisi.
- **PRO (aylık $9):** 10 kat özel depolama, 20 kat çıkarım kredisi, 8 kat ZeroGPU kotası ve Dev Mode.
- **Team (kullanıcı başına aylık $20):** SSO, depolama bölgeleri, denetim kayıtları ve kaynak grupları.
- **Enterprise (kullanıcı başına aylık $50):** SCIM ile kullanıcı sağlama, en yüksek limitler ve özel destek.

Dahil olan limitlerin ötesindeki depolama TB başına fiyatlandırılıyor: özel depolar için ayda TB başına $12 ile $18 arasında.

## Sahiplik haberi
3 Eylül 2026'da NVIDIA, Hugging Face'i satın almak için anlaşmaya vardığını duyurdu. NVIDIA'ya göre platform, ekosistemin her yerinden açık kaynak ve açık ağırlıklı modelleri desteklemeye devam edecek.

## Sınırlamalar
ZeroGPU yalnızca Gradio SDK ile çalışıyor ve torch.compile desteklemiyor; ücretsiz hesaplar ücretli hesaplara göre daha düşük kuyruk önceliği alıyor. Aylık $0.10'lık ücretsiz çıkarım kotası çabuk tükeniyor. Model lisansları depodan depoya değişiyor; ticari kullanımdan önce her birini kontrol et.
