export interface CategoryType {
  category: "aboutme" | "project" | "archive" | "stack";
  viewValue: "About Me" | "Project" | "Archive" | "Stack";
}

export default function getCategory() {
  const category: CategoryType[] = [
    { category: "aboutme", viewValue: "About Me" },
    { category: "project", viewValue: "Project" },
    { category: "archive", viewValue: "Archive" },
    { category: "stack", viewValue: "Stack" },
  ];

  return category;
}
