---
title: Fiziksel ve Sanal Cihaz Ekleme
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---
import Screenshot from '@site/src/components/Screenshot';

 
#### Cihaz Ekleme


DataRapor un içinde barındırdığı  geniş cihaz kutuphanesi desteği ile saha cihazları dakikalar içinde  sisteme eklenip izlemeye baslanabilir.

:::info

Birçok yerli ve yabancı menşeili enerji analizörü ,flowmetre,chiller,pompa grubu  cihazlarının kütüphaneleri sistemde tanımlı olup,cihaz kütüphanesi her geçen gün genişletilmektedir.Sistemde kütüphanesi olmayan farklı cihazların sisteme kütüphane olarak tanımlanması talepleride hızlı bir şekilde karsılanmaktadır.

:::

 

Ayarlar sayfasındaki  "Cihaz Listesi" butonuna tıklanarak sistemde ekli  mevcut cihazların bulundugu sayfaya ulasılır.




<Screenshot url='/img/konf3.png' />



Yeni bir cihaz eklemek için sayfanın sağ üst köşesinde yer alan "+ New" butonuna tıklanır.




<Screenshot url='/img/device3.png' />




:::info

Bir veya daha fazla cihazın  verilerinin basit matematiksel islemlere tabi tutup yeni bir cihaz gibi sistemde  gösterilmesi işlemi için sanal cihaz tanımlaması kullanılmalıdır.

ORN: VD01 = (EA01-EA02)/2

:::

<Screenshot url='/img/device5.png' />

Eğer fiziksel cihaz tanımlanacaksa cihaz tipi 'REAL' sanal cihaz tanımlanacaksa cihaz tipi 'VIRTUAL'  ve cihaz modeli  'VIRTUAL_EA' seçilmelidir.



 

Cihaz Adı: Cihazın sistemde tanımlı adıdır.
:::info
Mumkun oldugunca anlasılır ve kategorik isimler vermek kullanım açısından kolaylık sağlayacaktır.


Örneğin: D01EA01 . . . D01EA05 , D100PUMP01,D100PUMP02.... gibi
:::



 

Cihaz Görünen Ad: Cihazın kullanıcı arayüzünde görünen adı. Örneğin: GES ENERJİ ANALİZÖRÜ  

 
MainGroup: Cihazın ana grubu. Örneğin: EA  


Cihaz Modeli: Sisteme eklenecek Cihazın modeli 

Örneğin: SIEMENS PAC3100 , ENTES MPR47-SE , JANITZA UMG96 , SCHNEIDER METSEMP Serisi , ABB EA gibi



Conn.Id: Bağlantı ayarları kısmında haberlesme tanımlaması yapılan çevirici cihazın CID parametresi. Örneğin: 1 


Form Id: Multibus uygulaması tarafında cihazın veri okuması yapılacagı formun  Id numarasıdır.Defaultta CID ile aynı numara verilir. Örneğin: 1  


Slave ID: Veri okuma yapılacak cihazın Slave adresi . Örneğin: 1  



Açıklama: Cihaz hakkında ek bilgi veya açıklama. Örneğin:Ana Giriş Ges Enerji Analizörü  



Tüm bilgileri doldurduktan sonra ekranın sağ alt köşesinde bulunan "Update" butonuna tıklayarak cihazı kaydedin.  



#### Cihaz Düzenleme:
Kaydettiğiniz cihazlar, Cihaz Listesi'nde görüntülenecektir. Ekli cihazlarda düzenleme yapmak için "Edit" butonuna tıklayarak cihaz bilgilerini güncelleyebilirsiniz.

Yukarıdaki adımları izleyerek Datarapor sistemine yeni cihazlar ekleyebilir ve mevcut cihazları düzenleyebilirsiniz.


<iframe width="893" height="502" src="/img/device1.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>