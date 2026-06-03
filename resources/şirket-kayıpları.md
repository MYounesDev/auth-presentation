Aslında, **"Erişim Kontrolü İhlali" (Broken Access Control)** ve **"Yetkilendirme" (Authorization)** açıkları, dünyadaki en tehlikeli güvenlik açıkları için OWASP listesinde sürekli olarak en üst sıralarda yer almaktadır. Tehlikeleri, genellikle kod yazımındaki mantıksal hatalar (Logical Errors) olmalarından ve bu durumun otomatik tarama araçları tarafından tespit edilmesini zorlaştırmasından kaynaklanmaktadır.

İşte zayıf veya eksik yetki doğrulamasından kaynaklanan yazılım açıklarının kurbanı olan en büyük şirketlerin, her olayın ayrıntılarının ve kayıpların boyutunun bir listesi:

### 1. First American Financial Corp
* **Ülke:** Amerika Birleşik Devletleri 🇺🇸
* **Güvenlik Açığı Türü:** Güvensiz Doğrudan Nesne Referansı (Insecure Direct Object Reference - IDOR) - klasik bir yetkilendirme açığı.
* **Olay Tarihi:** 2019
* **Olayın Ayrıntıları:** Şirket, mülkiyet senedi sigortası konusunda uzmandır. Müşterilerin finansal belgelerini (banka hesap özetleri, vergi kayıtları ve sürücü belgeleri gibi) görüntülemelerine olanak tanıyan bir web uygulamasına sahiptiler. Açık bağlantıda (URL) bulunuyordu; bağlantıdaki belge kimlik numarasını değiştirerek (örneğin `document=123`'ten `document=124`'e), herhangi bir kişi arka planda (Backend) herhangi bir yetki doğrulaması olmadan başka bir kişinin belgelerini görüntüleyebiliyordu.
* **Kayıpların Boyutu:**
    * **Veri:** Geçmiş yıllara (2003'e kadar) ait **885 milyon hassas finansal belgenin** sızdırılması.
    * **Finansal:** ABD Menkul Kıymetler ve Borsa Komisyonu (SEC) tarafından verilen 487 bin dolarlık cezanın yanı sıra New York Finansal Hizmetler Departmanı ile yapılan 1 milyon dolarlık uzlaşma ve ayrıca toplu davaların maliyetleri ve müşteri güveni kaybı.

---

### 2. Optus (Telekomünikasyon Şirketi)
* **Ülke:** Avustralya 🇦🇺
* **Güvenlik Açığı Türü:** API'de yetki doğrulamasının olmaması (Unauthenticated/Unauthorized API Endpoint).
* **Olay Tarihi:** 2022
* **Olayın Ayrıntıları:** Optus (Avustralya'nın en büyük ikinci telekomünikasyon şirketi), kimlik testi için ayrılmış bir Uygulama Programlama Arayüzünü (API) internete açık bıraktı. Bu arayüz herhangi bir kimlik doğrulama (Authentication) veya yetkilendirme (Authorization) gerektirmiyordu. Saldırganlar, müşteri verilerini toplu olarak çekmek için arayüze kolayca tekrarlayan istekler gönderdiler.
* **Kayıpların Boyutu:**
    * **Veri:** Pasaport numaraları, sürücü belgeleri ve adresleri de içeren **10 milyon müşterinin** (Avustralya nüfusunun yaklaşık %40'ı) verilerinin çalınması.
    * **Finansal:** Şirket, müşterilerin resmi belgelerinin değiştirilmesi, hukuki danışmanlık ve kredi izleme maliyetlerini karşılamak için **yaklaşık 90 milyon ABD Doları** bütçe ayırdı. Şirket ayrıca piyasa itibarında ağır bir darbe aldı.

---

### 3. Capital One (Banka)
* **Ülke:** Amerika Birleşik Devletleri 🇺🇸
* **Güvenlik Açığı Türü:** Yetki yükseltilmesine (Privilege Escalation) yol açan Sunucu Tarafı İstek Sahteciliği (Server-Side Request Forgery - SSRF).
* **Olay Tarihi:** 2019
* **Olayın Ayrıntıları:** Bir bilgisayar korsanı (eski bir Amazon mühendisi), bankanın AWS sunucularında barındırılan web uygulaması güvenlik duvarındaki (WAF) bir açığı kullandı. Bu açık sayesinde, sunucuyu kendisine sunucu için atanmış yüksek "yetkiler" (IAM Role) vermesi konusunda ikna etmeyi başardı, bu da müşteri verilerini içeren depolama birimlerine (S3 Buckets) yetkisiz erişim sağlamasına ve normal kullanıcılar için atanan tüm yetki sistemlerini atlamasına olanak tanıdı.
* **Kayıpların Boyutu:**
    * **Veri:** Amerika ve Kanada'daki **106 milyon müşterinin** verilerinin sızdırılması (kredi notları, bakiyeler ve sosyal güvenlik numaraları dahil).
    * **Finansal:** ABD hükümeti tarafından **80 milyon dolar** para cezası ve **190 milyon dolarlık** toplu dava uzlaşması. Olayın toplam maliyetinin **300 milyon doları** aştığı tahmin ediliyor.

---

### 4. Facebook (Şu anki adıyla Meta)
* **Ülke:** Amerika Birleşik Devletleri 🇺🇸
* **Güvenlik Açığı Türü:** "Farklı Gör" (View As) özelliği nedeniyle erişim belirteçlerinin sızdırılması (Access Token Theft / Authorization Bypass).
* **Olay Tarihi:** 2018
* **Olayın Ayrıntıları:** "Farklı Gör" (View As) özelliği, kullanıcıların profillerinin başkalarına nasıl göründüğünü görmelerini sağlıyordu. Video yükleme sistemiyle çakışan karmaşık bir yazılım hatası nedeniyle, saldırganlar diğer kişilere ait "yetki ve erişim belirteçlerini" (Access Tokens) çıkarmayı başardılar. Bu belirteç, sunucuya hesabı kullanmaya "yetkili" olduğunuzu söyleyen şeydir.
* **Kayıpların Boyutu:**
    * **Veri:** **50 milyon hesabın** tam kontrolü, bu da saldırganların Facebook'a bağlı mesajları ve üçüncü taraf uygulamaları okumasına olanak tanıdı.
    * **Finansal:** Duyurunun hemen ardından şirketin hisseleri yaklaşık %3 düştü (bu da saatler içinde piyasa değerinden yaklaşık **13 milyar dolar** sildi). Bu olay, daha sonra şirketin genel gizlilik ihlalleri nedeniyle ABD Federal Ticaret Komisyonu (FTC) tarafından **5 milyar dolar** para cezasına çarptırılmasına yol açan baskıların birikmesine katkıda bulundu.

---

### 5. Amerika Birleşik Devletleri Posta Servisi (USPS)
* **Ülke:** Amerika Birleşik Devletleri 🇺🇸
* **Güvenlik Açığı Türü:** API'de Erişim Kontrolü İhlali (Broken Access Control) / IDOR.
* **Olay Tarihi:** 2018
* **Olayın Ayrıntıları:** Kurum, şirketlerin postalarını takip etmeleri için "Informed Visibility" adlı bir hizmet başlattı. API'de bir kusur vardı; sistem, veri talep eden kullanıcının bu verilerin *sahibi* olup olmadığını kontrol etmiyordu. Kayıtlı herhangi bir kullanıcı, isteği değiştirebilir ve başka herhangi bir kullanıcının verilerini arayabilirdi.
* **Kayıpların Boyutu:**
    * **Veri:** **60 milyon kullanıcının** verileri açığa çıktı.
    * **Finansal:** Bir devlet kurumu olduğu için büyük ticari cezalar uygulanmadı, ancak teknik iyileştirme, sistemi yeniden kurma ve kriz yönetimi maliyetleri milyonlarca doları buldu.

---

**Araştırmanız için önemli bir özet:** Yetkilendirme (Authorization) açıklarından kaynaklanan kayıplar yalnızca doğrudan yasal cezalarla (bazen yüz milyonlara ulaşan) sınırlı değildir. En büyük maliyet **toplu dava uzlaşmaları**, **dijital adli soruşturma maliyetleri** ve **hisse senedi fiyatları ile müşteri güvenindeki felaket çöküşlerde** yatmaktadır.

Araştırmanızda belirli bir sektöre (bankalar veya teknoloji gibi) mi odaklanıyorsunuz, yoksa bu açıkların nasıl önleneceği ve belirli bir yazılım ortamında pratik olarak nasıl uygulanacağı üzerine mi araştırma yapıyorsunuz?