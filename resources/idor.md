Başlıktaki gibi; sisteme “ Biz bir yan daireye bakıp çıkacaz” dediğinizde, sistemin size “Buyur geç, anahtara gerek yok” demesi ne kadar absürt geliyorsa, web dünyasında IDOR (Insecure Direct Object References) zafiyeti de o kadar absürt ama bir o kadar yaygındır.

Karmaşık algoritmalar çözmeye, şifreleri kırmaya gerek yoktur. Tek yapmanız gereken, tarayıcınızın adres çubuğundaki küçük bir sayıyı değiştirmektir. Ve böylelikle Başkasının bilgileri ekranınızdadır.

Örnek olarak 885 Milyon Belge Nasıl Sızdı?

Bunun en acı örneklerinden biri, 2019 yılında Amerika’nın emlak ve sigorta devi First American Financial Corp’un başına geldi. Şirket, müşterilerin banka hesap numaralarını ve çeşitli kişisel verilerini serverda saklıyordu.

Bir emlakçı, kendisine gönderilen bir belgeyi görüntülerken URL’e (linke) dikkat etti. Link şuna benziyordu: website.com/document?id=000000075

Emlakçı id numarasını görünce “Acaba bu sondaki 75'i, 76 yaparsam ne olur?” dedi.

sistem Sadece istediği belgeyi ekrana getirdi. Emlakçı sayıları değiştirdikçe; hiç tanımadığı insanların finansal verileri dökülmeye başladı.

Sonuç? Sadece URL’deki sayıları değiştirerek ve herhangi bir izne ihtiyacı olmadan, tam 885 milyon hassas belge herkesin erişimine açık hale gelmişti.

Teknik olarak IDOR’u şöyle tanımlayabiliriz:

Sunucunun (backend), gelen isteği işlerken “Kim istiyor?” sorusunu atlayıp, sadece “Ne isteniyor?” sorusuna cevap vermesi veya istekte bulunun id nin gizlenmemesi durumunda Uygulama, kullanıcının sisteme giriş yapmış olmasını (Authentication) yeterli görür; ancak talep ettiği verinin gerçekten ona ait olup olmadığını (Authorization) sorgulamaz. Burada kendi id numarası dışında başka bir id numarasına ait bir bilgiyi görmeye çalışan saldırganın karşısında anlamsız veriler geliyor dahi olsa bile bu bir açığın göstergesidir.

Kısacası; veritabanı anahtarlarının (ID, dosya adı, key vb.) kullanıcı tarafından manipüle edilerek, arka plandaki nesnelere (object) doğrudan ve izinsiz erişim sağlanması durumudur.

