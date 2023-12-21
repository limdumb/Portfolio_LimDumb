export interface CategoryType {
  category: "aboutme" | "project" | "record" | "stack";
  viewValue: "About Me" | "Project" | "Record" | "Stack";
}

export default function getCategory() {
  const category: CategoryType[] = [
    { category: "aboutme", viewValue: "About Me" },
    { category: "project", viewValue: "Project" },
    { category: "record", viewValue: "Record" },
    { category: "stack", viewValue: "Stack" },
  ];

  return category;
}
