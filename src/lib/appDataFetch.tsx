export type TAppDetailsProps = {
  params: {
    id: string;
  };
};



const AppDetails = async ({params}:TAppDetailsProps) => {
  const {id}= await params;

}

export default AppDetails;