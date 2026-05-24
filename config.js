/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "최성용",
    nameEn: "Groom",
    father: "아버지",
    mother: "김나경",
    fatherDeceased: false,
    motherDeceased: false,
    showFather: false  // false 시 인사말에서 어머니 이름만 표시 ("김나경의 아들 최성용")
  },

  bride: {
    name: "이정은",
    nameEn: "Bride",
    father: "이권",
    mother: "김순희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-22",
    time: "13:00",
    venue: "그랜드 오스티엄",
    hall: "블리스홀 (3층)",
    address: "인천광역시 미추홀구 매소홀로 618 인천문학경기장",
    tel: "032-227-5000",
    mapLinks: {
      kakao: "https://kko.to/5jQ3tBnSWA",
      naver: "https://naver.me/xprA1szT"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 강아지 화동 ──
  // 이미지는 images/dog/1.jpg, images/dog/2.jpg 에 넣어주세요
  dogRingBearer: {
    title: "강아지 화동",
    content: "우리의 특별한 날을 함께할\n소중한 친구를 소개합니다.\n\n작은 발걸음으로 꽃길을 걸어줄\n우리의 네 발 달린 가족입니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "최성용", bank: "카카오뱅크", number: "3333-04-2633875" },
      { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김영희", bank: "하나은행", number: "000-000-000000" },
      { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이정은 ♥ 최성용 결혼합니다",
    description: "2026년 8월 22일, 소중한 분들을 초대합니다."
  }
};
