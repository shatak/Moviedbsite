/*********************************************************************************
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Akshat Jain Student ID: 104222211 Date: 13/10/2022
 *
 ********************************************************************************/

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Accordion, Pagination } from "react-bootstrap";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(
    `https://doubtful-tights-tuna.cyclic.app/api/movies?page=${page}&perPage=10`
  );
  function previous(prev) {
    prev > 1 ? setPage(prev - 1) : setPage(prev);
  }

  function next(prev) {
    setPage(prev + 1);
  }

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  return (
    <>
      <PageHeader text="Film Collection : Sorted by Date" />
      <Accordion>
        {pageData.map((elem) => (
          <Accordion.Item eventKey={elem._id} key={elem._id}>
            <Accordion.Header>
              <strong>{elem.title}</strong>
              &nbsp;({elem.year}: &nbsp;{elem.directors.join(", ")})
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={elem} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br />
      <Pagination>
        <Pagination.Prev onClick={() => previous(page)} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={() => next(page)} />
      </Pagination>
    </>
  );
}
