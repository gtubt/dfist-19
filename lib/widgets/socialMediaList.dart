import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:url_launcher/url_launcher.dart';

class SocialMediaList extends StatefulWidget {
  var socialMedia;
  var icon;

  SocialMediaList({
    Key key,
    @required this.socialMedia,
    @required this.icon,
  }) : super(key: key);

  @override
  _SocialMediaListState createState() => _SocialMediaListState();
}

class _SocialMediaListState extends State<SocialMediaList> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: GestureDetector(
          child: Padding(
            padding: const EdgeInsets.only(right: 24.0),
            child: Container(
              height: 32.0, // height of the button
              width: 32.0, // width of the button
              child: Image.asset("${widget.icon}", fit: BoxFit.fill),
            ),
          ),
          onTap: () {
            _launchURL(widget.socialMedia);
          }),
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
