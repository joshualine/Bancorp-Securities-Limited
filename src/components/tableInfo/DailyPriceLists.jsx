import { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from "axios";




const DailyPriceLists = () => {


  const [products, setArray] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchedText, onSearchTextChange] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      baseURL:
        "https://api.bancorpsecurities.com/pricelists"
    }).then((res) => {
      const userData = res.data;
      setArray(userData);
      setSearchedProducts(userData);
    });
  }, []);

  const columns = [
    {
      dataField: "_id", text: "Report Type",
      formatter: () => {
        return (
          <p className="font-weight-bold">Pricelist</p>
        );
      }
    },
    { dataField: "pricelistDate", text: "Date" },
    {
      dataField: "pricelistLink",
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <a href={row.pricelistLink}><button className="btn btn-primary">View</button></a>
        );
      }
    }
  ];


  const handleSearch = (value) => {
    const valueToSearch = value ?? searchedText;
    const filteredData = products.filter(
      (item) =>
        item._id.toLowerCase().includes(valueToSearch.toLowerCase()) ||
        // item.role.toLowerCase().includes(valueToSearch.toLowerCase()) ||
        item.pricelistDate.toLowerCase().includes(valueToSearch.toLowerCase())
    );
    setSearchedProducts(filteredData);
  };

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    }
  });


  return (
    <>

      <div className="container pt-5">
        <div className=" col-md-8">

        <h1 className="pt-lg-5 col-md-6">Daily Price Lists</h1>

          <div className="input-group mb-3 pt-5">
            <input
              onChange={(e) => {
                const valueToSearch = e.target.value;
                onSearchTextChange(valueToSearch);
                handleSearch(valueToSearch);
              }}
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={searchedProducts}
            columns={columns}
            pagination={pagination}
          />

        </div>
      </div>


    </>
  )
}

export default DailyPriceLists