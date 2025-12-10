import React, { useState, useEffect, useRef } from "react";

const Debounce = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const controllerRef = useRef(null); // for canceling requests
  const debounceRef = useRef(null);   // for debounce timer

  // Fake API function (replace with real)
  const fetchResults = async (searchText) => {
    if (!searchText) return [];

    // Cancel previous request
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    // Simulated API (replace fetch URL)
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`,
      { signal: controllerRef.current.signal }
    );
    const data = await response.json();

    return data.products || [];
  };

  // Debounced Search
  useEffect(() => {
    if (!query) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    // Clear previous timer
    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        const apiData = await fetchResults(query);
        setResults(apiData);
        setShowDropdown(true);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Previous request canceled");
        }
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  // Highlight matched text
  const highlightMatch = (text) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  return (
    <div style={{ width: "350px", margin: "40px auto", position: "relative" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query && setShowDropdown(true)}
      />

      {showDropdown && results.length > 0 && (
        <ul
          style={{
            position: "absolute",
            width: "100%",
            background: "#fff",
            border: "1px solid #ccc",
            marginTop: "5px",
            listStyle: "none",
            padding: "10px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 999,
          }}
        >
          {results.map((item) => (
            <li
              key={item.id}
              style={{ padding: "8px 0", cursor: "pointer" }}
              dangerouslySetInnerHTML={{
                __html: highlightMatch(item.title),
              }}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Debounce;
