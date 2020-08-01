// 5. JSON
var singer = {
  name: "여자친구",
  members: ["신비", "유주", "소원", "엄지", "예린", "은하"],
  songs: {
    song: [
      {
        title: "너 그리고 나",
        year: 2016,
      },
      {
        title: "시간을 달려서",
        year: 2015,
      },
    ],
  },
};

// JSON 객체 -> JSON 문자열 생성
var str = JSON.stringify(singer);
console.log(str);
console.log(typeof str);

// JSON 문자열 -> JSON 객체 생성
var parsed = JSON.parse(str);
console.log(parsed);
console.log(typeof parsed);

// 너 그리고 나 출력
console.log(parsed.songs.song[0].title);

// 2015 출력
console.log(parsed.songs.song[1].year);
