interface ArchiveValueType {
  category: string;
  link: string;
}

export const getArchiveValue = () => {
  const result: ArchiveValueType[] = [
    { category: "GitHub", link: "https://github.com/limdumb" },
    { category: "Velog", link: "https://velog.io/@limdumb/posts" },
    {
      category: "Notion",
      link: "https://vigorous-scooter-ec8.notion.site/454f9750e26d4d0993895be10b4f25d6",
    },
  ];

  return result;
};
