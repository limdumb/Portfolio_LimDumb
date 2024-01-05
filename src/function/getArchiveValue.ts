interface ArchiveValueType {
  category: string;
}

export const getArchiveValue = () => {
  const result: ArchiveValueType[] = [
    { category: "GitHub" },
    { category: "Velog" },
  ];

  return result;
};
