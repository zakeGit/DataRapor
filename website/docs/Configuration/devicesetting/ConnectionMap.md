---
title: Bağlantı Ayarları
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---
 
import Screenshot from '@site/src/components/Screenshot';

# Çevirici Haberleşme Ayarları  
# 1. Giriş ve Ayarlara Erişim
Kullanıcı, Datarapor sistemine giriş yaptıktan sonra çevirici haberleşme ayarlarına ulaşmak için aşağıdaki adımları izlemelidir:

Sisteme giriş yaptıktan sonra ana sayfaya yönlendirilirsiniz.
Üst menüde yer alan "Ayarlar" sekmesine tıklayın ve "Haberleşme Listesi" seçeneğine tıklayın.
 
Çevirici haberleşme ayarlarını yapılandırmak için aşağıdaki adımları izleyin:


# Yeni Bir Çevirici Ekleme:

Ekranın sağ üst köşesinde yer alan "+ New" butonuna tıklayın.

<Screenshot url='/img/device3.png' />

Aşağıdaki form alanlarını doldurun:

Id: Cihaz için benzersiz bir kimlik numarası girin.

Name: Çevirici adını girin (örneğin,Şebeke Analizörü).

PORT: Çevirici bağlı olduğu port numarasını girin (örneğin, 502, 102).

:::info
Port 102: Siemens S7 PLC'ler ve diğer endüstriyel otomasyon cihazları için ISO-TSAP protokolünü kullanır.  
Port 502: Endüstriyel otomasyon sistemlerinde Modbus TCP protokolü için kullanılır.
:::

CID: Cihaz kimlik numarasını girin.

IP: Çevirici IP adresini girin (örneğin, 10.0.8.10).

Conn Type: Bağlantı türünü seçin (örneğin, Profinet,Modbus ).

Bilgileri girdikten sonra "Update" butonuna tıklayarak kaydedin.



<Screenshot url='/img/device1.png' />

# Mevcut Bir Cihazı Düzenleme:

Düzenlemek istediğiniz cihazı listeden seçin.
Formdaki bilgileri güncelleyin ve "Update" butonuna tıklayarak değişiklikleri kaydedin.

<Screenshot url='/img/device2.png' />

<Screenshot url='/img/device3.png' />

Seçilen cihaz üst menüde bulunan edit butonuna tıklayarak pençere açılır.  


<Screenshot url='/img/device4.png' />

formdaki bilgiler güncellendikten sonra Update butonuna tıklayarak değişiklikler kaydedilir.


# Cihaz Silme:

Silmek istediğiniz cihazı listeden seçin.
Ekranın üst kısmında yer alan "Delete" butonuna tıklayın.

# Verileri Dışa Aktarma:

Cihaz listesinde yer alan verileri dışa aktarmak için "Export" butonuna tıklayın.


# Formda yer alan alanların açıklamaları:

Id: Cihaz için benzersiz kimlik numarası.

Name: Cihazın adı.

PORT: Bağlı olduğu port numarası.

Boud Rate: Veri iletim hızı. (Morbud RTU için)

Stop Bit: Durdurma biti. (Morbud RTU için)

CID: Cihaz kimlik numarası.

IP: Cihazın IP adresi.

 

Bu adımları takip ederek cihaz haberleşme ayarlarını kolayca yapabilirsiniz. Herhangi bir sorunla karşılaştığınızda teknik destek ekibimizle iletişime geçmekten çekinmeyin.
 


 
<iframe width="893" height="502" src="/img/Connection_v.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>