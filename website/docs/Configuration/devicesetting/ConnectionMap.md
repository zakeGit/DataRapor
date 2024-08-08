---
title: Bağlantı ve Haberlesme  Ayarları
description: Bağlantı ve Haberlesme  Ayarları
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA,TCP-IP DONUSTURUCU,PLC,EMG12]
sidebar_position: 2
---
 
import Screenshot from '@site/src/components/Screenshot';



# Saha Cihazı Haberleşme Ayarları  
  
Datarapor sisteminde bir verinin izlenebilmesi yada kontrol edilmesi için öncelikle verinin okunacağı saha haberlesme ekipmanın (Modbus TCP-IP Donusturucu,PLC vb.) bağlantı bilgileri sisteme tanımlanmalıdır.

 # 1. Yeni Baglantı Cihazı Ekleme

Setting menusundeki  Haberlesme listesi sayfasında sistemde tanımlı  veri okunacak  cihazların  (Modbus TCP-IP Donusturucu,PLC vb.)  haberlesme ayarları görüntülenir.

<Screenshot url='/img/konf2.png' />


Yeni bağlantı eklemek için sağ üst köşedeki "+ New" butonuna basılır.



 

<Screenshot url='/img/device3.png' />

Aşağıdaki form alanlarını doldurun:

<Screenshot url='/img/device1.png' />
 
Name: Çevirici adı (örneğin:ENTES EMG12).

PORT: Cihazın Haberlesme Portu (örneğin, 502, 102).

:::info

Siemens S7 serisi PLC'ler (S7-1200 , S7-300 ,S7-1500 vb.) standartta Profinet Haberlesme Protokulunu kullanır.Ve haberlesme Portu " 102 " dir.  
Modbus TCP-IP haberlesme protokulunu kullanan PLC ( Schineider , ABB ,Panasonic vb ) veya TCP-IP Donustuculer (Entes EMG12, Planet IMG 2100t)  için default haberlesme portu " 502 " dir. 

:::


CID: Connection ID 

IP: Çevirici IP adresi (örneğin: 192.168.1.55).

Conn Type: Haberlesme Tipi (örneğin: Profinet,Modbus ).

Form doldurulduktan sonra "Update" butonu ile kaydedilir.





# Mevcut  Haberlesme Cihazını Düzenleme:

Düzenlemek istediğiniz cihazı listeden seçin.
Formdaki bilgileri güncelleyin ve "Update" butonuna tıklayarak değişiklikleri kaydedin.

<Screenshot url='/img/device2.png' />

<Screenshot url='/img/device3.png' />

 


<Screenshot url='/img/device4.png' />

Formdaki bilgiler güncellendikten sonra Update butonuna tıklayarak değişiklikler kaydedilir.


# Cihaz Silme:

Silmek istediğiniz cihazı listeden seçin.
Ekranın üst kısmında yer alan "Delete" butonuna tıklayın.

# Verileri Dışa Aktarma:

Cihaz listesinde yer alan verileri dışa aktarmak için "Export" butonuna tıklayın.

 
:::info


Yukarıdaki adımları takip ederek cihaz haberleşme ayarlarını kolayca yapabilirsiniz. Herhangi bir sorunla karşılaştığınızda teknik destek ekibimizle iletişime geçebilirsiniz.
 
:::

 
<iframe width="893" height="502" src="/img/Connection_v.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>