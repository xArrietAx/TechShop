import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export const usePagination = (url, navigateTo, setCurrentPage) => {

  let navigate = useNavigate()

  const [totalPages, setTotalPages] = useState(0);
  const [Data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      try {
        let res = await axios.get(url)
        setData(res.data.Products)
        setTotalPages(res.data.totalPages);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }
    getProducts();
  }, [url]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
    navigate(`/${navigateTo}/page/${newPage}`);
  };

  return { Data, totalPages, handlePageChange, isLoading, error };
};