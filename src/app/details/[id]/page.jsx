import Details from "@/app/components/Details"


export default async function Detail({params}) {

    const { id } = await params
    // console.log(id)

  return (
    <div>
        <Details id={id}></Details>
    </div>
  )
}
