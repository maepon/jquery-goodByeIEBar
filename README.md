# jquery-goodByeIEBar
http://blogs.msdn.com/b/osamum/archive/2015/10/01/the-script-does-informs-the-old-ie-s-end-of-support.aspx で紹介された「2016 年 1 月 16 日でサポート終了となるバージョンの Internet Explorer でアクセスすると、その旨をひかえめに教えてくれるバーを表示するスクリプト」のjQueryプラグイン版

## サンプル

[http://maepon.github.io/jquery-goodByeIEBar/sample.html](http://maepon.github.io/jquery-goodByeIEBar/sample.html)

## 利用方法

```html
<!-- ↓すでにjQueryを読み込んでいる場合は必要ありません -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<script src="https://maepon.github.io/jquery-goodByeIEBar/public/jQuery.goodByeIEBar.min.js"></script>
<script>
$(function(){
  $(window).goodByeIEBar();
})
</script>
```

## ご注意

このjQueryプラグインは[前川昌幸](https://github.com/maepon)が作成し、オリジナルのJavaScriptの作成を行った物江氏の許可を得ています。あくまでもこのプラグインの作成者は前川ですので、このプラグインを利用しての不具合の報告などは、このレポジトリの[issues](https://github.com/maepon/jquery-goodByeIEBar/issues)にお願いします。

また、実際にはこのjQueryプラグインを利用しなくてもオリジナルのJavaScriptを利用すればjQueryを利用している環境でも問題ありません。あくまでもjQueryを利用している環境でパッケージ化するためのものです。
