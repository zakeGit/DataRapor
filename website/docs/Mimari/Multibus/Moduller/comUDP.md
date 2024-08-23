---
title: Com UDP
description: Com UDP
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, UDP,COM UDP,TCP/IP,WEB SOKET,SCADA,VERI TOPLAMA]
---


import Screenshot from '@site/src/components/Screenshot';

# Com UDP

Com UDP modülü ile tesisinizde ki UDP baglantı alt yapısına sahip (Fosber vb. gibi) cihazlardan UDP baglantı yöntemi ile veri okuyabilirsiniz. Bu veriyi SCADA sistemine dahil edebilir, Modbus TCP/IP yayını veya JSON dosyası ile ERP entegrasyonunda kullanabilirsiniz.

 
 Bu modul ile ag üzerinde UDP haberlesme destekleyen  cihazlardan  belirtilen portta veri okunur. 

 Comfile modulu ile yalnızca Numarik(Sayısal) veriler sisteme alınabilir.String tipli veriler sisteme alınamaz.




<Screenshot url='/img/mim17.png' />





ComUDP  Modulu , verisi okunacak parametrelerin  sorgudan donen degerlerinin özelliklerini  (index,Length,Type vb .) , multibus klasoru altındaki o forma ait ".udp" uzantılı dosyadan çeker.

Veri okuma süresi ( Data Interval ) ,Sorgu komut parametresi ,port numarası gibi bilgiler multibus üzerinden görüntülenebilir ve değiştirilebilir.  

UDP formundaki Type bölümü okunacak verinin data tipini ifade eder.ComUDP modulu yalnızca numarik tipli verileri ana forma yazar.Bu yüzden verisi okunacak verideki numarik olan bolumler 'N' alfa numarik (Sayısal olmayan) olan bölümler "A" ile ifade edilmelidir.


#### Parametreler

Comfile dosyasından okunan ,  taglerin özellikleri ve UDP sorgusundan okunup parse edilen canlı değerlerin gösterildiği bölümdür.



#### Console

Bu bölüm UDP sorgusundan okunan verinin ham halinin görüntülendiği bölümdür.
<Screenshot url='/img/mim20.png' />

##### Datamap

ComUDP  de tanımlı taglare ait Datamap bölümü bu sayfada görüntülenebilir.
<Screenshot url='/img/mim18.png' />


##### TCP Socket

ComUDPV2 modulu aynı zamanda UDP den okudugu veriyi kendi IP adresi ile ve  formda belirtilen porttan  server olarak TCP  yayını yapar. Modul sayfasından , formdan  TCP okuması yapan clientlerin sayısı da  görüntülenebilir.
<Screenshot url='/img/mim19.png' />

 
 