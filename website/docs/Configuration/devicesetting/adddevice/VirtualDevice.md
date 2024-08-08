---
title: Sanal Cihaz Konfigurasyonları
description: Sanal Cihaz Konfigurasyonları
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA, VIRTUAL DEVICE,VIRTUAL TAG]
sidebar_position: 2
---

import Screenshot from '@site/src/components/Screenshot';


 
## Sanal Cihaz Ayarlarının Görüntülenmesi

Ayarlar sayfasındaki 'Sanal Cihazlar' butonundan Sanal cihazlar sayfasına ulasılır.Bu sayfada sistemde tanımlı Sanal EA,Sanal Flowmetre gibi cihazlar bu sayfada görüntülenir.

  
### Sanal Cihaz Katkı Ekleme:

Sanal cihaz matematiksel konfigurasyonu sayfanın sağ üst köşesinde yer alan "Virtual Config"  butonu ile açılan popuptan yapılır.

Örneğin, 'D150EA01' tanımlı 'DENEME SANAL' cihazının verisi, EA01 cihazının tüketiminin yarısından EA02 cihazının tüketiminin yüzde 30'unun çıkarılması olarak kabul edildiğinde, matematiksel işlemimiz D150EA01 = (EA01 * 50 - EA02 * 30) / 100 şeklinde olur.Bu tanımlamalar  "Virtual Config" menusunden yapılacaktır.

:::info
Sisteme "Virtual Config" menusunden kaynak degerleri girilirken yüzde cinsinden girilmelidir.
:::



<Screenshot url='/img/konf6.png' />

 Kaynak ekleme sonrası Sanal cihazlarda  guncel veriler izlenebilecektir..
 

<iframe width="893" height="502" src="/img/device1.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>