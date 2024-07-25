---
title: MS SQL Server Kurulumu
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags: [MSSQL , POSTGRE SQL,VERI TABANI,SQL SERVER,SQL MANAGEMENT STUDIO]
---

 
 
import Screenshot from '@site/src/components/Screenshot';

 

Datarapor web scada sistemi ana veri tabanı olarak MSSQL server kullanır.
Sistemdeki tüm özelliklerin aktif kullanılabilmesi için MSSQL Server 2022 (Ver 16.0.1) versiyonun kurulması önerilir.
> [MSSQL Server 2022 (Ver 16.0.1)](https://www.microsoft.com/tr-tr/sql-server/sql-server-downloads)

:::info
Sistem ihtiyacına göre Express yada Standart versiyon kullanılabilir.
:::

<Screenshot url='/img/MSSQLServ3.png' />



 
### SQL Server Management Studio ( SSMS )  Kurulumu

MSSQL Management Studio SQL server in erişim ve konfürasyonlarının yapıldığı uygulamadır.
SQL Server kurulumu sonrası aynı kurulum dosyasından yada kendi sayfasından SQL Management Studio kurulabilir

> [SQL Management Studio için  (Ver 20.2) versiyonun kurulması önerilir.](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)



<Screenshot url='/img/MSSQLServ4.png' />

### Veri Tabanı Kurulumu İslemleri
SQL Management Studio açılır ve mevcut veritabanı scripti çalıştırılır.

<Screenshot url='/img/MSSQLServ6.png' />

:::caution
Veri tabani kurulduktan sonra kullanıcı aktif etme işlemleri sıra ile yapılmalıdır.
:::

## Kullanıcı Ayar ve Konfigurasyon İşlemleri

Sistemin veri tabanı erişimi için o kullıcının adı ile login e izin verilmelidir.

Öncelikler Object explorer deki Security menusu  altındaki Login kısmından  sağ tıklama ile yeni kullanıcı olusturulur.
Mevcut bir kullanıcı ile işlem yapılacaksa kullanıcı adına sağ tıklama ile properties menusu açılır.



<Screenshot url='/img/MSSQLServ7.png' />




<Screenshot url='/img/MSSQLServ11.png' />


Buradaki general kısmından login için kullanılacak parola girilir.Status kısmından da bu kullanıcı ile Login işlemine izin verilir.

Ardından SQLSERVER adının üzerinde  sağ tıklama ile properties altındaki security  kısmından authentication metodu olarak  SQL Server and Windows Authentication mode secilmelidir. 

<Screenshot url='/img/MSSQLServ10.png' />


Bu işlem tamamlandktan sonra SERVER adına yeniden sağ tıklanarak SQL Server Restart ile SQL SERVER  yeniden başlatılır.


:::caution
İşlemler sonunda aktif edilen kullanıcı adı ile veritabanına  login denemesi yapılmalıdır.
:::

 <Screenshot url='/img/MSSQLServ12.png' />

<iframe width="893" height="502" src="/img/mssql.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>



 