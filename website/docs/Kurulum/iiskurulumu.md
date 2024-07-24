---
title: IIS Kurulumu
description: Streamline your app development with the Build Module in Appcircle, offering automated builds for iOS and Android platforms.
tags: [IIS,WEB SUNUCU,SERVER,INTERNET INFORMATION SERVICE,DOMAIN,SUNUCU]
---

 
import Screenshot from '@site/src/components/Screenshot';

### IIS (Internet Information Services ) Kurulumu

Datarapor, web scada sistemi sunucu hizmetleri için microsoft altındaki IIS altyapısını kullanır.


IIS in Windows 11 de yada SERVER işletim sistemlerindeki aktif etme yöntemleri biribirinden farklıdır.
İki windows versiyonu içinde kurulum aşağıda anlatılmıştır.




#### Windows Server İşletim Sistemi için IIS Hizmetleri kurulumu

:::info
Windows Server işletim sistemi için minimum Windows Server 2019 versiyon ve üzeri kullanılması tavsiye edilir.
:::

Windows server manager üzerinden role ekle sekmesi seçilir.Ardından aşağıdaki yönlendirmeler takip edilir.

<Screenshot url='/img/web7.png' />



<Screenshot url='/img/web8.png' />


Roller bölümunden Web Server (IIS) hizmetleri aktif edilir.


<Screenshot url='/img/web9.png' />

Web Server (IIS) altındaki Application Development menüsünde görseldeki seçili .Net Framework ve ASP Net hizmetleri aktif edilir.



<iframe width="893" height="502" src="/img/iss2.mp4" title="datarapor.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>



#### Windows 10-11 İşletim Sistemi için IIS Hizmetleri kurulumu

:::info
Windows tabanlı kullanıcı bazlı işletim sistemlerinde Datarapor kurulum işlemleri için  minimum Windows 10 veya üzeri kullanılması tavsiye edilir.
:::

Denetim Masası'nda kategori görünümünde Programlar sekmesine veya büyük/küçük simgeler bölümünden Programlar ve Özellikler sekmesine girilir. Programlar ve Özellikler bölümünden 'Windows Özelliklerini Aç veya Kapat' sekmesine girilir.





<Screenshot url='/img/web12.png' />



Windows özellikleri altındaki görseldeki seçili  IIS , ASP NET ve .Net Framework özellikleri aktif edilir.

<Screenshot url='/img/web15.png' />


Yukarıdaki işlemler tamamlandıktan sonra ana dizin altında inetpub klasoru otomatik olarak olusacaktır.Datarapor dosyası inetpub altına koyulur ve bağlantı bilgilerine göre config dosyası düzenlenir.



### IIS (Internet Information Services ) Ayarları

Web sayfasının yayına alınması , domain ayarları ve yayın portları gibi bir çok web ayarları IIS üzerinden yapılır.

Sol menuden "Sites" bolumune sağ tıklanır. Buradan "New Sites" e basılır.

<Screenshot url='/img/web21.png' />




<Screenshot url='/img/web22.png' /> 


Burada web sayfasının adı (ORN  DataraRapor) 
Dosya Yolu (inetpub Altındaki Datarapor Klasoru) bolumleri doldurulur.
Eger varsayılan ayarlarda bırakılacaksa baglantı noktası (Yayın portu) 80 de bırakılır.
Farklı bir portta yayın yapılması isteniyorsa baglantı noktası bolumunden yayın portu değiştirilebilir.
Eğer bir domain adı kullanılacaksa Ana bilgisayar adı bölümüne girilmelidir.


<Screenshot url='/img/web20.png' /> 

Eğer SSL sertifikası ile 443 nolu porttan yayın yapılmak isteniyorsa bağlama bölümünden tür olarak "https" seçilmeli ve aşağıdaki SSL sertifikası bölümünden mevcut SSL sertifikası yüklenmelidir.



Bu işlemler sonunda web sayfası sunucu IP adresi üzerinden yada domain adresi üzerinden erişilebilir hale gelmiş olacaktır.




 