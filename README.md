타입스크립트에서는 파일구조가 주로 `/public`, `/src` 로 분류되어있다.   
public 폴더에는 웹서버에 배포되는 모든 ts파일을 제외한 파일들이 들어간다. (웹서버)   
src 폴더에는 배포가 필요없는 ts파일들이 들어간다   

문제는 src에 있는 ts를 컴파일하면 src에 생기기때문애 수동으로 public으로 옮겨야하는 문제점이 생긴다.   
이때 커맨드에 `tsc --init` 이라고 친다.

`tsconfig.json` 파일이 생긴다.   
```json
{
  "target": "es5", /* 컴파일되어서 나오는 js파일 */
  "outDir": "./public", /* outDir과 rootDir을 변경해주면 컴파일된 파일을 바로 public으로 옮길수있따. */
  "rootDir": "./src"
}
```

그리고 `tsc -w`로 watch 중일때    
`~~root폴더에 ts파일을 생성해도 자동으로 감지해서 public폴더로 js를 만든다~~`   
라고 하는데 타입스크립트4.3.5 & Webstorm 기준으로 그러진 않음 그냥 루트폴더에 자동으로 생김

하지만 마지막에
```json
{
  {
  // ... 설정
  "마지막 설정": "Test"
  },
  include: ["src"]
}
```
`include` 를 넣어주면 배열안에 있는 폴더만 컴파일한다