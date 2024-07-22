---
title: IIS Kurulumu
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
---

 
import Screenshot from '@site/src/components/Screenshot';

### IIS (Internet Information Services ) Kurulumu

Datarapor, web scada sistemi sunucu hizmetleri için microsoft altındaki IIS altyapısını kullanır.


IIS in Windows 11 de yada SERVER işletim sistemlerindeki aktif etme yöntemleri biribirinden farklıdır.
İki windows versiyonu içinde kurulum aşağıda anlatılmıştır.




#### Windows Server İşletim Sistemi için IIS Hizmetleri kurulumu

:::info
Windows Server işletim sistemi için minimum Windows Server 2019 versiyon ve üzeri kullanılması tavsiye edilir.
:::

Windows server manager üzerinden role ekle sekmesi seçilir.Ardından aşağıdaki yönlendirmeler takip edilir.

<Screenshot url='/img/web7.png' />



<Screenshot url='/img/web8.png' />


Roller bölümunden Web Server (IIS) hizmetleri aktif edilir.


<Screenshot url='/img/web9.png' />

Web Server (IIS) altındaki Application Development menüsünde görseldeki seçili .Net Freamwork ve ASP Net hizmetleri aktif edilir.
 