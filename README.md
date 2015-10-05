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

