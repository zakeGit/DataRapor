---
title: Konfigürasyon
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [getting started, mobile, ci/cd, platform]
sidebar_position: 2
---

 <section class="intro-visual">
    <div class="intro-text">
        <h5 class="intro-visual-header">Web Scada Konfigürasyon</h5>
         
    </div>
    <div className="intro-image"><img src="/img/configuration.svg" /></div>
</section>


 
import ContentRef from '@site/src/components/ContentRef';




DataRapor web scada konfigürasyonları 3 Ana Katmana Ayırabiliriz:

### Cihaz Ayarları



<ContentRef url="/">
  Alarm Ayarları
</ContentRef>
İstenen bir parametre için alarmın aktif edilmesi durumunda, alarm anında SMS ve mail gönderimi seçeneklerinin belirlendiği bölümdür. Yalnızca alarm aktif edildiğinde, alarm sayfasına alarmlar kaydedilir.

:::tip
Bool olmayan alarm tanımlamaları için alarm limitleri, sensör popupları veya table dashboard sayfasındaki alarm bölümünden düzenlenebilir.
:::

<ContentRef url="/">Cihaz Ekleme</ContentRef>

<ContentRef url="/">Enerji Analizörü Haberleşme Kontrol</ContentRef>

Sistemde ekli enerji analizörlerinin haberleşme durumları görüntülenmektedir

<ContentRef url="/">Bağlantı Ayarları</ContentRef>
 

<ContentRef url="/">Cihaz Ayarları</ContentRef>


<ContentRef url="/">Form Listesi</ContentRef>


<ContentRef url="/">GroupMap</ContentRef>


<ContentRef url="/">Zamanlanmış Görevler</ContentRef>
Scada sistemi Zamanlanmış görevler altyapısını içinde barındırır.Bu sayede belirli periyotlar ile bir cihaza Aç /Kapat gibi komutlar gönderebilir,set değerini değiştirebilir yada önceden tanımlı bir raporu istenen saatte istenen gruba gönderebilirsiniz.

<ContentRef url="/">Mail Ayarları</ContentRef>
Scada sisteminde Rapor ve alarm maillerinde gönderici olarak kullanılacak mail adresinin bilgilerinin görüntülendiği ve düzenleme işlemlerinin yapıldığı bölümdür.
<ContentRef url="/">Rapor Ayarları</ContentRef>


<ContentRef url="/">Sanal Cihazlar</ContentRef>


<ContentRef url="/">Visual Map</ContentRef>

Kullanıcı SCADA sayfasını bu bölümde hazırlar ve burada izleme ile birlikte kontrol işlemlerini gerçekleştirir.

:::tip
Sistemde ekipman görsellerinin üzerine tıklandığında cihazın tanım tipine göre kendi popup sayfası açılır
 :::
### Scada Sayfa Tasarımları




<ContentRef url="/">Toolbox</ContentRef>


Toolbox, kullanıcılara ayarlar yapma,tag bağlama , gelişmiş pop-up seçimi ve link yönlendirme , arayüzün renklerini değiştirme gibi işlevler sunar. Bu özellikler, kullanıcıların görünümü özelleştirerek kullanıcı deneyimini iyileştirmelerine olanak tanır.



<ContentRef url="/">Toolbar</ContentRef>

Toolbar,Veri  , görsel ,text , buton ve inputbox gibi işlevler sunar. Bu özellikler, kullanıcıların görünümü özelleştirerek kullanıcı deneyimini iyileştirmelerine olanak tanır.

:::tip
Online ve Offline butonlarıyla SCADA sisteminin simülasyonu bu bölümden yapılır.
 :::


<ContentRef url="/">Tree View Altyapısı</ContentRef>
3




###

### Kullanıcı Ayarları



<ContentRef url="/">AuditLog</ContentRef>

Datarapor kendi içinde bir audit  trail  mekanizması barındırır.Bu sayede kullanıcıların sistem üzerinde yaptıkları tüm değişiklikler , değişikliğin yapıldığı zaman ile birlikte kayıt altına alınır.

<ContentRef url="/"> Personel Grupları</ContentRef>
Bu sayfada sisteme  eklenen personel grupları görüntülenmektedir. Personel grupları, aynı roller deki kullanıcılara ortak bir alan oluşturur ve alarmlar , mail ve sms gönderme eylemleri bu gruplara göre yapılır.Admin yetkisine sahip kullanıcılar tarafından  personel grubu ekleme , çıkarma ve düzenleme yapılır. 

<ContentRef url="/">Sms Mail Ayarları</ContentRef>
 Scada sisteminde Rapor ve alarm maillerinde gönderici olarak kullanılacak mail adresinin bilgilerinin görüntülendiği ve düzenleme işlemlerinin yapıldığı bölümdür.

