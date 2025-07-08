import EditPlanClient from './edit-client';

type Params = {
  id: string;
}

export default function EditPlanPage({
  params
}: {
  params: Params
}) {
  return <EditPlanClient id={params.id} />;
}