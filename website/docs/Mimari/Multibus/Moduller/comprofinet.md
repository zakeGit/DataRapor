---
title: Com Profinet
description: Com Profinet
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,SCADA,VERI TOPLAMA]
---


import Screenshot from '@site/src/components/Screenshot';

# Com Profinet

Com Profinet modulu ile ,  saha tarafındaki Profinet haberlesme özelliğine sahip olan PLC ,Motor Sürücü,Controller gibi cihazlardan veri okunup yazılabilir. 

### ProfinetV2

ProfinetV2 Modulu Profinet Haberlesmeye sahip Cihazların Datablok adreslerini RegisterMap tablosundan ,FormNumarasını FormList Tablosundan ,Connection IP adresini Connection Map tablosundan Tagname bilgilerini Datamap tablosundan çeker.


#### RegisterMap

Profinet haberlesmeye sahip cihazların datamap e eklenen tag adreslerine ait datablok adresleri RegisterMap tablosuna eklenir.

##### RegisterAdress
Veri okunacak datablok a ait register adresi

##### RegisterType
DataTipi

##### SlaveId
Datablok adresi


##### ConnectionID

Veri cekilecek cihazın tanımlı oldugu Connection ID dir.


<Screenshot url='/img/mim9.png' />


 



##### Multibus ProfinetV2 Form Tabloları

###### Infolist



Sql deki Datamap tablosundan "getTagsInfoFromFormId" Proseduru ile mevcut forma ait Tagler çekilip bu formda gösterilir.Burada  Tag in Profinet Db adresi ,server register adresi ,datatipi ,multiplier katsayısı,Datablok numarası  vb.gibi bilgiler bulunur.


<Screenshot url='/img/mim10.png' />



###### ProfinetData



Profinet sorgusundan  dönen canlı değerlerin gösterildiği bölümdür.

 

<Screenshot url='/img/mim11.png' />



###### ProfinetQuery



Profinet sorgusu için Register mapten gelen Db  adresleri ile bir sorgu ( Query ) olusturulur.Bu Query e göre Profinet data sorgusu yapılır.Query den    Json olarak donen değerler parse edilerek ana formda  modbus ve web Api  yayınına dahil edilir.

<Screenshot url='/img/mim12.png' />
 


###### ScaletedList



Profinet sorgusunda okunan değerler infolistteki multiplier parametresi ve min max  değerlerine göre skala edilerek ana forma gönderilir.Hesaplanan değerler bu sayfada da gösterilir.

Form altındaki Good ibaresi form bazlı haberlesmenin başarılı oldugunu gösterir


<Screenshot url='/img/mim13.png' />