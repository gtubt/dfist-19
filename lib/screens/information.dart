import 'package:add_2_calendar/add_2_calendar.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

class InformationScreen extends StatefulWidget {
  @override
  _InformationScreenState createState() => _InformationScreenState();
}

class _InformationScreenState extends State<InformationScreen> {
  @override
  void dispose() {
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
      systemNavigationBarIconBrightness: Brightness.light, // works
    ));
    super.dispose();
  }
  final Event event = Event(
    title: 'GeekDay 2020',
    description: 'GeekDay 2020, Gebze Teknik Üniversitesinde',
    location: 'Cumhuriyet, 2254. Sk. No:2, 41400 Gebze/Kocaeli',
    startDate: DateTime(2020, 02, 29, 09, 30),
    endDate: DateTime(2020, 02, 29, 18, 00),
  );
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Bilgi",
            style: TextStyle(
              fontFamily: 'NunitoSans',
              color: Color(0xff333d47),
              fontSize: 20,
              fontWeight: FontWeight.w700,
              fontStyle: FontStyle.normal,
              letterSpacing: 0,
            )),
        elevation: 0.0,
        centerTitle: true,
      ),
      body: new SingleChildScrollView(
        child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: Center(
                child: new Text(
                    "GeekDay, GTÜ Bilgisayar Topluluğu tarafından her yıl düzenlenen, alanında uzman konuşmacılar ve Türkiye'nin her yerinden yüzlerce katılımcıdan oluşan, birçok oturumla bilgisayar dünyasının her alanına değinen bir etkinliktir.",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      fontStyle: FontStyle.normal,
                    )),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 24),
              child: new Text(
                "Tarih & Zaman",
                style: TextStyle(
                  fontFamily: 'NunitoSans',
                  color: Color(0xff333d47),
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  fontStyle: FontStyle.normal,
                ),
                textAlign: TextAlign.left,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: RichText(
                  text: new TextSpan(children: [
                new TextSpan(
                    text: "GeekDay, ",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      fontStyle: FontStyle.normal,
                    )),
                new TextSpan(
                    text: "29 Şubat 2020, Cumartesi ",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w700,
                      fontStyle: FontStyle.normal,
                    )),
                new TextSpan(
                    text: "günü, saat ",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      fontStyle: FontStyle.normal,
                    )),
                new TextSpan(
                    text: "09:30 ile 18:00",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w700,
                      fontStyle: FontStyle.normal,
                    )),
                new TextSpan(
                    text: " arasında düzenlenecektir.",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      fontStyle: FontStyle.normal,
                    )),
              ])),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: GestureDetector(
                child: new Container(
                  height: 53,
                  decoration: new BoxDecoration(
                      color: Color(0xff3196f6),
                      borderRadius: BorderRadius.circular(12)),
                  child: Center(
                    child: new Text(
                      "Takvimine Ekle",
                      style: TextStyle(
                        fontFamily: 'NunitoSans',
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: FontWeight.w700,
                        fontStyle: FontStyle.normal,
                      ),
                      textAlign: TextAlign.left,
                    ),
                  ),
                ),
                onTap: () {
                  Add2Calendar.addEvent2Cal(event);
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 40),
              child: new Text(
                "Yer",
                style: TextStyle(
                  fontFamily: 'NunitoSans',
                  color: Color(0xff333d47),
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  fontStyle: FontStyle.normal,
                ),
                textAlign: TextAlign.left,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: Container(
                  height: 219,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: ExactAssetImage('assets/gtu_kongre_merkezi.jpg'),
                      fit: BoxFit.cover,
                    ),
                    color: Colors.white,
                    boxShadow: [
                      new BoxShadow(color: Colors.grey[200], blurRadius: 10.0)
                    ],
                    borderRadius: BorderRadius.all(
                      Radius.circular(12.0),
                    ),
                  ),
                  child: Stack(children: [
                    Align(
                        alignment: Alignment.bottomCenter,
                        child: Container(
                            height: 50,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.only(
                                    bottomLeft: Radius.circular(12),
                                    bottomRight: Radius.circular(12)),
                                color: const Color(0xcc333d47)))),
                    PositionedDirectional(
                      top: 185,
                      start: 16,
                      child: Container(
                        height: 50,
                        child: Text("Gebze Teknik Üniversitesi Kongre Merkezi",
                            style: const TextStyle(
                                color: const Color(0xffffffff),
                                fontWeight: FontWeight.w700,
                                fontFamily: "NunitoSans",
                                fontStyle: FontStyle.normal,
                                fontSize: 14.0)),
                      ),
                    ),
                  ])),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: GestureDetector(
                  child: (new Container(
                    height: 53,
                    decoration: new BoxDecoration(
                        color: Color(0xff3196f6),
                        borderRadius: BorderRadius.circular(12)),
                    child: Center(
                      child: new Text(
                        "Google Haritalar'da Göster",
                        style: TextStyle(
                          fontFamily: 'NunitoSans',
                          color: Colors.white,
                          fontSize: 16,
                          fontWeight: FontWeight.w700,
                          fontStyle: FontStyle.normal,
                        ),
                        textAlign: TextAlign.left,
                      ),
                    ),
                  )),
                  onTap: () {
                    _launchURL("https://goo.gl/maps/RVNrcgRkYnoVm1Ko6");
                  }),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 40),
              child: new Text(
                "Organizatör",
                style: TextStyle(
                  fontFamily: 'NunitoSans',
                  color: Color(0xff333d47),
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  fontStyle: FontStyle.normal,
                ),
                textAlign: TextAlign.left,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: Container(
                width: 214,
                child: Image.asset(
                  "assets/gtubt.png",
                  fit: BoxFit.cover,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 16),
              child: Center(
                child: new Text(
                    "Gebze Teknik Üniversitesi Bilgisayar Topluluğu, 2016'dan beri bilgisayar alanında çeşitli etkinlikler ve atölyeler düzenleyen bir öğrenci topluluğudur. 2017'den beri de her yıl belli zamanlarda GeekDay etkinliği ile bilgisayar dünyasından birçok meraklı katılımcı ve birçok bilgili konuşmacıyı bir araya getirmeye devam ediyor.",
                    style: TextStyle(
                      fontFamily: 'NunitoSans',
                      color: Color(0xff333d47),
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      fontStyle: FontStyle.normal,
                    )),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 40),
              child: new Text(
                "Social Media Accounts",
                style: TextStyle(
                  fontFamily: 'NunitoSans',
                  color: Color(0xff333d47),
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  fontStyle: FontStyle.normal,
                ),
                textAlign: TextAlign.left,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only( left: 24.0,top: 16),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  GestureDetector(
                      child: Container(
                        height: 44.0, // height of the button
                        width: 44.0, // width of the button
                        child: Image.asset("assets/instagram.png",
                            fit: BoxFit.fill),
                      ),
                      onTap: () {
                        _launchURL(
                            "https://www.instagram.com/gtubt/?hl=tr");
                      }),
                  Padding(
                    padding: const EdgeInsets.only(left:24.0),
                    child: GestureDetector(
                        child: Container(
                          height: 44.0, // height of the button
                          width: 44.0, // width of the button
                          child:
                          Image.asset("assets/twitter.png", fit: BoxFit.fill),
                        ),
                        onTap: () {
                          _launchURL("https://twitter.com/gtubt/");
                        }),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left:24.0),
                    child: GestureDetector(
                        child: Container(
                          height: 44.0, // height of the button
                          width: 44.0, // width of the button
                          child: Image.asset("assets/linkedin.png",
                          fit: BoxFit.fill),
                        ),
                        onTap: () {
                          _launchURL(
                              "https://www.linkedin.com/company/gtubt");
                        }),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(left:24.0),
                    child: GestureDetector(
                        child: Container(
                          height: 44.0, // height of the button
                          width: 44.0, // width of the button
                          child:
                          Image.asset("assets/youtube.png", fit: BoxFit.fill),
                        ),
                        onTap: () {
                          _launchURL(
                              "https://www.youtube.com/channel/UCEwjKZ6jYATvvfNx_9AzUYw");
                        }),
                  )
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(right: 24, left: 24, top: 40),
              child: new Text(
                "",
                style: TextStyle(
                  fontFamily: 'NunitoSans',
                  color: Color(0xff333d47),
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  fontStyle: FontStyle.normal,
                ),
                textAlign: TextAlign.left,
              ),
            ),
          ],
        ),
      ),
    );
  }

  _launchURL(url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}
