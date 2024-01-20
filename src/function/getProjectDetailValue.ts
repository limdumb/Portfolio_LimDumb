export default function getProjectDetailValue({ id }: { id: string }) {
  switch (id) {
    case "1":
      return {
        name: "Dodge.GG",
        type: "Team Project",
        gifUrl: "",
        github: "https://github.com/limdumb/DodGe.gg",
        url: "http://dodge.gg.s3-website.ap-northeast-2.amazonaws.com/",
        stack: [
          "JavaScript",
          "React",
          "Styled-Components",
          "GitHub Actions",
          "AWS S3",
          "React-Route-Dom",
          "Axios",
        ],
      };
    case "2":
      return {
        name: "라시에르",
        type: "Team Project",
        gifUrl: "",
        github: "https://github.com/codestates-seb/seb41_main_002",
        url: "http://seb41team02.s3-website.ap-northeast-2.amazonaws.com/",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "Styled-Components",
          "GitHub Actions",
          "AWS S3",
          "React-Route-Dom",
          "Axios",
        ],
      };
    case "3":
      return {
        name: "NerdNest",
        type: "Team Project",
        gifUrl: "",
        github: "https://github.com/limdumb/NerdNest_FE",
        url: "http://nerdnest.s3-website.ap-northeast-2.amazonaws.com/",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Redux",
          "Styled-Components",
          "GitHub Actions",
          "AWS S3",
          "React-Route-Dom",
          "Axios",
          "Toast UI",
        ],
      };
    case "4":
      return {
        name: "HighEndy",
        type: "Solo Project",
        gifUrl: "",
        github: "https://github.com/limdumb/HighEndy",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Styled-Components",
          "React-Route-Dom",
          "Axios",
          "JSON Server",
        ],
      };
    case "5":
      return {
        name: "Whale-Chart",
        type: "Solo Project",
        gifUrl: "",
        github: "https://github.com/limdumb/Whale-Chart-Client",
        url: "",
        stack: [
          "JavaScript",
          "TypeScript",
          "React",
          "Styled-Components",
          "React-Route-Dom",
          "Axios",
          "React-Query",
        ],
      };
  }
  return {};
}
