export async function getApi(category) {
  const res = await fetch(
    `https://74868553-c1e0-4dd0-b231-b83833ce6744.mock.pstmn.io/${category}`
  );

  return await res.json();
}

export const cate = (category) => {
  let data;
  switch (category) {
    case "all":
      data = [
        { id: 1, name: "가" },
        { id: 2, name: "나" },
        { id: 3, name: "다" },
      ];
      break;
    case "ko":
      data = [
        { id: 4, name: "라" },
        { id: 5, name: "마" },
        { id: 6, name: "바" },
      ];
      break;
    case "cn":
      data = [
        { id: 7, name: "사" },
        { id: 8, name: "아" },
        { id: 9, name: "자" },
      ];
      break;
    case "jp":
      data = [
        { id: 10, name: "차" },
        { id: 11, name: "카" },
        { id: 12, name: "타" },
      ];
      break;
    case "west":
      data = [
        { id: 13, name: "파" },
        { id: 14, name: "하" },
        { id: 15, name: "A" },
      ];
      break;
    case "cafe":
      data = [
        { id: 16, name: "B" },
        { id: 17, name: "C" },
        { id: 18, name: "D" },
      ];
      break;
    default:
      data = [];
  }

  return data;
};
