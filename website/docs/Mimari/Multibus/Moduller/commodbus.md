---
title: Com Modbus
description: Com Modbus
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
---


import Screenshot from '@site/src/components/Screenshot';

# Com Modbus

Com Modbus modulu ile ,  saha tarafındaki Modbus RTU ve Modbus TCP IP haberlesme özelliğine sahip olan PLC ,Enerji Analizörü,Chiller,Kompresor gibi cihazlardan veri okunup yazılabilir. 

### ModbusV2

ModbusV2 Modulu Cihazların Register adreslerini RegisterMap tablosundan ,FormNumarasını FormList Tablosundan ,Connection IP adresini Connection Map tablosundan Tagname bilgilerini Datamap tablosundan çeker.


##### RegisterMap

Utilmapte kayıtlı cihaz kütüphanelerinden bir cihaz eklendiğinde o cihaza ait register adresleri otomatik olarak RegisterMap tablosuna eklenir.


##### Formlist

Multibus tarafında verinin çekileceği formun numarasıdır.Defaultta conn id ile aynıdır.

##### Connection IP

Her formun veri okuma yapacağı saha cihazın ip adresidir.Connection Map tablosundan çekilir.

##### Mulitbus ModbusV2 Form Tabloları

###### Infolist



Sql deki Datamap tablosundan "getTagsInfoFromFormId" Proseduru ile mevcut forma ait Tagler çekilip bu formda gösterilir.Burada  Tag in Modbus register adresi ,server register adresi ,datatipi ,multiplier katsayısı,slaveID  vb.gibi bilgiler bulunur.


<Screenshot url='/img/mim5.png' />



###### ModbusData



Modbus sorgusundan  dönen canlı değerlerin gösterildiği bölümdür.

Form altındaki Good  sayısı cevap alınan sorgu sayısı,Bad  cevap donmeyen sorgu sayısıdır.

<Screenshot url='/img/mim2.png' />



###### ModbusQuery



Modbus sorgusu için Register mapten gelen register adresleri ile bir sorgu ( Query ) olusturulur.Bu Query e göre modbus sorgusu yapılır.Query den  donen  Json olarak değerler parse edilerek ana formda  modbus yayınına dahil edilir.

<Screenshot url='/img/mim6.png' />
<Screenshot url='/img/mim7.png' />


###### ScaletedList



Modbus sorgusunda okunan değerler infolistteki multiplier parametresi ve min max  değerlerine göre skala edilerek ana forma gönderilir.Hesaplanan değerler bu sayfada da gösterilir.


<Screenshot url='/img/mim4.png' />

 