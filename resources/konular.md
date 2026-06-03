Lütfen "Authorization (Yetkilendirme)" konusu üzerine, bilgisayar mühendisliği öğrencilerine yönelik hazırlanacak bir sınıf sunumu için kapsamlı bir rehber ve sunum iskeleti oluştur. 

### 🎯 Sunumun Hedefi ve Kitlesi:
* **Hedef Kitle:** Temel bilgisayar bilimleri ve kod bilgisine sahip bilgisayar mühendisliği öğrencileri.
* **Ton ve Tarz:** Etkileyici, vizyon açıcı, akademik sıkıcılıktan uzak ve tamamen pratik/teknik gerçeklere dayalı.
* **Ana Mesaj:** Authorization'ın sadece bir kod parçası değil, bir mühendisin sistem mimarisinde kurması gereken en kritik savunma hattı olduğu vurgulanmalı.

### 📌 İçerik Beklentileri:
* Slayt slayt ilerleyen, mantıklı bir akış (Giriş, Problem, Mimari, Gerçek Hayat Senaryoları, Sonuç).
* Öğrencilerin stajlarında veya ilk projelerinde doğrudan kullanabilecekleri pratik mühendislik tavsiyeleri ve best-practice'ler (en iyi uygulamalar).
* "Neden bu konuyu ciddiye almalıyız?" sorusuna cevap veren, mühendis adaylarını sarsacak ve konunun ciddiyetini kavratacak güçlü argümanlar.

---

## 1. 🔐 Temel Kavramlar (Mutlaka Bilinmesi Gerekenler)

- **Authentication vs Authorization farkı**
   - Authentication: "Sen kimsin?" → Kimlik doğrulama
   - Authorization: "Ne yapabilirsin?" → Yetki kontrolü
   - Bu iki kavramın birbirinden neden farklı olduğu ve neden ikisine birden ihtiyaç duyulduğu
- **Principal** → Yetki verilen varlık (kullanıcı, servis, sistem)
- **Resource** → Erişilmek istenen kaynak (dosya, API, veritabanı)
- **Permission** → İzin (okuma, yazma, silme vb.)
- **Policy** → Yetki kurallarını tanımlayan kural seti

---

## 2. 📚 Authorization Modelleri (Sunumun Çekirdeği)

### 🔹 DAC – Discretionary Access Control
- Kaynak sahibi, başkalarına erişim izni verebilir
- Örnek: Linux dosya sistemi izinleri, Google Drive paylaşımı
- Avantaj: Esneklik | Dezavantaj: Merkezi kontrol yok

### 🔹 MAC – Mandatory Access Control
- Sistem politikaları belirler, kullanıcı değiştiremez
- Örnek: Askeri sistemler, SELinux
- Avantaj: Yüksek güvenlik | Dezavantaj: Katı ve karmaşık

### 🔹 RBAC – Role-Based Access Control
- Kullanıcıya rol atanır, role göre izin verilir
- Örnek: Admin, Editor, Viewer rolleri
- En yaygın kullanılan model
- Avantaj: Yönetimi kolay | Dezavantaj: Rol patlaması (role explosion)

### 🔹 ABAC – Attribute-Based Access Control
- Kullanıcı, kaynak ve ortam özelliklerine göre dinamik karar
- Örnek: "Sadece TR'den giriş yapan yöneticiler erişebilir"
- Avantaj: Çok esnek | Dezavantaj: Karmaşık politika yönetimi

### 🔹 ReBAC – Relationship-Based Access Control
- İlişkilere göre yetki (Google Zanzibar sistemi)
- Örnek: "Bu dokümanı paylaşan kişinin arkadaşları görebilir"
- Modern uygulamalarda (Google Drive, Notion) kullanılıyor

---

## 3. ⚙️ Önemli Protokoller & Standartlar

| Standart | Ne İşe Yarar? | Örnek Kullanım |
|---|---|---|
| **OAuth 2.0** | Üçüncü taraf erişim yetkisi | "Google ile giriş yap" |
| **OpenID Connect** | OAuth üzerine kimlik katmanı | SSO sistemleri |
| **JWT** | Yetki bilgilerini taşıyan token | API güvenliği |
| **SAML 2.0** | Kurumsal SSO | Active Directory |
| **XACML** | ABAC için politika dili | Büyük kurumsal sistemler |

---

## 4. 🏗️ Mimari Kavramlar

- **Centralized vs Decentralized Authorization**
- **PEP** (Policy Enforcement Point) → Kararı uygulayan nokta
- **PDP** (Policy Decision Point) → Kararı veren nokta
- **PAP** (Policy Administration Point) → Politikaları yöneten nokta
- **Zero Trust Architecture** → "Kimseye güvenme, her şeyi doğrula" modeli
- **Principle of Least Privilege** → Sadece gerektiği kadar yetki ver

---

## 5. 🛡️ Güvenlik Açıkları & Saldırılar

- **Privilege Escalation** → Yetkisiz yetki yükseltme
- **IDOR** (Insecure Direct Object Reference) → Başkasının kaynağına erişim
- **Broken Access Control** → OWASP Top 10'da #1 sırada!
- **JWT manipülasyonu** → Token üzerinde oynama
- **Confused Deputy Attack** → Yetkili servisi kandırma

---

## 6. 🌍 Gerçek Hayat Örnekleri (Sunumu Güçlendirir)

- **AWS IAM** → Bulut tabanlı ABAC + RBAC
- **Google Zanzibar** → ReBAC'ın en büyük örneği (milyarlarca kullanıcı)
- **Active Directory** → Kurumsal RBAC
- **Kubernetes RBAC** → Container orkestrasyonunda yetkilendirme
- **GitHub** → Repository bazlı yetki sistemi

---

## 7. 📈 Modern Trendler

- **Policy as Code** → Yetki kurallarını kod olarak yazmak (OPA - Open Policy Agent)
- **Fine-Grained Authorization** → Satır/sütun bazında bile yetki kontrolü
- **AI destekli anomali tespiti** → Yetkisiz erişimlerin otomatik tespiti
- **Decentralized Identity** → Blockchain tabanlı kimlik/yetki

---

## 💡 Sunum İçin Altın İpuçları

> - Başlangıçta **Authentication vs Authorization** farkını net ver, çoğu kişi karıştırır
> - **RBAC → ABAC → ReBAC** evrimini hikaye gibi anlat
> - OWASP'ın **Broken Access Control'ü #1 zafiyet** olarak gösterdiğini vurgula
> - Mutlaka **Google, AWS, GitHub** gibi gerçek örnekler kullan
> - Sona **Zero Trust** ve **Policy as Code** gibi güncel trendlerle bitir

---

Lütfen Express.js kullanarak Role-Based Authorization (Rol Tabanlı Yetkilendirme - RBAC) konusunu teknik detaylarıyla ve kod örnekleriyle açıkla. Anlatımını basitten gelişmişe doğru aşağıdaki aşamalara göre yapılandır ve kodların **Model-View-Controller (MVC)** dosya mimarisine (app -> routers -> middleware -> controllers -> services/database) uygun olmasını sağla.

### 📌 Önemli Notlar & Gereksinimler:
* **Authentication (Kimlik Doğrulama) Katmanı:** Sadece simüle edilmiş bir yapı olmasın; gerçekçi bir senaryoda JWT (JSON Web Token) doğrulayan, çözen ve kullanıcı bilgisini/rolünü (örn: `req.user`) request objesine ekleyen bir middleware kurgula.
* **Örnek Endpoint'ler:** Senaryoları açıklarken şu endpoint'leri kullan: `/admin`, `/admin-dashboard`, `/dashboard`, `/public-announcements`, `/managers`, `/teachers`, `/students`.

### 🚀 İlerleme ve Anlatım Planı:

**Aşama 1: Temel Seviye (Monolitik Yapı)**
* Router, controller veya ekstra katmanlar kullanmadan, sadece ana `app.js` dosyasının içindeki endpoint'lerde (inline olarak) basit authorization kontrolü nasıl yapılır? (Kod karmaşasını göstermek için iyi bir başlangıç noktası).

**Aşama 2: Rotalara (Routers) Ayırma**
* Proje biraz büyüdüğünde bu endpoint'lerin farklı router dosyalarına (örn. `routes/adminRoutes.js`, `routes/userRoutes.js`) nasıl ayrıldığını ve yetki kontrolünün router seviyesinde nasıl yapıldığını göster.

**Aşama 3: Gelişmiş MVC ve Modüler Middleware Mimarisi**
* Authorization mantığının controller veya router içine yazılmak yerine, **ayrı ve dinamik bir middleware (örn. `authorizeRoles(...roles)`)** olarak nasıl dışarı çıkarılacağını detaylandır.
* Bu middleware'in, JWT Authentication katmanından (önceki middleware'den) gelen kullanıcı rolünü nasıl okuyup kontrol ettiğini göster.
* Sonuç olarak; Controller katmanının sadece iş mantığına (services/database) odaklandığı, endpoint'lerin (Router) ise son derece okunabilir bir şekilde yetkilendirme middleware'leri ile korunduğu temiz proje yapısını sun.



authorization a uyumlu proje nasıl tasarlanır ? (kod, database, mimari)
Authorization frontend te ve backend te ayrı ayrı önemleri ve ayrı ayrı nasıl yapılır
örnek MVC mimarisinde nasıl yapılır (router, middleware,Authentication , Authorization, controller, services,database)
Ve ayrıca daha iyi anlatabilmek için detaylı örnek senaryoları
Ve ayrıca authorization yapılmadığında oluşabilicek kötü sonuçlar
Ve bunu daha anlatabilmek için gerçek hayattan olmuş onunla ilgili olaylar (şirketleri uğramış olduğu güvenlik açıkları büyük kayıpları)

Lütfen aşağıdaki teknik konuları, bir bilgisayar mühendisi adayının vizyonunu genişletecek derinlikte ve ezber bozan örneklerle açıkla. 

### 📌 İşlenecek Konular ve Kısıtlamalar:

**1. Normal Uygulamalar vs. B2B Uygulamalarda Authorization:**
* Standart son kullanıcı (B2C) uygulamalarındaki yetkilendirme (örn: Admin, User) ile B2B (İşletmeden İşletmeye) SaaS uygulamalarındaki çok kiracılı (multi-tenant) yetkilendirme yapılarının farkını teknik düzeyde anlat.

**2. HTTP 401 (Unauthorized) ve 403 (Forbidden) Farkı:**
* Bu iki durum kodunun teknik farkını net, akılda kalıcı ve pratik senaryolar üzerinden göster. 

**3. Authentication (AuthN) vs. Authorization (AuthZ) - İleri Seviye Bakış:**
* *Önemli Kısıtlama:* Bu kitle standart "Biri kim olduğundur, diğeri ne yapabildiğindir" şeklindeki klasik ve basit örnekleri defalarca dinledi. Lütfen daha vurucu, sistem mimarisi seviyesinde örnekler kullan.
* *Vurgulanması Gereken Ana Felsefe:* Authentication, hem "güvenlik" hem de "kullanıcıya doğru hizmeti/veriyi sunabilmek" (kişiselleştirme, profil gösterme vb.) için kullanılır. Ancak **Authorization sadece ve sadece güvenlik içindir.**
* *Mühendislik Dersi:* Authorization, uygulamaya yeni bir "özellik (feature)" katmadığı ve sadece arka planda çalışan bir güvenlik katmanı olduğu için geliştiriciler tarafından genellikle unutulur veya ertelenir. Bir mühendis adayı olarak, Authorization'ın "ekstra bir özellik" değil, "sistemin zorunlu temeli" olduğunu; bu hataya düşmenin mimari açıdan ne kadar ölümcyl sonuçlar doğuracağını etkileyici bir dille anlat.

* *En önemli farklar:* 
1. Authentication i olmayan bir sistemin (anonim kullanıcılar hesap yapısı olmayan sistemler) Authorization ı da olamaz (kullnacının kim olduğunu bilmiyorsanız yada sistemde tanımlı olduğu bir kimliği  yoksa yetksini kontrol edemezsiniz)
2. Authentication i olan bir sistemin Authorization i olmayabilir (demek ki sistemde herkesin yetkisi ve rolu eşittir)
3. AuthZ, her zaman AuthN üzerine inşa edilir. Authentication yoksa, Authorization'ın da bir anlamı kalmaz.



Authorization işlemi yaparken neleri koruyoruz ve hangi tatikleri kullanıyoruz ?
mesela :
sadece iki tane role'un yetkileri ayrımak için yapılması gereken işlem (müdür ve öğretmen gibi)
A işlemi = role kontrolu
peki ayrı organisation olsa (B2B tabanlı site)?
A işlemi yapmak yetmiyor çünkü X kurumunda müdür yetkisine sahip olan biri Y kurumuna erişmeyi deneyebilir , sadece A işlemi yaparsak istek kabul edilir, dolaysıyla:
B işemi = organisation kontrolu
peki bir öğretmenin başka bir öğretmenin öğrencisine erişmeye çalışırsa ?
A ve B işlemi yapmak yetmiyor çünkü her iki öğretmen aynı kurumda ve ikiside öğretmen yetkisine sahip (sistemde IDOR açığı var) dolaysıyla istek kabul edilir dolaysıyla :
C işelmi = resources kontrolu 
ve onun gibi tatikleri de araştır