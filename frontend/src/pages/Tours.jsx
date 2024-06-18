

import React, { useState, useEffect, useRef } from "react";
import CommonSection from "../shared/CommonSection.tsx";
import "../styles/tour.css";
import TourCard from "./../shared/TourCard.tsx";
import SearchBar from "./../shared/SearchBar";
import Newsletter from "./../shared/Newsletter.tsx";
import { Container, Row, Col } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import mapboxgl from 'mapbox-gl';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const mapContainerRef = useRef(null); // Create a ref to store the map container
  const mapRef = useRef(null); // Create a ref to store the map instance

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  useEffect(() => {
    if (!mapRef.current) {
      initializeMap();
    }
  }, []); // No dependencies needed

  // Function to initialize the map
  const initializeMap = () => {
    // Set your Mapbox access token here
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnNzb2hhbiIsImEiOiJjbHEzNGx1dGEwN3k4Mmtyc3NlbWhkY295In0.B5VQby_tdSklSvOo3uqCKg';

    // Initialize the map only once
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // Specify the container ID
      style: 'mapbox://styles/mapbox/streets-v12', // Use the provided map style
      center: [78.9629, 20.5937], // Set the center coordinates
      pitch: 60, // Set the pitch in degrees
      bearing: -60, // Set the bearing in degrees
      zoom: 10, // Set the initial zoom level
    });

    mapRef.current = map; // Store the map instance in the ref
  };

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map(tour => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <div ref={mapContainerRef} id="map" className="tour__map"></div>
      <Newsletter />
    </>
  );
};

export default Tours;




