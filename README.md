# 🍪 Ojosama

![image](https://github.com/user-attachments/assets/6c8c813e-f182-4a13-bc21-cf1a7a812382)

<br>

## 🧑🏻‍💻 프론트엔드 팀 구성원 소개

<table>
  <tr>
    <td align="center" style="width:150px; padding:10px;">
      <a href="https://github.com/KimKyuHoi">
        <img src="https://avatars.githubusercontent.com/u/48755156?v=4" width="120px" alt=""/><br />
        <sub><b>경북대 FE 김규회</b></sub>
      </a>
      <br />
    </td>
    <td align="center" style="width:150px; padding:10px;">
      <a href="https://github.com/hyunaeri">
        <img src="https://avatars.githubusercontent.com/u/75007741?v=4" width="120px" alt=""/><br />
        <sub><b>경북대 FE 정서현</b></sub>
      </a>
      <br />
    </td>
  </tr>
</table>

<br>

## 📌 목차

- [🍪 노션 페이지](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a)
- [✨ 프로젝트 소개](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=5f78b4ccb12246eca8f41904e9fce4d6&pm=s)
- [🖥️ 배포 링크](#http://talkak-fe.s3-website.ap-northeast-2.amazonaws.com)
- [🤝 그라운드 룰](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=93d3274c7a8b4d159b38b16115c3ff42&pm=s)
- [📜 커밋 컨벤션](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=17afc129cb144bfea2fc3cea94ea153d&pm=s)
- [👨‍💻 코딩 컨벤션](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=833e57b063094194b6150558d89af6ec&pm=s)
- [📋 API 명세서](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=c1164ec45e4a485284644935bdb9a29f&pm=s)
- [❎ 에러코드 정의서](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=de999aae2f53421088e7edd875702089&pm=s)
- [🛠️ 테스트 결과 보고서](#-https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=1243d1ecfbac437abbffece87f8f7c8a&pm=s)

<br>

## ✨ 프로젝트 소개

영상 하이라이트를 분석하여 쇼츠를 생성해주는 쇼츠 자동화 서비스, '딸깍'

<br>

## 💡 서비스 기획 의도

최근 영상 소비 트렌드는 짧고 핵심적인 숏폼 위주로 변하고 있습니다. 따라서 이러한 흐름이 발 맞춰, '딸깍'은 영상 편집의 진입장벽을 낮추어 누구나 손쉽게 숏폼 영상을 만들고 공유할 수 있도록 돕는 것을 목표로 하고 있습니다. 또한 공유된 서로의 영상을 시청하고 피드백을 교환할 수 있는 커뮤니티를 통해 사용자들이 상호작용하며 함께 성장할 수 있는 플랫폼을 제공합니다.

<br>

## 🔧 주요 기능

### 1. 하이라이트 추출 및 숏폼 생성

- AI 가 롱폼 영상에서 주요 장면을 분석하여 자동으로 숏폼으로 편집해주어 짧은 시간 내에 완성도 높은 컨텐츠를 제작할 수 있게 합니다.

### 2. 커뮤니티 기반 피드백

- 사용자 간 상호 컨텐츠에 대해 피드백을 교환하고, 이를 바탕으로 컨텐츠를 개선할 수 있는 커뮤니티 기능을 제공합니다.

### 3. 사용자별 추천 영상

- 각 사용자의 관심사와 영상을 분석하여, 개인에게 적합한 흥미로운 컨텐츠를 추천할 수 있도록 추천 알고리즘을 설계했습니다.

<br>

## ⚙️ 프론트엔드 개발 주안점

### 1. 컴포넌트 최적화를 위한 Lazy Loading 사용

> 어플리케이션의 성능 최적화를 위해 `Lazy Loading` 을 활용하여 컴포넌트를 동적으로 로드하는 방식을 채택했습니다. 이를 통해 초기 로딩 속도를 개선하고 사용자가 필요한 시점에만 컴포넌트를 동적으로 로드할 수 있게 설계했습니다. 특히 리소스가 많이 필요한 무거운 컴포넌트를 사용자가 접글할 때까지 로드하지 않음으로써 불필요한 리소스 낭비를 방지하고 전반적인 성능을 향상시켰습니다.


### 2. 런타임 타입 검증을 위한 React Hook Form 과 Zod의 조합

> 타입스크립트는 정적 타입 검사를 통해 컴파일 타임에 오류를 잡을 수 있지만, 런타임 타입 검증이 불가능하다는 한계를 고려했습니다. 이러한 부분을 보완하기 위해 `React Hook Form` 과 `Zod` 를 사용하여 폼 데이터의 타입을 런타임에 검증할 수 있도록 구현했습니다. Zod 를 통해 런타임에서 타입을 검증하여 코드의 안정성을 높이고, 폼 입력값의 유효성을 보장하여 사용자 경험을 개선했습니다.

### 3. 효율적인 개발 환경(DX)를 위한 조성

> 재사용성과 코드 유지보수성을 높이기 위해 공용 디자인 시스템 컴포넌트와 코드 모듈화를 진행하였습니다. 이를 통해 반복적인 UI 구성 요소를 효율적으로 관리하고, 코드 복잡도를 줄이면서도 일관된 디자인을 유지할 수 있었습니다. 이를 통해 개발 속도를 향상시키고, 향후 기능 확장이나 수정 시에도 최소한의 변경으로 손쉽게 대응할 수 있도록 했습니다.

<br>

## 🔎 시스템 아키텍쳐

![system](https://github.com/user-attachments/assets/8511d515-bb48-44d9-9456-17a33055f8eb)

<br>
 
## 🖥️ 배포 링크

- **Frontend**: http://talkak-fe.s3-website.ap-northeast-2.amazonaws.com

- **Backend**: http://ec2-43-202-1-31.ap-northeast-2.compute.amazonaws.com

<br>

## ✏️ ERD 다이어그램

<img width="1053" alt="스크린샷 2024-11-15 오전 3 28 42" src="https://github.com/user-attachments/assets/20f07d26-fa07-4232-b099-b94441f2eb9f">

<br>


## 🤝 그라운드 룰

[Ground Rule](https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=93d3274c7a8b4d159b38b16115c3ff42&pm=s)

<br>


## 📜 커밋 컨벤션

[Commit Convention](https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=17afc129cb144bfea2fc3cea94ea153d&pm=s)

<br>


## 👨‍💻 코딩 컨벤션

[Coding Convention](https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=833e57b063094194b6150558d89af6ec&pm=s)

<br>

## 📋 API 명세서

[API Docs](https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=c1164ec45e4a485284644935bdb9a29f&pm=s)

<br>

## ❎ 에러코드 정의서

[ErrorCode Definition](https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=de999aae2f53421088e7edd875702089&pm=s)

<br>

## 🛠️ 테스트 결과 보고서

[Testing Report](https://quickest-asterisk-75d.notion.site/de33c852391d4e1599721de6136e9c3a?p=1243d1ecfbac437abbffece87f8f7c8a&pm=s)
