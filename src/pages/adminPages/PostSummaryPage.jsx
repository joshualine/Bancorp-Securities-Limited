import SummaryForm from "../../components/form/SummaryForm"
import Header from "../../components/header/Header"


//Post New Market Summary
const postSummary = async (newSummary) => {
  await fetch('/api/stockMarket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSummary),
  });
  return;
};


const PostSummaryPage = () => {
  return (
    <>
    <Header />
      <SummaryForm postSummarySubmit={postSummary}/>
    </>
  )
}

export default PostSummaryPage