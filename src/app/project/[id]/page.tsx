import ProjectDetail from "./Project";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }].map(
    (el) => ({
      id: `${el.id}`,
    })
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <ProjectDetail
      params={{
        id: id,
      }}
    />
  );
}
