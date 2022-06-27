# todo
 VueStudy

#### 공부한 내용
<details>
<summary><b>2022-06-20</b></summary>
<div markdown="1">       
<ul>
    <li>v-model 사용</li>
    <li>v-for 사용</li>
    <li>ref</li>
    <li>{{ index }} 인자 받아 올 수 있다.</li>
    <li>keydown.enter : enter를 keydown 했을때만.</li>
</ul>

<details>
<summary><b>cmd</b></summary>
<div markdown="1">

```html

    // 드라이버 이동
    cd /d D:\ 

    // cd Directory 경로 -> 경로로 이동

    // VS Code 실행, . <- 현재 폴더를 가르킴
    code . 

    // material Icon Theme <<< VS Code 폴더 예쁘게 해줌

```
</div>
</details>
</div>
<details>
<summary><b>공부(업데이트) 할 내용</b></summary>
<div markdown="1">
    <ul>
        <li>Data DB에 저장 --> DB 연결(Back)</li>
        <li>component화 --> 유튜브 찾아볼 것 </li>
    </ul>
</div>
</details>
</details>
<hr></hr>
<details>
<summary><b>2022-06-24</b></summary>

<div markdown="1"> 
<details>
    <summary><b>npm 내용</b></summary>
    <ul>
        <li>vue : JS 프레임워크</li>  
        <li>vue-loader : Vue 파일을 JS파일로 변환해준다.</li>  
        <li>vue-template-compiler : Vue 파일을 JS로 변환해준다.</li>  
        <li>webpack : 파일을 일부 변형하여 코드를 전달하고 하나로 묶어주는 도구.</li>  
        <li>webpack-cli : webpack 명령을 실행하는 사용하는 cli. </li>  
        <li>babel-loader : 우리의 코드를 브라우저에 맞는 코드로 변환해준다.  </li>  
        <li>Linter/formatter : coding convention </li>  
        <li>E2E : End to End testing </li>  
        <li>cd : change Directory </li>
    </ul>
</details>
<details>
    <summary><b>package.json "browserlist"</b></summary>
    <ul>
        <li> >1% : 전세계 사용자가 최소 1% 이상인 browser에만 실행</li>
        <li> Last 2 versions : 최근 두 개 version만 지원</li>
        <li> not ie 11 : IE 11에는 지원 안함</li>
    </ul>
</details>
<details>
<summary><b>cmd 명령어 복습</b></summary>
<div>

``` html
mkdir(make Directory) : folder 만들기 
code . : VSCode 실행
cd ../ : 하위 폴더로 이동
cd 경로 : 해당 경로의 폴더로 이동
cls : terminal 깨끗하게 지우기
ctrl + C : 실행 종료 

```
</div>

</details>
</div>

</details>
</div>
</details>

<details>
    <summary>2022-06-27</summary>
<details>
    <summary><b>node.js</b></summary>
    * vue를 사용하기 위해 설치하는 엔진 <br>
    * js file을 interpreter 한다. ==> 파이썬과 js는 일반적으로 컴파일 하지 않는다. <br>
        --> 컴파일이 존재 하긴 하지만 실행되는 동시에 컴파일 한다 <br>
            --> C는 전부다 컴파일 한다음 run <br>
            --> Java는 Intermedia (Byte Code) -> JVM run <br>
            --> JS는 run -> 이 순간에 한줄 한줄 보면서 컴파일하고 구동 시작 <br>
<br>
    C vs JS <br>
    C 같은 경우 --> 다 준비해놓고 기다림 <br>
    JS 같은 경우 -> 필요할 때 그때서야 준비 시작 <br>
<br>
    * v8 : chrome의 핵심 엔진, JS를 convert 한다. <br>
            --> Node가 v8기반으로 만들어짐. backEnd 사용을 위해 만들어짐. <br>
            원래는 front에서만 사용되던 JS가 node를 통해 backEnd에서 사용 가능 해짐 <br>
            --> back End Tool  (Java Script run time 환경) <br>
        npm node package manager <br>
</details>

<details>



```

1. 브라우저가 localhost:3001을 요청
2. 서버가 요청을 수신함
3. 서버가 index.html을 보냄
4. 브라우저가 index.html을 받음
5. 브라우저가 index.html을 실행
6. 브라우저가 index.html 6번째 줄을 보고 js파일이 필요하다는 걸 알게 됨
7. 브라우저가 js파일을 서버에 요청함
8. 서버가 요청을 받음
9. 서버가 js파일을 보내줌
10. 브라우저가 js파일을 받음
11. 브라우저가 js파일을 실행함
12. <div #app>이 채워짐
13. 브라우저가 9번째 줄을 봄
14 css 요청 -> 수신 -> 페이지 꾸밈

라우팅 케이스
1. About 탭을 클릭한다.
2. 평소 같으면 브라우저가 서버에 localhost:3001/about를 요청한다
3. 그리고 평소 같으면 서버가 이 url보고 알맞는 controller를 통해서 상응하는 html파일을 보내준다.

하지만!!!!!!
SPA의 경우
2. 주소창은 마치 새로운 endpoint로 요청해서 controller를 통해 새로운 페이지를 받는 것처럼 보이게 하고.
2-2. 실제로는 Ajax를 통해서 js파일만 딸랑 받아온다.


처음 시
1. url 요청
2. 서버 수신, controller 위임, 서비스 실행 (단순한 html 반환)

라우팅 시
1. js파일 요청
2. 서버 수신, static asset


로그인 시도
    1. 브라우저가 api endpoint로 id와 password를 담아서 로그인 시도를 한다.
    2. Spring 서버의 api controller가 이 요청을 받고 전달 받은 id와 password를 기반으로 판단을 한다.
    3. 성공했다면 브라우저에게 {result: 1}을 보낸다.
    4. 브라우저가 {result:1}를 응답으로 받는다 (아직 login페이지임)
    5. 이후, 브라우저가 로그인이 성공했다고 판단하고 이제서야 페이지 라우팅을 시도한다.
    6. 이제 Spring 서버에 www.yoonpasta.com/admin url요청을 보낸다.
    7. Spring 서버가 이 요청을 수신하고 admin.html을 반환한다.


    탈퇴시도
    1. 브라우저가 checkPassword controller로 password를 담아서 보낸다.
    2. Spring 서버의 checkPassword controller가 이를 받고 password를 db랑 비교한다.
    3. 성공여부를 JSON 포멧으로 브라우저에게 반환한다.
    4. 브라우저가 성공여부를 JSON 응답으로 받았다.
    5. 성공했으면 이번에는 leaveMember controller로 요청을 보낸다. 그리고 그 결과 서버는 db에서 정보를 삭제하고 redirect한다.
    6. 실패하면 요청을 안 보내고 경고만 띄운다.

```

</details>


</details>
