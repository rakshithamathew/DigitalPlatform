import { Table } from '@mui/material';
import React, { useState, useEffect } from 'react';

const TablePagination = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const TableData = async () => {
        try {
            const TData = await fetch("https://countriesnow.space/api/v0.1/countries/positions")
            const response = await TData.json()
            setData(response.data)
            console.log(response.data)
        } catch (error) {

        }

    }

    useEffect(() => {
        TableData()
    }, [])
    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Slice data for current page
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const currentData = data.slice(start, end);
    return (
        <>
            <Table style={{ border: "2px solid black" }}>
                <thead style={{ border: "2px solid black" }}>
                    <tr>
                        <td>Country</td>
                        <td>Iso2</td>
                        <td>long</td>
                        <td>lat</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.map((item) => (
                            <tr>
                                <td >{item.name}</td>
                                <td >{item.iso2}</td>
                                <td >{item.long}</td>
                                <td >{item.lat}</td>
                            </tr>
                        ))
                    }

                </tbody>
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                    {/* Previous Button */}
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    {[...Array(totalPages).keys()].map((num) => (
                        <button
                            key={num}
                            onClick={() => setPage(num + 1)}
                            style={{
                                margin: "0 5px",
                                background: page === num + 1 ? "black" : "white",
                                color: page === num + 1 ? "white" : "black",
                                padding: "5px 10px",
                            }}
                        >
                            {num + 1}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        Next
                    </button>
                </div>
            </Table>
        </>
    )
}
export default TablePagination;