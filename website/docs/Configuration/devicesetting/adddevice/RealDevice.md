---
title: Fiziksel Cihaz Ekleme
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---
import Screenshot from '@site/src/components/Screenshot';


###  

# 1. Giriş ve Cihaz Eklemeye Erişim
Kullanıcı, Datarapor sistemine giriş yaptıktan sonra cihaz ekleme ayarlarına ulaşmak için aşağıdaki adımları izlemelidir:

Sisteme giriş yaptıktan sonra ana sayfaya yönlendirilirsiniz.
Üst menüde yer alan "Ayarlar" sekmesine tıklayın ve "Cihaz Listesi" seçeneğine tıklayın.

# Yeni Bir Cihaz Ekleme:

Ekranın sağ üst köşesinde yer alan "+ New" butonuna tıklayın.

<Screenshot url='/img/device3.png' />

Aşağıdaki form alanlarını doldurun:

id: Cihazın benzersiz kimliği (otomatik olarak atanır veya manuel olarak girilebilir).  
Cihaz Adı: Cihaza verilen kısa kod. Örneğin: D01EA01  
Cihaz Görünen Ad: Cihazın kullanıcı arayüzünde görünen adı. Örneğin: GES ENERJİ ANALİZÖRÜ  
Cihaz Tipi: Açılır menüden fiziksel cihaz eklerken cihaz tipini "REAL"seçin.  
MainGroup: Cihazın ana grubu. Örneğin: EA  
Cihaz Modeli: Cihazın modeli. Açılır menüden uygun cihaz modelini seçin. Örneğin: PAC3100,MPR47-SE  
Conn.Id: Bağlantı ayarları kısmında girilen çevirici kimliği. Örneğin: 1  
Form Id: Conn. Id lerin toplandığı grup numarası. Conn Id ile aynı numara verilmesi gerekir Örneğin: 1  
Slave ID: Verisi alınacak cihazın Slave ID. Örneğin: 1  
Açıklama: Cihaz hakkında ek bilgi veya açıklama. Örneğin:Ana Giriş Ges Enerji Analizörü  

<Screenshot url='/img/device5.png' />

Tüm bilgileri doldurduktan sonra ekranın sağ alt köşesinde bulunan "Update" butonuna tıklayarak cihazı kaydedin.  

Cihazı Görüntüleme:
Kaydettiğiniz cihaz, Cihaz Listesi'nde görüntülenecektir. Gerekli düzenlemeleri yapmak için "Edit" butonuna tıklayarak cihaz bilgilerini güncelleyebilirsiniz.

Bu adımları izleyerek Datarapor sistemine yeni cihazlar ekleyebilir ve mevcut cihazları düzenleyebilirsiniz.


<iframe width="893" height="502" src="/img/device1.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>