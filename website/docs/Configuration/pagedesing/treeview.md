---
title: Tree View Altyapısı
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
---

import Screenshot from '@site/src/components/Screenshot';

Tree View altyapısı, Datarapor web SCADA sisteminde cihazların ve grupların katmanlı bir yapıda görüntülenmesini sağlayan bir kullanıcı arayüzü bileşenidir. Bu yapı, kullanıcıların sistemdeki tüm cihazları ve grupları düzenli ve anlaşılır bir şekilde görmelerine ve yönetmelerine yardımcı olur.
 
###  Admin Paneline Giriş
Öncelikle, kullanıcı admin paneline giriş yapmalıdır. Admin paneline giriş yaptıktan sonra, sol tarafta "Cihazlar" menüsü yer alır.

###  Tree View Menüsünü Açma
Kullanıcı, sol taraftaki "Cihazlar" menüsünde yer alan "Main" üzerine sağ tıkladığında bir pencere açılır. Bu pencerede çeşitli seçenekler bulunur. Kullanıcı bu menü üzerinden yeni sayfa ekleyebilir, grup ekleyebilir, mevcut bir grubu silebilir veya adını değiştirebilir.
<Screenshot url='/img/tw1.png' />

###  Yeni Grup Ekleme
Sağ tıklama menüsünden "Yeni Grup Ekle" seçeneğine tıklayın.
Yeni grubunuz için bir ad belirleyin ve "Kaydet" butonuna basın.
Yeni grup, Tree View yapısında belirlediğiniz ad ile görüntülenecektir.
###  Grup Silme
Silmek istediğiniz grubun üzerine sağ tıklayın.
"Grup Sil" seçeneğini seçin.
Grup silindiğinde, bu gruba bağlı tüm alt öğeler de silinecektir. Bu nedenle dikkatli olun.
###  Adını Değiştirme
Adını değiştirmek istediğiniz grubun üzerine sağ tıklayın.
"Adını Değiştir" seçeneğini seçin.
Yeni adı girin ve "Kaydet" butonuna basın.
###  Cihaz Ekleme
Yeni cihaz eklemek için ilgili grubun üzerine sağ tıklayın.
"Cihaz Ekle" seçeneğine tıklayın.
Cihazın adını ve gerekli bilgileri girin, ardından "Kaydet" butonuna basın.
 
Daha önceden Bağlantı ve Cihaz ekle ayarları kısmında yapmış olduğunuz konfigürasyonların listesi burada görüntülenecektir. Seçmiş olduğunuz cihaz , tree view altyapısında eklemiş olduğunuz grubun altında görülecektir. 

Eklemek istediğiniz cihazı 

<Screenshot url='/img/tw2.png' />

"Cihazlar" menüsü, sol tarafta yer almaktadır.
"Main" üzerine sağ tıklandığında açılan pencerede, yeni grup ekleme, grup silme, ad değiştirme ve cihaz ekleme seçenekleri bulunmaktadır.