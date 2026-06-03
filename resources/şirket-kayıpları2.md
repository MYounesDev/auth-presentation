İşte yetkilendirmeyle ilgili güvenlik açıklarının kurbanı olan büyük şirketlerin en belirgin olaylarının, her olayın ayrıntılarının ve yol açtığı kayıpların boyutunun bir listesi:

### 1. First American Financial Şirketi
* **Ülke:** Amerika Birleşik Devletleri
* **Güvenlik Açığı Türü:** IDOR (Insecure Direct Object Reference - Güvensiz Doğrudan Nesne Referansı)
* **Olayın Ayrıntıları:** 2019 yılında, şirketin yüz milyonlarca ipotek belgesini, banka hesabını, sosyal güvenlik numarasını ve para transferi makbuzunu internette tamamen açık bıraktığı ortaya çıktı. Web bağlantısı belgeler için seri numaraları içeriyordu ve bir kullanıcı bağlantıdaki numarayı değiştirdiğinde, oturum açmaya veya kullanıcının belgeyi görüntüleme yetkisini doğrulamaya gerek kalmadan başka bir kişinin belgeleri görüntüleniyordu.
* **Kayıpların Boyutu:** Bu durum, 2003 yılına kadar uzanan 885 milyondan fazla hassas kaydın sızdırılmasına yol açtı. Şirket, New York Finansal Hizmetler Departmanı (NYDFS) tarafından yaklaşık 1 milyon dolar ve ABD Menkul Kıymetler ve Borsa Komisyonu (SEC) tarafından yaklaşık 487.000 dolar para cezasına çarptırıldı. Bunun yanı sıra itibar kaybı ve yasal uzlaşma maliyetleri gibi ağır kayıplar da yaşandı.

---

### 2. Capital One Şirketi
* **Ülke:** Amerika Birleşik Devletleri
* **Güvenlik Açığı Türü:** Yetki Yükseltmeye (Privilege Escalation) yol açan SSRF
* **Olayın Ayrıntıları:** 2019 yılında bir bilgisayar korsanı, bankanın Web Uygulaması Güvenlik Duvarı (WAF) yapılandırmalarındaki bir açığı kullandı. Bu güvenlik açığı (SSRF), korsanın sunucuyu iç istekler yapması için kandırmasına olanak tanıdı ve bu da AWS meta veri hizmetine erişmesine ve geniş yetkilere sahip geçici kimlik bilgilerini ele geçirmesine (yetki yükseltme) olanak sağladı. Bu yetkileri kullanarak şirketin bulut depolama alanına erişebildi.
* **Kayıpların Boyutu:** Hesap numaraları ve kredi kartı başvuruları da dahil olmak üzere 106 milyon müşterinin verileri sızdırıldı. ABD hükümeti şirkete 80 milyon dolar para cezası kesti ve şirket bir toplu davada 190 milyon dolarlık bir uzlaşma ödemek zorunda kaldı. Doğrudan toplam kayıplar 270 milyon doları aştı.

---

### 3. Optus Şirketi
* **Ülke:** Avustralya
* **Güvenlik Açığı Türü:** Kimlik doğrulaması olmayan bir API'de BOLA (Broken Object Level Authorization - Bozuk Nesne Düzeyinde Yetkilendirme)
* **Olayın Ayrıntıları:** Eylül 2022'de, Avustralya'nın en büyük ikinci telekomünikasyon şirketi yıkıcı bir siber saldırıya uğradı. Bilgisayar korsanı, internete açık bırakılan (test amacıyla olduğu düşünülen) ve herhangi bir kimlik doğrulama veya yetki kontrolü gerektirmeyen bir Uygulama Programlama Arayüzü (API) buldu. Bilgisayar korsanı, herhangi bir kısıtlama olmaksızın müşteri verilerini toplamak için müşteri kimlik numaralarını sırayla değiştirerek sürekli istekler gönderdi.
* **Kayıpların Boyutu:** Adresler, doğum tarihleri, ehliyet numaraları ve pasaportlar dahil olmak üzere 10 milyon Avustralyalının verileri ele geçirildi. Şirket, mağdurları kimlik hırsızlığından kurtarmak için yeni ehliyet ve pasaport çıkarma ücretlerinin ödenmesi de dahil olmak üzere, krizin maliyetlerini karşılamak için 140 milyon Avustralya Doları (yaklaşık 95 milyon ABD Doları) ayırdı.

---

### 4. T-Mobile Şirketi
* **Ülke:** Amerika Birleşik Devletleri
* **Güvenlik Açığı Türü:** API'de BOLA / IDOR
* **Olayın Ayrıntıları:** 2023'ün başlarında telekom devi T-Mobile büyük bir veri sızıntısı duyurdu. Bir bilgisayar korsanı, gelen isteklerin yetkilerini doğru bir şekilde doğrulamayan bir API'den yararlandı. Tanımlayıcıları (Identifiers) manipüle ederek, güvenlik açığı keşfedilip kapatılmadan önce korsan, bir aydan fazla bir süre boyunca müşteri verilerini sessizce çıkarmayı başardı.
* **Kayıpların Boyutu:** 37 milyon müşterinin verilerine (isimler, fatura adresleri, e-postalar ve telefon numaraları) erişildi. Bu ihlal ve önceki benzer ihlaller zinciri nedeniyle T-Mobile, 2023 yılında siber güvenliğini artırmak için 150 milyon dolar harcama taahhüdüne ek olarak, etkilenen müşterilere ödenmek üzere 350 milyon dolarlık devasa toplu davaları sonuçlandırmayı kabul etti.

---

### 5. Parler Sosyal Ağı
* **Ülke:** Amerika Birleşik Devletleri
* **Güvenlik Açığı Türü:** İstek sınırlaması eksikliği (No Rate Limiting) ile birleştirilmiş IDOR/BOLA
* **Olayın Ayrıntıları:** Ocak 2021'de platform kapsamlı bir veri kazıma (Scraping) işlemine maruz kaldı. Platformun API'leri gönderiler ve profiller için açık seri numaraları kullanıyordu ve sunucular, kullanıcının bazı gizli verileri görme yetkisine sahip olup olmadığını kontrol etmiyordu. Bu durum, programcıların 1'den milyonlara kadar sayıları tarayan komut dosyaları yazmasına ve silinen gönderiler ve fotoğrafların meta verileri (kullanıcıların kesin GPS koordinatları gibi) dahil olmak üzere terabaytlarca veriyi çekmesine olanak tanıdı.
* **Kayıpların Boyutu:** Buradaki kayıp devlete ödenen mali bir ceza şeklinde değil, şirketin varlığının tamamen yok edilmesi şeklinde oldu. Güvenlik skandalı (diğer faktörlerin yanı sıra) barındırma şirketlerinin ve uygulama mağazalarının (AWS, Apple ve Google gibi) platforma hizmetlerini kesmesine yol açtı, bu da şirketin tamamen durmasına ve piyasa değerini (milyonlarca dolar olarak tahmin ediliyordu) uzun bir süre boyunca tamamen kaybetmesine neden oldu.