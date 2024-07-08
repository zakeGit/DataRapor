---
title: TreeviewMenu Cihaz Konfigurasyonu
description: DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.
tags: [getting started, mobile, ci/cd, platform]
sidebar_position: 2
---

import ContentRef from '@site/src/components/ContentRef';

# DataRapor'a Başlarken

DataRapor is a mobile CI/CD platform which makes it easy for you to manage the lifecycle of your mobile applications.

:::tip

DataRapor, iOS ve Android için Swift/Objective-C, Java/Kotlin, React Native ve Flutter ile geliştirilen mobil uygulamaları destekler..

:::

Dokümantasyonu incelemeden önce DataRapor hakkında aşağıdaki tanıtım videosunu da izleyebilirsiniz:

<iframe width="560" height="315" src="https://www.youtube.com/embed/OUoZFGqJFdM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="893" height="502" src="https://www.youtube.com/embed/S0cbJtGzDls" title="Cihazpark.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"  allowfullscreen></iframe>

DataRapor uygulamasının 4 Ana Katmana Ayırabiliriz:

### Veritabanı Katmanı

Your mobile applications must be digitally signed to be able to distributed, tested and, submitted to app stores.

For iOS applications, you must have a signing certificate and provisioning profiles to be able to run your application on real devices and submit them to Apple Appstore.

<ContentRef url="/signing-identities">
  Desteklenen Veri Tabanları
</ContentRef>

For Android applications, you need to create a keystore file to sign your applications digitally.

<ContentRef url="/signing-identities/android-keystores">Veri Tabanı Lisans Modelleri</ContentRef>

 
:::tip

PostGree ve MSSQL Desteği.

:::

### Veri Akış Katmanı (MultiBus):

DataRapor Veri Akış Katmanı olan Uygulama MultiBus ismini veridiğimiz 24 saat kesintisiz olarak tanımlı Client verileri sürekli tarayarak Toplar ve Sunucu arayüzü ile JSon ve Modbus TCP/IP  Formatında Servis eder.  

Bu Katman üzerindeki veri Alma Modülleri Aşağıda Özetlenmiştir:

<ContentRef url="/build/manage-the-connections/adding-a-build-profile">Com Modbus</ContentRef>

Configure your build profile and select project parameters, signing options, distribution profiles and environment variables. Your project will be built using these settings and options.

<ContentRef url="/build/build-process-management/build-profile-configuration">Com Profinet</ContentRef>

You can customize your build flow using our workflow editor. Workflow editor allows you to be in control of the build process. You can add or remove build steps, add your custom scripts for advanced build processes.

<ContentRef url="/workflows">Com File</ContentRef>

You can also automate your build process by telling Appcircle to automatically build your code with every push to your repository. There are also options including tagged pushes for more advanced cases.

<ContentRef url="/build/build-process-management/build-manually-or-with-triggers">
  Com Query
</ContentRef>

###

### Internet Information Server Katmanı (IIS - Web Sunucu)

DataRapor bu versiyonda Windows .Net ve Core altyapılarını destekleyen Sunucuları Destekler...

<ContentRef url="/distribute/testing-management/testing-groups">Desteklenen IIS Sürümleri</ContentRef>

DataRapor bu versiyonda Windows .Net ve Core altyapılarını destekleyen Sunucuları Destekler..

<ContentRef url="/distribute/create-or-select-a-distribution-profile">
  Desteklenen Windows Server Versiyonları
</ContentRef>

DataRapor bu versiyonda Windows .Net ve Core altyapılarını destekleyen Sunucuları Destekler..

<ContentRef url="/distribute/testing-management/testing-groups">API Server Altyapisi</ContentRef>

### Uzak İstemci Katmanı ( Javascript & nodeJS  & HTML5)

Datarapor Web-Arayüzü Sayesinde Verilere Hızlı ve Kolay bir şekilde Erişmenizi sağlar

<ContentRef url="/publish-integrations/ios-publish-integrations/send-to-app-store">Destekelen Web Tarayacıları</ContentRef>

Datarapor Web-Arayüzü Sayesinde Verilere Hızlı ve Kolay bir şekilde Erişmenizi sağlar

<ContentRef url="/publish-integrations/android-publish-integrations/publish-to-google-play">Android APP</ContentRef>

Datarapor Web-Arayüzü Sayesinde Verilere Hızlı ve Kolay bir şekilde Erişmenizi sağlar

<ContentRef url="/publish-integrations/android-publish-integrations/publish-to-huawei-appgallery">ANDON Display</ContentRef>
