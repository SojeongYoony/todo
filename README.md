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

### node
* vue를 사용하기 위해 설치하는 엔진
* js file을 interpreter 한다. ==> 파이썬과 js는 일반적으로 컴파일 하지 않는다.
    --> 컴파일이 존재 하긴 하지만 실행되는 동시에 컴파일 한다
            --> C는 전부다 컴파일 한다음 run
            --> Java는 Intermedia (Byte Code) -> JVM run
            --> JS는 run -> 이 순간에 한줄 한줄 보면서 컴파일하고 구동 시작

        C vs JS
        C 같은 경우 --> 다 준비해놓고 기다림
        JS 같은 경우 -> 필요할 때 그때서야 준비 시작

* v8 : chrome의 핵심 엔진, JS를 convert 한다.
        --> Node가 v8기반으로 만들어짐. backEnd 사용을 위해 만들어짐.
        원래는 front에서만 사용되던 JS가 node를 통해 backEnd에서 사용 가능 해짐
        --> back End Tool  (Java Script run time 환경)
    npm node package manager