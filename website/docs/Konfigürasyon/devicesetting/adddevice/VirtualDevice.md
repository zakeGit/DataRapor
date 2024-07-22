---
title: Sanal Cihaz Ekleme
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---

import Screenshot from '@site/src/components/Screenshot';



###  

# 1. Giriş ve Cihaz Eklemeye Erişim
Kullanıcı, Datarapor sistemine giriş yaptıktan sonra cihaz ekleme ayarlarına ulaşmak için aşağıdaki adımları izlemelidir:

Sisteme giriş yaptıktan sonra ana sayfaya yönlendirilirsiniz.
Üst menüde yer alan "Ayarlar" sekmesine tıklayın.   
Sol menüden "Cihaz Listesine" seçeneğine tıklayın.

 

# Yeni Bir Cihaz Ekleme:

Ekranın sağ üst köşesinde yer alan "+ New" butonuna tıklayın.

<Screenshot url='/img/device3.png' />

Aşağıdaki form alanlarını doldurun:

id: Cihazın benzersiz kimliği (otomatik olarak atanır veya manuel olarak girilebilir).   
Cihaz Tipi : Sanal cihaz eklerken cihaz tipi "VIRTUAL" olarak seçin.  
Cihaz Adı: Cihaza verilen isim. Örneğin: D01EA01  
Cihaz Görünen Ad: Cihazın kullanıcı arayüzünde görünen adı. Örneğin: GES ENERJİ ANALİZÖRÜ  
MainGroup: Cihazın ana grubu. Örneğin: EA  
Cihaz Modeli: Cihazın modeli. Açılır menüden uygun cihaz modelini seçin. Örneğin: PAC3100   
Slave ID: Cihazın Slave ID'si. Örneğin: 1  
Açıklama: Cihaz hakkında ek bilgi veya açıklama. Örneğin:Ana Giriş Ges Enerji Analizörü  

<Screenshot url='/img/device8.png' />

Tüm bilgileri doldurduktan sonra ekranın sağ alt köşesinde bulunan "Update" butonuna tıklayarak cihazı kaydedin.  

Cihazı Görüntüleme:
Kaydettiğiniz cihaz, Cihaz Listesi'nde görüntülenecektir. Gerekli düzenlemeleri yapmak için "Edit" butonuna tıklayarak cihaz bilgilerini güncelleyebilirsiniz.

 


Bu adımları izleyerek Datarapor sistemine yeni cihazlar ekleyebilir ve mevcut cihazları düzenleyebilirsiniz.