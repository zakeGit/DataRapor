---
title: Zamanlanmış Görevler
description: Zamanlanmış Görevler
tags: [WEB-SCADA, DATARAPOR, SCHOUDLE, ZAMANLANMIS GOREVLER ,SCADA,VERI TOPLAMA]
sidebar_position: 6
---

 
import Screenshot from '@site/src/components/Screenshot';


<Screenshot url='/img/conf1.png' />


Zamanlanmış görevler altyapısı ile ,  günün belli saatlerine bir rapor gönderme görevi girebilir yada bir saha cihazını çalıştırıp durdurabilir,çalışma set değeri değiştirebilir.

Zamanlanmıs görevler sayfasında sağ üstteki "New" sekmesi ile yeni görev eklenir."Edit" ile görev düzenlenebilir.  

Day : Zamanlanmıs görevlerin tetiklenme günü  ( Hafta içi , Hafta sonu , Pzt, Sali .... vb.)

Time : Görev Tetiklenme zamani

Açıklama : Göreve girilen açıklama kısmı

Görev Durumu : Görevi aktif ,pasif etme seçeneği



   <Screenshot url='/img/conf3.png' />





#### Görev Tipleri: 

##### Dijital Kontrol 
 Bir saha ekipmanınını belli bir saatte durdurmak yada çalıştırmak için kullanılan görev türüdür.
  
  
   Çalıştırma görevi için "RUN" , Durdurma görevi için "STOP"  durumu seçilir.


   <Screenshot url='/img/conf6.png' />



##### Set Kontrol 
Bir saha ekipmanınının çalışma set değerini belli bir saatte değiştirmek için kullanılan görev türüdür.
  
  
   Yeni Set değeri "Set" bölümüne yazılır.

   <Screenshot url='/img/conf4.png' />


:::info
Örneğin ortam havalandırması için kullanılan bir Klima santralinin ofisler bosken set değeri düşürülebilir yada tamamen kapatılıp mesai saatlerinde tekrardan açılabilir.  
:::

##### Rapor 
 Günün belli saatlerine bir rapor gönderme görevi girmek için görev tipi olarak  "Rapor"  görevi seçilir.

Rapor Adı: Gönderilecek Rapor  Tipi ( EPS Raporu , Enerji Tüketim Raporu , Proses Raporu , RHT Raporu ,Vardiya Raporu vb.)

Mail Grubu : Raporun gönderileceği mail grubu

ParentID : Rapor verilerini olusturacak veri grubu ( Main , HVAC , MAKINELER vb. )





<Screenshot url='/img/conf5.png' />
<Screenshot url='/img/conf2.png' />


 

