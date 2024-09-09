---
title: Com Alert
description: Com Alert


tags: [WEB-SCADA, DATARAPOR, MULTIBUS, COM ALERT,SCADA,VERI TOPLAMA]
---



import Screenshot from '@site/src/components/Screenshot';

# Com Alert

Com Alert modülü scada sisteminde  alarm tanımlaması yapılan tagların  anlık olarak izlendiği moduldur. AlarmMap tablosundan Alarm limitlerini  ve AlarmConfig tablosundan alarm limit değerlerini ve sms ve mail alıcı grup bilgileri bu tablolardan çekilir. ve  herhangi bir text uzantılı dosyadan veri okuyup bu  verileri  ana veri tablosuna aktaran haberlesme moduludur.Bu veri SCADA sistemine dahil edilebilir, Modbus TCP/IP yayını veya JSON dosyası ile ERP entegrasyonunda kullanabilir.

 Com File modülü, okuduğu dosyayı silme, belli aralıklarla okuma, belirtilen ayraçları dikkate alma gibi birçok ayar parametresi içerir ve harici sistemlerinizden veri okuma işlemini çok kolay bir şekilde yapılmasını sağlar. 

 Comfile modulu ile yalnızca Numarik(Sayısal) veriler sisteme alınabilir.String tipli veriler sisteme alınamaz.




<Screenshot url='/img/mim14.png' />



Comfile  Modulu , verisi okunacak parametrelerin  textteki özelliklerini (index,Length,Type vb .) multibus klasoru altındaki o forma ait ".comf" uzantılı dosyadan çeker.

Veri okuma süresi ( Data Interval ) ,veri okunacak text tipi dosyanın yolu ,ayrac tipi ve dosya silme metodu multibus üzerinden görüntülenebilir ve değiştirilebilir.  

Ayrac tipi "Delimineter" ise sağındaki bölümde girili sembolu ayrac olarak kabul ederek , Length seçili ise .comf dosyasındaki index ve Length parametreleirni referans alarak  okunan veriyi parse eder ve ana tabloya veriyi yazar.
Buradaki Type bölümü okunacak verinin data tipini ifade eder.Comfile yalnızca numarik tipli verileri ana forma yazdığından dolayı verisi okunacak metindeki numarik olan bolumler 'N' alfa numarik (Sayısal olmayan) olan bölümler "A" ile ifade edilmelidir.


#### Parametreler

Comfile dosyasından okunan ,  taglerin özellikleri ve text dosyasından okunup parse edilen canlı değerlerin gösterildiği bölümdür.



#### Console

Bu bölüm text dosyasından okunan verinin ham halinin görüntülendiği bölümdür.

##### Datamap

Comfile de tanımlı taglare ait Datamap bölümü bu sayfada görüntülenebilir.


Ayrıca guncel versiyon olarak kullanılan ComfileV2 modulunde değişken dosya ismi için dosya uzantısı  (Extension) bölümü ".dat,.txt"  bulunur.  

<Screenshot url='/img/conf11.png' />

<Screenshot url='/img/conf12.png' />
 