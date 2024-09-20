type MainProps = {
  title: string
  location: string
  googleMapsUrl: string
  startDate: string
  endDate: string
  description: string
  image: string
}

export default function Main({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  image
}: MainProps) {
  return (
    <main className="sm:mx-5 mx-10">
      <div className="sm:flex-col md:flex-row flex gap-5">
        <img className="" src={`/imgs/${image}`} />

        <div className="flex flex-col justify-center sm:text-sm md:text-xl">
          <div className="flex gap-2">
            <img className="w-3" src="/location-logo.svg" />
            <div className="tracking-[0.2em] mr-2">{location}</div>
            <div>
              <a className="text-[#918E9B]" href={googleMapsUrl} target="_blank">View on Google Maps</a>
              <hr />
            </div>
          </div>

          <div className="">
            <h1 className="sm:text-3xl font-bold md:text-6xl sm:mb-6 md:mb-11">{title}</h1>
            <div className="font-bold">{startDate} - {endDate}</div>
            <div className="mt-3">{description}</div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
    </main>
  )
}
