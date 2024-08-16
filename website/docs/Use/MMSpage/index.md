---
title: Bakım Yönetim Sistemi
description: Bakım Yönetim Sistemi Modulu kulanım 
tags: [WEB-SCADA,DATARAPOR,MMS,BAKIM YONETIM SISTEMI,YEDEK PARCALAR,VERI TOPLAMA,BAKIM YONETIMI,BAKIM PLANLAMA,FABRIKA IZLEME,KESTIRIMCI BAKIM,WEB SCADA NASIL KURULUR,WEB SCADA NEDIR,TESIS IZLEME]
---

import Screenshot from '@site/src/components/Screenshot';

# Bakım Yönetim Sistemi


Bakım yönetim sistemi ana sayfası tüm aktif işlerin izlenebildiği dashboard sayfasıdır.Kullanıcı login sonrası  bu sayfaya yönlendirilir.

<Screenshot url='/img/mms1.png' />

Bu sayfada yaklaşan işler , anlık olarak çalışılan işler , bekleyen işler ve biten işler önem durumuna göre anlık olarak gösterilir. 

:::info

Bakım yönetim sisteminin temel amaçları şunlardır:

* Tesisteki temel ekipmanların periyodik bakımlarının takibini kolaylaştırmak,
* Bakım sırasında değiştirilecek yedek parça listelerine ve bu parçaların stok durumuna kolayca erişim sağlamak,


Bu sayede operasyonel verimliliği artırmaktır.
 
:::




## Ekipmanlar


 Bakım yönetim sisteminin verimli bir şekilde kullanılabilmesi için, tesisin bölümleri , bu bölümlerdeki  temel ekipmanların doğru bir şekilde sisteme tanımlanması ve yedek parça listelerinin eksiksiz ve doğru bir şekilde sisteme eklenmesi gerekir.


 ### Tesis Bölümlerinin Eklenmesi
 
 
 
 Mevcut tesis bolümler, anasayfada  sol menüde , Treeview altyapısı ile görüntülenir.Yeni grup veya alt bölüm eklemek için ,tesis isimleri üzerine sağ tıklanır. Açılan menuden istenen düzenlemeler yapılır.


<Screenshot url='/img/mms3.png' />

### Ekipmanlar ve Yedek Parçaların Eklenmesi

Sağ üstteki ekipmanlar sekmesinden ilgili sayfaya ulasılır.




<Screenshot url='/img/mms9.png' />

<Screenshot url='/img/mms5.png' />
Bu sayfada sağ üstteki new butonu ile yeni ekipman eklenebilir,edit butonu ile mevcut ekipmanlar guncellenebilir.


Ekipmana ait yedek parca listelerine Spare Part bölümünden ,Cihaz kimlik etiketlerine de QRCode bölümünden ulaşılır.
<Screenshot url='/img/mms6.png' />
<Screenshot url='/img/mms7.png' />

:::info
Bakım kayıtlarının sisteme daha hızlı ve doğru bir şekilde girilmesi için, sistem tarafından oluşturulan QR kodlarının ekipmanların üzerine yapıştırılması tavsiye edilir.
:::



### Stok ve Stok Miktarlarının Güncellenmesi

<Screenshot url='/img/mms8.png' />


 DataRapor MMS sisteminde, ekipmanlara eklenen yedek parçalar, stok tablosunda kayıtlı değilse otomatik olarak stok tablosuna da eklenir.
 
 Güncel stok miktarlarına, sağ üst köşedeki 'Ekipmanlar' sekmesi altındaki 'Stok' bölümünden ulaşılabilir ve ürün miktarları bu sayfadan güncellenebilir.





## Is Emirleri




 ### Yeni İş Emri Ekleme 

 Yeni iş emri ,  "İş Emirleri"  sayfasında sağ ustteki "New" butonu ile eklenir. 




 <Screenshot url='/img/mms18.png' />



 Ekipman Adı :  Ekipman listesinden seçilir.

  İş Tanımı   :  İş emrinin tanımı.

 İş Tipi     : " PERIYODIK , PLANLI , PLANSIZ , ARIZA "  iş tipi türlerinden biri seçilir.

 Aralık      : " HAFTA , AY ,YIL "

 Tekrar      : Periyodik bakımlardaki tekrar sayısı

 Planlanan  Başlangıç  Tarihi   : İş başlangıcı için planlanan tarih
 

 Planlanan  Bitiş Tarihi  : İş bitişi için planlanan tarih

 Sorumlu     : İşin kontrol sorumlusu


 İş Sahibi   : İşi yapmakla görevli kişi


Hatırlatma   : Aktif / Pasif 

Aktif edildiğinde sistem görev zamanından üç gün önce seçili hatırlatma metodu ile hatırlatma mesajı gönderir.


Sms Aktif    : Aktif / Pasif - Uyarı mesajlarını SMS ile gönderir.


Mail Aktif   :Aktif / Pasif -  Uyarı mesajlarını E-Mail ile gönderir.


:::info
 "PERIYODIK" iş tipinde seçim yapıldığında  "Planlanan Başlangıc Tarihi" , "Aralık" , "Tekrar"  bilgisi referans alınarak  tekrar sayısı  kadar iş emri otomatik olarak  üretilir. 

 Bu işler "Aktif işler" sayfasından görüntülenebilir.

 Ayrıca bu iş emirleri silindiğinde de o emre ait tekrarlı tüm kayıtlar "Aktif iş emirleri" sayfasından silinir.

:::



 

 ### Aktif Emirler

 Bakım yönetim sisteminde tanımlı aktif emirlerin ve iş durumlarının görüntülendiği sayfadır.Üst bölümdeki sütün bazlı filtreleme yardımcıları ile görevler filtrelenebilir ve bu şekilde dışa aktarılabilir.

<Screenshot url='/img/mms10.png' />
<Screenshot url='/img/mms12.png' />


 #### Aktif Emir Güncelleme
Aktif emirler sayfasındaki görevlerin durumu sağ ustteki "Edit" butonu ile değiştirilir.

<Screenshot url='/img/mms24.png' />

Açılan popupta "İş Durumu"  bölümü  "BEKLEYEN"  den , "CALISILIYOR" yada "TAMAMLANDI" durumuna geçirildiğinde işten Sorumlu yetkiliye sistem tarafından otomatik olarak bilglendirme SMS ve E-Maili gönderilir.

<Screenshot url='/img/mms22.png' />
<Screenshot url='/img/mms23.png' />



 #### Aktif Emirler Yedek Parça Listesi 
Bakım Yönetim Sistemi ile Planlı Bakımlarınızda kullanılacak yedek parça listelerine kolay bir şekilde ulaşabilir ,bu yedek parçaların stok durumlarını görüntüleyebilir ve kullanılan parçaları stoktan düşebilirsiniz.

Aktif bakım emrindeki kullanılacak yedek parçaların listesine ulasmak için ilgili emir seçili iken sağ üstten "Edit" butonu tıklanır. Açılan popupta "Using PART" bölümü seçilr.
Açılan sayfa o bakım için kullanılması planlanan yedek parçaların listesini ve stok bilgilerini gösterir.


<Screenshot url='/img/mms15.png' />



Bu sayfada,

StokQty : Stok miktarı

UsingQty: Kullanılması Planlanan Miktar 

  bilgilerini gösterir.

"Edit" ile  kullanılan miktar güncellenir ve iş tamamlandğında kullanılan yerdek parçalar sistem tarafından stoktan otomatik olarak düşülür.



 #### İş Emirleri Raporları 

Bakım yönetim sistemi içinde dahili olarak iş emirleri raporu bulundurur.Bu raporlar planlanan zamanda sistem tarafından otomatik olarak gönderilir.


<Screenshot url='/img/mms25.png' />




Rapor gönderim ayarları ayarlar sayfasındaki zamanlanmıs görevler bölümünden yapılır. 


<Screenshot url='/img/mms26.png' />


 