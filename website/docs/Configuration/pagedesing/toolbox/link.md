---
title: Link
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags:
  [build module, app development, automation, iOS builds, Android builds, CI/CD]
---

import Screenshot from '@site/src/components/Screenshot';

<Screenshot url='/img/link1.png' />

Sistem veya uygulama içindeki belirli alanlara veya dış kaynaklara bağlantı oluşturmak ve yapılandırmak için kullanılır. Bu sekmenin altındaki seçenekler ve işlevleri şunlardır:

### Internal Link (Dahili Bağlantı)

 Uygulama veya sistem içindeki sayfalar arasında bağlantı oluşturur. Kullanıcıların belirli bir yerden başka bir yere hızlıca geçiş yapmasını sağlar.
 
<Screenshot url='/img/link5.png' />

### External Link (Harici Bağlantı)

 Uygulama dışındaki web sitelerine veya dış kaynaklara bağlantı oluşturur. Bu, kullanıcıların sisteme entegre olmayan bilgilere erişmesini sağlar.
 
<Screenshot url='/img/link6.png' />

### PopupType (Açılır Pencere Türü)
 
 Sensörlerle ilgili bilgileri göstermek için açılır pencereler oluşturur. Genellikle anlık veri veya durum bilgisi sağlamak için kullanılır.
 Sensör verilerini kullanıcıya hızlı bir şekilde sunmak istediğinizde bu seçeneği kullanın.

<Screenshot url='/img/link3.png' />

SensorPopupFromPLC
Programlanabilir Lojik Kontrolcü (PLC) tarafından sağlanan sensör verilerini göstermek için açılır pencereler oluşturur.
PLC'den gelen verileri doğrudan görüntülemek için kullanılır.

Diğer Bağlantı Seçenekleri (OR1, OR2, ONF1, vb.)
Belirli işlevler, sensörler veya ekranlarla ilişkilendirilmiş özel bağlantıları temsil eder.
Sistem veya uygulamadaki belirli bileşenlere veya veri setlerine erişim sağlamak için kullanılır.


###  Popover



Kullanıcıların üzerine geldiğinde veya tıkladığında bilgi veren bir açılır penceredir. Bu özellik, kullanıcıya hızlı ve doğrudan bilgi sağlamada etkilidir. Aşağıda, popover özelliğinin nasıl kullanılacağına dair adımlar yer almaktadır:

<Screenshot url='/img/link2.png' />


Yeni Popover Oluşturma
Mesaj Alanı (Message)

Popover'da gösterilecek mesajı yazdığınız alandır. Örneğin, "Depo sıcaklık Verisi" gibi bir mesaj girilebilir.
Kullanıcıya sağlanacak bilginin ne olduğunu açıkça belirtin. Bilgi kısa, net ve anlaşılır olmalıdır.


Popover Türleri

Popover Hover


Bu seçenek seçildiğinde, kullanıcı fareyi ilgili alana getirdiğinde popover görünür.
Bilginin kullanıcı tarafından hızlı bir şekilde görülmesi gerektiğinde tercih edilir.

<Screenshot url='/img/link4.png' />

Popover Click


Bu seçenek seçildiğinde, popover ancak kullanıcı ilgili alanı tıkladığında açılır.
Kullanıcının bilinçli bir seçim yaparak bilgiye ulaşmasını istediğinizde kullanın.


Popover Disable


Popover'ı devre dışı bırakır, yani hiçbir durumda popover görünmez.
Popover'ın gereksiz veya rahatsız edici olabileceği durumlarda bu seçeneği kullanın.


Kaydet (Save)

 Yapılan popover ayarlarını kaydeder.
 Bilgileri girdikten ve popover türünü seçtikten sonra, değişiklikleri uygulamak için "Save" düğmesine tıklayın.