const url = `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=H%2Fl6YGbZuUIK0yMbUSxfVjnhFcNuHqmYqKx8bqGaibwuJZCdEpJn6AC62bXX7gIFcV%2FXaJEUMw3C8cP7nZNPPw%3D%3D&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%84%9C%EC%9A%B8&ver=1.0/`;
const req = new Request(url);
const res = await req.loadJSON();

let widget = new ListWidget();
widget.backgroundColor = Color.white();

titleTxt = widget.addText("미세먼지 농도");
titleTxt.textColor = Color.black();
titleTxt.font = Font.systemFont(15);

widget.addSpacer(5);

let Txt1 = widget.addText(`지역 ${res.response.body.items[5].stationName}`);
Txt1.font = Font.systemFont(15);
Txt1.textColor = Color.black();

widget.addSpacer(5);

let Txt2 = widget.addText(
  `미세먼지 농도 : ${res.response.body.items[5].pm10Value}`
);
Txt2.font = Font.systemFont(15);
Txt2.textColor = Color.black();

Script.setWidget(widget);
Script.complete();