import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import ReportForms from "../../components/form/ReportForms"
import Header from "../../components/header/Header"


//Upload New Reports
const uploadReports = async (newSummary) => {
  await fetch('/api/stock', {
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
      <ReportForms />
    </>
  )
}

export default UploadReportsPage