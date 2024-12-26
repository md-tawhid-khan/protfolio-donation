import AwardSection from "./AwardSection/AwardSection"
import DisscussSection from "./DiscussSection/DisscussSection"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import LatestProject from "./Latestproject/LatestProject"
import ProcessSection from "./ProcessSection/ProcessSection"
import ReviewSection from "./ReviewSection/ReviewSection"
import Services from "./Services/Services"
import TeamMember from "./TeamMember/TeamMember"


function App() {
 

  return (
    <div className="bg-white">
     <Header/>
     <Services/>
     <LatestProject/>
     <AwardSection/>
     <ProcessSection/>
     <TeamMember/>
     <ReviewSection/>
     <DisscussSection/>
     <Footer/>
    </div>
  )
}

export default App
