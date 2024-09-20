import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./backend/data.ts";

type Data = {
  title: string
  location: string
  googleMapsUrl: string
  startDate: string
  endDate: string
  description: string
  image: string
}

function App() {

  return (
    <div className="font-[Inter]">
      <Navbar />
      {data.map((travelInfo: Data, index) => {
        return (
          <Main
            key={index}
            title ={travelInfo.title}
            location={travelInfo.location}
            googleMapsUrl={travelInfo.googleMapsUrl}
            startDate={travelInfo.startDate}
            endDate={travelInfo.endDate}
            description={travelInfo.description}
            image={travelInfo.image}
          />
        )
      })}
    </div>
  )
}

export default App
