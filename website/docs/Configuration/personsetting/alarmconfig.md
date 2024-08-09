---
title: Alarm Ayarları
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 3
---

import ContentRef from '@site/src/components/ContentRef';
import Screenshot from '@site/src/components/Screenshot';

 

Kullanıcıların belirli olaylar veya durumlar için alarmlar tanımlamasına ve bu alarmlar tetiklendiğinde bildirim almasına olanak tanır. Alarm ayarlarını doğru bir şekilde yapılandırmak, sistemin verimli çalışması ve kullanıcıların zamanında bilgilendirilmesi açısından önemlidir. Bu bölümde, Datarapor'un alarm ayarlarını nasıl yapacağınızı adım adım açıklayacağız.


 <Screenshot url='/img/alarm1.png' />

 
### DisplayName:

Bu alan, 'Cihaz Ekle' kısmında konfigürasyonunu yaptığınız cihazın verilerini listeler. Açılır listeden hangi alarmı eklemek istiyorsanız onu seçebilirsiniz. Bu, alarmın hangi cihaza ait olduğunu kolayca tanımlamanızı sağlar.

### Alarm Group:

Bu alan, 'Personel Grupları' kısmında konfigürasyonunu yaptığınız gruplardan gelir. Alarmın dahil olduğu grup seçilir. Gruplama, benzer alarmların bir arada tutulmasını ve yönetilmesini kolaylaştırır.

### Alarm Aktif ?:

Alarmın aktif olup olmadığını belirten seçenek. Alarmı etkinleştirmek veya devre dışı bırakmak için kullanılır.

### Sms Aktif ?:

Alarm tetiklendiğinde SMS bildiriminin aktif olup olmadığını belirten seçenek. Bu özellik etkinleştirildiğinde, alarm tetiklendiğinde SMS gönderilir.

### Mail Aktif ?:

Alarm tetiklendiğinde mail bildiriminin aktif olup olmadığını belirten seçenek. Bu özellik etkinleştirildiğinde, alarm tetiklendiğinde e-posta gönderilir.

### Mesaj:

Alarm tetiklendiğinde gönderilecek olan mesaj. Bu mesaj, alarmın neden tetiklendiğini ve ne yapılması gerektiğini açıklayabilir.