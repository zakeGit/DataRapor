---
title: DataRapora Başlarken
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---

 
 <div><img src="/img/TP07.png" /></div>
import ContentRef from '@site/src/components/ContentRef';

# DataRapor'a Başlarken

Datarapor; 
enerji veri toplama,proses veri toplama,üretim veri toplama,bakım yönetim sistemi modullerini tek bir platformda toplayan gelişmiş bir web tabanlı scada sistemi yazılımıdır.

:::tip

Dataraporun entegre Api desteği sayesinde tesisinizdeki bir çok yazılım altyapısı ile haberlesebileceğini biliyor muydunuz?

:::

 
Sistem;
Veri akış katmanı,Veri tabanı katmanı,Web katmanı   olmak üzere 3 katmandan olusur.



### Veri Akış Katmanı (MultiBus):

DataRapor veri akış katmanı uygulaması olan MultiBus, 24 saat kesintisiz olarak sahadaki tanımlı clientlerden veri okur. 

Birçok haberleşme protokolü desteği ve farklı dosya formatlarından veri okuma özelliği ile öne çıkan MultiBus, okuduğu verileri JSON formatında ve Modbus TCP/IP üzerinden yayınlayarak servis eder. Aynı zamanda, tüm verileri veri tabanına da kaydeder.

MultiBus uygulaması çift taraflı çalışmakta olup, sahadaki clientlerden veri okuduğu gibi cihazlara veri yazma özelliğine de sahiptir.
 

Bu Katman üzerindeki veri Alma Modülleri Aşağıda Özetlenmiştir:


#### Com Modbus:


Com Modbus modulu ile saha tarafındaki Modbus RTU ve Modbus TCP IP haberlesme özelliğine sahip olan PLC ,Enerji Analizörü,Chiller,Kompresor gibi cihazlardan veri okunup yazılabilr.
Detaylı bilgiye Com Modbus sayfasından erişebilrsiniz.
<ContentRef url="/docs/Mimari/Multibus/Moduller/commodbus">Com Modbus</ContentRef>


#### Com Profinet:

Genelde Siemens markalı cihazların kullandıgı Profinet haberleşme özelliğine sahip olan PLC ,Enerji Analizörü,kontrolor gibi cihazlardan veri okuma ve yazma işlemleri için kullanılan haberlesme moduludür. 
Detaylı bilgiye Com Profinet sayfasından erişebilrsiniz.

<ContentRef url="/docs/Mimari/Multibus/Moduller/comprofinet">Com Profinet</ContentRef>



#### Com File:

Com File modülü ile herhangi bir .txt uzantılı dosyadan veri okuyabilirsiniz. Bu veriyi SCADA sistemine dahil edebilir, Modbus TCP/IP yayını veya JSON dosyası ile ERP entegrasyonunda kullanabilirsiniz. Com File modülü, okuduğu dosyayı silme, belli aralıklarla okuma, belirtilen ayraçları dikkate alma gibi birçok ayar parametresi içerir ve sistemlerinizden veri okuma işlemini çok kolay bir şekilde yapmanızı sağlar.
Detaylı bilgiye Com File sayfasından erişebilrsiniz.
<ContentRef url="/docs/Mimari/Multibus/Moduller/comfile">Com File</ContentRef>



#### Com VirtualDevices:

Com VirtaulDevice modülü ile sisteme sanal cihazlar (Enerji analizörü,flowmetre vb.) ekleyebilir ve bu cihazları fiziksel cihazlar gibi sistemde izleyebilirsiniz.


Detaylı bilgiye ComVirtualDevice sayfasından erişebilrsiniz.

<ContentRef url="/docs/Mimari/Multibus/Moduller/comprofinet">Com VirtualDevice</ContentRef>


#### Com VirtualTag:

Com VirtualTag modülü ile sisteme sanal Tagler tanımlayabilir , bu taglari matematiksel işlemlere tabi tutabilirsiniz.


Detaylı bilgiye ComVirtualTag sayfasından erişebilrsiniz.

<ContentRef url="/docs/Mimari/Multibus/Moduller/comprofinet">Com VirtualTag</ContentRef>


#### Com Query

Com Query modülü ile sanal Tagler e Sql sorguları baglanabilir.SQL Query lerinin donusleri anlık olarak sanal taglere aktarılır.


Detaylı bilgiye ComQuery sayfasından erişebilrsiniz.

<ContentRef url="/docs/Mimari/Multibus/Moduller/comprofinet">Com Query</ContentRef>



#### Com UDP

Com UDP modülü ile tesisinizde ki UDP  baglantı alt yapısı içeren (Fosber vb. gibi) cihazlardan veri okuyabilirsiniz. Bu veriyi SCADA sistemine dahil edebilir, Modbus TCP/IP yayını veya JSON dosyası ile ERP entegrasyonunda kullanabilirsiniz.

Detaylı bilgiye Com File sayfasından erişebilrsiniz.
<ContentRef url="/docs/Mimari/Multibus/Moduller/comudp">Com File</ContentRef>


 
 
###

### Veritabanı Katmanı

Datarapor scada sistemi veri tabanı olarak MS SQL ve PostGre SQL veri tabanlarını kullanır.
Veri akış katmanı olan Multibus saha tarafından verileri toplar ve veriler MSSQL ve Postgre SQL tablolarında saklanır.


Ayrıca veri okuma yada yazma amaçlı HanaDb veri tabanı da kullanılabilir.
Multibus ve IIS katmanı veritabanı katmanı ile  sürekli bağlantı halindedir.


<ContentRef url="/docs/Mimari/Veritabani/mssql"> MS SQL Veri Tabanı ve Baglantıları</ContentRef>





<ContentRef url="/docs/Mimari/Veritabani/postgre"> Postgre SQL Veri Tabanı ve Baglantıları</ContentRef>


<ContentRef url="/docs/Mimari/Veritabani/hanadb"> Hana Db Veri Tabanı ve Baglantıları</ContentRef>

 









### Internet Information Server Katmanı (IIS - Web Sunucu)

DataRapor bu versiyonda Windows .Net ve Core altyapılarını destekleyen Sunucuları Destekler...

<ContentRef url="/">Desteklenen IIS Sürümleri</ContentRef>

DataRapor bu versiyonda Windows .Net ve Core altyapılarını destekleyen Sunucuları Destekler..

<ContentRef url="/">
  Desteklenen Windows Server Versiyonları
</ContentRef>

DataRapor bu versiyonda Windows .Net ve Core altyapılarını destekleyen Sunucuları Destekler..

<ContentRef url="/">API Server Altyapisi</ContentRef>

### Uzak İstemci Katmanı ( Javascript & nodeJS  & HTML5)

Datarapor Web-Arayüzü Sayesinde Verilere Hızlı ve Kolay bir şekilde Erişmenizi sağlar

<ContentRef url="/">Destekelen Web Tarayacıları</ContentRef>

Datarapor Web-Arayüzü Sayesinde Verilere Hızlı ve Kolay bir şekilde Erişmenizi sağlar

<ContentRef url="/">Android APP</ContentRef>

Datarapor Web-Arayüzü Sayesinde Verilere Hızlı ve Kolay bir şekilde Erişmenizi sağlar

<ContentRef url="/">ANDON Display</ContentRef>
