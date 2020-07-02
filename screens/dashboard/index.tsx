import useFakerGenerator from "../../utils/faker"
import individualFaker from "../../utils/individualFaker"
import companyFaker from "../../utils/companyFaker"

const DATA_COUNT: number = 50

const Dashboard = () => {
  const individualData = useFakerGenerator({ count: DATA_COUNT, model: individualFaker})
  const companyData = useFakerGenerator({ count: DATA_COUNT, model: companyFaker})

  return (<div>
    
  </div>)
}
