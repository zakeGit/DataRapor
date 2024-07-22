---
title: Form Listesi
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [WEB-SCADA, DATARAPOR, MULTIBUS, MODBUS,PROFINET,RTU,TCP/IP,MQTT,BACNET,SCADA,VERI TOPLAMA]
sidebar_position: 2
---
import Screenshot from '@site/src/components/Screenshot';


# Form Listesi

Form Listesi bölümüne ulaşmak için aşağıdaki adımları takip edebilirsiniz:

Kullanıcı, Datarapor sistemine giriş yaptıktan sonra sol tarafta açılan menüden "Form Listesi" seçeneğine tıklayın.Form Listesi sayfası açılacaktır. Bu sayfada mevcut formlar ve onların detayları görüntülenir.Bu tabloda çeşitli kolonlar bulunur: id, Form Id, Bus Type, File Name, IP, Location, Interval, Record Interval ve Enable.
Her kolon, formların belirli özelliklerini gösterir.
# Yeni Form Ekleme:

Sayfanın üst kısmında bulunan "New" butonuna tıklayarak yeni bir form ekleyebilirsiniz.
 <Screenshot url='/img/device3.png' /> 
Yeni form ekleme alanında gerekli bilgileri doldurup "Update" butonuna tıklayarak formu kaydedebilirsiniz.
# Mevcut Formları Düzenleme:

Tablo içerisinde mevcut formların yanında bulunan "Edit" butonuna tıklayarak form detaylarını düzenleyebilirsiniz.
Düzenleme işlemini tamamladıktan sonra "Update" butonuna tıklayarak değişiklikleri kaydedebilirsiniz.
# Form Silme:

Tablo içerisindeki formun yanında bulunan "Delete" butonuna tıklayarak formu silebilirsiniz.
Silme işlemini onaylamak için ekrana gelen onay mesajına cevap verin.
#  Form Detayları:

Bir formun detaylarını görmek için formun bulunduğu satırdaki "Edit" butonuna tıklayın. Detaylar bölümünde formun id, Bus Type, IP, Interval, Enable gibi bilgilerini görebilirsiniz.
Kolon Açıklamaları

 id:  Formun benzersiz kimliği. 

 Form Id: Formun tanımlayıcı numarası.  

 Bus Type: Formun bağlı olduğu iletişim protokolü (örneğin, ModbusV2, Profinet).  

 File Name:Cihaz register adreslerinin içinde bulunduğu dosya yolu (örneğin : C:\Multibus\Pnt\CL01.pnt)  

  <Screenshot url='/img/device7.png' /> 


:::tip

Bus Type olarak ModbusV2 veya ProfinetV2 seçildiğinde, sistem seçilen cihazın register adreslerini otomatik olarak doldurur. Bu durumda, dosya adı kısmını boş bırakınız.

:::


 IP: Formun bağlı olduğu cihazın IP adresi.  

 Location: Grup adı

 Interval: Veri toplama aralığı.  

 Record Interval: Kayıt aralığı.  

 Enable: Formun etkin olup olmadığını belirten alan (True/False). 


 <Screenshot url='/img/device6.png' /> 

Bu adımları ve açıklamaları takip ederek Form Listesi bölümünü etkin bir şekilde kullanabilirsiniz.  