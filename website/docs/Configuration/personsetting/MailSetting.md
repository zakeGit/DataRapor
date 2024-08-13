---
title: Mail ve SMS Temel Gönderici Ayarları 
description: Mail ve SMS Temel Gönderici Ayarları
tags: [MAIL SENDER, MAIL SETTING, MAIL ACCOUNT,MAIL CONFIG,SMTP,PORT,HOST]
sidebar_position: 5
---

import Screenshot from '@site/src/components/Screenshot';
 






DataRapor sistemi tarafından kullanıcılara gönderilen otomatik e-mail altyapısının gönderici ayarlarının yapıldıgı bölümdür.

DataRapor e-mailleri burada girilen mail adresi ile alıcılara gönderecektir.


<Screenshot url='/img/device10.png' />

UserName: Mail göndermek için kullanılacak e-posta adresi.  
Password:  Mail hesabının şifresi    
Mail From: Mail göndermek için kullanılacak e-posta adresi.  
Port: SMTP sunucusunun kullanacağı port numarası.Orn: 587   
Host: Kullanılacak SMTP sunucusunun adresi.Orn: SMTP.office365.com  
DataRapor ServerIP: DataRapor sisteminin yayınlandığı IP adresi

Enable SSL : Mail sunucusu SSL guvenlik katmanı içeriyorsa bu bolum seçilmelidir.


:::info
Mail sunucusunun konfigurasyon dokumanında SSL aktif veya SSL pasif olarak çalısma portları belirtilir.

Bu bilgilere gore Port ve SSL Enable bölümleri doğru bir şekilde doldurulmalıdır.

Orn: SSL'siz: 587 / SSL ile 465 gibi

:::


Yukarıdaki bölümler doğru bir şekilde doldurulduktan sonra, e-posta bildirimleri ve raporları sistem üzerinden sorunsuz bir şekilde gönderilecektir.





 