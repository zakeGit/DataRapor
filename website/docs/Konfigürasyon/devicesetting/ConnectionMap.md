---
title: Bağlantı Ayarları
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---
 
import Screenshot from '@site/src/components/Screenshot';

# Cihaz Haberleşme Ayarları  
# 1. Giriş ve Ayarlara Erişim
Kullanıcı, Datarapor sistemine giriş yaptıktan sonra cihaz haberleşme ayarlarına ulaşmak için aşağıdaki adımları izlemelidir:

Sisteme giriş yaptıktan sonra ana sayfaya yönlendirilirsiniz.
Üst menüde yer alan "Ayarlar" sekmesine tıklayın.   
Cihaz Haberleşme Ayarları:
Sol menüden "Haberleşme Listesi" seçeneğine tıklayın.
 
 
Cihaz haberleşme ayarlarını yapılandırmak için aşağıdaki adımları izleyin:

# Yeni Bir Cihaz Ekleme:

Ekranın sağ üst köşesinde yer alan "+ New" butonuna tıklayın.

<Screenshot url='/img/device3.png' />

Aşağıdaki form alanlarını doldurun:

Id: Cihaz için benzersiz bir kimlik numarası girin.

Name: Cihazın adını girin (örneğin,  GES_EA).

PORT: Cihazın bağlı olduğu port numarasını girin (örneğin, 502, 102).


:::info
Port 102: Siemens S7 PLC'ler ve diğer endüstriyel otomasyon cihazları için ISO-TSAP protokolünü kullanır.  
Port 502: Endüstriyel otomasyon sistemlerinde Modbus TCP protokolü için kullanılır.
:::

Boud Rate: Cihazın veri iletim hızını girin (örneğin, 9600).

Stop Bit: Veri iletiminde kullanılan durdurma bitini girin (örneğin, 1).

CID: Cihaz kimlik numarasını girin.

IP: Cihazın IP adresini girin (örneğin, 10.0.8.10).

Conn Type: Bağlantı türünü seçin (örneğin, Profinet,Modbus ).

Parity: Parite bitini seçin (örneğin, No).

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

Boud Rate: Veri iletim hızı.

Stop Bit: Durdurma biti.

CID: Cihaz kimlik numarası.

IP: Cihazın IP adresi.

Conn Type: Bağlantı türü (Profinet, Ethernet, vb.).

Parity: Parite biti (None, Even, Odd).

Bu adımları takip ederek cihaz haberleşme ayarlarını kolayca yapabilirsiniz. Herhangi bir sorunla karşılaştığınızda teknik destek ekibimizle iletişime geçmekten çekinmeyin.
 


 
<iframe width="893" height="502" src="/img/Connection_v.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>