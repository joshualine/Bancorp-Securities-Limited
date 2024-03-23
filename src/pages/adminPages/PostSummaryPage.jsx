import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  useEffect(() => {
    let username = sessionStorage.getItem('username')
    if(username === "" || username === null){
      navigate("/admin")
    }
  }, [])

  return (
    <>
    <Header />
      <SummaryForm postSummarySubmit={postSummary}/>
    </>
  )
}

export default PostSummaryPage