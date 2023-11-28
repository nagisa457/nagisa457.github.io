var a=0;
      var button1,button2,button3,button4;
      if(a==0)
      {
        var button=document.getElementById("1");button1=document.getElementById("2");button2=document.getElementById("3");button3=document.getElementById("4");button4=document.getElementById("5");
      button.style.backgroundColor="blue";
        button1.style.backgroundColor="#F6F6F6";
        button2.style.backgroundColor="#F6F6F6";
        button3.style.backgroundColor="#F6F6F6";
        button4.style.backgroundColor="#F6F6F6";
      document.getElementById("root").innerHTML = "";
// 获取 id 为 root 的元素
const app = document.getElementById('root');

// 创建一个 img 元素并设置其 src 属性为 logo.png
const logo = document.createElement('img');

// 创建一个 div 元素并设置其 class 属性为 container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// 将 logo 和 container 元素添加到 app 元素中
app.appendChild(logo);
app.appendChild(container);

// 创建一个 XMLHttpRequest 对象
var request = new XMLHttpRequest();
// 获取 URL 参数的值
var searchValue = window.location.search.split("=")[1];

// 拼接到 request.open 的 URL 中
request.open('GET', 'https://api.pingcc.cn/video/search/title/' + searchValue, true);

// 变量sum储存搜索到小说的数量
var sum = 0;

// 请求成功后执行的函数
request.onload = function () {

  // 将响应数据解析为 JSON 格式
  var data = JSON.parse(this.response);

  // 如果请求成功
  if (request.status >= 200 && request.status < 400) {

    // 存储符合条件的小说的数组
    const novels = [];

    // 遍历每个小说
// 遍历每个小说
data.data.forEach(novel => {
  // 创建一个 div 元素并设置其 class 属性为 card
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  // 创建一个 h1 元素并设置其文本内容为小说的标题
  const h1 = document.createElement('h1');
  h1.textContent = novel.title;

  // 创建一个 p 元素并设置其文本内容为小说的描述（截取前 300 个字符）
  const p = document.createElement('p');
  novel.descs = novel.descs.substring(0, 400);
  p.textContent = `${novel.descs}...`;

  // 创建一个 img 元素并设置其 src 属性为小说的封面图片
  const cover = document.createElement('img');
  cover.src = novel.cover;

  // 创建一个 p 元素并设置其文本内容为小说的作者和类型
  const authorType = document.createElement('p');
  authorType.textContent = `作者：${novel.author} | 类型：${novel.fictionType}`;

  // 创建一个 p 元素并设置其文本内容为小说的更新时间
  const updateTime = document.createElement('p');
  updateTime.textContent = `更新时间：${novel.updateTime}`;

  // 创建一个按钮元素
  var button = document.createElement('button');
  button.textContent = '跳转';

  // 给按钮添加点击事件，点击时跳转到最后一个 html 文件，并把 M3U8 地址作为 URL 参数传递
  button.addEventListener('click', function() {
    var videoId = novel.videoId;
    var secondUrl = 'https://api.pingcc.cn/videoChapter/search/' + videoId;
    // 发送第二次请求
    $.ajax({
      url: secondUrl,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        // 如果请求成功
        if (data.code == 0) {
          // 获取视频的 M3U8 地址
          var m3u8Url = data.data.chapterList[0].chapterPath;
          window.location.href = 'indexc.html?m3u8=' + encodeURIComponent(m3u8Url);
        }
      }
    });
  });

  // 将 h1、p、cover、authorType、updateTime 和按钮元素添加到 card 元素中
  card.appendChild(h1);
  card.appendChild(p);
  card.appendChild(cover);
  card.appendChild(authorType);
  card.appendChild(updateTime);
  card.appendChild(button);

  // 将 card 元素添加到 container 元素中
  container.appendChild(card);
});

    // 获取搜索到的小说数量
    sum = novels.length;
    d=sum;
    // 显示第6项到第10项匹配的搜索内容
    for (let i = 0; i < 5; i++) {
      if (novels[i]) {
        const novel = novels[i];
        // 创建一个 div 元素并设置其 class 属性为 card
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // 创建一个 h1 元素并设置其文本内容为小说的标题
        const h1 = document.createElement('h1');
        h1.textContent = novel.title;

        // 创建一个 p 元素并设置其文本内容为小说的描述（截取前 300 个字符）
        const p = document.createElement('p');
        novel.descs = novel.descs.substring(0, 400);
        p.textContent = `${novel.descs}...`;

        // 创建一个 img 元素并设置其 src 属性为小说的封面图片
        const cover = document.createElement('img');
        cover.src = novel.cover;

        // 创建一个 p 元素并设置其文本内容为小说的作者和类型
        const authorType = document.createElement('p');
        authorType.textContent = `作者：${novel.author} | 类型：${novel.fictionType}`;

        // 创建一个 p 元素并设置其文本内容为小说的更新时间
        const updateTime = document.createElement('p');
        updateTime.textContent = `更新时间：${novel.updateTime}`;

        // 将 card 元素添加到 container 元素中
        container.appendChild(card);

        // 将 h1、p、cover、authorType 和 updateTime 元素添加到 card 元素中
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(cover);
        card.appendChild(authorType);
        card.appendChild(updateTime);
      }
    }
  } else {

    // 如果请求失败，创建一个 marquee 元素并设置其文本内容为 "Gah, it's not working!"
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;

    // 将 errorMessage 元素添加到 app 元素中
    app.appendChild(errorMessage);
  }
}
// 发送请求
request.send();
a++;
      }
      
      
      
      function f(j){
        if (j == 0) {
    button = document.getElementById("1");
    button1 = document.getElementById("2");
    button2 = document.getElementById("3");
    button3 = document.getElementById("4");
    button4 = document.getElementById("5");
  }
  if (j == 1) {
    button = document.getElementById("2");
    button1 = document.getElementById("1");
    button2 = document.getElementById("3");
    button3 = document.getElementById("4");
    button4 = document.getElementById("5");
  }
  if (j == 2) {
    button = document.getElementById("3");
    button1 = document.getElementById("2");
    button2 = document.getElementById("1");
    button3 = document.getElementById("4");
    button4 = document.getElementById("5");
  }
  if (j == 3) {
    button = document.getElementById("4");
    button1 = document.getElementById("2");
    button2 = document.getElementById("3");
    button3 = document.getElementById("1");
    button4 = document.getElementById("5");
  }
  if (j == 4) {
    button = document.getElementById("5");
    button1 = document.getElementById("2");
    button2 = document.getElementById("3");
    button3 = document.getElementById("4");
    button4 = document.getElementById("1");
  }

  button.style.backgroundColor = "blue";
  button1.style.backgroundColor = "#F6F6F6";
  button2.style.backgroundColor = "#F6F6F6";
  button3.style.backgroundColor = "#F6F6F6";
  button4.style.backgroundColor = "#F6F6F6";
        document.getElementById("root").innerHTML = "";
// 获取 id 为 root 的元素
const app = document.getElementById('root');

// 创建一个 img 元素并设置其 src 属性为 logo.png
const logo = document.createElement('img');

// 创建一个 div 元素并设置其 class 属性为 container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// 将 logo 和 container 元素添加到 app 元素中
app.appendChild(logo);
app.appendChild(container);

// 创建一个 XMLHttpRequest 对象
var request = new XMLHttpRequest();
// 获取 URL 参数的值
var searchValue = window.location.search.split("=")[1];

// 拼接到 request.open 的 URL 中
request.open('GET', 'https://api.pingcc.cn/video/search/title/' + searchValue, true);

// 变量sum储存搜索到小说的数量
var sum = 0;

// 请求成功后执行的函数
request.onload = function () {

  // 将响应数据解析为 JSON 格式
  var data = JSON.parse(this.response);

  // 如果请求成功
  if (request.status >= 200 && request.status < 400) {

    // 存储符合条件的小说的数组
    const novels = [];

    // 遍历每个小说
    data.data.forEach(novel => {
      // 创建一个 div 元素并设置其 class 属性为 card
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
    
      // 创建一个 h1 元素并设置其文本内容为小说的标题
      const h1 = document.createElement('h1');
      h1.textContent = novel.title;
    
      // 创建一个 p 元素并设置其文本内容为小说的描述（截取前 300 个字符）
      const p = document.createElement('p');
      novel.descs = novel.descs.substring(0, 400);
      p.textContent = `${novel.descs}...`;
    
      // 创建一个 img 元素并设置其 src 属性为小说的封面图片
      const cover = document.createElement('img');
      cover.src = novel.cover;
    
      // 创建一个 p 元素并设置其文本内容为小说的作者和类型
      const authorType = document.createElement('p');
      authorType.textContent = `作者：${novel.author} | 类型：${novel.fictionType}`;
    
      // 创建一个 p 元素并设置其文本内容为小说的更新时间
      const updateTime = document.createElement('p');
      updateTime.textContent = `更新时间：${novel.updateTime}`;
    
      // 创建一个按钮元素
      var button = document.createElement('button');
      button.textContent = '跳转';
    
      // 给按钮添加点击事件，点击时跳转到最后一个 html 文件，并把 M3U8 地址作为 URL 参数传递
      button.addEventListener('click', function() {
        var videoId = novel.videoId;
        var secondUrl = 'https://api.pingcc.cn/videoChapter/search/' + videoId;
        // 发送第二次请求
        $.ajax({
          url: secondUrl,
          type: 'GET',
          dataType: 'json',
          success: function (data) {
            // 如果请求成功
            if (data.code == 0) {
              // 获取视频的 M3U8 地址
              var m3u8Url = data.data.chapterList[0].chapterPath;
              window.location.href = 'indexc.html?m3u8=' + encodeURIComponent(m3u8Url);
            }
          }
        });
      });
    
      // 将 h1、p、cover、authorType、updateTime 和按钮元素添加到 card 元素中
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(cover);
      card.appendChild(authorType);
      card.appendChild(updateTime);
      card.appendChild(button);
    
      // 将 card 元素添加到 container 元素中
      container.appendChild(card);
    });

    // 获取搜索到的小说数量
    sum = novels.length;
    d=sum;
    // 显示第6项到第10项匹配的搜索内容
    for (let i = j*5; i < j*5+5; i++) {
      if (novels[i]) {
        const novel = novels[i];
        // 创建一个 div 元素并设置其 class 属性为 card
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // 创建一个 h1 元素并设置其文本内容为小说的标题
        const h1 = document.createElement('h1');
        h1.textContent = novel.title;

        // 创建一个 p 元素并设置其文本内容为小说的描述（截取前 300 个字符）
        const p = document.createElement('p');
        novel.descs = novel.descs.substring(0, 400);
        p.textContent = `${novel.descs}...`;

        // 创建一个 img 元素并设置其 src 属性为小说的封面图片
        const cover = document.createElement('img');
        cover.src = novel.cover;

        // 创建一个 p 元素并设置其文本内容为小说的作者和类型
        const authorType = document.createElement('p');
        authorType.textContent = `作者：${novel.author} | 类型：${novel.fictionType}`;

        // 创建一个 p 元素并设置其文本内容为小说的更新时间
        const updateTime = document.createElement('p');
        updateTime.textContent = `更新时间：${novel.updateTime}`;

        // 将 card 元素添加到 container 元素中
        container.appendChild(card);

        // 将 h1、p、cover、authorType 和 updateTime 元素添加到 card 元素中
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(cover);
        card.appendChild(authorType);
        card.appendChild(updateTime);
      }
    }
  } else {

    // 如果请求失败，创建一个 marquee 元素并设置其文本内容为 "Gah, it's not working!"
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;

    // 将 errorMessage 元素添加到 app 元素中
    app.appendChild(errorMessage);
  }
}
// 发送请求
request.send();
      }

