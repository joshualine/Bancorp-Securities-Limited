import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import ReportForms from "../../components/form/ReportForms"
import Header from "../../components/header/Header"


//Upload New pricelist
const uploadDailyPricelist = async (newReport) => {
  await fetch('/api/dailyPricelist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReport),
  });
  return;
};

//Upload Stock Recommendation
const uploadStockRec = async (newRecommendation) => {
  await fetch('/api/stockRecommendation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRecommendation),
  });
  return;
};

//Upload Daily Market Summary
const uploadDailySummary = async (newSummary) => {
  await fetch('/api/dailyMarketSummary', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSummary),
  });
  return;
};


const UploadReportsPage = () => {

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
      <ReportForms uploadPricelistSubmit={uploadDailyPricelist} uploadStockRecSubmit={uploadStockRec} uploadDailySummaryReportSubmit={uploadDailySummary}/>
    </>
  )
}

export default UploadReportsPage