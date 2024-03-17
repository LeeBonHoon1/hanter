## Getting Started

node version 18.17.0
yarn install

```bash
# front
yarn dev
# fake server
yarn server
```

## 프로젝트 실행

- node 버전은 18.17.0을 사용하였습니다.
- 별도로 서버를 구현하지 않아 fake server(json-server)를 사용합니다.
- yarn install 명령어로 프로젝트를 설치해 주세요.
- 두 개의 터미널에 각 yarn dev, yarn server 명령어로 front 프로젝트와 fake server를 실행시켜주세요

## 폴더 설명

- apis : api call에 사용되는 end point 및 request 함수
- app/routes : route page 구성
- component : 페이지를 구성하는 컴포넌트 및 UI 컴포넌트
- const : 상수 데이터
- hooks : react-query hook (캐싱, 쿼리키, 쿼리함수)
- lib : tw merge 유틸 함수
- providers : provider로 제공되는 파일
- types : api콜을 통해 받아오는 데이터의 type들을 관리

## server state 관리 (react-query)

- data fetching과 loading, error 발생 시 사용자 경험 고려
  useQuery의 반환값 isLoading, isFetching, error의 값에 따라 로딩페이지, 에러페이지 구현

## 요구사항 구현

- routing : 상단 네비게이션 클릭 시 컨텐츠 별로 라우팅 됩니다. (동일한 리스트뷰 구현)
- 배너 슬라이드 : 각 배너 클릭 시 외부 링크로 연결됩니다. 3개의 배너와 무한루프가 적영되어 있습니다.
- 무한스크롤 : 10개의 음원차트를 보여주는 리스트에 > 버튼 클릭 시 100개의 데이터를 fetching 합니다.

## 사용한 기술스택

- react18
- json-server
- react-router-dom
- react-query@5 version
- shadcn-ui
- tailwind css
- lucide-react
