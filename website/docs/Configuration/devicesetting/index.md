---
title: Cihaz Ayarları
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
---
import ContentRef from '@site/src/components/ContentRef';
import Screenshot from '@site/src/components/Screenshot';

 
 

Datarapor sisteminde bir verinin ( Enerji Analizörü,Pompa,Sıcaklık vb. ) izlenebilmesi yada kontrol edilmesi için öncelikle verinin okunacağı saha haberlesme ekipmanın (Modbus TCP-IP Donusturucu,PLC vb.) bağlantı bilgileri sisteme tanımlanmalıdır.Ardından okunacak register adresi veya Db adresleri ile sisteme eklenir.

 :::info
 
 Sistem merkezi  sunucu da , uzak sunucuda yada bulutta çalıştırılacaksa ethernet tabanlı baglantı kullanılmalıdır.
 Local bilgisayar kullanımlarında Modbus RTU haberlesmesi de kullanılabilir.

:::


 
 
<ContentRef url="/docs/Configuration/devicesetting/ConnectionMap">Bağlantı - Haberlesme Ayarları </ContentRef>




Bağlantı ayarları, Datarapor web scada sisteminde  kullanıcıların çeşitli çeviricileri sisteme eklemelerini ve bu çeviriçilerin iletişim kurabilmelerini sağlayan kısımdır.Kullanıcı, Datarapor sistemine giriş yaptıktan sonra ayarlar menüsünden "Haberleşme Listesi" seçeneğine tıklayarak haberleşme ayarlarını yapar.

:::tip
 
Entes EMG12, Planet IMG 2100t, Siemens S71200, Digitus DA-70156, Digitus DA-70157, ZVTM gibi çeşitli çeviricilerin ayarları burada girilir.
:::

<ContentRef url="/docs/Configuration/devicesetting/adddevice"> Cihaz Ekleme</ContentRef>

Haberleşme ayarları yapıldıktan sonra, çeviriciye takılı olan cihazı 'Cihaz Listesi' sekmesinden yeni cihaz seçerek kolayca ekleyebilirsiniz.


 :::tip

Haberleşme tipi  ModbusV2 olarak seçildiğinde, sistem seçilen cihaz modelininin register adreslerini otomatik olarak doldurur.ProfinetV2 kullanıcıları, kendilerine özgü cihaz modelleri oluşturup profinet adreslerini sisteme tanıttıktan sonra, bu modelleri 'Cihaz Modeli' sekmesinden kolayca seçerek cihaz ekleyebilirler."

:::




  Bu ayarların her biri, sistemin farklı bileşenlerinin birbirleriyle uyum içinde çalışmasını sağlayarak, kullanıcıların ihtiyacı olan tüm verileri doğru ve hızlı bir şekilde toplamasına imkan tanır.

 








