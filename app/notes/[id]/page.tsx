import SSRWrapper from "./SSRWrapper";

export default async function NoteDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <SSRWrapper id={id} />;
}
