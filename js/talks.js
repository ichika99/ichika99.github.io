/**
 * Minified by jsDelivr using Terser v5.14.1.
 * Original file: /npm/qexo-static@1.5.0/hexo/talks.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var qexo_talks = [],
  talk_page = 1,
  qexoFormatTime = function() {
    var e, t, o, a = void 0 !== arguments[0] ? arguments[0] : "",
      n = void 0 !== arguments[1] ? arguments[1] : (new Date)
      .getTime();
    a = a || "YYYY-mm-dd HH:MM:SS";
    var s = {
      Y: (t = 10 == n.toString()
          .length ? new Date(1e3 * parseInt(n)) : new Date(parseInt(n)))
        .getFullYear()
        .toString(),
      m: (t.getMonth() + 1)
        .toString(),
      d: t.getDate()
        .toString(),
      H: t.getHours()
        .toString(),
      M: t.getMinutes()
        .toString(),
      S: t.getSeconds()
        .toString()
    };
    for (var i in s)(e = new RegExp("(" + i + "+)")
      .exec(a)) && (o = 1 == e[1].length ? s[i] : s[i].padStart(e[1].length, "0"), a = a.replace(e[1], o));
    return a
  };

function likeQexoTalk(e, t, o, a) {
  var n, s = t + "/pub/like_talk/";
  try {
    n = new XMLHttpRequest
  } catch (e) {
    try {
      n = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (e) {
      try {
        n = new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
        return alert("糟糕,你的浏览器不能上传文件!"), !1
      }
    }
  }
  n.open("post", s, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() {
    if (4 == n.readyState)
      if (200 == n.status) {
        var s = JSON.parse(n.response);
        if (s.status) {
          for (var i = 0; i < qexo_talks.length; i++)
            if (qexo_talks[i].id == e) {
              s.action ? (qexo_talks[i].like++, qexo_talks[i].liked = !0) : (qexo_talks[i].like--, qexo_talks[i].liked = !1);
              var l = '<section class="qexot"><div class="qexot-list">';
              for (i = 0; i < qexo_talks.length; i++) l += generateQexoTalkItem(qexo_talks[i].id, qexo_talks[i].content, qexoFormatTime("YYYY-mm-dd", Number(qexo_talks[i].time)), qexo_talks[i].tags.join(", "), qexo_talks[i].like, qexo_talks[i].liked, t, o, a);
              l += "</div></section>", document.getElementById("qexot-more") && (l += '<center id="qexot-more"><div class="qexot-more" onclick="showQexoTalks(\'' + o + "','" + t + "','" + a + "',true)\">加载更多</div></center>"), document.getElementById(o)
                .innerHTML = l;
              break
            }
        } else console.log(s.data.msg)
      } else console.log("点赞失败! 网络错误")
  }, n.send("id=" + e)
}

function generateQexoTalkItem(e, t, o, a, n, s, i, l, r) {
  return '<div class="qexot-item">\n  <div class="qexot-top">\n      <a class="qexot-tags">' + (a = a ? "#" + a : "") + '</a>\n  </div>\n  <div class="qexot-content">\n    <div class="datacont">\n    ' + t + '\n    </div>\n  </div>\n  <div class="qexot-bottom">\n    <div class="qexot-info">\n      <time class="qexot-datatime" datetime="' + o + '">' + o + "</time>\n    </div>" + (s ? '<a class="qexot-like" onclick="likeQexoTalk(\'' + e + "', '" + i + "', '" + l + "', '" + r + '\')"><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" fill="red">\n    <path transform="scale(0.03,0.03)"\n      d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"\n    /></svg> ' + n + "</a>" : '<a class="qexot-like" onclick="likeQexoTalk(\'' + e + "', '" + i + "', '" + l + "', '" + r + '\')">\n    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16">\n    <path\n      transform="scale(0.03,0.03)"\n      d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"\n    ></path></svg> ' + n + "</a>") + "</div></div>"
}

function showQexoTalks(e, t) {
  var o = void 0 !== arguments[2] ? arguments[2] : 5,
    a = void 0 !== arguments[3] && arguments[3];
  a ? document.getElementById("qexot-more")
    .innerHTML = "" : document.getElementById(e)
    .innerHTML = '<div class="qexo_loading"><div class="qexo_part"><div style="display: flex; justify-content: center"><div class="qexo_loader"><div class="qexo_inner one"></div><div class="qexo_inner two"></div><div class="qexo_inner three"></div></div></div></div><p style="text-align: center; display: block">说说加载中...</p></div>';
  var n, s = t + "/pub/talks/?page=" + talk_page + "&limit=" + o;
  try {
    n = new XMLHttpRequest
  } catch (e) {
    try {
      n = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (e) {
      try {
        n = new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
        return alert("糟糕,你的浏览器不能上传文件!"), !1
      }
    }
  }
  n.open("get", s, !0), n.setRequestHeader("Content-Type", "text/plain"), n.onreadystatechange = function() {
    if (4 == n.readyState)
      if (200 == n.status) {
        var a = JSON.parse(n.response);
        if (a.status) {
          qexo_talks = qexo_talks.concat(a.data);
          console.log(qexo_talks);
          for (var s = '<section class="qexot"><div class="qexot-list">', i = 0; i < qexo_talks.length; i++) s += generateQexoTalkItem(qexo_talks[i].id, qexo_talks[i].content, qexoFormatTime("YYYY-mm-dd", Number(qexo_talks[i].time)), qexo_talks[i].tags.join(", "), qexo_talks[i].like, qexo_talks[i].liked, t, e, o);
          s += "</div></section>", a.count > qexo_talks.length && (s += '<center id="qexot-more"><div class="qexot-more" onclick="showQexoTalks(\'' + e + "','" + t + "','" + o + "',true)\">加载更多</div></center>"), document.getElementById(e)
            .innerHTML = s, talk_page++
        } else console.log(a.data.msg)
      } else console.log("说说获取失败! 网络错误")
  }, n.send(null)
}

function loadQexoTalks(e, t) {
  var o = void 0 !== arguments[2] ? arguments[2] : 5,
    a = void 0 !== arguments[3] && arguments[3];
  var n, s = t + "/pub/talks/?page=" + talk_page + "&limit=" + o;
  try {
    n = new XMLHttpRequest
  } catch (e) {
    try {
      n = new ActiveXObject("Msxml2.XMLHTTP")
    } catch (e) {
      try {
        n = new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
        return alert("糟糕,你的浏览器不能上传文件!"), !1
      }
    }
  }
  n.open("get", s, !0), n.setRequestHeader("Content-Type", "text/plain"), n.onreadystatechange = function() {
    if (4 == n.readyState)
      if (200 == n.status) {
        var a = JSON.parse(n.response);
        if (a.status) {
          qexo_talks = qexo_talks.concat(a.data);
          qexo_talks.forEach((talk) => { console.log(talk.content) });
        } else console.log(a.data.msg)
      } else console.log("说说获取失败! 网络错误")
  }, n.send(null)
}