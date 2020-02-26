const functions = require('firebase-functions');
const url = require('url');

const spks = {
    speakers: [
        {
            id: "DaronYondem",
            data: {
                name: "Daron Yöndem",
                tags: [
                    "None",
                ],
                title: "XOGO'da Takım Lideri",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/daronyondem/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/daronyondem",
                        "name": "Twitter"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/daronyondem",
                        "name": "Github"
                    },
                ],
                bio: "Daron, on yılı aşkın süredir uygulamalı geliştirme deneyimi ile kurumsal yazılım çözümlerini tasarlamıştır.Sürekli iyileştirme etrafında şirket ve takım kültürü yaratmak onun tutkusudur.Microsoft Corp ve birçok küresel ürün lansmanında yer alan çeşitli Ürün Grupları ile uzun süreli bir ilişkisi var. Mikro hizmetlere, sunucusuz, DevOps, AI ve IoT'ye odaklanan uluslararası konferanslarda düzenli konuşmacıdır.Daron şu anda Xogo Inc'de CTO olarak çalışıyor ve burada Windows IoT Core tabanlı bir karar tabela platformu oluşturuyorlar.Topluluktaki ilk “Windows Azure” konuşması 2008 yılındaydı. Son zamanlarda, MEA'da Microsoft DevOps Roadshow'un açılış konuşmacısıydı.",
                shortBio: "11:30 - 12:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fdaron-yondem.png?alt=media&token=d8d84072-c479-4278-b726-6a405c2c4521"
            }
        }, // Daron Yöndem
        {
            id: "HasanBurhanBeytur",
            data: {
                name: "Burhan Beytur",
                tags: [
                    "None",
                ],
                title: "BTK'de 5G Araştırmacısı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/hasanburhanbeytur",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/hbbeytur",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/h.bbeytur/",
                        "name": "Instagram"
                    }
                ],
                bio: "Hasan Burhan Beytur 2017 yılında Orta Doğu Teknik Üniversitesi'nden Elektrik ve Elektronik Mühendisliği alanında mezun oldu. Ardından yine yüksek lisansına ODTÜ'de devam etti. ASELSAN, TÜBİTAK ve Huawei gibi şirketlerde staj ve çalışma imkanı buldu. Şuanda ODTÜ'de iletişim ağları üzerine bir araştırma grubunda yer alıyor ayrıca Bilgi Teknolojileri ve İletişim Kurumu'nda 5G üzerine çalışıyor.",
                shortBio: "12:30 - 13:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fhasan-burhan-beytur.png?alt=media&token=ec6df7f1-7d04-46ce-9c73-dade7431778b"
            }
        }, // Hasan Burhan Beytur
        {
            id: "MursidYazar",
            data: {
                name: "Mürşid Yazar",
                tags: [
                    "None",
                ],
                title: "Mayadem'de Yazılım Geliştirme Lideri",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/mursidyazar",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/mursidyazar",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/mursidyazar",
                        "name": "Instagram"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/mursidyazar",
                        "name": "Github"
                    }

                ],
                bio: "Mürşid Yazar 1991 doğumludur. 2014 yılında Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği Bölümü'nü onur öğrencisi olarak tamamlamıştır. Yüksek Lisansını Marmara Üniversitesin'de yapmıştır. 2014-2018 yılları arasında Igones Labs'ta Mobil Uygulama Geliştiricisi olarak çalışmıştır. Şu anda Mayadem Teknoloji AŞ.'de Yazılım Geliştirme Başkanı olarak görev almaktadır.",
                shortBio: "15:00 - 15:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fmursid-yazar.png?alt=media&token=1b0c64c1-207c-430c-9520-04466d0735fe"
            }
        }, // Mürşid Yazar
        {
			id: "YigitOzaksut",
			data: {
                name: "Yiğit Özaksüt",
                tags: [
                    "None",
                ],
                title: "Xamarin Turkey Kurucusu & Rise Technology'nin CEO'su",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/yigitozaksut",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/ozaksuty",
                        "name": "Twitter"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/ozaksuty",
                        "name": "Github"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/yigidoz/",
                        "name": "Instagram"
                    }
                ],
                bio: "Yiğit Özaksüt İşletme ve Bilgisayar Teknolojileri'nden mezun oldu ve Yazılım Mühendisliği alanında yüksek lisansını yaptı. Microsoft teknolojileri hakkında 2008'den beri uzmandır. Yiğit , Yazılım Mimarı olarak Rise Consulting'de çalışmaktadır. Son zamanlarda Yapay Zeka, Makine Öğrenmesi ve çok platformlu uygulamalar alanlarına yoğunlaştı ve 2016 yılında Xamarin Türkiye topluluğunu kurdu.",
                shortBio: "16:00 - 16:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fyigit-ozaksut.png?alt=media&token=8ea3fd57-a731-4bd3-909e-ce82b717a9d8"
            }
		}, // Yiğit Özaksüt
		{
			id: "FurkanKamaci",
			data: {
                name: "Furkan Kamacı",
                tags: [
                    "None",
                ],
                title: "LAGOM'un Kurucusu",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/furkankamaci",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/kamaci_furkan",
                        "name": "Twitter"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/kamaci",
                        "name": "Github"
                    }

                ],
                bio: "Yıldız Teknik Üniversitesi Bilgisayar Mühendisliği Lisans Programından mezun olmuş , daha sonra İstanbul Teknik Üniversitesinde Yüksek Lisans yapmıştır. Nokia, Oracle, Google ve Apache gibi önemli teknoloji firmalarında yer almıştır. Daha sonra çeşitli girişimlerde bulunup, start-up'lar da bulunmuştur. Şu an kurucusu olduğu LAGOM TECHNOLOGY de çalışmaktadır. 2019 yılında LAGOM webrazzi ' de ödül almıştır.",
                shortBio: "17:00 - 17:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Ffurkan-kamaci.png?alt=media&token=ad5fa370-ca85-45bc-af8c-d6310344da60"
            }
		}, // Furkan Kamacı
		{
			id: "AlaaAlnuaimi",
			data: {
                name: "Alaa Alnuaimi",
                tags: [
                    "None",
                ],
                title: "-99 Design Studio'nun Kurucusu" ,
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/alaaalnuaimi",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/alacaesar",
                        "name": "Twitter"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/alacaesar",
                        "name": "Github"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/alaa.works",
                        "name": "Instagram"
                    }
                ],
                bio: "Alaa, aslen Kerkük'lü olup günümüzde İstanbul'da yaşayan bir tasarımcı ve sağlayıcıdır. Heykeltıraş ve ressam bir baba tarafından yetiştirmiştir, bu sebeple hayatı boyunca birçok sanat türü ve yaratıcı yaklaşımlara maruz kaldığını söyleyebiliriz. Kendisini bir tasarımcı ve sağlayıcı olarak yetiştirirken, ilgisini profesyonel bir kariyer haline getirmek için -99 Design Studio kurdu. Alaa'nın tasarımcı ve sağlayıcı olarak deneyimi 10 yılı aşmış ve bu süreç içerisinde bulunduğu projelerle birçok ödüle layık görülmüştür. Kariyeri boyunca Nike, Beko, Vakko, KFC ve Flomar gibi çok disiplinli yaklaşımlarını geliştirmesine katkıda bulunan yerel ve uluslararası müşteriler ile çalışma şansına sahip olmuştur.",
                shortBio: "10:30 - 11:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Falaa-alnuaimi.png?alt=media&token=f3cd58d8-25a9-4fa8-a574-bd40afce1724"
            }
		}, // Alaa Alnoumi
		{
			id: "DmitryGalov",
			data: {
                name: "Dmitry Galov",
                tags: [
                    "None",
                ],
                title: "Kaspersky Global Araştırma ve Analiz Ekibi'nde Güvenlik Araştırmacısı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/dimagalov",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/kasperskytr",
                        "name": "Instagram"
                    }
                ],
                bio: "Bilişim alanında 15 yıla aşkın deneyimim var. Bu süre boyunca 3D, görsel tasarım, markaştırma, iş stratejisi vb. gibi alanlarda çalıştım. Ama ana odağım etkili ve estetik arayüz geliştirmektir.  Büyük markalarla çalıştım, çeşitli atölyeler yürüttüm. UX stratejileri hakkında görev aldım. Son üç yıldır, tasarımcı lideri olarak havacılık sektöründeki çeşitli dijital ürünlerde çalışıyorum, ve bu alan tam anlamıyla zorlayıcı ve büyüleyici.",
                shortBio: "12:30 - 13:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fdmitry-galov.png?alt=media&token=cce85245-48d5-42eb-916a-5da003cae079"
            }
		}, // Dmitry Galov
		{
			id: "GurayYildirim",
			data: {
                name: "Güray Yıldırım",
                tags: [
                    "None",
                ],
                title: "Peptr'ın Kurucusu, Eğitmen, Yazar",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/gurayyildirim",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/gurayyildirimtr",
                        "name": "Twitter"
                    }
                ],
                bio: "Lisansımı İstanbul Teknik Üniversitesi’nde Elektronik ve Haberleşme Mühendisliğinde tamamladım. Şu an Boğaziçi Üniversitesi’nde Elektrik-Elektronik Mühendisliği programında yüksek lisans yapıyorum. Eş zamanlı olarak İTÜ’de çift anadal olarak başladığım ama ders almaya fırsat bulamadığım Kontrol ve Otomasyon Mühendisliğine devam etmeye çalışıyorum.",
                shortBio: "14:00 - 14:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fguray-yildirim.png?alt=media&token=841a6f2d-ecbd-4746-a28d-0c3f7f5b1b6e"
            }
		}, // Güray Yıldırım
		{
			id: "UgurTilikoglu",
			data: {
                name: "Uğur Tılıkoğlu",
                tags: [
                    "None",
                ],
                title: "Mayadem Digital Education'un CEO'su",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/tilikoglu/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/tilikoglu",
                        "name": "Github"
                    }
                ],
                bio: "Büyük ölçekli şirket uygulamalarında yazılım geliştirme ve mimari tasarım, Java/Oracle ve .NET/SQL Server Teknolojileri'nde yetkindir. Uzmanlık Alanları: Yazılım Mimarisi, Dağıtık Sistem Tasarımı, Mobil Teknolojiler, Bilgi Güvenliği",
                shortBio: "16:00 - 16:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fugur-tilikoglu.png?alt=media&token=58123235-919b-4297-bfb1-51a704fe0d53"
            }
		}, // Uğur Tılıkoğlu
		{
			id: "SercanYusuf",
			data: {
                name: "Sercan Yusuf",
                tags: [
                    "None",
                ],
                title: "Flutter / Android Geliştiricisi",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/sercanyusuf/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/srcnysf",
                        "name": "Twitter"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/srcnysf",
                        "name": "Github"
                    }
                ],
                bio: "Android uygulama geliştirmeye 2014 yılında birkaç arkadaşım ile Google Developer Group Tekirdağ'ı kurduğumuzda başladım. O zamandan beri yüzlerce etkinlik düzenledim ve dünyanın çeşitli yerlerindeki etkinliklere katıldım. Android uygulama geliştirme, Google Teknolojileri, Firebase, Flutter, Tasarım vb. konuları hakkında çeşitli atölyeler düzenledim. Blog yazılarıma ve sunum slaytlarıma kişisel web sayfamdan ulaşabilirsiniz (srcnysf.com)",
                shortBio: "17:00 - 17:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fsercan-yusuf.png?alt=media&token=ef5f8205-9696-4922-bf74-61eef5fd8d64"
            }
		}, // Sercan Yusuf
		{
			id: "EbruGuven",
			data: {
                name: "Ebru Güven",
                tags: [
                    "None",
                ],
                title: "İstanbul Blockchain Women'ın Eş Kurucusu",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/ebru-guven-8580962/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/nebruguven",
                        "name": "Twitter"
                    }
                ],
                bio: "Bankacılık sektöründe deneyimli Şube Müdürü. Kredi Riski, Finansal Risk, Bankacılık, Borçlar, Kredi Analizi hakkında bilgi sahibi. Marmara Üniversitesi'nden mezun, güçlü satış uzmanı.",
                shortBio: "11:30 - 12:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Febru-guven.png?alt=media&token=97361315-1e36-4e6a-b7dd-2adb3e8274f2"
            }
		}, // Ebru Güven
		{
			id: "BasakBurcuYigit",
			data: {
                name: "Başak Burcu Yiğit",
                tags: [
                    "None",
                ],
                title: "İstanbul Blockchain Women'in Eş Kurucusu",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/ba%C5%9Fak-burcu-yi%C4%9Fit-41247056/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/basakburcuyigit",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/basakburcuyigit/",
                        "name": "Instagram"
                    }
                ],
                bio: "İş hayatım boyunca çok farklı sektörlerde çalışma fırsatı buldum. Ancak kariyerimi etkileyen önemli bir kırılma noktasını, saygı değer hocam Prof. Dr. Nilgün Cılız’ın müdürlüğünü yaptığı, Boğaziçi Üniversitesi Sürdürülebilir Kalkınma Merkezi’nde araştırmacı olarak çalıştığım sırada yaşadım. Bu süreçte bir çok farklı projede yer alma fırsatı buldum. Aynı dönemde UN SDSN-Y (United Nations Sustainable Development Solutions Network Youth) oluşumunun Türkiye temsilciliğini yaptım. Oluşum Sürdürülebilir Kalkınma Hedeflerini ve geleceğe etkilerini anlamama vesile oldu. 2017 Kasım ayında herkes Bitcoin’in ve arkasında yatan blockchain teknolojisinin geleceğimizi değiştireceğinden söz ediliyordu. Blockchain teknolojisi dünyayı daha iyi bir yer yapacak potansiyeli taşıyordu. Ben de dünya daha güzel bir yer olmalı hayaliyle yaşayanlardan biri olarak blockchain teknolojisine ilgi duydum ve bu hususta çalışmaya  başladım. İşte blockchainle yollarımız böyle kesişti.",
                shortBio: "11:30 - 12:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fbasak-burcu-yigit.png?alt=media&token=41539dae-5f22-47b0-9d66-4e99413783dc"
            }
		}, // Başak Burcu Yiğit
		{
			id: "AlperGercek",
			data: {
                name: "Alper Gerçek",
                tags: [
                    "None",
                ],
                title: "Gerçek Consulting'in Kurucsu & Aselsan Dijital Dönüşüm Yol Haritası Koordinatörü",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/alper-ger%C3%A7ek-75536443/",
                        "name": "Linkedin"
                    }
                ],
                bio: "1987 yılında Dokuz Eylül Üniversitesi Elektrik Elektronik Mühendisliğinden lisans, 1991 yılında Orta Doğu Teknik Üniversitesi Elektrik Elektronik Mühendisliğinden yüksek lisans derecesini aldı. Aselsan’da Tasarım Mühendisliği, Sistem Mühendisliği ve Proje Yönetimi alanlarında yöneticilik dahil olmak üzere çeşitli pozisyonlarda görev yaptı.Şu anda Dijital Dönüşüm Danışmanı ve Eğitmeni olarak çalışmaya devam etmektedir. Alper Gerçek'in TÜBİTAK Akıllı Üretim Sistemleri Teknoloji Yol Haritası çalışmasında moderatörlük, Sanayide Dijital Dönüşüm Platformu çalışmalarında ekip üyeliği, Kalkınma Bakanlığı 11.Kalkınma Planı hazırlık çalışmasında “Sanayide Dijitalleşme“ çalışma grubunun raportörlüğü ve Aselsan Dijital Dönüşüm Yol Haritası Koordinatörlüğü bulunmaktadır.",
                shortBio: "12:30 - 13:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Falper-gercek.png?alt=media&token=ec28eaa7-8eb0-43f3-8046-2b23bfd1f0ea"
            }
		}, // Alper Gerçek
		{
			id: "CanSungur",
			data: {
                name: "Can Sungur",
                tags: [
                    "None",
                ],
                title: "Kalk Gel Eş Kurucusu & Yayıncı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/cansungur/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/csnaber",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/csnaber/",
                        "name": "Instagram"
                    }
                ],
                bio: "Dijitalliğin dostun olduğunu mu düşünüyorsun? Ama aslında dijitali benimsedin. Ben dijitalliğin içinde doğdum, dijitallikle şekillendim. Büyüyene kadar dijitalliğin gelenekselleşmiş halini farkedememiştim. Farkettiğimde ise fazlasıyla göz kamaştırıcıydı. - Tüm pazarlama çözümlerine growth hacking yaklaşımını tercih ediyorum. Asla bir şeye para saçıp, o şeyin tutmasını bekleme.",
                shortBio: "14:00 - 14:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fcan-sungur.png?alt=media&token=443f9c1e-5a8e-4bd3-bea5-62b622038784"
            }
		}, // Can Sungur
		{
			id: "ArdaArican",
			data: {
                name: "Arda Arıcan",
                tags: [
                    "None",
                ],
                title: "Protein Tech'de Senior Ürün Tasarımcısı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/ardaarican/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/ardaarican",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/aricanarda/",
                        "name": "Instagram"
                    }
                ],
                bio: "Tasarım endüstrisinde yaptığı çalışmalar ile tecrübesi ispatlı, deneyimli bir kullanıcı deneyimi tasarımcısı. Yetenekleri: Grafik, kullanıcı deneyimi, mobil tasarım, kullanıcı merkezi tasarım ve sanal tasarım. İstanbul Bilgi Üniversitesi'nden mezun, güçlü bir sanat ve tasarım profesyöneli.",
                shortBio: "15:00 - 15:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Farda-arican.png?alt=media&token=836418b1-c74a-4c91-ba53-35b58f61f455"
            }
		}, // Arda Arıcan
		{
			id: "OrcunKilic",
			data: {
                name: "Orçun Kılıç",
                tags: [
                    "None",
                ],
                title: "Protein Tech'de Tasarım Ekip Lideri",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/orrcunkilic/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/orrcunkilic",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/orcunkilic/",
                        "name": "Instagram"
                    }
                ],
                bio: "İstanbul Bilgi Üniversitesi VCD mezunu Orçun 10+ yıldır sektörde. Bunun yanında TMlab.studio kurucu ortağı olan Orçun boş zamanlarında müzik üretmeyi ve tuval boyamayı seviyor.",
                shortBio: "15:00 - 15:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Forcun-kilic.png?alt=media&token=f8677a26-05f4-4dfe-b8ed-29b986ccb136"
            }
		}, // Orçun Kılıç
		{
			id: "CanerYildirim",
			data: {
                name: "Caner Yıldırım",
                tags: [
                    "None",
                ],
                title: "Artisan UX'de Tasarım Danışmanı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/protechman",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/protechman",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/protechman/",
                        "name": "Instagram"
                    }
                ],
                bio: "Caner, Google Developer Groups (GDG) İstanbul ve Mobil İstanbul gruplarının, 2013 yılından beri, organizasyon, organizasnlara katılım ve etkinliklerde konuşma yapan bir üyesi. Kullanıcı deneyimi konusundaki tecrübelerini Droidcon, DevFest ve diğer konferans veya workshop etkinliklerinde paylaşmakta. 2012 yılından bu yana Medium'da teknoloji haberleri ve yazılar yazmakta.",
                shortBio: "16:00 - 16:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fresul-caner-yildirim.png?alt=media&token=508579aa-665b-4190-9b3e-e5d668104170"
            }
		}, // Caner Yıldırım
		{
			id: "RoySimkes",
			data: {
                name: "Roy Simkeş",
                tags: [
                    "None",
                ],
                title: "Photier Eş Kurucusu & Yazılım Geliştiricisi",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/roysimkes",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/radalin",
                        "name": "Github"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/roysimkes/",
                        "name": "Instagram"
                    }
                    
                ],
                bio: "10+ yıldır farklı alan ve şirketlerde geliştiricilik, yöneticilik yapmış, girişimci bir bilgisayar mühendisi.",
                shortBio: "17:00 - 17:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Froy-simkes.png?alt=media&token=f711ba6d-d932-47a8-9276-398e5ffc7913"
            }
		}, // Roy Simkeş
		{
			id: "BarisYalcin",
			data: {
                name: "Barış Yalçın",
                tags: [
                    "None",
                ],
                title: "Havelsan'da Yazılım Geliştiricisi",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/havelsanresmi/",
                        "name": "Instagram"
                    },
                ],
                bio: "",
                shortBio: "10:30 - 11:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fbaris-yalcin.png?alt=media&token=1715299c-26d2-4874-9e4c-1a9f5842580d"
            }
		}, // Barış Yalçın
		{
			id: "BarisSoyturk",
			data: {
                name: "Barış Soytürk",
                tags: [
                    "None",
                ],
                title: "Havelsan'da Çözüm Mimarı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/baris-soyturk-04158730/",
                        "name": "Linkedin"
                    }
                ],
                bio: "Mobil telekom alanında özellikle PS core hakkında derin tecrübeye sahip. İyi derecede PS core ve ekosistemi hakkında bilgiye sahip. (3G-4G-5G Core Network, Network Slicing, Network Exposure, SGSN, GGSN, MME, S/P-GW fonksiyonları, DPI, PCRF, Cleanpipe, Web&video optimizasyonu, Core ile ilişkili protokoller, TCP/IP). HLD ve LLD dökümanlarını planlama, etki değerlendirme ve prosedür metodları hakkında deneyimli.",
                shortBio: "11:30 - 12:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fbaris-soyturk.jpg?alt=media&token=47ea20d9-2f9e-40fc-bf21-ea025be07df8"
            }
		}, // Barış Soytürk
		{
			id: "AhmetHamdiKara",
			data: {
                name: "Ahmet Hamdi Kara",
                tags: [
                    "None",
                ],
                title: "Intertech'de Mobil Bankacılık Ekip Lideri",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Burak Can Aşa",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/ahmet-hamdi-kara-76b16936/",
                        "name": "Linkedin"
                    }
                ],
                bio: "",
                shortBio: "10:30 - 11:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fahmet-hamdi-kara.png?alt=media&token=d1b0d740-c32d-445b-9aca-14b726280c53"
            }
		}, // Ahmet Hamdi Kara
		{
			id: "OnurYuksektepeli",
			data: {
                name: "Onur Yüksektepeli",
                tags: [
                    "None",
                ],
                title: "Nephocraft'ın Kurucusu, Çözüm Mimarı",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/onuryuksektepeli",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/oyuksektepeli",
                        "name": "Github"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/onuryuksektepeli",
                        "name": "Instagram"
                    }
                ],
                bio: "Bilgi Teknolojileri üzerinde çeşitli departmanlarda yazılım geliştirme, proje yönetimi, IT altyapısı, özellikle platorm özellikleri tasarlanması, platform yenileştirilmeleri ve uygulama yenileştirilmesi, üzerinde çalıştım. Çeşitli kurum müşterilerine Microsoft Teknolojileri odaklı bir sürü proje geliştirdim. Bugünlerde Cloud teknolojileri, DevOps, DevSecOps, Uygulama yenileştirilmesi üzerinde çalışmaktayım. Güvenli, ölçeklendirilebilir ve modern uygulama altyapıları tasarlamaktan sorumluyum.",
                shortBio: "14:00 - 14:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fonur-yuksektepeli.png?alt=media&token=529fa0d5-0be9-42ef-a34c-8f253d15fd73"
            }
		}, // Onur Yüksektepeli
		{
			id: "MustafaKara",
			data: {
                name: "Mustafa Kara",
                tags: [
                    "None",
                ],
                title: "Mayasoft Bilgi Sistemleri'nde Teknoloji Çözümleri Lideri",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/mustafakara1",
                        "name": "Linkedin"
                    }
                ],
                bio: "Mustafa Kara Bilgi Teknolojileri Altyapısı alanında 15 yıldan fazla deneyimi olan ve kurumsal iş yükü hakkında deneyim sahibi, başarılı bir düşünce lideridir. Cloud servis modelleri ve mimarileri hakkında işsel ve teknik anlamda uzmanlığa sahiptir. Cloud teknolojileri ve Microsoft alt yapısı hakkında uzmandır. Finansal servis, üretim ve dağıtım endüstrisinde, internet alanında ve devlette büyük ve orta ölçekli kurumlarda çalışmıştır. Mustafa Bilgisayar Bilimleri hakkında bir yüksek lisans derecesine ve MBA'e sahiptir. Yüksek Lisans'ı süresince cloud alanında çeşitli ödüller almıştır. Şu anda 20'den fazla Microsoft ve başka satıcıların sertifikasyonlarına sahiptir.",
                shortBio: "14:00 - 14:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fmustafa-kara.png?alt=media&token=27702c4a-321d-4845-ab3b-195ad5b56446"
            }
		}, // Mustafa Kara
		{
			id: "HakanHintoglu",
			data: {
                name: "Hakan Hintoğlu",
                tags: [
                    "None",
                ],
                title: "Berqnet AR-GE, Teknik Destek - GMY",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 2",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/hakan-hintoglu-2132681/",
                        "name": "Linkedin"
                    }
                ],
                bio: "Logo Siber Güvenlik ve Ağ Teknolojileri firmasında teknoloji ve ürün geliştirmeden sorumluyum. Siber güvenlik ve haberleşme teknolojilerinde ürün geliştirme, proje yönetimi, ürün yönetimi deneyimlerim var. ODTÜ Elektrik-Elektronik Mühendisliği bölümünde lisans ve yüksek lisans derecelerim var. Boğaziçi Üniversitesi’nde Mühendislik ve Teknoloji Yönetimi yüksek lisansım var.",
                shortBio: "15:00 - 15:50",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fhakan-hintoglu.png?alt=media&token=1012ebb1-a046-400e-89b7-b28d8e1dd25d"
            }
		}, // Hakan Hintoğlu
		{
			id: "VefikFiratAkman",
			data: {
                name: "Vefik Fırat Akman",
                tags: [
                    "None",
                ],
                title: "GeekDay 2020 Yöneticisi",
                order: 1,
                featured: true,
                company: "",
                companyLogoUrl: "",
                country: "Havelsan 1",
                socials: [
                    {
                        "icon": "linkedin",
                        "link": "https://www.linkedin.com/in/vefikf%C4%B1ratakman/",
                        "name": "Linkedin"
                    },
                    {
                        "icon": "twitter",
                        "link": "https://twitter.com/vefikfiratakman",
                        "name": "Twitter"
                    },
                    {
                        "icon": "instagram",
                        "link": "https://www.instagram.com/vefikfiratakman/",
                        "name": "Instagram"
                    },
                    {
                        "icon": "github",
                        "link": "https://github.com/VefikFiratAkman",
                        "name": "Github"
                    }
                ],
                bio: "Vefik Fırat Akman, 2015'ten beri Gebze Teknik Üniversitesi Bilgisayar Mühendisliği öğrencisi ve Bilgisayar Topluluğu'nun saygın bir üyesi. Geçtiğimiz yıl toplulukta Yönetim Kurulu Üyeliği ve Proje Sorumlusu görevlerini aldı. GeekDay2020 etkinliğinde Yönetici görevini üstlendi.",
                shortBio: "09:30 - 10:20",
                photoUrl: "https://firebasestorage.googleapis.com/v0/b/geekday-mobile.appspot.com/o/Speakers%2Fvefik-firat-akman2.png?alt=media&token=f3f6d539-824c-48f0-aba8-c439d8c295a6"
            }
		}, // Vefik Fırat Akman
	]
};

const seshs = {
    sessions: [
    	{
            id: "888",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Keynote"
                ],
                speakers: [
                    "VefikFiratAkman"
                ],
                title: "Açılış Konuşması",
                language: "Turkish",
                description: "GeekDay nedir? Etkinlikte neler olacak, kimler konuşacak?"
            }
        },
        {
            id: "101",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Yapay Zeka"
                ],
                speakers: [
                    "BarisYalcin"
                ],
                title: "Otonom ve Robotik Sistemler",
                language: "Turkish",
                description: "Günümüz endüstrisinde gün geçtikçe her şey daha da otonom hale geliyor. Burada kullanılan en önemli araçlardan biri de robotlar. Peki bu sistemler ve robotlar nedir? Nasıl gelişmeler oluyor?"
            }
        },
        {
            id: "102",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Web Teknolojileri"
                ],
                speakers: [
                    "AlaaAlnuaimi"
                ],
                title: "React Native",
                language: "Turkish",
                description: "React Native Facebook tarafından geliştirilmiş bir Native mobil platformudur. Aynı anda hem android hemde IOS'a hizmet verebilen bir JavaScript kütüphanesidir. Geliştiricilerin işlemleri daha kolay, hızlı ve derli toplu yapmalarını amaç edinmiştir. Bu program ya da kütüphane size javascript kullanarak mobil uygulama geliştirmenize yardımcı oluyor. Browser bağımsız bir yapıya sahip. Kendine has bir kod bloğu var ve sadece bunu web tabanlı render ediyor. Siz mobil bir uygulama geliştirdiğinizde ise kendi yapısını IOS ve android dillerine başarılı şekilde render edebiliyor."
            }
        },
        {
            id: "103",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Diğer"
                ],
                speakers: [
                    "AhmetHamdiKara"
                ],
                title: "Performans ve Süreklilik",
                language: "Turkish",
                description: "Büyük çaplı uygulamaların en önemli iki özelliği: performans ve süreklilik. Intertech'ten katılan Ahmet Hamdi Kara, bu iki özelliğin nasıl işlediği ve beraber ne ifade ettiklerinden bahsedecek."
            }
        },
        {
            id: "104",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Web Teknolojileri"
                ],
                speakers: [
                    "DaronYondem"
                ],
                title: "Serverless İle Tek Kişilik Startup'a Nitro Etkisi",
                language: "Turkish",
                description: "Tek başına çıktın yola fikrinin arkasından koşuyorsun. Mobil uygulama, web front-end, back-end derken bir de başına ölçeklenebilirlik problemi çıkardılar. Milyonlarca insan gelip uygulamanı kullanırsa ne yapacağını sonra düşüneceksin, ama ya çok geç olursa? Cloud diyorlar ama, o da pahalı gibi duruyor. Ne yapmalı? Serverless ile cebinden bir TL harcamadan projeni yayına almanın yöntemlerine bakacağız. Bu kadarla da kalmayıp, milyonlarca kişi uygulamanı indirirse problem olmayacağının da garantisi alacağız. Ne dersiniz? Bir konferans oturumu için yeterince iş başarmış olmaz mıyız?"
            }
        },
        {
            id: "105",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Mobil Teknolojileri"
                ],
                speakers: [
                    "BarisSoyturk"
                ],
                title: "5G ve Hayatımıza Getireceği Yenilikler",
                language: "Turkish",
                description: "İletişim teknolojilerinin yeni ve güçlü ayağı 5G, çok konuşulan fakat çoğumuzun bize ne fayda sağlayacağından emin olmadığı bir teknoloji. Hayatımızı iyileştirecek bu teknolojinin ileride ne gibi yenilikler sağlayacağını Havelsan'dan Barış Soytürk anlatacak."
            }
        },
        {
            id: "106",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Blockchain"
                ],
                speakers: [
                    "EbruGuven",
                    "BasakBurcuYigit"
                ],
                title: "Bitcoin ve Blockzincir",
                language: "Turkish",
                description: "Son yıllarda popülerliği artan alanlardan biri de crypto paralar. Bunların en başta geleni de Bitcoin. Bitcoin'in çalışması ve akışı için de Blockzincir teknolojisi en temelde."
            }
        },
        {
            id: "107",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Diğer"
                ],
                speakers: [
                    "HasanBurhanBeytur"
                ],
                title: "Bilgi Yaşı Metriği ve IOT",
                language: "Turkish",
                description: "Bilgi, gün geçtikçe ulaşması daha kolay olmakla beraber miktar olarak da artıyor. Günümüzde bilginin yaşını anlamamıza yarayan öğeler nelerdir? Internet of Things dünyası ile nasıl bir ilişkisi vardır?"
            }
        },
        {
            id: "108",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Siber Güvenlik"
                ],
                speakers: [
                    "DmitryGalov"
                ],
                title: "Modern Mobile and IoT Security Trends",
                language: "English",
                description: "Siber güvenlik, her geçen gün daha da gelişirken, belli başlı yöntemler diğerlerinden sıyrılmayı başarıp bir popülarite kazanıyor. Mobil dünyasındaki bu tarz trendleri Kaspersky'den Dmitry Galov bizlere antacak."
            }
        },
        {
            id: "109",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Diğer"
                ],
                speakers: [
                    "AlperGercek"
                ],
                title: "Dijital Dönüşüm",
                language: "Turkish",
                description: "Dijital dönüşüm, kurumların iş süreçlerinde verimlilik yaratmak, devamlı bir dönüşüm içinde olmak ve müşterilerine daha çok değer yaratabilmek için, kurum içi kültürün dijital ile harmanlanması, dijital teknolojilerin kurum içi süreçlerin tamamına entegre edilmesi ve işlerin dijital olarak yönetilmesidir. Her ne kadar tamamen süreç ve yapı değişimi gibi gözükse de, aslında kurumlarda statükoyu değiştirme, deney bazlı hareket etme ve hatayı kabullenme gibi bir kültürel değişimi de gerektiren bir süreçtir."
            }
        },
        {
            id: "110",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Yapay Zeka"
                ],
                speakers: [
                    "OnurYuksektepeli",
                    "MustafaKara"
                ],
                title: "Microsoft Yapay Zeka Servisleri İş Başında",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "111",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Oyun Geliştirme"
                ],
                speakers: [
                    "CanSungur"
                ],
                title: "Kafayı Açık Tutmak",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "112",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Google Teknolojileri"
                ],
                speakers: [
                    "GurayYildirim"
                ],
                title: "Kubernetes Nedir, Ne İşe Yarar?",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "113",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Mobil Teknolojileri"
                ],
                speakers: [
                    "MursidYazar"
                ],
                title: "Güncel Mobil Teknolojiler ve Geleceği",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "114",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Siber Güvenlik"
                ],
                speakers: [
                    "HakanHintoglu",
                ],
                title: "Siber Mafya Bitcoin İster",
                language: "Turkish",
                description: "Günümüzün mafyaları artık gerçek hayattan siber hayata geçiş yaptı. Eskiden her şey kağıt paralar üzerindeyken şimdi farklı farklı kripto paralar piyasaya çıkmaya başladı. Siber mafyalar kripto paralar bu kadar popülerken kağıt parayla durur mu?"
            }
        },
        {
            id: "115",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Tasarım"
                ],
                speakers: [
                    "OrcunKilic",
                    "ArdaArican"
                ],
                title: "Algı",
                language: "Turkish",
                description: "Günlük hayatta karşımıza çıkan tasarım ürünlerinin içerisindeki gizli mesajları siz de merak ediyor musunuz? Acaba hepimiz bu mesajları aynı mı görüyoruz? Sizde bu sorulara cevaplar arıyorsanız bu konuşma tam size göre!"
            }
        },
        {
            id: "116",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Mobil Teknolojileri"
                ],
                speakers: [
                    "YigitOzaksut"
                ],
                title: "How To Make An Amazing App With Cognitive Services",
                language: "English",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "117",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Oyun Geliştirme"
                ],
                speakers: [
                    "UgurTilikoglu"
                ],
                title: "Yazılım Sektöründen Oyun Sektörüne Geçen Yöneticinin Hatıraları",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "118",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Tasarım"
                ],
                speakers: [
                    "CanerYildirim"
                ],
                title: "Design Systems",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "119",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Yapay Zeka"
                ],
                speakers: [
                    "FurkanKamaci"
                ],
                title: "Makine Öğrenmesi",
                language: "Turkish",
                description: "Makine öğrenmesi ve gerçek hayattaki uygulamaları hakkındaki sunumu ile pek çok konuya değinecek. Kendi kendine gidebilen otonom araçlar, kredi skoru üretme, ses işleme, görüntü işleme ve kişisel asistanlar gibi ilgi çekici noktalara değinecek. Makine öğrenmesinin teori ve uygulama alanlarına çok değişik perspektiften bakabileceğiniz bir sunum!"
            }
        },
        {
            id: "120",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Mobil Teknolojileri",
                    "Google Teknolojileri"
                ],
                speakers: [
                    "SercanYusuf"
                ],
                title: "Zero To One With Flutter",
                language: "Turkish",
                description: "[SESSION_DESCRIPTION]"
            }
        },
        {
            id: "121",
            data: {
                "complexity": "Beginner",
                "tags": [
                    "Diğer",
                ],
                speakers: [
                    "RoySimkes"
                ],
                title: "Yazılımcılığı Nerede Öğrendim?",
                language: "Turkish",
                description: "Üniveristede yazılım öğrenilip öğrenilmeyeceğine, iş hayatının ne kadar öğretici olduğuna dair biraz alaylı, biraz mektepli birinin tecrübeleri."
            }
        }
    ]
};

const sched = {
    schedule: [
        {
            id: "2016-09-09",
            data: {
                date: "2020-02-29",
                tracks: [
                    {
                        title: "Havelsan 1"
                    },
                    {
                        title: "Havelsan 2"
                    },
                    {
                        title: "Burak Can Aşa"
                    }
                ],
                dateReadable: "February 29",
                timeslots: [
                    {
                        sessions: [
                            {
                                items: [
                                    888,
                                ]
                            }
                        ],
                        startTime: "09:30",
                        endTime: "10:20"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    101,
                                ]
                            },
                            {
								items: [
                                    102,
                                ]
                            },
                            {
								items: [
                                    103,
                                ]
                            },
                        ],
                        startTime: "10:30",
                        endTime: "11:20"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    104,
                                ]
                            },
                            {
								items: [
                                    105,
                                ]
                            },
                            {
								items: [
                                    106,
                                ]
                            },
                        ],
                        startTime: "11:30",
                        endTime: "12:20"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    107,
                                ]
                            },
                            {
								items: [
                                    108,
                                ]
                            },
                            {
								items: [
                                    109,
                                ]
                            },
                        ],
                        startTime: "12:30",
                        endTime: "13:20"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    110,
                                ]
                            },
                            {
								items: [
                                    111,
                                ]
                            },
                            {
								items: [
                                    112,
                                ]
                            },
                        ],
                        startTime: "14:00",
                        endTime: "14:50"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    113,
                                ]
                            },
                            {
								items: [
                                    114,
                                ]
                            },
                            {
								items: [
                                    115,
                                ]
                            },
                        ],
                        startTime: "15:00",
                        endTime: "15:50"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    116,
                                ]
                            },
                            {
								items: [
                                    117,
                                ]
                            },
                            {
								items: [
                                    118,
                                ]
                            },
                        ],
                        startTime: "16:00",
                        endTime: "16:50"
                    },
                    {
                        sessions: [
                            {
                                items: [
                                    119,
                                ]
                            },
                            {
								items: [
                                    120,
                                ]
                            },
                            {
								items: [
                                    121,
                                ]
                            },
                        ],
                        startTime: "17:00",
                        endTime: "17:50"
                    }
                ]
            }
        }
    ]
}

exports.geekday = functions.https.onRequest((req, res) => {
	const queryObject = url.parse(req.url,true).pathname;
	pathname = queryObject.slice(1);
	params = pathname.split('/');

	console.log("params are: " + params);
	console.log("params lengths is: " + params.length);

	if(params.length === 1 && params[0] === "") {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(spks));
	}
	else if(params.length === 1 && params[0] === "sessions") {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(seshs));
	}
	else if(params.length === 1 && params[0] === "schedule") {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(sched));
	}
	else if(params.length === 1) {
		res.setHeader('Content-Type', 'application/json');

		var speaker_info = spks.speakers.filter(function (speaker) {
			return speaker.id === params[0];
		});

		var speaker_response_obj = {
			speakers: speaker_info
		};

		res.send(JSON.stringify(speaker_response_obj));
	}
	else if(params.length === 2 && params[1] === "sessions") {
		res.setHeader('Content-Type', 'application/json');

		var session_info = seshs.sessions.filter(function (sesh) {
			return sesh.data.speakers.includes(params[0]);
		});

		var session_response_obj = {
			sessions: session_info
		};

		res.send(JSON.stringify(session_response_obj));
	}
	else {
		res.status(404).send('Invalid Request...');
	}
});
