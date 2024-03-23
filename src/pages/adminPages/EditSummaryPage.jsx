import SummaryForm from "../../components/form/SummaryForm"


const updateSummary = async (marketSummary) => {
  await fetch(`/api/stockMarket/${marketSummary.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(marketSummary),
  });
  return;
};

const EditSummaryPage = () => {
  return (
    <>
      <SummaryForm postSummarySubmit={updateSummary}/>
    </>
  )
}

export default EditSummaryPage