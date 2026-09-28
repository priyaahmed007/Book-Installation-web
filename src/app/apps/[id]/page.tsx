import getData from "@/lib/appDataFetch";
import type { TApp } from "@/types/apps.types";

export type TAppDetailsProps = {
  params: {
    id: string;
  }
}


const AppDetails =async ({params}: TAppDetailsProps) => {
  const {id} =await params;
const allapps = await getData();

  const app= allapps.find((app:TApp) =>app.id === Number(id));
  return (
    <div>DEatils</div>
  )
}

export default AppDetails