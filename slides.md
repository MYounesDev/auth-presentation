---
theme: seriph
background: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920
title: "Authorization (Yetkilendirme) - Güvenliğin Görünmez Kalesi"
class: text-center
transition: slide-left
comark: true
fonts:
  sans: Inter
  serif: Playfair Display
  mono: Fira Code
---

# 🔐 Authorization <span class="text-amber-400">(Yetkilendirme)</span>

<div class="text-xl text-gray-300 mt-2">
Güvenliğin Görünmez Kalesi
</div>

<div class="mt-8 text-sm opacity-70">
Bilgisayar Mühendisliği Öğrencileri İçin Kapsamlı Sunum
</div>

---
transition: fade-out
layout: center
---

<ModernAlert type="danger" title="Bir Soru İle Başlayalım">
<template #icon><carbon:warning-alt /></template>
<template #icon-large><carbon:warning-alt /></template>
<div class="mt-2 text-xl font-bold">
Test edilen uygulamaların <span class="text-white text-3xl mx-2">%94'ünde</span> erişim kontrolü açığı bulundu.
</div>
<div class="mt-2 text-sm opacity-80">— OWASP Top 10, 2021</div>
</ModernAlert>

<div v-click class="mt-12 text-center">
<h2 class="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-500">
Broken Access Control
</h2>
<div class="text-gray-300 mt-2">Dünyanın 1 Numaralı Güvenlik Açığı</div>
</div>

---
transition: slide-up
---

# <carbon:fingerprint-recognition /> AuthN vs AuthZ

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click>
<GlassCard title="Authentication (Kimlik Doğrulama)" color="cyan">
<template #icon><carbon:fingerprint-recognition /></template>
<div class="text-xl font-bold text-white mb-3">"Sen kimsin?"</div>
<ul class="space-y-3 mt-4 text-sm leading-relaxed">
<li class="flex items-start gap-2"><carbon:checkmark class="text-cyan-400 mt-1"/> Kullanıcının kimliğini doğrular.</li>
<li class="flex items-start gap-2"><carbon:checkmark class="text-cyan-400 mt-1"/> Güvenlik <strong>ve</strong> kişiselleştirme içindir.</li>
<li class="flex items-start gap-2 text-gray-400 italic"><carbon:information class="mt-1"/> Örn: Şifre ile giriş, Yüz Tanıma, 2FA</li>
</ul>
</GlassCard>
</div>

<div v-click>
<GlassCard title="Authorization (Yetkilendirme)" color="red">
<template #icon><carbon:security /></template>
<div class="text-xl font-bold text-white mb-3">"Ne yapabilirsin?"</div>
<ul class="space-y-3 mt-4 text-sm leading-relaxed">
<li class="flex items-start gap-2"><carbon:checkmark class="text-red-400 mt-1"/> Kullanıcının yetkisini kontrol eder.</li>
<li class="flex items-start gap-2"><carbon:checkmark class="text-red-400 mt-1"/> <strong>Sadece ve sadece güvenlik içindir.</strong></li>
<li class="flex items-start gap-2 text-gray-400 italic"><carbon:information class="mt-1"/> Kullanıcıya yeni bir arayüz/özellik katmaz.</li>
</ul>
</GlassCard>
</div>
</div>

---
transition: slide-left
---

# <carbon:connect /> AuthN ↔ AuthZ: Kritik İlişki

<div class="grid grid-cols-3 gap-6 mt-12">
<div v-click>
<GlassCard title="1. AuthN Yok → AuthZ Yok" color="purple">
<template #icon><carbon:close-outline /></template>
<div class="text-sm">Kullanıcının kim olduğunu bilmiyorsanız yetkisini kontrol edemezsiniz. Anonim sistemlerde Authorization imkansızdır.</div>
</GlassCard>
</div>

<div v-click>
<GlassCard title="2. AuthN Var → AuthZ Yok" color="amber">
<template #icon><carbon:warning /></template>
<div class="text-sm">Sistem kullanıcıyı tanır ama herkesin yetkisi eşittir. Hiçbir engel yoktur (Örn: Herkese açık wiki veya basit forum).</div>
</GlassCard>
</div>

<div v-click>
<GlassCard title="3. Her Zaman Birlikte" color="green">
<template #icon><carbon:checkmark-outline /></template>
<div class="text-sm">Authorization her zaman Authentication üzerine inşa edilir. Sağlam bir güvenlik için AuthZ = AuthN + Yetki Kuralları.</div>
</GlassCard>
</div>
</div>

<div v-click class="mt-12">
<ModernAlert type="warning" title="Mühendislik Dersi">
<template #icon><carbon:idea /></template>
<template #icon-large><carbon:idea /></template>
<div class="text-sm">Authorization, sisteme yeni bir "özellik" katmadığı için geliştiriciler tarafından sıkça unutulur veya "sonra yaparız" diye ertelenir. Bu hata, mimari açıdan ölümcül sonuçlar doğurur.</div>
</ModernAlert>
</div>

---
transition: slide-left
---

# <carbon:user-role /> RBAC (Role-Based Access Control)

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click>
<GlassCard title="Rol Tabanlı Yetkilendirme" color="blue">
<template #icon><carbon:user-role /></template>
<div class="text-sm">Kullanıcıya doğrudan izin vermek yerine, <strong>bir rol atanır</strong> ve izinler role bağlanır. Günümüzde en yaygın kullanılan authorization modelidir.</div>
<div class="mt-6 flex flex-col gap-3">
<div class="flex items-center gap-3">
<div class="px-3 py-1 bg-red-500/20 text-red-400 rounded-md border border-red-500/30 font-mono text-sm w-24 text-center shadow-[0_0_10px_rgba(239,68,68,0.2)]">Admin</div>
<span class="text-gray-300 text-xs">→ create, read, update, delete</span>
</div>
<div class="flex items-center gap-3">
<div class="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-md border border-amber-500/30 font-mono text-sm w-24 text-center shadow-[0_0_10px_rgba(245,158,11,0.2)]">Editor</div>
<span class="text-gray-300 text-xs">→ create, read, update</span>
</div>
<div class="flex items-center gap-3">
<div class="px-3 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/30 font-mono text-sm w-24 text-center shadow-[0_0_10px_rgba(34,197,94,0.2)]">Viewer</div>
<span class="text-gray-300 text-xs">→ read</span>
</div>
</div>
</GlassCard>
</div>

<div>
<div v-click>
<ModernAlert type="info" title="Neden Popüler?">
<template #icon><carbon:star /></template>
<template #icon-large><carbon:star /></template>
<div class="text-sm">Anlaşılması çok kolaydır, yönetimi basittir ve çoğu modern web uygulamasının iş senaryolarına mükemmel uyar.</div>
</ModernAlert>
</div>

<div v-click class="mt-6">
<ModernAlert type="danger" title="Dikkat: Role Explosion">
<template #icon><carbon:warning /></template>
<template #icon-large><carbon:warning /></template>
<div class="text-sm">Sistem büyüdükçe roller çoğalır. <code>admin</code>, <code>super-admin</code>, <code>regional-admin</code>, <code>department-admin</code> gibi onlarca rol oluştuğunda sistem yönetimi imkansızlaşır.</div>
</ModernAlert>
</div>
</div>
</div>

---
transition: slide-left
---

# <carbon:cloud /> AWS IAM (Identity and Access Management)

<div class="grid grid-cols-2 gap-8 mt-6">
<div v-click>
<GlassCard title="Endüstri Standardı IAM" color="amber">
<template #icon><carbon:cloud /></template>
<div class="text-sm">Amazon Web Services'in yetkilendirme sistemi, modern bulut güvenliğinin temelini oluşturur.</div>
<ul class="mt-4 space-y-3 text-sm">
<li class="flex items-center justify-between border-b border-white/5 pb-2">
<strong class="text-amber-400">Users</strong> <span class="text-gray-400">Gerçek kişiler / Servisler</span>
</li>
<li class="flex items-center justify-between border-b border-white/5 pb-2">
<strong class="text-amber-400">Groups</strong> <span class="text-gray-400">Kullanıcı kümeleri</span>
</li>
<li class="flex items-center justify-between border-b border-white/5 pb-2">
<strong class="text-amber-400">Roles</strong> <span class="text-gray-400">Üstlenilebilen geçici yetkiler</span>
</li>
<li class="flex items-center justify-between">
<strong class="text-amber-400">Policies</strong> <span class="text-gray-400">İzinleri tanımlayan JSON'lar</span>
</li>
</ul>
</GlassCard>
</div>

<div v-click>
<div class="p-5 rounded-2xl bg-[#1a232f] border border-[#FF9900]/30 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-[#FF9900]/50 hover:shadow-[0_0_30px_rgba(255,153,0,0.2)]">
<div class="absolute top-0 right-0 p-3"><carbon:cloud class="text-[#FF9900] text-3xl opacity-20" /></div>
<div class="text-[#FF9900] font-bold mb-3 flex items-center gap-2"><carbon:policy /> Örnek Policy JSON</div>

```json
{
  "Effect": "Allow",
  "Action": [
    "s3:GetObject",
    "s3:PutObject"
  ],
  "Resource": "arn:aws:s3:::my-secure-bucket/*"
}
```
</div>
</div>
</div>

<div v-click class="mt-6">
<ModernAlert type="success" title="Principle of Least Privilege (En Az Yetki Prensibi)">
<template #icon><carbon:scale /></template>
<template #icon-large><carbon:scale /></template>
<div class="text-sm">AWS IAM kullanırken altın kural: Bir kullanıcıya sadece işini yapması için gereken <strong>minimum yetkiyi</strong> verin. Asla gereksiz yere <code>"Action": "*"</code> kullanmayın!</div>
</ModernAlert>
</div>

---
transition: slide-left
---

# <carbon:http /> 401 vs 403

<div class="grid grid-cols-2 gap-8 mt-12">
<div v-click>
<GlassCard title="401 Unauthorized" color="cyan">
<template #icon><carbon:user-identification /></template>
<div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 drop-shadow-md">"Seni tanımıyorum!"</div>
<ul class="space-y-3 text-sm">
<li class="flex items-center gap-2"><carbon:warning-alt class="text-cyan-400"/> <strong>Sorun:</strong> Authentication başarısız</li>
<li class="flex items-center gap-2 text-gray-300"><carbon:dot-mark /> Token yok, süresi dolmuş veya geçersiz</li>
<li class="flex items-center gap-2 mt-4"><carbon:idea class="text-green-400"/> <strong>Çözüm:</strong> Tekrar giriş yap</li>
</ul>
</GlassCard>
</div>

<div v-click>
<GlassCard title="403 Forbidden" color="red">
<template #icon><carbon:locked /></template>
<div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-6 drop-shadow-md">"Buraya giremezsin!"</div>
<ul class="space-y-3 text-sm">
<li class="flex items-center gap-2"><carbon:warning-alt class="text-red-400"/> <strong>Sorun:</strong> Authorization başarısız</li>
<li class="flex items-center gap-2 text-gray-300"><carbon:dot-mark /> Kim olduğunu biliyoruz ama yetkin yok</li>
<li class="flex items-center gap-2 mt-4"><carbon:idea class="text-green-400"/> <strong>Çözüm:</strong> Yetkili birine danış</li>
</ul>
</GlassCard>
</div>
</div>

---
transition: slide-up
---

# <carbon:code /> Kod ile RBAC (Express.js)

<div class="text-sm opacity-70 mb-4">Basitten gelişmişe doğru 3 aşamalı evrim</div>

````md magic-move {lines: true}
```ts {*|4-7|*}
// ❌ AŞAMA 1: Monolitik (Her şey tek dosyada - KÖTÜ)
app.get("/admin-dashboard", (req, res) => {
  const user = getUserFromToken(req);
  
  if (user.role !== "admin") {
    return res.status(403).json({ error: "Yetkiniz yok" });
  }
  
  res.json({ message: "Admin paneline hoş geldiniz" });
});
```

```ts {*|5-7|11-13|*}
// ⚠️ AŞAMA 2: Router seviyesi (DAHA İYİ)
const router = express.Router();

// Bu router'daki TÜM isteklere admin yetkisi gerekir
router.use((req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Yetkiniz yok" });
  next();
});

// Artık route'ların içi temiz
router.get("/dashboard", adminController.getDashboard);
router.get("/users", adminController.getUsers);
```

```ts {*|3-8|12-14|*}
// ✅ AŞAMA 3: Dinamik Middleware (EN İYİSİ)

function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) return res.status(403).json({ error: "Yetkisiz erişim" });
    next();
  };
}

// Router tanımı inanılmaz derecede okunabilir ve temiz!
router.get("/admin",     auth, authorizeRoles("admin"), ctrl.admin);
router.get("/teachers",  auth, authorizeRoles("admin", "manager"), ctrl.teachers);
router.get("/dashboard", auth, authorizeRoles("admin", "manager", "teacher"), ctrl.dash);
```
````

---
transition: slide-left
---

# <carbon:earth-filled class="text-red-500" /> Gerçek Hayat Felaketleri

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click>
<DisasterCard company="First American Financial" year="2019" vulnerability="IDOR (Insecure Direct Object Reference)" impact="885 Milyon Belge" loss="$1.5M+ Ceza & Dava">
<template #icon><carbon:building /></template>
<template #details>Emlak sigortası devi, belgeleri hiçbir yetki doğrulaması olmadan internete açtı. URL'deki ID numarasını (örn: <code>?id=75</code> → <code>?id=76</code>) değiştiren herkes başkalarının banka hesaplarına, ehliyetlerine ve sosyal güvenlik numaralarına ulaştı.</template>
</DisasterCard>
</div>

<div v-click>
<DisasterCard company="Capital One" year="2019" vulnerability="SSRF → Privilege Escalation" impact="106 Milyon Kişi" loss="$300M+ Toplam Zarar">
<template #icon><carbon:money /></template>
<template #details>Eski bir AWS mühendisi olan Paige Thompson, WAF'taki açığı kullanarak yüksek yetkili IAM Credentials elde etti. <em>En Az Yetki Prensibi (Least Privilege)</em> uygulanmadığı için tüm müşteri AWS S3 bucket'larına yetkisiz erişim sağladı.</template>
</DisasterCard>
</div>
</div>

---
transition: slide-left
---

# <carbon:warning-hex /> Gerçek Hayat Felaketleri (Devam)

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click>
<DisasterCard company="Facebook (Meta)" year="2018" vulnerability="Access Token Theft" impact="50 Milyon Hesap" loss="$5 Milyar FTC Cezası">
<template #icon><carbon:logo-facebook /></template>
<template #details>"Farklı Gör" (View As) özelliğindeki karmaşık bir hata nedeniyle, saldırganlar başkalarının "yetki" belirteçlerini (Access Tokens) çaldı. Token çalındığında, şifre bilmeden o kişinin hesabına tam yetkili erişim sağlanmış olur.</template>
</DisasterCard>
</div>

<div v-click>
<DisasterCard company="Parler" year="2021" vulnerability="IDOR + No Rate Limiting" impact="Tüm Platform (70 TB)" loss="Şirketin Kapanması">
<template #icon><carbon:chat-bot /></template>
<template #details>Sosyal medya platformu, API'lerinde yetki kontrolü (AuthZ) ve istek sınırı (Rate Limit) kullanmadı. Sıralı URL'ler sayesinde hackerlar GPS koordinatları dahil tüm kullanıcı verilerini sırayla indirdi. AWS hizmeti kesti, şirket battı.</template>
</DisasterCard>
</div>
</div>

---
transition: slide-up
---

# <carbon:star-filled /> Altın Kurallar

<div class="grid grid-cols-2 gap-8 mt-8">
<div v-click>
<GlassCard title="Kesinlikle Yapın" color="green">
<template #icon><carbon:checkmark-outline /></template>
<ul class="space-y-4 font-medium text-sm mt-4">
<li class="flex items-center gap-3"><carbon:arrow-right class="text-green-400 text-lg"/> Her endpoint'te Authorization kontrolü yapın</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-green-400 text-lg"/> <strong>Deny-by-default</strong> (Varsayılan reddet) kullanın</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-green-400 text-lg"/> AWS IAM'de Minimum Yetki (Least Privilege) uygulayın</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-green-400 text-lg"/> Yetki kontrolünü Middleware'de merkezi hale getirin</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-green-400 text-lg"/> Tahmin edilemez UUID'ler kullanın</li>
</ul>
</GlassCard>
</div>

<div v-click>
<GlassCard title="Asla Yapmayın" color="red">
<template #icon><carbon:close-outline /></template>
<ul class="space-y-4 font-medium text-sm mt-4">
<li class="flex items-center gap-3"><carbon:arrow-right class="text-red-400 text-lg"/> "Authorization'ı sonra ekleriz" demeyin</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-red-400 text-lg"/> Sadece Frontend'de (arayüzde) yetki gizlemeyin</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-red-400 text-lg"/> Sıralı ID kullanmayın (<code>?id=123</code> → <code>?id=124</code>)</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-red-400 text-lg"/> IAM Policies'de <code>Action: "*"</code> bırakmayın</li>
<li class="flex items-center gap-3"><carbon:arrow-right class="text-red-400 text-lg"/> Role Explosion'a izin vermeyin</li>
</ul>
</GlassCard>
</div>
</div>

---
layout: center
class: text-center
transition: fade-out
---

# <carbon:idea /> Kapanış

<div v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 300, duration: 800 } }" class="text-3xl mt-6 max-w-2xl mx-auto font-medium">
Authorization, sisteme yeni bir <strong class="text-white">özellik</strong> katmaz.
</div>

<div v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 800, duration: 800 } }" class="text-3xl mt-6 max-w-2xl mx-auto font-medium">
Ama <span class="text-red-500 font-black drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">yokluğu</span>, her şeyi yok edebilir.
</div>

<div v-motion :initial="{ y: 50, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 1500, duration: 800 } }" class="mt-16">
<GlassCard color="purple" class="inline-block text-center max-w-3xl mx-auto">
<template #icon><carbon:quotes /></template>
<div class="text-2xl italic text-white/90 leading-relaxed font-serif px-8">
"Authorization sadece bir kod parçası değil,<br/>bir mühendisin sistem mimarisinde kurması gereken<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">en kritik savunma hattıdır.</span>"
</div>
</GlassCard>
</div>

<div v-motion :initial="{ y: 30, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { delay: 2500, duration: 800 } }" class="mt-16 text-lg opacity-60 flex justify-center items-center gap-2 font-bold tracking-widest uppercase">
<carbon:help class="text-2xl" /> Sorularınız?
</div>
