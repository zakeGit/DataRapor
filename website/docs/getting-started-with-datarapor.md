---
title: DataRapora Başlarken
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [getting started, mobile, ci/cd, platform]
sidebar_position: 2
---

import ContentRef from '@site/src/components/ContentRef';

# DataRapor'a Başlarken

Datarapor; enerji veri toplama,proses veri toplama,üretim veri toplama,bakım yönetim sistemi modullerini tek bir platformda toplayan gelişmiş bir web tabanlı scada sistemi yazılımıdır.

Sistem;
Web katmanı ,Veri tabanı katmanı ve Veri akış katmanı olmak üzere 3 katmandan olusur.

 
### Veritabanı Katmanı

Your mobile applications must be digitally signed to be able to distributed, tested and, submitted to app stores.

For iOS applications, you must have a signing certificate and provisioning profiles to be able to run your application on real devices and submit them to Apple Appstore.

<ContentRef url="/">
  MS SQL Veri Tabanı
</ContentRef>

For Android applications, you need to create a keystore file to sign your applications digitally.

<ContentRef url="/">Veri Tabanı Lisans Modelleri</ContentRef>

 
:::tip

PostGree ve MSSQL Desteği.

:::

### Veri Akış Katmanı (MultiBus):

DataRapor Veri Akış Katmanı olan Uygulama MultiBus ismini veridiğimiz 24 saat kesintisiz olarak tanımlı Client verileri sürekli tarayarak Toplar ve Sunucu arayüzü ile JSon ve Modbus TCP/IP  Formatında Servis eder.  

Bu Katman üzerindeki veri Alma Modülleri Aşağıda Özetlenmiştir:

<ContentRef url="/">Com Modbus</ContentRef>

Configure your build profile and select project parameters, signing options, distribution profiles and environment variables. Your project will be built using these settings and options.

<ContentRef url="/">Com Profinet</ContentRef>

You can customize your build flow using our workflow editor. Workflow editor allows you to be in control of the build process. You can add or remove build steps, add your custom scripts for advanced build processes.

<ContentRef url="/">Com File</ContentRef>

You can also automate your build process by telling Appcircle to automatically build your code with every push to your repository. There are also options including tagged pushes for more advanced cases.

<ContentRef url="/">
  Com Query
</ContentRef>

###

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
