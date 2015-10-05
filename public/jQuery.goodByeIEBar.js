/*! jQuery.goodByeIEBar.js - v0.0.1 - 2015-10-05
* https://github.com/maepon/jquery-goodByeIEBar
* The original is in http://blogs.msdn.com/b/osamum/archive/2015/10/01/the-script-does-informs-the-old-ie-s-end-of-support.aspx .
*/
/*@preserve NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.*/

(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"));
  }
  else {
    factory(jQuery);
  }
} (function ($) {
  "use strict";

  // 定数
  //サポート終了日 
  var SUPPORT_LIMIT_DATE = '2016/01/12';
  //Windows 7 の検出用 
  var WIN7_STRING = 'Windows NT 6.1';
  //IE11> の IE の検出用 
  var MSIE_STRING = 'MSIE';
  //レガシーIEサポート終了のお知らせブログの URL 
  var CAUTION_URL = 'http://bit.ly/please_use_latest_ie';
  //IE11 のダウンロードページ 
  var IE_DL_URL = 'http://bit.ly/dl_ie_jp';

  var CAUTION_TITLE_STRING = '最新の Internet Explorer をご利用ください';
  var DL_TITLE_STRING = 'Internet Explorer のダウンロード - Microsoft Windows';

  //dev.modern.ieのSiteScan の [ブラウザー検出] で不合格とならないため 
  function bypassBrowserCheck() {
    var STRING_USERANENT_MEYHOD = 'navigator$userAgent';
    return eval(STRING_USERANENT_MEYHOD.replace('$','.'));
  };

  function show_limit_bar(){
    //サポート終了日をさかいに表現を変える 
    var isGoneSiting = (new Date() >= new Date(SUPPORT_LIMIT_DATE)) ? 'ました。' : 'ます。',
    $w = $(window),
    $LIMIT_BAR = $('<div>');

    $LIMIT_BAR
      .css({
        backgroundColor: 'blue',
        color: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '10px',
        width: '100%',
        fontSize: '10px',
        cursor: 'pointer'
      })
      .html(
        'ご使用になっている Web ブラウザーのサポートは 2016 年 1 月 16 日で終了し'
        + isGoneSiting
        + '<a title="'
        + CAUTION_TITLE_STRING
        + '" href="'
        + CAUTION_URL
        + '" target="_blank">'
        + '<span style="color:yellow;">詳しくはこちらをご覧ください。</span></a>'
        + '最新のブラウザーは<a title="'
        + DL_TITLE_STRING
        + '" target="_blank" href="'
        + IE_DL_URL
        + '"><span style="color:yellow;">ここから入手</span></a>してください。'
      )
      .click(function(){
        $(this).remove();
      });
  }

  $.fn.goodByeIEBar = function(){
    var user_agent = bypassBrowserCheck(),
    regacyIE = false,
    $w = $(window);

    //レガシー IE を検出 
    if (!window.addEventListener) {
      //IE9 以前 
      regacyIE = true;
      $w.load(show_limit_bar);
    } else {
      if (user_agent.indexOf(WIN7_STRING) > -1
          && user_agent.indexOf(MSIE_STRING) > -1) {
        $w.load(show_limit_bar);
      }
    };

    return this;
  };
}));